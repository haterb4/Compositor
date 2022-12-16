import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import SequelizeAdapter from "@next-auth/sequelize-adapter"
import { Sequelize } from "sequelize"


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage:'../db.sqlite'
})
const adapter = SequelizeAdapter(sequelize)
sequelize.sync()

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter
}

export default NextAuth(authOptions)