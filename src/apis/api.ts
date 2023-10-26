import axios from 'axios'

const api = {
  get: async (url: string, option?: {
    headers?: {
      'X-RapidAPI-Key': string
      'X-RapidAPI-Host': string
    }
    params?: any
  }): Promise<any> => await axios.get(url, {
    method: 'GET',
    headers: option?.headers,
    params: option?.params
  }).then(r => {
    return r.data
  }).catch(e => {
    console.log(e)
  }),
  post: async (url: string, data: any) =>
    await axios.post(url, data).then(r => {
      return r.data
    }).catch(e => {
      console.log(e)
    }),
  put: async (url: string, data: any) =>
    await axios.put(url, data).then(r => {
      return r.data
    }).catch(e => {
      console.log(e)
    })
}

export default api
