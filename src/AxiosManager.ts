import axios from 'axios';
import  Deferred  from './Deferred';

export class AxiosManager {
  protected axiosInstance: axios.AxiosInstance;
  protected requests: { [requestId: string]: { request: Promise<any>, cancelSource: axios.CancelTokenSource } };

  constructor(config: axios.AxiosRequestConfig) {
    this.axiosInstance = axios.create(config);
    this.requests = {};
  }

  protected sendRequest(requestConfig): Deferred<any> {
    const deferred = new Deferred(); // 创建 Deferred 对象

    const cancelSource = axios.CancelToken.source();
    requestConfig.cancelToken = cancelSource.token;

    const request = this.axiosInstance(requestConfig)
      .then(response => {
        // 数据成功返回后的再处理
        // 这里你可以添加一些处理逻辑
        deferred.resolve(response.data); // 解决 Deferred 对象的 Promise
        return response.data; // 返回响应数据
      })
      .catch(error => {
        // 错误返回后的再处理
        // 这里你可以添加一些处理逻辑
        deferred.reject(error); // 拒绝 Deferred 对象的 Promise
        return Promise.reject(error);
      });

    deferred.cancel = () => {
      cancelSource.cancel('Request canceled');
      delete this.requests[deferred.requestId];
    };

    this.requests[deferred.requestId] = {
      request,
      cancelSource,
    };

    return deferred; // 返回 Deferred 对象
  }

  // 其他方法...
}

export default AxiosManager;





// 导出各个功能类的实例
export const downloadManager = new DownloadManager({}); // 可根据需要初始化配置
export const uploadManager = new UploadManager({}); // 可根据需要初始化配置
export const pollingManager = new PollingManager({}); // 可根据需要初始化配置
