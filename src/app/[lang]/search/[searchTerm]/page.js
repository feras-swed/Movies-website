import Results from "@/components/Results";

export default async function SearchPage({ params }) {
  const { lang } = await params; // ها هنا، أنت تنتظر
  const seachTerm = (await params).searchTerm;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${seachTerm}&language=${lang}-US&page=1&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results &&
        results.length ===
        <h1 className="text-center pt-6">No results found</h1>}
      {results && <Results results={results} />}
    </div>
  );
}
