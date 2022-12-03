import { Container } from "./styles";
import { LinkedinLogo, GithubLogo } from "phosphor-react";

export function Sidebar() {
  return (
    <Container>
      <img
        className="cover"
        src="https://images.unsplash.com/photo-1533709752211-118fcaf03312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        alt=""
      />

      <div className="profile">
        <img
          src="https://avatars.githubusercontent.com/u/47725788?v=4"
          alt=""
        />
        <strong>Junior Ferreira</strong>
        <span>Front-end Developer</span>
      </div>

      <div className="footer">
        <a href="*" target="_blank" rel="noopener noreferrer">
          <LinkedinLogo size={22} />
        </a>
        <a href="*" target="_blank" rel="noopener noreferrer">
          <GithubLogo size={22} />
        </a>
      </div>
    </Container>
  );
}
