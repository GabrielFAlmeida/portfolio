import type { PageRouteInterface } from "../interfaces/PageRouteInterface";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

const rawPageRoutes: Array<PageRouteInterface> = [
  { id: 1, title: "Bem-vindo", element: <Home/>, path: "/"},
  { id: 2, title: "Sobre mim", element: <Home/>, path: "/sobre-mim"},
  { id: 3, title: "Trajetória", element: <Home/>, path: "/trajetoria"},
  { id: 4, title: "Contato", element: <Home/>, path: "/contato"},
  { id: 5, title: "Projetos", element: <Projects/>, path: "/projetos"},
];

export {rawPageRoutes};