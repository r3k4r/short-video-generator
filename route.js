
/**
*routes that dont require authentication
*@type {string}
*/
export const publicRoutes = [
    "/auth/new-verification",
    "/"
]

/**
 * routes that use for authentication
 * @type {string}
 */
export const AuthRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password",
    "/auth/two-factor",
]

/**
*API Routes that dont have to be private to any user
*@type {string}
*/
export const apiAuthPrefix = "/api/auth"

/**
 * redirect routes after login or signup
 * @type {string}
 */
export const redirectRoute = "/"