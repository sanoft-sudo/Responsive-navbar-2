import ResponsiveMegaMenu from "./components/megaMenu/ResponsiveMegaMenu";
import ResponsiveNav4 from "./components/ResponsiveNav4";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="nav__1">
        <ResponsiveNav4 />
      </div>
      <div className="nav__2">
        <ResponsiveMegaMenu />
      </div>
    </div>
  );
}
