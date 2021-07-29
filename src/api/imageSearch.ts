import axios from 'axios';
import { ImageInfoModel } from '../types';

export async function getImages(search: string) {
  const response = await axios.get<any>(
    `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(search)}`
  );
  return response.data.hits;
}