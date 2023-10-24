import axios from "axios";


const api = {
    get: (url: string, params: any): Promise<number> => axios.get(url, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b64edb4d04msh775fcb7d215c3b0p194a23jsne360e80e22d8',
            'X-RapidAPI-Host': 'carbonfootprint1.p.rapidapi.com'
        },
        params
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