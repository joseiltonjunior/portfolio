import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IconBaseProps } from "react-icons";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Container, Header, Content, Title, ShowButton } from "./style";

interface SectionProps extends React.PropsWithChildren {
  title: string;
  show?: boolean;
}

export function Section({ title, show, children }: SectionProps) {
  const [showContent, setShowContent] = useState(false);

  const { t } = useTranslation();

  function handleShowContent() {
    setShowContent(!showContent);
  }

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        {show && (
          <ShowButton onClick={handleShowContent}>
            {!showContent ? (
              <FaEye title={t("showContent") ?? ""} />
            ) : (
              <FaEyeSlash title={t("hideContent") ?? ""} />
            )}
          </ShowButton>
        )}
      </Header>
      {show && showContent && <Content>{children}</Content>}
      {!show && <Content>{children}</Content>}
    </Container>
  );
}
