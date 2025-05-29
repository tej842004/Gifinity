import { Box } from "@chakra-ui/react";
import { useParams } from "react-router";
import GifDisplay from "../src/components/GifDisplay";
import useGif from "../src/hooks/useGif";
import { downloadGif } from "../src/utils/downloadGif";

const GifDetailPage = () => {
  const { id } = useParams();
  const { data } = useGif(id!);

  const gifTitle = data?.data[0].slug;
  const searchTerm = gifTitle?.split(" ").slice(0, 3).join(" ");

  if (!data) return null;

  const gifData = data.data[0];
  const fileName = gifData.title + ".gif";

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="50vh"
    >
      <GifDisplay
        imageUrl={gifData.images.fixed_width.url}
        downloadUrl={gifData.images.original.url}
        fileName={fileName}
        onDownload={downloadGif}
      />
    </Box>
  );
};

export default GifDetailPage;
