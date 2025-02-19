import Cookies from 'js-cookie'

export class CookieStorageService {
  private _storage

  constructor() {
      this._storage = Cookies.withAttributes({ sameSite: 'strict' })
  }

  async remove(key: string) {
    this._storage.remove(key)
  }

  async get(key: string) {
    return this._storage.get(key)
  }

  async set(key: string, value: string) {
    this._storage.set(key, value)
  }
}
