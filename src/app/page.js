export default function Home({ formattedDate }) {
  return (
    <>
      <h1>Laboratorio 2</h1>
      <p>Fecha {formattedDate}.</p>
      <ul>
        <li>Gabriel Caicedo</li>
        <li>Christian Ortiz</li>
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const buildDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(buildDate);

  return { props: { formattedDate } };
}