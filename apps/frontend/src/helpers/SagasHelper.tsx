import { call, put } from 'redux-saga/effects';

export function* defaultGet(actions: any, api: any, data = null): any {
  try {
    yield put(actions.getLoading());
    const response = yield call(() => api.get(data));

    if (response.status === 200) {
      yield put(actions.getSuccess(response.data));
    } else {
      yield put(actions.getError(response));
    }
  } catch (err: any) {
    yield put(actions.getError(err.message));
  }
}

export function* defaultPost(actions: any, api: any, request: any): any {
  try {
    yield put(actions.postWaiting());
    const response = yield call(() => api.post(request));

    if ([200, 201].includes(response.status)) {
      yield put(actions.postSuccess(response.data));
    } else {
      yield put(actions.postError(response));
    }
  } catch (err: any) {
    yield put(actions.postError(err.message));
  }
}

export function* defaultPut(actions: any, api: any, request: any): any {
  try {
    yield put(actions.putWaiting());
    const response = yield call(() => api.put(request));

    if ([200, 204].includes(response.status)) {
      yield put(actions.putSuccess(response.data));
    } else {
      yield put(actions.putError(response));
    }
  } catch (err: any) {
    yield put(actions.putError(err.message));
  }
}
