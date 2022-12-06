import React from "react";

import { Content } from "../Content";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { Container } from "./styles";

export function Layout() {
  return (
    <div>
      <Header />
      <Container>
        <Sidebar />
        <Content />
      </Container>
    </div>
  );
}
