import { Tab, TabList, Tabs } from "@chakra-ui/react";
import useGifQueryStore from "../store";

const AppTabs = () => {
  const setSelectedTab = useGifQueryStore((s) => s.setSelectedTab);
  const selectedTab = useGifQueryStore((s) => s.tabQuery.selectedTab ?? 0);

  return (
    <Tabs
      index={selectedTab}
      onChange={setSelectedTab}
      variant="soft-rounded"
      size={{ base: "md", md: "lg" }}
    >
      <TabList>
        <Tab>GIFs</Tab>
        <Tab>Stickers</Tab>
      </TabList>
    </Tabs>
  );
};

export default AppTabs;
