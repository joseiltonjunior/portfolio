import { useTranslation } from "react-i18next";
import { Container } from "./style";

export function Abbout() {
  const { t } = useTranslation();

  return (
    <Container>
      <p>{t("aboutTextPrimary")}</p>
    </Container>
  );
}
