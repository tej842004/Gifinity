import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GifGrid from "./components/GifGrid";
import NavBar from "./components/NavBar";
import Tags from "./components/Tags";

const App = () => {
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("");

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
          <Tags onSelectTag={(selectTag) => setTag(selectTag)} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GifGrid searchString={search} tagString={tag} />
      </GridItem>
    </Grid>
  );
};

export default App;
