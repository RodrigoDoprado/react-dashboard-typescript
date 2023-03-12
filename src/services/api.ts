/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"

export const api = axios.create({
  baseURL: process.env.REACT_APP_API,
})

export const useApi = () => ({
  createUser: async (data: any) => {
    const response = await api.post("/account/create", data)
    return response.data
  },
  passwordrecovery: async (data: any) => {
    const response = await api.post("/account/passwordrecovery", data)
    return response.data
  },
  updateUser: async (data: any, id: any) => {
    const response = await api.post(`/account/up/${id}`, data)
    return response.data
  },
  avatarUser: async (data: any) => {
    const formData = new FormData()
    formData.append("file", data)

    const response = await api.post("/account/avatar", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    return response.data
  },
  getUser: async (token: any) => {
    const response = await api.get("/account/user", {
      headers: { authorization: `Bearer ${token}` },
    })
    return response.data
  },
  signin: async (email: string, password: string) => {
    const response = await api.post("/account/signin", { email, password })
    return response.data
  },
  logout: async () => {
    const response = await api.post("/account/logout")
    return response.data
  },
})
