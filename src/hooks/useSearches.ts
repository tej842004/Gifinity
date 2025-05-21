import useData from "./useData";

type Searches = string;

const useSearches = () => useData<Searches>("/trending/searches");

export default useSearches;
