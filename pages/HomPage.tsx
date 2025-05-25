import { Grid, GridItem } from "@chakra-ui/react";
import GifGrid from "../src/components/GifGrid";
import Tags from "../src/components/Tags";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"aside" "main"`,
        md: `"aside aside" "main main"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "1fr",
      }}
    >
      <GridItem as="aside">
        <Tags />
      </GridItem>
      <GridItem area="main">
        <GifGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
