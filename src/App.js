import { useContext } from "react";
import ThemeContext from "./context/theme.context";
import Header from "./Components/Header";
import Main from "./Components/Main";
import "./styles/components/App.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={`App-${dark ? "dark" : "light"}`}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
