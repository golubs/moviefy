import React from "react";
import styled from "@emotion/styled";

const Title = styled.h1`
  margin: 0;
  font-size: 1.8rem;
  color: #7d4ebf;
  text-shadow: 1px 1px 2px black;
  padding: 4px;
  letter-spacing: 2px;
`;

export default function Logo({ text }) {
  return <Title>moviefy</Title>;
}
