import axios from 'axios';
import { getToken, setToken } from "../utils/auth.js"; // 假设auth.js中有setToken来保存新的token

// 创建 Axios 实例并设置默认的 baseURL
const apiClient = axios.create({
     baseURL: '/api', // 设置为实际的baseURL
});

// 请求拦截器：每次请求附带 token
apiClient.interceptors.request.use(config => {
    config.headers['Authorization'] = `Bearer ${getToken()}`;
    return config;
});

// 响应拦截器：处理 token 刷新机制
apiClient.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;

        // 检查是否为token过期错误，code为2表示需要刷新token
        if (error.response && error.response.data.code === 2 && !originalRequest._retry) {
            originalRequest._retry = true; // 防止多次重试

            // 获取新的 token（假设后端返回在 error.response.data.new_token）
            const newToken = error.response.data.token;
            if (newToken) {
                setToken(newToken); // 更新 token 存储
                apiClient.defaults.headers['Authorization'] = `Bearer ${newToken}`;
                originalRequest.headers['Authorization'] = `Bearer ${newToken}`;

                // 重发原始请求
                return apiClient(originalRequest);
            }
        }

        return Promise.reject(error);
    }
);

export default apiClient;
