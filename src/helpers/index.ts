export const apiLink = process.env.API_URL;
export const appToken= process.env.APP_TOKEN;
// get cookie with user ID
export const getUserCookie = (cookies: Record<string, string>) => {
    return cookies['userToken']
}
