import { useState, useRef, useEffect } from "react";
import searchIcon from "../../images/search-icon.svg";

import { Wrapper, Content } from "./SearchBar.styles";

import PropTypes from "prop-types";

const SearchBar = ({ callback }) => {
  const [state, setState] = useState("");
  const initial = useRef(true);
  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      callback(state);
    }, 500);
    return () => clearTimeout(timer);
  }, [callback, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search movie"
          onChange={(event) => {
            setState(event.target.value);
          }}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  callback: PropTypes.func,
};

export default SearchBar;
