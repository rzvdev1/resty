export default function Results({ data }) {
  return (
    <section>
      {data ? (
        <>
          <div>Loading...</div>
          <pre>{JSON.stringify(data, undefined, 2)}</pre>
        </>
      ) : null}
    </section>
  );
}
