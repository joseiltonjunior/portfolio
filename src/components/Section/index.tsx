import React from "react";
import { IconBaseProps } from "react-icons";
import { Container, Header, Content } from "./styles";

interface SectionProps extends React.PropsWithChildren {
  icon?: React.ComponentType<IconBaseProps>;
  title: string;
}

export function Section({ title, icon: Icon, children }: SectionProps) {
  return (
    <Container>
      <Header>
        {Icon && <Icon size={24} />}
        <strong>{title}</strong>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
}
