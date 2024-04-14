import { AxiosManager } from './AxiosManager';

export default class UploadManager extends AxiosManager {
    // 添加下载特定的方法和属性


    upload(files: File[]): Promise {
        const promises = files.map(async (file) => {
            const hash = await this.getFileHash(file);
            const formData = new FormData();
            formData.append('file', file);
        });
        return Promise.all(promises);   
    }

    private async getFileHash(file: File): Promise<string> {
        const buffer = await file.arrayBuffer();
        const hashBuffer = await crypto.subtle.digest('SHA-1', buffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map((byte) => byte.toString(16).padStart(2, '0')).join('');
        return hashHex;
    }
}
