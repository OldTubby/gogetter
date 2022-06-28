import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [iss, whereIss] = useState([]);

  useEffect(() => {
    async function getIss() {
      const resp = await fetch(
        'https://api.wheretheiss.at/v1/satellites/25544'
      );
      whereIss(await resp.json());
    }
    getIss();
  }, []);

  return (
    <div key={iss.id}>
      <h1>Where is the ISS?</h1>
      <div>
        <h4>Latitude: {iss.latitude.toFixed(2)}</h4>
        <h4>Longitude: {iss.longitude.toFixed(2)}</h4>
      </div>
    </div>
  );
}

// import Head from 'next/head';

// export default function whereIss() {
//   return (
//     <div>
//       <h3>
//         latitude: <span id='lat'></span>
//         <br />
//         longitude: <span id='lon'></span>
//         <br />
//       </h3>
//     </div>
//   );
// }

// const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

// export const getStaticProps = async () => {
//   const res = await fetch(api_url);
//   const data = await res.json();
//   const { latitude, longitude } = data;
//   console.log(data);

//   return {
//     props: {
//       latitude,
//       longitude,
//     },
//   };
// };
