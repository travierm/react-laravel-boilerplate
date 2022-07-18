
export class LocalStorageDriver {
	constructor() {

	}

	get(key: string) {
		return localStorage.getItem(key);
	}

	set(key: string, value: any) {
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
