import Axios from "axios";

const api = Axios.create({
    baseURL: "https://my-json-server.typicode.com/arios968/api-preguntass/db"
})

export const getQuestions = async () => {
    let res = await api.get()
    return res.data
}
