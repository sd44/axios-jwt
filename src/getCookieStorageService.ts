import { CookieStorageService } from './CookieStorageService'

export const getCookieSessionStorage = () => {
    return new CookieStorageService()
}
