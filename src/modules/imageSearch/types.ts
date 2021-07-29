import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { ImageInfoModel } from '../../types';

export type ImageAction = ActionType<typeof actions>;

export type ImageState = {
  imageInfo: {
    loading: boolean;
    error: Error | null;
    data: [ImageInfoModel] | null;
  };
};