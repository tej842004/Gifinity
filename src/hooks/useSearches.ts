import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

type Searches = string;

const apiClient = new APIClient<Searches>("/trending/searches");

const useSearches = () =>
  useQuery({
    queryKey: ["searches"],
    queryFn: () => apiClient.getAll({}),
    staleTime: 24 * 60 * 60 * 1000, //24h
  });

export default useSearches;
