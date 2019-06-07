import React from 'react';

export const DataContext = React.createContext(undefined);

export function DataProvider({ initialData = undefined, dataResolvers, children }) {
  const [data, setData] = React.useState(initialData);

  const setDataWithResolvers = async ({dataType, normalize}) => {
    const newData = await dataResolvers[dataType]();
    setData(normalize(newData));
  };
  
  return (
    <DataContext.Provider value={[ data, setDataWithResolvers ]}>
      {children}
    </DataContext.Provider>
  );
}

export const { Consumer: DataConsumer } = DataContext;

// export const useData = ({
//   fromBrowser: {
//     ifInitialDataIsUndefined,
//     iDontCareJustLoad,
//     load,
//   },
// }) => {
//   // Update for loading data with
//   // routes "data", must support both,
//   // initial ssr, reload and just
//   // static...
//   let shouldUpdate = false;
//   const [data, setData] = React.useContext(DataContext);

//   React.useEffect(() => {
//     if (
//       (!!ifInitialDataIsUndefined && data === undefined)
//       || !!iDontCareJustLoad
//     ) {
//       setData(load);
//     }
//   }, []);

//   return [data, setData];
// }
