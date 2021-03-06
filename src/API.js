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

export const userAPI = async (userId) => {
  const authEndPoint =`profile/${userId}`
  return (await instance.get(authEndPoint)).data
}

export const profileAPI = async (userId) => {
  const profileEndPoint = `profile/${userId}`
  const statusEndPoint = `profile/status/${userId}`
  return Promise.all([(await instance.get(profileEndPoint)).data,
                      (await instance.get(statusEndPoint)).data,
                      ])
}

export const getFollowAPI = async (userId) => {
  const followEndPoint = `follow/${userId}`
  return (await instance.get(followEndPoint)).data
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

export const getCaptchaAPI = async () => {
  const captchaEndPoint = `security/get-captcha-url`
  return (await instance.get(captchaEndPoint)).data.url
}

export const putDialogAPI = async (userId) => {
  const dialogEndPoint = `dialogs/${userId}`
  return (await instance.put(dialogEndPoint)).data
}

export const getDialogsAPI = async () => {
  const dialogEndPoint = `dialogs`
  return (await instance.get(dialogEndPoint)).data
}

export const getMessageListAPI = async (userId) => {
  const getMessageListEndPoint = `dialogs/${userId}/messages`
  return (await instance.get(getMessageListEndPoint)).data
}

export const sendMessageAPI = async (userId, message) => {
  const messageEndPoint = `dialogs/${userId}/messages`
  return (await instance.post(messageEndPoint, {body: message})).data
}
