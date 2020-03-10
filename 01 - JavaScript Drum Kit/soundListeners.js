// Keypress (a->l) and mouse press listeners
function keyPressListener(keyEls) {
    keysArr = []
    keyEls.forEach( (keyEl)=> { 
        dataKey = keyEl.getAttribute('data-key')
        keysArr.push(parseInt(dataKey,10))
    })

    document.addEventListener("keyup", event => {
        console.log(event.keyCode)
        if ( keysArr.includes(event.keyCode) ) {
            key = document.querySelector(`div[data-key="${event.keyCode}"]`)
            keyHighlight(key)
            playAudio(key)
        }
    })
}
function mousePressListener(keyEls) {
    keyEls.forEach( (key) => {
        key.addEventListener('click', event => {
            keyHighlight(key)
            playAudio(key)
        })
    })
}

// Define highlighting / sound actions
function keyHighlight(el) {
    el.classList.toggle('playing')
    setTimeout( () => el.classList.toggle('playing'), 200)
}
function playAudio(el) {
    audioEl = document.querySelector(`audio[data-key="${el.getAttribute("data-key")}"]`)
    console.log(audioEl)
    audioEl.play()
}

// Initialize Listeners
function initListeners(){
    keyEls = document.querySelectorAll('.key')

    keyPressListener(keyEls)
    mousePressListener(keyEls)
}
initListeners()