import { Layout } from "./components/Layout";
import GlobalStyle from "./styles/global";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Layout />
    </div>
  );
}

export default App;
