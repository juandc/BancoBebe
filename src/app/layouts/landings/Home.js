import React from 'react';
import { useData } from '../../../shared/DataContext'

export default function Home({ pageData }) {
  const [data, setData] = useData();
  console.log({ data, pageData });
  
  return (
    <>
      <h2>Home</h2>
      {!data ? 'loading...' : (
        <>
          <p>{data.message}</p>
          <button onClick={() => setData('Any other thing')}>Change the text</button>
        </>
      )}
      {!data ? 'loading...' : (
        <>
          <p>{data.message}</p>
          <button onClick={() => setData('Any other thing')}>Change the text</button>
        </>
      )}
    </>
  );
}
