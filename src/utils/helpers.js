export function getStoredPage(key) {
	return parseInt(localStorage.getItem(key))
}

export function getStoredData(key) {
	return JSON.parse(localStorage.getItem(key))
}

export function getStoredText(key) {
	return localStorage.getItem(key)
}

export function setStoredPage(key, value) {
	localStorage.setItem(key, parseInt(value))
}

export function setStoredData(key, value) {
	localStorage.setItem(key, JSON.stringify(value))
}

export function setStoredText(key, value) {
	localStorage.setItem(key, value)
}
