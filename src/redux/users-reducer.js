let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';

let initialState = {
  users: [],
};

const usersReducer = (store = initialState, action) => {

  switch (action.type) {

    case FOLLOW:
      return {
        ...store,
        users: store.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          } 
          return u;
        })
      }

    case UNFOLLOW:
      return {
        ...store,
        users: store.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          } 
          return u;
        })
      }

      case SET_USERS: {
        return {...store, users: [ ...store.users, ...action.users ]}
      }

    default:
      return store;
  }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;