// hooks/useGifTab.ts
import { useState } from "react";

const useGifTab = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const type = selectedTab === 0 ? "gifs" : "stickers";

  return { selectedTab, setSelectedTab, type };
};

export default useGifTab;
