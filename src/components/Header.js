import React from "react";
import styled from "@emotion/styled";
import Logo from "./Logo";
import Search from "./Search";
import SearchButton from "./SearchButton";

const AppBar = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f29a2e;
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
