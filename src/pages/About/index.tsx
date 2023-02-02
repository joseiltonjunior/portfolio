import { useTranslation } from "react-i18next";

export function Abbout() {
  const { t } = useTranslation();

  return (
    <>
      <p>{t("aboutTextPrimary")}</p>
    </>
  );
}
