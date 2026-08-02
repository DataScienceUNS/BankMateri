'use client';

import React, { createContext, useContext } from 'react';

const AuthContext = createContext<UserJwtPayload | null>(null);

export function AuthProvider({
                                 user,
                                 children,
                             }: {
    user: UserJwtPayload | null;
    children: React.ReactNode;
}) {
    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export function useUser() {
    return useContext(AuthContext);
}