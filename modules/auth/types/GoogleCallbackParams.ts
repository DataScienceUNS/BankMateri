export interface GoogleCallbackParams {
    code: string;
    iss: string;
    state: string;
    scope: string;
    authuser: string;
    prompt: string;
}