import useData from "./useData";

interface Properties {
  fixed_width: {
    url: string;
    height: string;
    width: string;
  };
}

export interface Gif {
  id: string;
  title: string;
  images: Properties;
}

const useGif = (searchString?: string) => {
  const endpoint = searchString ? "/search" : "/trending";
  return useData<Gif>(endpoint, searchString);
};

export default useGif;
