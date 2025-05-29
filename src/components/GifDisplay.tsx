import { Box, Button } from "@chakra-ui/react";

interface GifDisplayProps {
  imageUrl: string;
  downloadUrl: string;
  fileName: string;
  onDownload: (url: string, name: string) => void;
}

const GifDisplay = ({
  imageUrl,
  downloadUrl,
  fileName,
  onDownload,
}: GifDisplayProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      width="auto"
      height="300px"
      position="relative"
    >
      <Box
        as="img"
        src={imageUrl}
        height="100%"
        width="100%"
        objectFit="cover"
        borderRadius="md"
      />
      <Box>
        <Button
          width="100%"
          variant="outline"
          onClick={() => onDownload(downloadUrl, fileName)}
        >
          Download
        </Button>
      </Box>
    </Box>
  );
};

export default GifDisplay;
