import { UserRepository } from "../repositories/user-repository";
import { comparePasswords } from "../utils/bcrypt";
import { generateToken } from "../utils/jwt";

export class AuthService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async login(user_name: string, senha: string) {
    const user = await this.userRepository.findByUserName(user_name);

    if (!user) {
      throw new Error("Usuário ou senha inválidos");
    }

    const senhaValida = await comparePasswords(senha, user.senha);
    if (!senhaValida) {
      throw new Error("Usuário ou senha inválidos");
    }

    const token = generateToken({
      id: user.id_usuario,
      user_name: user.user_name,
    });

    return {
      token,
      nome: user.user_name,
    };
  }
}
