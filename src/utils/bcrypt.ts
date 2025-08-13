import bcrypt from "bcrypt";

export async function comparePasswords(
  plain: string,
  hashed: string
): Promise<boolean> {
  return bcrypt.compare(plain, hashed);
}
