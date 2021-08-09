import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "529b037a-4944-4887-8582-929139b7810c"
  }
})

export const getUsersAPI = async (currentPage, usersOnPage) => {
  return (await instance.get(`users?page=${currentPage}&count=${usersOnPage}`)).data
}

export const toggleFollowAPI = async (userId, followed) => {
  const followEndPoint = `follow/${userId}`
  const response = await (followed ? instance.delete(followEndPoint) : instance.post(followEndPoint, {}))
  return response.data.resultCode === 0
}

export const authAPI = async () => {
  const authEndPoint = `auth/me`
  return (await instance.get(authEndPoint)).data
}

export const userAPI = async (id) => {
  const authEndPoint =`profile/${id}`
  return (await instance.get(authEndPoint)).data
}

export const profileAPI = async (id) => {
  const profileEndPoint = `profile/${id}`
  const statusEndPoint = `profile/status/${id}`
  return Promise.all([(await instance.get(profileEndPoint)).data,
                      (await instance.get(statusEndPoint)).data])
}

export const setStatusAPI = async (status) => {
  const statusEndPoint = `profile/status`
  return (await instance.put(statusEndPoint, {status})).data.resultCode === 0
}

export const setStatsAPI = async (stats) => {
  const statsEndPoint = `profile`
  return (await instance.put(statsEndPoint, stats)).data.resultCode === 0
}

export const setLoginAPI = async (payload) => {
  const statsEndPoint = `auth/login`
  return (await instance.post(statsEndPoint, payload)).data
}

export const setLogoutAPI = async () => {
  const statsEndPoint = `auth/login`
  return (await instance.delete(statsEndPoint)).data.resultCode === 0
}

export const putNewProfilePhotoAPI = async (photo) => {
  const statsEndPoint = `profile/photo`
  return (await instance.put(statsEndPoint, photo, { headers: {"Content-Type": "multipart/form-data"} })).data
}

