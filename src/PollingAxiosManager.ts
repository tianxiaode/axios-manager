import {AxiosManager, AxiosManagerConfig, AxiosManagerRequestConfig}  from './AxiosManager'
import Deferred from './Deferred';

export interface PollingAxiosRequestConfig extends AxiosManagerRequestConfig {
  pollInterval: number;
  pollMaxCount: number;
  isLongPolling: boolean;  
}

export class PollingAxiosManager extends AxiosManager {

    constructor(config: AxiosManagerConfig){
        super(config);        
    }

    protected getDeferred<T>(): Deferred<T> {
        const deferred = new Deferred<T>();
        // deferred.stop = () => {
        //     this.stopPolling(deferred);
        // };

        // deferred.resume = ()=> {
        //     this.resumePolling(deferred);
        // };
        return deferred;
    }

    private stopPolling(deferred: Deferred<any>) {
        if (deferred.requestId) {
            clearInterval(deferred.requestId);
        }
    }

    private resumePolling(deferred: Deferred<any>) {
        if (deferred.requestId) {
            clearInterval(deferred.requestId);
        }
        this.startPolling(deferred);
    }

    private startPolling(deferred: Deferred<any>) { 
    }
}


export const createPollingAxiosManager = (config: any) => {
  return new PollingAxiosManager(config)
}
