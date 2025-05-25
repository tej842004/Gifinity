import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router";

type GifCardProps = {
  gif: {
    id: string;
    title: string;
    images: {
      fixed_width: {
        url: string;
        width: string;
        height: string;
      };
    };
  };
};

const GifCard: React.FC<GifCardProps> = ({ gif }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const width = gif.images.fixed_width.width;
  const height = gif.images.fixed_width.height;

  return (
    <Box width={width} height={height} position="relative" mb={4}>
      {!isLoaded && (
        <Box
          width="100%"
          height="100%"
          bgGradient="linear(to-r, pink.400, purple.500, blue.500)"
          animation="pulse 2s infinite"
          borderRadius="md"
        />
      )}

      <Link to={`/gif/${gif.id}`}>
        <Box
          as="img"
          src={gif.images.fixed_width.url}
          alt={gif.title}
          onLoad={() => setIsLoaded(true)}
          display={isLoaded ? "block" : "none"}
          width="100%"
          height="100%"
          objectFit="cover"
          borderRadius="md"
        />
      </Link>
    </Box>
  );
};

export default GifCard;
