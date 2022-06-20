const humburger1 = document.querySelector(`[js="humburger1"]`)
const humburger2 = document.querySelector(`[js="humburger2"]`)
const main = document.querySelector(`[js="main"]`)
const nav = document.querySelector(`[js="nav"]`)

humburger1.onclick = () => {
   main.dataset.navOpen = false
   nav.dataset.navOpen = false
}

humburger2.onclick = () => {
   main.dataset.navOpen = true
   nav.dataset.navOpen = true
}
