import { create } from "zustand";

export interface GifQuery {
  search?: string;
  tag?: string;
}

interface TabQuery {
  selectedTab?: number;
}

interface GifQueryStore {
  gifQuery: GifQuery;
  setSearchText: (search: string) => void;
  setSelectTag: (tag: string) => void;
  tabQuery: TabQuery;
  setSelectedTab: (index: number) => void;
}

const useGifQueryStore = create<GifQueryStore>((set) => ({
  gifQuery: {},
  setSearchText: (search) => set(() => ({ gifQuery: { search } })),
  setSelectTag: (tag) =>
    set((store) => ({ gifQuery: { ...store.gifQuery, tag } })),
  tabQuery: {},
  setSelectedTab: (index) => set(() => ({ tabQuery: { selectedTab: index } })),
}));

export default useGifQueryStore;
