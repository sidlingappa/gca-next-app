import {useEffect, useState} from "react";
export const apiLink = process.env.API_URL;
export const appToken= process.env.APP_TOKEN;

// get cookie with user ID
export const getUserCookie = (cookies: Record<string, string>) => {
    return cookies['userToken']
}
export const useLocalStorage = (key: string, fallbackValue: T) => {
    const [value, setValue] = useState(fallbackValue);
    useEffect(() => {
        const stored = window.localStorage.getItem(key);
        setValue(stored ? stored: fallbackValue);
    }, [fallbackValue, key]);

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
console.log(value);
    return [value, setValue] as const;
}
