import "../styles/main.scss"

import googleImageSearch from "./resources/google"

import musicbrainzArtistSearch from "./resources/musicbrainz"

// 

const form = document.querySelector("#search form")
const input = form.querySelector("input")
const bg = document.getElementById("bg")
const content = document.getElementById("content")

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const query = input.value
    content.innerHTML = "<p>carregando...</p>"
    bg.style.opacity = 0
    
    musicbrainzArtistSearch(query)
    .then(function (mbData) {
        googleImageSearch(mbData.name)
        .then(function (gData) {
            bg.src = gData

            bg.onload = function () {
                bg.style.opacity = 1
                
                content.innerHTML = ""
                content.style.height = 0
                const h1 = document.createElement("h1")
                h1.textContent = mbData.name
                const h3 = document.createElement("h3")
                h3.textContent = mbData.lifeSpan
                const p = document.createElement("p")
                p.textContent = mbData.area
                content.appendChild(h1)
                content.appendChild(h3)
                content.appendChild(p)
                content.style.height = h1.offsetHeight + h3.offsetHeight + p.offsetHeight + 80 + "px"
            }
        })
        .catch(function (error) {
            console.error("google", error)
            const errorMessage = error === "Nenhum resultado encontrado" ? error : "Erro de conexão" 
            content.innerHTML = `<p>${errorMessage}</p>`
        })
    })
    .catch(function (error){
        console.log(error)
        errorMessage = error === "Nenhum resultado encontrado" ? error : "Erro de conexão"
        content.innerHTML = `<p>${errorMessage}</p>`
        })
})