import { safeJsonParse } from '../utils';

export class LocalStorageDriver {
	clear(): void {
		localStorage.clear();
	}

	get(key: string): string | null {
		return localStorage.getItem(key);
	}

	set(key: string, value: string): void {
		localStorage.setItem(key, value);
	}

	setJson(key: string, value: any) {
		const data = JSON.stringify(value)
		this.set(key, data)
	}

	getJson<T>(key: string, typeGuard: (o: any) => o is T) {

		const value = this.get(key)

		if (!value) {
			return null;
		}

		const obj = safeJsonParse(typeGuard)(value)

		return obj;
	}
}
