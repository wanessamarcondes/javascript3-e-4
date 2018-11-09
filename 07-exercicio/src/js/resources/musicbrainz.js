import axios from "axios"

function musicbrainzArtistSearch(search) {
    return new Promise(function (resolve, reject) {
        axios.get(`http://musicbrainz.org/ws/2/artist/?query=${search}&fmt=json`)
        .then(function (response) {
            const artistSearchResult = response.data.artists[0]
            if (musicbrainzArtistSearch) {
                resolve({
                    name: artistSearchResult.name,
                    lifeSpan: `${artistSearchResult["life-span"].begin} - ${artistSearchResult["life-span"].ended ? artistSearchResult["life-span"].end : "present"}`, 
                    area: artistSearchResult.area ? artistSearchResult.area.name : "" ,
                })
            } else {
                reject("Nenhum resultado encontrado")
            }
        })
        .catch(function (error) {
            reject(error)
        });
    })
}

export default musicbrainzArtistSearch