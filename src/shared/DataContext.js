import React from 'react';

export const DataContext = React.createContext(undefined);

export function DataProvider({ initialData = undefined, dataResolvers, children }) {
  const [data, setData] = React.useState(initialData);

  const setDataWithResolversAndNormalize = async ({ dataType, normalize }) => {
    const newData = await dataResolvers[dataType]();
    const normalizedData = normalize(newData);
    window.__CLIENT_DATA__ = normalizedData;
    setData(normalize(newData));
  };

  console.log(data)

  return (
    <DataContext.Provider value={[ data, setDataWithResolversAndNormalize ]}>
      {children}
    </DataContext.Provider>
  );
}

export const { Consumer: DataConsumer } = DataContext;

export const useData = ({ route }) => {
  const [data, setData] = React.useContext(DataContext);
  const { fromBrowser, dataType, normalize } = route.loadData;

  React.useEffect(
    () => {
      if (
        (!!fromBrowser.loadIfNoInitialData && data === undefined)
        || (!!fromBrowser.iDontCareJustLoad && window.__CLIENT_DATA__ == undefined)
      ) {
        setData({ dataType, normalize });
      }
    },
    []
  );

  return [data, setData];
}
