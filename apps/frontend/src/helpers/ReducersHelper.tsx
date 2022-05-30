export const defaultGet = (initialState: any, state: any, action: any, types: any) => {
  switch (action.type) {
    case types.GET:
      return {
        loading: true,
        payload: initialState.payload,
        error: null,
      };
    case types.GET_SUCCESS:
      return {
        loading: false,
        payload: action.payload,
        error: null,
      };
    case types.GET_ERROR:
      return {
        loading: false,
        error: action.error,
        payload: initialState.payload,
      };
    default:
      return state;
  }
};

export const defaultPost = (initialState: any, state: any, action: any, types: any) => {
  switch (action.type) {
    case types.POST:
      return {
        waiting: true,
        request: initialState.request,
        response: initialState.response,
        error: null,
      };
    case types.POST_SUCCESS:
      return {
        waiting: false,
        response: action.response,
        error: null,
      };
    case types.POST_ERROR:
      return {
        waiting: false,
        error: action.error,
        response: {},
      };
    default:
      return state;
  }
};

export const defaultPut = (initialState: any, state: any, action: any, types: any) => {
  switch (action.type) {
    case types.PUT:
      return {
        waiting: true,
        request: initialState.request,
        response: initialState.response,
        error: null,
      };
    case types.PUT_SUCCESS:
      return {
        waiting: false,
        response: action.response,
        error: null,
      };
    case types.PUT_ERROR:
      return {
        waiting: false,
        error: action.error,
        response: {},
      };
    default:
      return state;
  }
};