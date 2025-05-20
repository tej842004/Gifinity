import { Grid, GridItem } from "@chakra-ui/react";
import GifGrid from "./components/GifGrid";
import NavBar from "./components/NavBar";
import Tags from "./components/Tags";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside aside" "main main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem as="aside">
        <Tags />
      </GridItem>
      <GridItem area="main">
        <GifGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
