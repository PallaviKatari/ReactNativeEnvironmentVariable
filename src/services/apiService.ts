import { appConfig } from "../config/appConfig"

export interface User {
  id: number
  name: string
  email: string
}

export const fetchUsers = async (): Promise<User[]> => {

  const response = await fetch(`${appConfig.apiUrl}/users`)

  if (!response.ok) {
    throw new Error("API request failed")
  }

  return response.json()
}