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
  background: ${props => (props.active ? "#eee" : "#f29a2e")};
  color: #fff;
`;

export default function Header() {
  const [showSearch, setShowSearch] = React.useState(false);

  return (
    // moviefy LOGO, Search, IconButton
    <AppBar>
      {!showSearch && <Logo text="Films Over 9000" />}
      {showSearch && <Search />}
      <SearchButton
        actice={showSearch}
        onClick={() => setShowSearch(!showSearch)}
      />
    </AppBar>
  );
}
