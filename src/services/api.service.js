import getConfig from 'next/config';
import { fetchWrapper } from 'helpers';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;

export const apiService = {
  getExhibitions,
};

function getExhibitions(page) {
  return fetchWrapper.post(`${baseUrl}/loadlist`, {
    page
  });
}