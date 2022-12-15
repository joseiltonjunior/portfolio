import { Content } from "../Content";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { Container } from "./style";

export function Layout() {
  return (
    <>
      <Header />
      <Container>
        <Sidebar />
        <Content />
      </Container>
    </>
  );
}
