import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import type { FetchResponse } from "../services/api-client";

type Searches = string;

const useSearches = () =>
  useQuery({
    queryKey: ["searches"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Searches>>("/trending/searches")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
  });

export default useSearches;
