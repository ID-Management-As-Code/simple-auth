import { getCookies, setCookie, deleteCookie } from "$std/http/mod.ts";
import { v5 } from "$std/uuid/mod.ts";

export interface UserData {
    id: string;
    expirationDate: Date;
    username: string;
}

export function clearUserSession(request: Request, response: Response) {
    const cookies = getCookies(request.headers);

    const userId = cookies.$uid;

    localStorage.removeItem(`${userId}.username`);
    localStorage.removeItem(`${userId}.expiration`);

    deleteCookie(response.headers, "$uid");
}

export function createUserSession(response: Response, userId: string, username: string, rememberMe: boolean) {
    const currentDate = new Date();

    currentDate.setDate(currentDate.getDate() + (rememberMe ? 7 : 1));

    const expirationTimestamp = currentDate.valueOf().toString();

    const newHeaders = new Headers(response.headers);

    setCookie(newHeaders, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * (rememberMe ? 7 : 1),
        name: "$uid",
        value: userId
    });

    response.headers.forEach((value, key) => newHeaders.append(key, value));

    const newResponse = new Response(response.body, {
        ...response,
        headers: newHeaders
    });

    localStorage.setItem(`${userId}.username`, username);
    localStorage.setItem(`${userId}.expiration`, expirationTimestamp);

    return newResponse;
}

export const getUserData = (request: Request): UserData | undefined => {
    const cookies = getCookies(request.headers);

    const userId = cookies.$uid;

    if (userId && v5.validate(userId)) {
        return {
            id: userId,
            expirationDate: getExpirationDate(userId) || new Date,
            username: getUsername(userId) || ""
        };
    }
};

export const getUsername = (userId: string) => localStorage.getItem(`${userId}.username`) || undefined;

export const getExpirationDate = (userId: string) => {
    const expirationTimestamp = localStorage.getItem(`${userId}.expiration`);

    if (!expirationTimestamp) return;
    if (isNaN(+expirationTimestamp)) return;

    return new Date(+expirationTimestamp);
};

export function isUserAuthenticated(request: Request) {
    const cookies = getCookies(request.headers);

    const userId = cookies.$uid;

    if (userId) {
        const currentDate = new Date();
        const expirationDate = getExpirationDate(userId);

        if (!expirationDate) return false;

        return currentDate < expirationDate;
    }

    return false;
}
