import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "529b037a-4944-4887-8582-929139b7810c"
  }
})

export const getUsersAPI = (currentPage, usersOnPage) => {
  return instance.get(`users?page=${currentPage}&count=${usersOnPage}`)
              .then(r => r.data)
}

export const toggleFollowAPI = (userId, followed) => {
  const followEndPoint = `follow/${userId}`
  const request = followed ? instance.delete(followEndPoint) : instance.post(followEndPoint, {})
  return request.then(r => r.data.resultCode === 0)
}

export const authAPI = () => {
  const authEndPoint = `auth/me`
  return instance.get(authEndPoint).then(r => r.data)
}

export const userAPI = (id) => {
  const authEndPoint =`profile/${id}`
  return instance.get(authEndPoint).then(r => r.data)
}

export const profileAPI = (id) => {
  const profileEndPoint = `profile/${id}`
  const statusEndPoint = `profile/status/${id}`
  return Promise.all([instance.get(profileEndPoint).then(r => r.data),
                      instance.get(statusEndPoint).then(r => r.data)])
}

export const setStatusAPI = (status) => {
  const statusEndPoint = `profile/status`
  return instance.put(statusEndPoint, {status}).then(r => r.data.resultCode === 0)
}

export const setStatsAPI = (stats) => {
  const statsEndPoint = `profile`
  return instance.put(statsEndPoint, stats).then(r => r.data.resultCode === 0)
}

export const setLoginAPI = (payload) => {
  const statsEndPoint = `auth/login`
  return instance.post(statsEndPoint, payload).then(r => r.data.resultCode === 0)
}

export const setLogoutAPI = () => {
  const statsEndPoint = `auth/login`
  return instance.delete(statsEndPoint).then(r => r.data.resultCode === 0)
}

