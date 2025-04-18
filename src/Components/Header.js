import "../styles/components/Header.scss";
import Place from "./HeaderComponent/Place";
import Search from "./HeaderComponent/Search";
import Settings from "./HeaderComponent/Settings";

export default function Header({ onSetDark, dark }) {
  return (
    <div className="Header">
      <Place />
      <Search />
      <Settings onSetDark={onSetDark} dark={dark} />
    </div>
  );
}
