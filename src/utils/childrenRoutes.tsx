import { PageRoute } from "../classes/PageRoute";

import rawPageRoutes from "./../constants/pages";

const pages: PageRoute[] = rawPageRoutes.map(
  (page) =>
    new PageRoute(page.id, page.title, page.element, page.path, page.nextId)
);

const childrenRoutes = pages.map((page) => ({
  path: page.path === "/" ? "" : page.path.replace("/", ""),
  index: page.path === "/",
  element: page.element,
}));

const childrenRoutesWithId = pages.map((page) => ({
  id: page.id,
  title: page.title,
  path: page.path === "/" ? "" : page.path.replace("/", ""),
  index: page.path === "/",
  element: page.element,
  next: page.getNext(page.path),
}));

export { childrenRoutes, childrenRoutesWithId };
