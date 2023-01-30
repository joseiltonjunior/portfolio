export function handleChangeLanguage() {
  const lang = localStorage.getItem("i18nextLng");

  if (lang && lang === "pt-PT") {
    localStorage.setItem("i18nextLng", "pt_BR");
  }
}
