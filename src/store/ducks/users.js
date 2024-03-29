// types
const namespace = 'add-user';
export const Types = {
  ADD_USER_REQUEST: `${namespace}/request`,
  ADD_USER_ERROR: `${namespace}/error`,
  ADD_USER_SUCCESS: `${namespace}/success`,
  REMOVE_USER: `${namespace}/remove`,
};

// reducers
const initialState = {
  loading: false,
  error: null,
  data: [],
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case Types.ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [
          ...state.data,
          action.payload.data,
        ],
      };

    case Types.ADD_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case Types.REMOVE_USER:
      return {
        ...state,
        data: state.data.filter(user => user.id !== action.payload.id),
      };

    default:
      return state;
  }
}

// actions
export const Creators = {
  addUserRequest: (username, position) => ({
    type: Types.ADD_USER_REQUEST,
    payload: { username, position },
  }),
  addUserSuccess: data => ({
    type: Types.ADD_USER_SUCCESS,
    payload: { data },
  }),
  addUserError: error => ({
    type: Types.ADD_USER_ERROR,
    payload: { error },
  }),
  removeUser: id => ({
    type: Types.REMOVE_USER,
    payload: { id },
  }),
};
