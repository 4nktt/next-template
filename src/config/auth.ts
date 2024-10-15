import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import db from "@/db";

import { env } from "./server";

const options: NextAuthOptions = {
  // Next Auth middleware only supports the "jwt" strategy
  // For "database" strategy use requireAuth util on page.tsx at the top
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
  },
  adapter: DrizzleAdapter(db),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};

export default options;
