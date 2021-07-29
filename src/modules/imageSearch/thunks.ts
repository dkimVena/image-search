import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { ImageAction } from './types';
import { getImages } from '../../api/imageSearch';
import { getImageAsync } from './actions';

export function getImageThunk(search: string): ThunkAction<void, RootState, null, ImageAction> {
  return async dispatch => {
    const { request, success, failure } = getImageAsync;
    dispatch(request());
    try {
      const images = await getImages(search);
      dispatch(success(images));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}