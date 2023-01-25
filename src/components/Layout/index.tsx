import { Content } from "../Content";
import { Header } from "../Header";
import { Modal } from "../Modal";
import { Sidebar } from "../Sidebar";
import { Container } from "./style";

export function Layout() {
  return (
    <>
      <Modal />
      <Header />
      <Container>
        <Sidebar />
        <Content />
      </Container>
    </>
  );
}
