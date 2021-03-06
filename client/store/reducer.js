const TOKEN = 'token'

const SET_AUTH = 'SET_AUTH'

//action creator

const setAuth = auth => ({type: SET_AUTH, auth})

//thunk creator

export const me = () => async dispatch => {
  const token = window.localStorage.getItem(TOKEN)
  if(token) {
    const res = await axios.get('/auth/me', {
      headers: {
        authorization: token
      }
    })
    return dispatch(setAuth(res.data))
  }
}

export const authenticate = (username, password, method) => async dispatch => {
  try {
    const res = await axios.post(`/auth/${method}`, {username, password})
    window.localStorage.setItem(TOKEN, res.data.token)
    dispatch(me())
  } catch (authError) {
    return dispatch(setAuth({error: authError}))
  }
}

export const logout = () => {
  window.localStorage.removeItem(TOEKN)
  history.push('/login')
  return {
    type: SET_AUTH,
    auth: {}
  }
}

//reducer
export default function (state = {}, action) {
  switch(action.type) {
    case SET_AUTH: 
      return action.auth
    default:
    return state
  }
  }