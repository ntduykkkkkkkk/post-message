import api from './api';

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL'
}

export const fetchAll = () => dispatch => {
    api.postMessage().fetchAll()
        .then(res => {
            console.log(res)
            dispatch({
                type: ACTION_TYPES.FETCH_ALL,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const create = (data, onSuccess) => dispatch => {
    api.postMessage().create(data)
        .then(res => {
            console.log(res)
            dispatch({
                type: ACTION_TYPES.FETCH_ALL,
                payload: res.data
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}