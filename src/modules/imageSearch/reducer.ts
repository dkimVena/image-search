import { createReducer } from 'typesafe-actions';
import { ImageState, ImageAction } from './types';
import { GET_IMAGE, GET_IMAGE_SUCCESS, GET_IMAGE_ERROR } from './actions';

const initialState: ImageState = {
  imageInfo: {
    loading: false,
    error: null,
    data: null
  }
};

const github = createReducer<ImageState, ImageAction>(initialState, {
  [GET_IMAGE]: state => ({
    ...state,
    imageInfo: {
      loading: true,
      error: null,
      data: null
    }
  }),
  [GET_IMAGE_SUCCESS]: (state, action) => ({
    ...state,
    imageInfo: {
      loading: false,
      error: null,
      data: action.payload
    }
  }),
  [GET_IMAGE_ERROR]: (state, action) => ({
    ...state,
    imageInfo: {
      loading: false,
      error: action.payload,
      data: null
    }
  })
});

export default github;