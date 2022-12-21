import { useEffect } from "react";
import { Layout } from "./components/Layout";
import GlobalStyle from "./styles/global";
import { handleChangeLanguage } from "./utils/changeLanguage";

function App() {
  useEffect(() => {
    handleChangeLanguage();
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Layout />
    </div>
  );
}

export default App;
