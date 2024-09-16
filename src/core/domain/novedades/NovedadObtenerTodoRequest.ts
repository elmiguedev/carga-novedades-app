export interface NovedadObtenerTodoRequest {
  page: number;
  limit: number;
  showAnuladas?: boolean;
  search?: string;
  from?: Date;
  to?: Date;
}