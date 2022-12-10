import i18next from "i18next";
import { useCallback, useEffect } from "react";
import { Layout } from "./components/Layout";

function App() {
  const lang = localStorage.getItem("i18nextLng") ?? "";

  const handleChangeLanguage = useCallback(() => {
    if (lang === "pt-PT") {
      localStorage.setItem("i18nextLng", "en_US");
      i18next.changeLanguage("en_US");
    }
  }, [lang]);

  useEffect(() => {
    handleChangeLanguage();
  }, [handleChangeLanguage]);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
