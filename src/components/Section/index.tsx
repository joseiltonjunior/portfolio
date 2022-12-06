import React from "react";
import { IconBaseProps } from "react-icons";
import { Container, Header, Content, Title } from "./styles";

interface SectionProps extends React.PropsWithChildren {
  icon?: React.ComponentType<IconBaseProps>;
  title: string;
}

export function Section({ title, icon: Icon, children }: SectionProps) {
  return (
    <Container>
      <Header>
        {Icon && <Icon size={20} />}
        <Title>{title}</Title>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
}
