// NEXTAUTH
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

// PRISMA
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../../lib/prismadb'

// `````````````````````````````````````````````````````

export const authOptions = {
  // SECRET
  secret: process.env.NEXTAUTH_SECRET,

  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // ...add more providers here
  ],

  // * PRISMA ADAPTER FOR NEXT-AUTH
  adapter: PrismaAdapter(prisma),

  // * DATABASE URL FOR NEXT-AUTH
  database: process.env.DATABASE_URL,
}

export default NextAuth(authOptions)
