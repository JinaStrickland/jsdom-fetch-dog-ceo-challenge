document.addEventListener("DOMContentLoaded", (e) => {
    console.log('%c HI', 'color: firebrick')


})

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function imageFetch() {
    fetch(imgUrl)
    .then(res => res.json())
    .then(images => addImages(images))
}
imageFetch()

function addImages(images) {
    let imgs = images.message
    imgs.forEach(img => displayImage(img))
}

function displayImage(img) {
    let theDiv = document.querySelector("div#dog-image-container")
    let image = document.createElement("img")
    image.src = img
    theDiv.append(image)
}

function breedFetch() {
    fetch(breedUrl)
    .then(res => res.json())
    .then(breeds => addBreed(breeds))
}
breedFetch()

function addBreed(breeds) {
    let breedObj = breeds.message
    for(let breed in breedObj) {
        displayBreed(breed)
    }
}

function displayBreed(breed) {
    let theUl = document.querySelector("ul#dog-breeds")
    let theLi = document.createElement("li")
    let theId = document.createAttribute("id") 
    theId = `${breed}`
    theLi.innerText = breed 
    theUl.append(theLi)

    theLi.addEventListener("click", (e) => {
        e.target.style.color = "blue"
    })
}

function dropdown() {
    let id = document.querySelector("select#breed-dropdown")
}

