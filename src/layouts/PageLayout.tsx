import { Outlet } from "react-router";
import Header from "./../components/header/Header";

export default function Layout() {
  return (
    <div className="relative">
      <Header />
      <Outlet />
    </div>
  );
}