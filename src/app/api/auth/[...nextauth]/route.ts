import NextAuth from 'next-auth'
import Github from 'next-auth/providers/github'

const handler = NextAuth({
  providers: [
    Github({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
  pages: {
    signIn: '/auth',
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl + '/'
    },
  },
})

export { handler as GET, handler as POST }
