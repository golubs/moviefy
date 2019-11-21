import React from "react";
import styled from "@emotion/styled";

const Input = styled.input`
  height: 100%;
  flex-grow: 1;
  padding: 20px;
  border: 0;
  font-size: 1rem;
  background: transparent;
  &::placeholder {
    color: #262626;
  }
  outline: none;
`;

export default function Search() {
  return <Input autoFocus placeholder="Search..." />;
}
