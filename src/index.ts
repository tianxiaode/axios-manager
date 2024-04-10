
import AxiosManager  from './AxiosManager';
import DownloadManager  from './DownloadManager';
import UploadManager  from './UploadManager';
import PollingManager  from './PollingManager';

// 导出包含这四个对象的类型
export type ManagerType = {
    axios: AxiosManager;
    download: DownloadManager;
    upload: UploadManager;
    polling: PollingManager;
  };

// 工厂函数创建实例并初始化配置
export function createAxiosManager(config: axios.AxiosRequestConfig): ManagerType {
    return {
        axios: new AxiosManager(config),
        download: new DownloadManager(config),
        upload: new UploadManager(config),
        polling: new PollingManager(config),
    }
}
