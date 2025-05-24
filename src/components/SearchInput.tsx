import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { CiSearch } from "react-icons/ci";
import useGifQueryStore from "../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGifQueryStore((s) => s.setSearchText);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current && ref.current.value) setSearchText(ref.current?.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<CiSearch />} />
        <Input
          ref={ref}
          placeholder="Search..."
          borderRadius={20}
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
