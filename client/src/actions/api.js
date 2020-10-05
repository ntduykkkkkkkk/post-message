import axios from 'axios';

const baseUrl = "http://localhost:4000/api/v1/"

export default {
    postMessage(url = baseUrl + 'postMessage/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            delete: id => axios.delete(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, newRecord) => axios.put(url + id, newRecord)
        }
    }
}