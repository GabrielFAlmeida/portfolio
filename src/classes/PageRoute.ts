import type { PageRouteInterface } from "../interfaces/PageRouteInterface";
 
import { rawPageRoutes } from "../constants/pages";

export class PageRoute implements PageRouteInterface {
  id: number;
  title: string;
  element: React.ReactNode;
  path: string;
  nextId: number | null;

  constructor(id: number, title: string, element: React.ReactNode , path: string, nextId: number | null) {
    this.id = id;
    this.title = title;
    this.element = element; 
    this.path = path;
    this.nextId = nextId;
  }

  // Método que retorna o nome amigável para a rota
  getLabel(): string {
    return `${this.title} (${this.path})`;
  }

  // Método que retorna o próximo elemento
  getNext(currentPath: string) {
    const currentPageRoute = rawPageRoutes.find(pageRoute => pageRoute.path === currentPath);
    return rawPageRoutes.find(pageRoute => pageRoute.id === currentPageRoute?.nextId);
  }
}
