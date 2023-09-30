import { useState } from 'react';
import './Results.scss';

export default function Results({ data, headers }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section>
      {headers && (
        <>
          <h2>Response Headers:</h2>
          <pre>{JSON.stringify(headers, undefined, 2)}</pre>
        </>
      )}

      {data ? (
        <>
          <h2>Response Data:</h2>
          <pre>{JSON.stringify(data, undefined, 2)}</pre>
        </>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : null}
    </section>
  );
}
