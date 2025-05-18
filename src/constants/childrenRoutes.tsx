import Home from "./../pages/Home";

const pages = [
  { id: 1, title: "Bem-vindo", path: "/", next: 2 },
  { id: 2, title: "Sobre mim", path: "/sobre", next: 3 },
  { id: 3, title: "Trajetória", path: "/trajetoria", next: 4 },
  { id: 4, title: "Projetos", path: "/projetos", next: 5 },
  { id: 5, title: "Contato", path: "/contato", next: null },
];

const componentMap: Record<string, React.ReactNode> = {
  "/": <Home />,
  "/sobre": <Home />,
  "/trajetoria": <Home />,
  "/projetos": <Home />,
  "/contato": <Home />,
};

const childrenRoutes = pages.map((page) => ({
  path: page.path === "/" ? "" : page.path.replace("/", ""),
  index: page.path === "/",
  element: componentMap[page.path],
}));

const childrenRoutesWithId = pages.map((page) => ({
  id: page.id,
  title: page.title,
  path: page.path === "/" ? "" : page.path.replace("/", ""),
  index: page.path === "/",
  element: componentMap[page.path],
}));

export { childrenRoutes, childrenRoutesWithId };
