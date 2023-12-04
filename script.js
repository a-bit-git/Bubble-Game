let hitrn = 0
function hitandBubble() {
  hitrn = Math.floor(Math.random() * 10)
  // console.log(hitrn)
  document.querySelector("#hitval").textContent = hitrn

  var clutter = ""
  let kt = Math.floor(Math.random() * 56) + 8
  // console.log(kt)
  for (var i = 1; i <= kt; i++) {
    var rn = Math.floor(Math.random() * 10)
    clutter += `<div class="bubble">${rn}</div>`
  }
  clutter += `<div class="bubble">${hitrn}</div>`
  for (var i = 1; i <= (74 - kt); i++) {
    var rn = Math.floor(Math.random() * 10)
    clutter += `<div class="bubble">${rn}</div>`
  }
  document.querySelector('#pbot').innerHTML = clutter
}

// let hitrn = 0
// function newhit(){
//     hitrn = Math.floor(Math.random()*10)
//     console.log(hitrn)
//     document.querySelector("#hitval").textContent = hitrn
// }

let timer = 60
function runtimer() {
  var timerint = setInterval(function() {
    if (timer > 0) {
      timer--
      document.querySelector("#timerval").textContent = timer
    }
    else {
      clearInterval(timerint)
      document.querySelector("#pbot").innerHTML = `<h1 style="color:Gray">GAME OVER</h2>`
    }
  }, 1000)
}

let score = null
function inscore() {
  score += 10
  document.querySelector("#scoreval").textContent = score
}

document.querySelector("#pbot").addEventListener("click",
  function(dets) {
    var clickednum = Number(dets.target.textContent)
    if (clickednum === hitrn) {
      inscore()
      hitandBubble()
      // newhit()
    }
  })
runtimer()
hitandBubble()
// newhit()