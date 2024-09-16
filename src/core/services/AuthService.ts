import { LoginRequest } from "../domain/auth/LoginRequest";

export class AuthService {
  constructor() {

  }

  public static async login(params: LoginRequest) {
    const url = 'http://localhost:5029/auth/login';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
    const data = await response.json();
    this.saveToken(data);
  }

  public static logout() {
    this.removeToken();
  }

  public static getUser() {
    return this.getToken();
  }

  public static isAuthenticated() {
    return !!this.getToken();
  }

  public static getToken() {
    return localStorage.getItem("token");
  }

  private static saveToken(token: string) {
    localStorage.setItem("token", token);
  }

  private static removeToken() {
    localStorage.removeItem("token");
  }


}