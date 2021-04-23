import Head from "next/head";
//Head
function IndexPage() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>Head elements</p>
    </div>
  );
}

export default IndexPage;
