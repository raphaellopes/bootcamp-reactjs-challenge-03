// types
const namespace = 'add-user';
export const Types = {
  ADD_USER_REQUEST: `${namespace}/request`,
  ADD_USER_ERROR: `${namespace}/error`,
  ADD_USER_SUCCESS: `${namespace}/success`,
};

// reducers
const initialState = {
  loading: false,
  error: null,
  data: [{
    id: 398909,
    name: 'Raphael Lopes',
    username: 'raphaellopes',
    position: {
      latitude: -23.5439948,
      longitude: -46.6065452,
    },
  }],
};

export default function users(state = initialState, action) {
  switch (action.type) {
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
};
