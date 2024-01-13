import axios from "axios"

const apiUrl = "https://www.omdbapi.com/?i=tt3896198&apikey=fbe7bfa5&type=movie&t="

export const fethMovie =  (title) =>{

    // return axios.get(apiUrl + title || "Iron Man")

    try {

        return axios.get(apiUrl + title || "Iron MAn")

        
    } catch (error) {

        console.error(error)
        
    }

   

}