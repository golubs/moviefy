import React from "react";
import styled from "@emotion/styled";
import search from "../assets/search.svg";
import close from "../assets/close.svg";

const Button = styled.button`
  height: 100%;
  width: 64px;
  flex-shrink: 0;
  border: 0px;
  &:focus {
    outline: none;
  }
  background: transparent;
`;

const Icon = styled.img`
  height: 90%;
`;

export default function SearchButton() {
  return (
    <Button>
      <Icon src={close} />
    </Button>
  );
}
