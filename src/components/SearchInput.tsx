import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <form>
      <InputGroup>
        <InputLeftElement children={<CiSearch />} />
        <Input placeholder="Search..." borderRadius={20} variant="filled" />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
