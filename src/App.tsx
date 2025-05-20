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
        base: `"nav" "main"`,
        md: `"nav nav" "aside aside" "main main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(search) => setGifQuery({ ...gifQuery, search })} />
      </GridItem>
      <Show above="lg">
        <GridItem as="aside">
          <Tags
            onSelectTag={(tag) => setGifQuery({ ...gifQuery, tag })}
            selectedTag={gifQuery.tag}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GifGrid gifQuery={gifQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
