import type {Metadata} from "next";
import "./globals.css";
import FontProvider from "@/providers/fonts/Font.provider";
import React from "react";
import {AuthProvider} from "@/providers/auth/auth-provider";
import {getCurrentUser} from "@/modules/auth/lib/getCurrentUser";
import {unwrap} from "@/utils/actions/unwrap-action";

export const metadata: Metadata = {
    title: "Data Science Resource Center",
    description: "A hub for all resources related to data science at UNS",
};

export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode;
}>) {
    const user = unwrap(await getCurrentUser())

    return (
        <html lang="en">
        <FontProvider>
            <AuthProvider user={user}>
                {children}
            </AuthProvider>
        </FontProvider>
        </html>
    );
}
