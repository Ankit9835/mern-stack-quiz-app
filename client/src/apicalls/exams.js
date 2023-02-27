import axiosInstance from "."

export const addExam = async (payload) => {
    try {
        const response = await axiosInstance.post(`${process.env.REACT_APP_URL}/exams/add-exams`, payload)
        return response.data
    } catch (error) {
        console.log(error.message)
    }
}

export const listExams = async () => {
    try {
        const response = await axiosInstance.get(`${process.env.REACT_APP_URL}/exams/list-exams`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}