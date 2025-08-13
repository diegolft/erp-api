import { eq } from "drizzle-orm";
import { db } from "../config/db/db";
import { users, InsertUser } from "../config/db/schemas/user";

export class UserRepository {
  async findByUserName(userName: string): Promise<InsertUser| null> {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.user_name, userName));

    return result.length > 0 ? result[0] : null;
  }
}
