import { Outlet } from "react-router";
import Header from "./../components/header/Header";
import Scroll from "../components/scroll/Scroll";

export default function Layout() {
  return (
    <div className="relative">
      <Header />
      <Outlet/>
      <Scroll />
    </div>
  );
}