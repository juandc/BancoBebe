import React from 'react';

export const DataContext = React.createContext(undefined);

export function DataProvider({ initialData = undefined, clientDataResolvers, children }) {
  const [data, setData] = React.useState(initialData);

  const setPageData = async ({ dataType, normalize }) => {
    const newData = await clientDataResolvers[dataType]();
    const normalizedData = normalize(newData);
    window.__CLIENT_DATA__ = normalizedData;
    setData(normalizedData);
  };

  console.log(data)

  return (
    <DataContext.Provider
      value={{ data, setData, setPageData, clientDataResolvers }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const { Consumer: DataConsumer } = DataContext;

export const useData = () => {
  const { data, setData } = React.useContext(DataContext);
  return [data, setData];
}

export const usePageData = ({ route }) => {
  const { data, setPageData } = React.useContext(DataContext);
  const { fromBrowser, dataType, normalize } = route.loadData;

  React.useEffect(() => {
    const loadBecauseNoInitialdata =
      (!!fromBrowser.loadIfNoInitialData && data === undefined);
    const loadBecauseiDontCareJustLoad =
    (!!fromBrowser.iDontCareJustLoad && window.__CLIENT_DATA__ == undefined);
    
    if (loadBecauseNoInitialdata || loadBecauseiDontCareJustLoad) {
      setPageData({ dataType, normalize });
    }
  }, []);

  return [data];
}
