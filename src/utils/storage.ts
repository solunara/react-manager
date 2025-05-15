const TOKEN_NAME = "HLL_TOKEN"

export const SET_TOKEN = (token: string) => {
  localStorage.setItem(TOKEN_NAME, token)
}

export const GET_TOKEN = () => {
  return localStorage.getItem(TOKEN_NAME)
}

export const REMOVE_TOKEN = () => {
  localStorage.removeItem(TOKEN_NAME)
}
