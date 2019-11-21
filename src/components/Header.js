import React from "react";
import styled from "@emotion/styled";
import Logo from "./Logo";
import Search from "./Search";
import SearchButton from "./SearchButton";

const AppBar = styled.header`
  background: #f29a2e;
  height: 50px;
`;

export default function Header() {
  return (
    // moviefy LOGO, Search, IconButton
    <AppBar>
      <Logo test="moviefy" />
      <Search />
      <SearchButton />
    </AppBar>
  );
}
