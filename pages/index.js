//Server Side Rendering

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export async function getServerSideProps() {
  const resp = await fetch('https://api.wheretheiss.at/v1/satellites/25544');

  return {
    props: {
      iss: await resp.json(),
    },
  };
}

export default function Home({ iss }) {
  return (
    <div key={iss.id}>
      <h1>Where is the ISS?</h1>
      <div>
        <h4>Latitude: {iss.latitude}</h4>
        <h4>Longitude: {iss.longitude}</h4>
      </div>
    </div>
  );
}
