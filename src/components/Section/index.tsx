import React, { useState } from "react";
import { IconBaseProps } from "react-icons";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Container, Header, Content, Title, ShowButton } from "./styles";

interface SectionProps extends React.PropsWithChildren {
  icon?: React.ComponentType<IconBaseProps>;
  title: string;
  show?: boolean;
}

export function Section({ title, show, children }: SectionProps) {
  const [showContent, setShowContent] = useState(false);

  function handleShowContent() {
    setShowContent(!showContent);
  }

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        {show && (
          <ShowButton onClick={handleShowContent}>
            {showContent ? <FaEye /> : <FaEyeSlash />}
          </ShowButton>
        )}
      </Header>
      {show && showContent && <Content>{children}</Content>}
      {!show && <Content>{children}</Content>}
    </Container>
  );
}
