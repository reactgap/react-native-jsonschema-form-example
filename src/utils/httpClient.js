// @flow

import { Platform } from 'react-native'
import axios from 'axios'
import * as config from './config'

let appAuthToken: string | null = null

const setAppAuthToken = (token: string | null) => {
  appAuthToken = token
}

const app = axios.create({
  baseURL: config.host.rootApi,
  headers: {
    crossDomain: true,
    'Content-Type': 'application/json',
    'X-Mobile-App': Platform.OS
  },
  transformRequest: [
    (data, headers) => {
      headers.Authorization = `Bearer ${appAuthToken || ''}`

      if (headers['Content-Type'] !== 'application/json') {
        return data
      }

      return JSON.stringify(data)
    }
  ]
})

export default {
  app
}
