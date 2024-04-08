export class LocalStorageManager {
  key: Nullable<string> = null;
  constructor(key: string) {
    this.key = key;
  }

  public getValue() {
    if (!this.key) return null;
    const value = localStorage.getItem(this.key);
    if (value !== null) {
      return JSON.parse(value);
    }
    return null;
  }

  public setValue(value: string): void {
    if (!this.key) return;
    localStorage.setItem(this.key, JSON.stringify(value));
  }

  public clear(): void {
    if (!this.key) return;
    localStorage.removeItem(this.key);
  }
}
