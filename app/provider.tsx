"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { db } from "@/configs/db";
import { Users } from "@/configs/schema";
import { eq } from "drizzle-orm";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();

  // ✅ Function OUTSIDE useEffect
  const createUserIfNotExists = async () => {
    if (!user) return;

    const email = user.primaryEmailAddress?.emailAddress;
    if (!email) return;

    const result = await db.select().from(Users).where(eq(Users.email, email));

    if (result.length === 0) {
      await db.insert(Users).values([
        {
          name: user.fullName ?? "",
          email,
          imageUrl: user.imageUrl ?? "",
        },
      ]);
    }
  };

  useEffect(() => {
    createUserIfNotExists();
  }, [user]);

  return <>{children}</>;
};

export default Provider;
