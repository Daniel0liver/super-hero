type StorageKeys = 'name' | 'theme';

export class LocalStorageService {
  public static getItem<T = unknown>(key: StorageKeys): T | null {
    const storedItem = localStorage.getItem(this.storageKey(key));

    if (storedItem) {
      return JSON.parse(storedItem);
    }

    return null;
  }

  public static setItem(key: StorageKeys, data: unknown) {
    const dataToStore = JSON.stringify(data);
    localStorage.setItem(this.storageKey(key), dataToStore);
  }

  public static removeItem(key: StorageKeys) {
    localStorage.removeItem(key);
  }

  private static storageKey(key: StorageKeys) {
    return `@superhero:${key}`;
  }
}
