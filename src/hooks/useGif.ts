import useData from "./useData";

interface Properties {
  fixed_width: {
    url: string;
    height: string;
    width: string;
  };
}

interface Gif {
  id: string;
  title: string;
  images: Properties;
}

const useGif = () => useData<Gif>("/trending");

export default useGif;
