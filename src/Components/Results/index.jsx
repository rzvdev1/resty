export default function Results({ data }) {
  return (
    <section>
      <pre>{data ? JSON.stringify(data, undefined, 2) : null}</pre>
    </section>
  );
}
