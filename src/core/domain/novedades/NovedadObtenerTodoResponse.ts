import { Novedad } from "./Novedad";

export interface NovedadObtenerTodoResponse {
  items: Novedad[];
  total: number;
  page: number;
  limit: number;
}