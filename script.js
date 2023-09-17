let control = document.body.getElementsByClassName('video-stream')
for (let i = 0; i < control.length; i++) {
    setInterval(() => {control[i].setAttribute('controls', 'controls')}, 10)
}

let overlay = document.body.getElementsByTagName('ytd-reel-player-header-renderer')
for (let j = 0; j < overlay.length; j++) {
    overlay[j].style.paddingBottom = '80px'
}