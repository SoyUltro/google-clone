import Link from "next/link";
import PaginationButtons from "./PaginationButtons";

const SearchResults = ({ results }) => {
  return (
    <div className="bg-google-100 mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-500 text-md mb-5 mt-3">
        Cerca de {results.searchInformation?.formattedTotalResults} resultados (
        {results.searchInformation?.formattedSearchTime} segundos)
      </p>
      {results.items?.map((result) => (
        <div key={result.link} className="max-w-xl mb-8">
          <div className="group">
            <Link href={result.link}>
              <a className="text-sm text-gray-400">{result.formattedUrl}</a>
            </Link>
            <Link href={result.link}>
              <h2 className="truncate text-xl text-blue-400 font-base group-hover:underline cursor-pointer">
                {result.title}
              </h2>
            </Link>
          </div>
          <p className="line-clamp-2 pt-1 text-gray-400">{result.snippet}</p>
        </div>
      ))}

      <PaginationButtons results={results} />
    </div>
  );
};

export default SearchResults;
