import Head from "next/head";
import CommonFooter from "../components/CommonFooter";
import Navigation from "components/Navigation";

const Page = ({ content, seoDescription, style, pageSpesificStyle }) => {
  return (
    <>
      <Head>
        <script src="https://www.googleoptimize.com/optimize.js?id=OPT-KMD99G5"></script>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content={seoDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation
        isSticky={true}
        isDimmed={true}
        isActionable={false}
      ></Navigation>
      <main>
        <div
          className="container"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </main>
      <CommonFooter />
      <style dangerouslySetInnerHTML={{ __html: style }}></style>
      <style dangerouslySetInnerHTML={{ __html: pageSpesificStyle }}></style>
    </>
  );
};

export async function getStaticPaths() {
  // Fetch all possible slugs
  const res = await fetch("https://api.example.com/pages");
  const pages = await res.json();

  const paths = pages.map((page) => ({
    params: { slug: page.slug },
  }));

  return {
    paths,
    fallback: false, // or true if you want to generate the page at request time if it doesn't exist yet
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.example.com/pages/${params.slug}`);
  const page = await res.json();

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      content: page.content,
      seoDescription: page.seoDescription,
      style: page.style,
      pageSpesificStyle: page.pageSpesificStyle,
    },
    revalidate: 1, // Revalidate at most once every second
  };
}

export default Page;
