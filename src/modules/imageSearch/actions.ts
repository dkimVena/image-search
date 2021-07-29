import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { ImageInfoModel } from '../../types';

export const GET_IMAGE = 'imageSearch/GET_IMAGE';
export const GET_IMAGE_SUCCESS = 'imageSearch/GET_IMAGE_SUCCESS';
export const GET_IMAGE_ERROR = 'imageSearch/GET_IMAGE_ERROR';

export const getImageAsync = createAsyncAction(
    GET_IMAGE,
    GET_IMAGE_SUCCESS,
    GET_IMAGE_ERROR
)<undefined, [ImageInfoModel], AxiosError>();