/* eslint-disable import/prefer-default-export */
import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { message, Spin } from 'antd'
import { defaultConfig } from '../utils/env'

axios.defaults.withCredentials = true
let requestCount = 0
const showLoading = () => new Promise((resolve, reject) => {
  if (requestCount === 0) {
    const dom = document.createElement('div')
    dom.setAttribute('id', 'myLoading')
    dom.setAttribute('class', 'myLoading')
    document.body.appendChild(dom)
    dom.style.opacity = 1
    dom.style.width = '100%'
    dom.style.height = '100%'
    ReactDOM.createRoot(document.getElementById('myLoading')).render(
      <Spin tip="loading..." size="large" />,
    )
  }
  requestCount += 1
  setTimeout(() => {
    resolve()
  }, 300);
})

const hideLoading = () => {
  requestCount -= 1
  if (requestCount === 0) {
    const dom = document.getElementById('myLoading')
    dom.style.opacity = 0
    // setTimeout(() => {
    document.body.removeChild(dom)
    // }, 800);
  }
}
export const Axios = async (method, url, param, config) => {
  await showLoading()
  if (url !== '/login') {
    param.User_Name = sessionStorage.getItem('User_Name')
    param.token = sessionStorage.getItem('token')
  }
  let result
  const requestConfig = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    url: `${defaultConfig.api_url}${url}`,
    ...config,
  }
  if (method === 'get') {
    requestConfig.params = param
  } else {
    requestConfig.data = param
  }
  await axios(requestConfig)
    .then(async (res) => {
      result = res.data
      if (res.data.code === 1) {
        message.success(res.data.msg, 1)
      } else if (res.data.code === 400) {
        await message.warning('請重新登入')
        // eslint-disable-next-line no-restricted-globals
        location.replace('/')
      } else {
        message.error(res.data.msg)
      }
    })
    .catch((error) => {
      result = error
      message.error(error.response.data)
    })
  hideLoading()
  return result
}
