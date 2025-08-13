import { pgTable, varchar, timestamp, serial } from 'drizzle-orm/pg-core';

export const users = pgTable("usuarios", {
  id_usuario: serial("id_usuario").primaryKey(),
  user_name: varchar("user_name", { length: 50 }).notNull().unique(),
  senha: varchar("senha", { length: 255 }).notNull(),
  nome: varchar("nome", { length: 255 }).notNull(),
  criado_em: timestamp("criado_em").defaultNow().notNull(),
});

export type InsertUser = typeof users.$inferInsert;