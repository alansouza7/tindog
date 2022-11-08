import { dogs } from './data.js'
import { Dogs } from './character.js'

const like = document.getElementById('like')
const nope = document.getElementById('nope')
let isLoading = false


const getNewDog = () => {
  const nextDog = dogs.shift()
  return nextDog ? new Dogs(nextDog) : []
}
let dog = getNewDog()



like.addEventListener("click", () => {
  if (!isLoading) {
    if (dogs.length > 0) {
      document.getElementById('like-badge').style.display = "block"
      isLoading = true
      dog = getNewDog()
      setTimeout(() => {
        render()
        isLoading = false
      }, 1000)
    }
  }
})

nope.addEventListener("click", () => {
  if (!isLoading) {
    if (dogs.length > 0) {
      document.getElementById('nope-badge').style.display = "block"
      isLoading = true
      dog = getNewDog()
      setTimeout(() => {
        render()
        isLoading = false
      }, 1000)
    }
  }

})

const render = () => {
  document.getElementById('like-badge').style.display = "none"
  document.getElementById('nope-badge').style.display = "none"
  document.getElementById('main-picture').innerHTML = dog.getDogHtml()
}

render()





