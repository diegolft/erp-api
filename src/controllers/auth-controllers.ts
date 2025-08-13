import { Request, Response } from "express";
import { AuthService } from "../services/auth-service";

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  login = async (req: Request, res: Response) => {
    try {
      const { user_name, senha } = req.body;

      if (!user_name || !senha) {
        return res.status(400).json({ error: "Parâmetros obrigatórios" });
      }

      const result = await this.authService.login(user_name, senha);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(401).json({ error: (error as Error).message });
    }
  };
}
