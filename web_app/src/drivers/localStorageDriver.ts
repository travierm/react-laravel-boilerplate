
export class LocalStorageDriver {
	constructor() {

	}

	clear() {
		if (typeof window === "undefined") {
			return;
		}


		localStorage.clear();
	}

	get(key: string) {
		if (typeof window === "undefined") {
			return;
		}

		return localStorage.getItem(key);
	}

	set(key: string, value: any) {
		if (typeof window === "undefined") {
			return;
		}


		localStorage.setItem(key, value);
	}

	setJson(key: string, value: any) {
		const data = JSON.stringify(value)
		this.set(key, data)
	}

	getJson(key: string) {
		const value = this.get(key)

		if (!value) {
			return value;
		}

		return JSON.parse(value)
	}
}
