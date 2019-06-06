import React from 'react';

export const DataContext = React.createContext(undefined);

function DataProvider({ initialData = undefined, children }) {
  const [data, setData] = React.useState(initialData);
  
  return (
    <DataContext.Provider
      value={[ data, setData ]}
    >
      {children}
    </DataContext.Provider>
  );
}

export { DataProvider };
export const { Consumer: DataConsumer } = DataContext;

export const useData = ({
  browserUpdate: {
    ifInitialDataIsUndefined,
    iDontCareJustLoad,
    load,
  },
}) => {
  let shouldUpdate = false;
  const [data, setData] = React.useContext(DataContext);

  React.useEffect(() => {
    if (
      (!!ifInitialDataIsUndefined && data === undefined)
      || !!iDontCareJustLoad
    ) {
      setData(load);
    }
  }, []);

  return [data, setData];
}
