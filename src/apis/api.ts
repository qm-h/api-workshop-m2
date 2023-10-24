import axios from "axios";


const api = {
    get: (url: string, option?: {
        headers?: {
            'X-RapidAPI-Key': string,
            'X-RapidAPI-Host': string
        },
        params?: any
    }): Promise<any> => axios.get(url, {
        method: 'GET',
        headers: option?.headers,
        params: option?.params
    }).then(r => {
        return r.data
    }).catch(e => {
        console.log(e)
    }),
    post: (url: string, data: any) =>
        axios.post(url, data).then(r => {
            return r.data
        }).catch(e => {
            console.log(e)
        })
    ,
    put: (url: string, data: any) =>
        axios.put(url, data).then(r => {
            return r.data
        }).catch(e => {
            console.log(e)
        })
}

export default api;