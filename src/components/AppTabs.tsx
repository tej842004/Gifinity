import { Tab, TabList, Tabs } from "@chakra-ui/react";

interface Props {
  selectedTab: number;
  onTabChange: (index: number) => void;
}

const AppTabs = ({ selectedTab, onTabChange }: Props) => {
  return (
    <Tabs
      index={selectedTab}
      onChange={onTabChange}
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
