const { default: axiosInstance } = require(".");

export const createUser = async (payload) => {
    try {
        const response = await axiosInstance.post(`${process.env.REACT_APP_URL}/user/register`, payload)
        console.log('response',response)
        return response.data
    } catch (error) {
        return error.response.message
    }
}

export const loginUser = async (payload) => {
    try {
        const response = await axiosInstance.post(`${process.env.REACT_APP_URL}/user/login`, payload)
        //console.log('response',response)
        return response.data
    } catch (error) {
        return error.response.message
    }
}

export const currentUser = async (payload) => {
    try {
        const response = await axiosInstance.get(`${process.env.REACT_APP_URL}/user/get-user-by-id`)
    console.log('response',response)
        return response.data
    } catch (error) {
        return error.response.message
    }
}