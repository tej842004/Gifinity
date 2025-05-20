import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

interface Props {
  onSearch: (searchString: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  return (
    <form>
      <InputGroup>
        <InputLeftElement children={<CiSearch />} />
        <Input
          onChange={(event) => onSearch(event.target.value)}
          placeholder="Search..."
          borderRadius={20}
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
