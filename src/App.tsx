import { Grid, GridItem, Show } from "@chakra-ui/react";
import GifGrid from "./components/GifGrid";
import NavBar from "./components/NavBar";
import Tags from "./components/Tags";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState<string | null>(null);
  console.log(search);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside aside" "main main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchString) => setSearch(searchString)} />
      </GridItem>
      <Show above="lg">
        <GridItem as="aside">
          <Tags />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GifGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
