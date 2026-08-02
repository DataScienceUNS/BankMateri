import {jwtVerify} from "jose";
import {cookies} from "next/headers";
import {createAction} from "@/utils/actions/create-action";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export const getCurrentUser = createAction(
    async ()=> {
        const cookieStore = await cookies();
        const token = cookieStore.get('token')?.value;

        if (!token) return null;

        try {
            const { payload } = await jwtVerify(token, JWT_SECRET);
            return payload as unknown as UserJwtPayload;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
)