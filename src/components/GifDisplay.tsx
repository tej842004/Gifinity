import { Image, Button, Box } from "@chakra-ui/react";

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
    <div>
      <Image src={imageUrl} />
      <Box display="flex" alignItems="center" justifyContent="center" my={1}>
        <Button
          variant="outline"
          onClick={() => onDownload(downloadUrl, fileName)}
        >
          Download
        </Button>
      </Box>
    </div>
  );
};

export default GifDisplay;
