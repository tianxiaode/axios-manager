AxiosManager 是一个基于 Axios 的 JavaScript 库，用于管理和发送 HTTP 请求。它提供了一种简单而强大的方式来处理网络请求，并提供了许多有用的功能，如全局配置、请求管理和取消。

安装
你可以通过 npm 或 yarn 来安装 AxiosManager：

bash
Copy code
npm install axios axios-manager
或者

bash
Copy code
yarn add axios axios-manager
使用方法
初始化
首先，你需要创建一个 AxiosManager 实例，并可以通过 init 方法进行全局配置：

javascript
Copy code
import { createAxiosManager } from 'axios-manager';

const config = {
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN_HERE'
  },
  // 其他配置...
};

const axiosManager = createAxiosManager(config);
发送请求
一旦你有了 AxiosManager 实例，你可以使用它来发送请求：

javascript
Copy code
const request = axiosManager.sendRequest({
  url: '/resource',
  method: 'get',
  params: {
    key: 'value'
  }
});

request.then(response => {
  console.log('Response:', response);
}).catch(error => {
  console.error('Error:', error);
});
取消请求
你可以取消发送的请求：

javascript
Copy code
const request = axiosManager.sendRequest({
  url: '/resource',
  method: 'get'
});

// 取消请求
request.cancel();
功能
全局配置：使用 init 方法配置全局设置，如基础 URL、请求头等。
发送请求：使用 sendRequest 方法发送请求，并得到一个 Promise 对象以处理响应或错误。
取消请求：每个请求都有自己的 CancelToken，可以随时取消。
重要提示
AxiosManager 是基于 Axios 构建的，因此它继承了 Axios 的所有功能和特性。
请确保在发送请求前先初始化 AxiosManager，并且可以在任何地方使用该实例。
示例
javascript
Copy code
import { createAxiosManager } from 'axios-manager';

const axiosManager = createAxiosManager({
  baseURL: 'https://api.example.com',
  // 其他配置...
});

const request = axiosManager.sendRequest({
  url: '/resource',
  method: 'get'
});

request.then(response => {
  console.log('Response:', response);
}).catch(error => {
  console.error('Error:', error);
});
反馈与贡献
如果你发现了任何 bug，或者有任何建议或意见，请随时提出 issue 或提交 pull request。

许可证
AxiosManager 是开源软件，基于 MIT 许可证发布。