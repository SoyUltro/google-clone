import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";

const Search = ({ results }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>

      <Header />

      <SearchResults results={results} />
    </>
  );
};

export default Search;

export const getServerSideProps = async (ctx) => {
  const starIndex = ctx.query.start || "0";

  const searchFound = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${ctx.query.term}&start=${starIndex}`
  ).then((res) => res.json());

  return {
    props: {
      results: searchFound,
    },
  };
};
