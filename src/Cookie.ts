export default class Cookie {


    getItem(key: string): string | null {
        const cookies = document.cookie.split(';').map(cookie => cookie.trim());
        for (const cookie of cookies) {
            const [cookieKey, cookieValue] = cookie.split('=');
            if (cookieKey === key) {
                return cookieValue;
            }
        }
        return null;
    }

    setItem(key: string, value: string, end: Date | number | string | null = null, path: string = '/', domain: string = '', secure: boolean = false): void {
        let cookie = `${key}=${value}`;
        if (end) {
            if (typeof end === 'number') {
                const date = new Date();
                date.setTime(date.getTime() + (end * 24 * 60 * 60 * 1000));
                end = date.toUTCString();
            }
            cookie += `;expires=${end}`;
        }
        if (path) {
            cookie += `;path=${path}`;
        }
        if (domain) {
            cookie += `;domain=${domain}`;
        }
        if (secure) {
            cookie += ';secure';
        }
        document.cookie = cookie;
    }

    removeItem(key: string): void {
        this.setItem(key, '', new Date(0));
    }

}

export const cookie = new Cookie();
