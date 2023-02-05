import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../../lib/prismadb'

export const authOptions = {
  // SECRET
  secret: process.env.NEXTAUTH_SECRET,

  // PRISMA ADAPTER FOR NEXT-AUTH
  adapter: PrismaAdapter(prisma),

  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
}
export default NextAuth(authOptions)
