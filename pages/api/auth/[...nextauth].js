import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import SequelizeAdapter, { models } from "@next-auth/sequelize-adapter"
import Sequelize, { DataTypes } from "sequelize"

const sequelize = new Sequelize("sqlite::memory:")

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  database: process.env.DATABASE_CONNECTION_STRING,
  adapter: SequelizeAdapter(sequelize, {
    models: {
      User: sequelize.define("user", {
        ...models.User,
        phoneNumber: DataTypes.STRING,
      }),
    },
  }),
}

export default NextAuth(authOptions)