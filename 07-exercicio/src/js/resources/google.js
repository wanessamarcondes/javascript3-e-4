import axios from "axios"

import credentials from "../credentials"

function googleImageSearch(search) {
    return new Promise(function (resolve, reject) {
        axios.get(`https://www.googleapis.com/customsearch/v1?key=${credentials.google.key}&cx=${credentials.google.cx}&q=${search}&searchType=image&imgSize=huge`)
        .then(function (response) {
            const artistSearchResult = response.data.artists[0]
            if (googleImageSearch) {
                resolve(response.data.items[0].link)
            } else {
                reject("Nenhum resultado encontrado")
            }
        })
        .catch(function (error) {
            reject(error)
        });
    })
}

export default googleImageSearch
