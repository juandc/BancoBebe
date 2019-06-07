import React from 'react';
import { useData } from '../../../shared/DataContext'

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
