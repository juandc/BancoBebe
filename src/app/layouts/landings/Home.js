import React from 'react';
import { useData } from '../../../shared/DataContext'

// const useData = () => {
//   const initialData = React.useContext(DataContext);
//   const [data, setData] = React.useState(initialServerData);
  
//   return {
//     data,
//     setData,
//     isLoading,
//   };
// }

export default function Home({ initialData }) {
  // const [homeData, setHomeData] = React.useState(initialData);
  // console.log({initialData,homeData});

  // React.useEffect(() => {
  //   if (homeData === undefined) {
  //     setTimeout(() => {
  //       setHomeData('home data from client');
  //     }, 3000);
  //   }
  // }, [])

  const [data, setData] = useData({
    browserUpdate: {
      // iDontCareJustLoad: true,
      ifInitialDataIsUndefined: true,
      load: () => {
        setTimeout(() => {
          setData('home data from client');
        }, 3000);
      },
    }
  });

  console.log(data);
  
  return (
    <>
      <h2>Home</h2>
      {!data ? 'loading...' : (
        <>
          <p>{data}</p>
          <button onClick={() => setData('Any other thing')}>Change the text</button>
        </>
      )}
    </>
  );
}
