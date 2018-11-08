import axios from "axios"

let inputArtistSearch = document.getElementById("artistSearch")
let artistSearchResult = document.getElementById("content")

function musicbrainzArtistSearch() {
    axios.get(`http://musicbrainz.org/ws/2/artist/?query=${inputArtistSearch.value}&fmt=json`)
        .then(function (response) {
            inputArtistSearch.addEventListener("submit", function(e){
                
            })
        })
        .catch(function (error) {
            console.log("error", error);
        });
}

export default musicbrainzArtistSearch
