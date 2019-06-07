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

export default function Home({ data }) {
  console.log(data);
  
  return (
    <>
      <h2>Home</h2>
      {!data ? 'loading...' : (
        <>
          <p>{data}</p>
          {/* <button onClick={() => setData('Any other thing')}>Change the text</button> */}
        </>
      )}
    </>
  );
}
