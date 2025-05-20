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

const useGif = (searchString?: string, tagString?: string) => {
  const endpoint = searchString || tagString ? "/search" : "/trending";
  return useData<Gif>(endpoint, searchString, tagString);
};

export default useGif;
