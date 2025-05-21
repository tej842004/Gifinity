import { Grid, GridItem } from "@chakra-ui/react";
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
