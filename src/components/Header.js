import React from "react";
import styled from "@emotion/styled";
import Logo from "./Logo";

const AppBar = styled.header`
  background: #f29a2e;
  height: 50px;
`;

export default function Header() {
  return (
    <AppBar>
      <Logo test="moviefy" />
      moviefy LOGO, Search, IconButton
    </AppBar>
  );
}
