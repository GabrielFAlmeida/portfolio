import type { PageRouteInterface } from "../interfaces/PageRouteInterface";
 
import { rawPageRoutes } from "../constants/pages";

export class PageRoute implements PageRouteInterface {
  id: number;
  title: string;
  element: React.ReactNode;
  path: string;

  constructor(id: number, title: string, element: React.ReactNode , path: string) {
    this.id = id;
    this.title = title;
    this.element = element; 
    this.path = path;
  }

  // Método que retorna o nome amigável para a rota
  getLabel(): string {
    return `${this.title} (${this.path})`;
  }
}
