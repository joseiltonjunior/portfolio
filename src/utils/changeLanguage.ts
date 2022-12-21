import i18next from "i18next";

export function handleChangeLanguage() {
  const lang = localStorage.getItem("i18nextLng");

  if (lang && lang === "pt-PT") {
    i18next.changeLanguage("en_US");
    window.location.reload();
  }
}
