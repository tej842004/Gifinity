import { create } from "zustand";

export interface GifQuery {
  search?: string;
  tag?: string;
}

interface GifQueryStore {
  gifQuery: GifQuery;
  setSearchText: (search: string) => void;
  setSelectTag: (tag: string) => void;
}

const useGifQueryStore = create<GifQueryStore>((set) => ({
  gifQuery: {},
  setSearchText: (search) => set(() => ({ gifQuery: { search } })),
  setSelectTag: (tag) =>
    set((store) => ({ gifQuery: { ...store.gifQuery, tag } })),
}));

export default useGifQueryStore;
