interface UserJwtPayload {
    id: string
    user: {
        id: string
        sso_email: string
        full_name: string
        profile_picture?: string
        user_type?: string
        access_type: string
        student?: {
            nim: string
        }
        lecture?: {
            nip?: string
        }
    }
}