"use client"
import {useUser} from "@/providers/auth/auth-provider";

export const Test = () => {
    const user = useUser()
    return (
        <div>
            <h1>Hola, {user?.user.full_name}</h1>
        </div>
    )
}