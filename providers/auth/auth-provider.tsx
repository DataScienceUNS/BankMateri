"use client";

import React, { createContext, useContext } from "react";
import { UserJwtPayload } from "@/modules/shared/types/UserJwtPayload";

const AuthContext = createContext<UserJwtPayload | null>(null);

export function AuthProvider({ user, children }: { user: UserJwtPayload | null; children: React.ReactNode }) {
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export function useUser() {
  return useContext(AuthContext);
}
