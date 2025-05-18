import type { PageRouteInterface } from "../interfaces/PageRouteInterface";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

const rawPageRoutes: Array<PageRouteInterface> = [
  { id: 1, title: "Bem-vindo", element: <Home/>, path: "/", nextId: 2 },
  { id: 2, title: "Sobre mim", element: <Home/>, path: "/sobre", nextId: 3 },
  { id: 3, title: "Trajetória", element: <Home/>, path: "/trajetoria", nextId: 4 },
  { id: 4, title: "Projetos", element: <Projects/>, path: "/projetos", nextId: 5 },
  { id: 5, title: "Contato", element: <Home/>, path: "/contato", nextId: null },
];

export default rawPageRoutes;