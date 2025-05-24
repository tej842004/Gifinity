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

// import React from "react";
// import { Box, SimpleGrid, Text, VStack } from "@chakra-ui/react";

// interface DataItem {
//   label: string;
//   value: string;
//   position: string;
// }

// const data: DataItem[] = [
//   {
//     label: "First Name",
//     value: "Prashant",
//     position: "SECTION:1;COLUMN:1;ROW:1",
//   },
//   {
//     label: "Last Name",
//     value: "Chauhan",
//     position: "SECTION:1;COLUMN:2;ROW:1",
//   },
//   {
//     label: "City",
//     value: "Vaodara",
//     position: "SECTION:1;COLUMN:1;ROW:2",
//   },
//   {
//     label: "State",
//     value: "Gujarat",
//     position: "SECTION:2;COLUMN:1;ROW:1",
//   },
//   {
//     label: "Country",
//     value: "India",
//     position: "SECTION:2;COLUMN:2;ROW:1",
//   },
//   {
//     label: "Language",
//     value: "Hindi",
//     position: "SECTION:2;COLUMN:1;ROW:2",
//   },
// ];

// interface Position {
//   SECTION: number;
//   COLUMN: number;
//   ROW: number;
// }

// const parsePosition = (pos: string): Position => {
//   const parts = pos.split(";").reduce((acc, part) => {
//     const [key, value] = part.split(":");
//     // Use type assertion because keys are known
//     acc[key as keyof Position] = parseInt(value, 10);
//     return acc;
//   }, {} as Position);
//   return parts;
// };

// type SectionedItems = {
//   [section: number]: {
//     [row: number]: {
//       [column: number]: DataItem;
//     };
//   };
// };

// const groupBySection = (items: DataItem[]): SectionedItems => {
//   const sections: SectionedItems = {};
//   items.forEach((item) => {
//     const { SECTION, ROW, COLUMN } = parsePosition(item.position);
//     if (!sections[SECTION]) sections[SECTION] = {};
//     if (!sections[SECTION][ROW]) sections[SECTION][ROW] = {};
//     sections[SECTION][ROW][COLUMN] = item;
//   });
//   return sections;
// };

// const PositionedForm: React.FC = () => {
//   const sections = groupBySection(data);
//   console.log(sections)

//   return (
//     <VStack spacing={10} align="stretch">
//       {Object.entries(sections).map(([sectionNum, rows]) => (
//         <Box key={sectionNum} borderWidth="1px" borderRadius="lg" p={5}>
//           <Text fontWeight="bold" mb={4}>
//             Section {sectionNum}
//           </Text>
//           <VStack spacing={4} align="stretch">
//             {Object.entries(rows).map(([rowNum, columns]) => (
//               <SimpleGrid
//                 key={rowNum}
//                 columns={Object.keys(columns).length}
//                 spacing={4}
//               >
//                 {Object.entries(columns).map(([colNum, field]) => (
//                   <Box
//                     key={colNum}
//                     p={3}
//                     border="1px solid #e2e8f0"
//                     borderRadius="md"
//                   >
//                     <Text fontSize="sm" color="gray.500">
//                       {field.label}
//                     </Text>
//                     <Text fontSize="md" fontWeight="medium">
//                       {field.value}
//                     </Text>
//                   </Box>
//                 ))}
//               </SimpleGrid>
//             ))}
//           </VStack>
//         </Box>
//       ))}
//     </VStack>
//   );
// };

// export default PositionedForm;
