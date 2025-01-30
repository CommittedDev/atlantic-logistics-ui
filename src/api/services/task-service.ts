import apiClient from '../api-client';

export const getTasks = async () => {
  try {
    return Promise.resolve(await apiClient.get('https://talking-apps-channels-server.onrender.com/loadNew/top/10'));
  } catch (error) {
    return Promise.reject(error);
  }
};
