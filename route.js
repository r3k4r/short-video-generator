
/**
*routes that dont require authentication
*@type {string}
*/
export const PrivateRoutes = [
    "/auth/new-verification",
]

/**
 * routes that use for authentication
 * @type {string}
 */
export const AuthRoutes = [
    "/auth/sign-in",
    "/auth/sign-up",
    "/auth/error",
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