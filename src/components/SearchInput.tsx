import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router";
import useGifQueryStore from "../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGifQueryStore((s) => s.setSearchText);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current && ref.current.value) setSearchText(ref.current?.value);
        if (location.pathname !== "/") navigate("/");
      }}
    >
      <InputGroup>
        <InputLeftElement children={<CiSearch />} />
        <Input
          ref={ref}
          placeholder="Search all the GIFs and Stickers"
          borderRadius={20}
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
