import { NovedadAnularRequest } from "../domain/novedades/NovedadAnularRequest";
import { NovedadObtenerTodoRequest } from "../domain/novedades/NovedadObtenerTodoRequest";
import { NovedadRequest } from "../domain/novedades/NovedadRequest";
import { AuthService } from "./AuthService";

export class NovedadService {
  constructor() {

  }

  public static async obtenerTodo(request: NovedadObtenerTodoRequest) {
    const params = new URLSearchParams();
    params.append('page', request.page.toString());
    params.append('limit', request.limit.toString());
    if (request.showAnuladas)
      params.append('showAnuladas', request.showAnuladas.toString());
    if (request.search)
      params.append('search', request.search || '');
    if (request.from && request.to) {
      params.append('from', request.from ? request.from.toISOString() : '');
      params.append('to', request.to ? request.to.toISOString() : '');
    }

    const url = 'http://localhost:5029/novedades?' + params.toString();
    const token = AuthService.getToken();
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },

    })
    const data = await response.json();
    return data;
  }

  public static async agregar(request: NovedadRequest) {
    const url = 'http://localhost:5029/novedades';
    const token = AuthService.getToken();
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(request)
    })
    const data = await response.json();
    return data;
  }

  public static async anular(request: NovedadAnularRequest) {
    const url = 'http://localhost:5029/novedades/anular';
    const token = AuthService.getToken();
    await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(request)
    })
  }

}