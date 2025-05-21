import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GifGrid from "./components/GifGrid";
import NavBar from "./components/NavBar";
import Tags from "./components/Tags";

export interface GifQuery {
  search: string;
  tag: string;
}

const App = () => {
  const [gifQuery, setGifQuery] = useState<GifQuery>({} as GifQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "aside" "main"`,
        md: `"nav nav" "aside aside" "main main"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(search) => setGifQuery({ ...gifQuery, search })} />
      </GridItem>
      <GridItem as="aside">
        <Tags
          onSelectTag={(tag) => setGifQuery({ ...gifQuery, tag })}
          selectedTag={gifQuery.tag}
        />
      </GridItem>
      <GridItem area="main">
        <GifGrid gifQuery={gifQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
// import { Box } from "@chakra-ui/react";
// import React from "react";
// import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
// import "react-horizontal-scrolling-menu/dist/styles.css";

// const items = Array.from({ length: 20 }, (_, i) => ({
//   id: `item-${i}`,
//   title: `Item ${i}`,
// }));

// function Card({ itemId, title }: { itemId: string; title: string }) {
//   return (
//     <div
//       style={{
//         minWidth: "160px",
//         margin: "0 10px",
//         padding: "20px",
//         background: "#eee",
//         textAlign: "center",
//         borderRadius: "8px",
//       }}
//       itemID={itemId}
//     >
//       {title}
//     </div>
//   );
// }

// const LeftArrow = () => {
//   const { scrollPrev } = React.useContext(VisibilityContext);
//   return <button onClick={() => scrollPrev()}>{"<"}</button>;
// };

// const RightArrow = () => {
//   const { scrollNext } = React.useContext(VisibilityContext);
//   return <button onClick={() => scrollNext()}>{">"}</button>;
// };

// const HorizontalScroll = () => {
//   return (
//     <Box width="80vw" mx="auto">
//       <ScrollMenu
//         LeftArrow={<LeftArrow />}
//         RightArrow={<RightArrow />}
//         wrapperClassName="hide-scrollbar"
//       >
//         {items.map(({ id, title }) => (
//           <Card itemId={id} title={title} key={id} />
//         ))}
//       </ScrollMenu>
//     </Box>
//   );
// };

// export default HorizontalScroll;
