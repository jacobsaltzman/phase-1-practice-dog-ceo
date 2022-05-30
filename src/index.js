//console.log('%c HI', 'color: firebrick')
// "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener("DOMContentLoaded", (event) =>{
  //console.log("dom loaded!")
  //console.log(event)
  getBreeds()
  getBreedNames()
})

function getBreeds(){
  fetch ("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(resp => {
      //console.log(resp.message)
      const dogImageContainer = document.getElementById("dog-image-container")
      //console.log(dogImageContainer)
      resp.message.forEach((url)=>{
        const img = document.createElement("img")
        img.src = url
        dogImageContainer.append(img)
      }
       )
    })
}


function getBreedNames(){
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(resp => {
      //console.log(resp)
      breeds = Object.keys(resp.message)
      addBreedToDom(breeds)
    })
}
document.addEventListener("click", event => {
  if (event.target.matches("li")){
    event.target.style.color = "green"
  }
})

document.addEventListener("change", event => {
 
  if(event.target.matches("#breed-dropdown")){
    const ul = document.querySelector("#dog-breeds")
    ul.innerHTML = ""
    const filteredBreeds = breeds.filter(breed => breed[0] === event.target.value)
    addBreedToDom(filteredBreeds)
  }
})

function addBreedToDom(breeds){
  const ul = document.querySelector("#dog-breeds")
      breeds.map(breed => {
        const li = document.createElement("li")
        li.textContent = breed
        ul.append(li)
      })
}