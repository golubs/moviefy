import React from "react";
import styled from "@emotion/styled";
import search from "../assets/search.svg";
import close from "../assets/close.svg";
import { keyframes } from "@emotion/core";

const spin = keyframes`
from {
  transform: rotate(0deg)
}
to { transform: rotate(360deg)}
`;

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
  margin: 4px;
`;

const AnimatedIcon = styled(Icon)`
  animation: ${spin} 1s eas 1;
`;

export default function SearchButton({ active, onClick }) {
  return (
    <Button onClick={onClick}>
      <Icon
        animationCount={Number(active)}
        src={active ? { search } : { close }}
      />
    </Button>
  );
}
