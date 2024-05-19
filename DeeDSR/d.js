const handle = document.querySelectorAll('.handle')
const circle = document.querySelectorAll('.handle-circle')
const box = document.querySelectorAll('.box')
const p1 = document.querySelectorAll('.p1')
const handleCircle = document.querySelectorAll('.handle-circle')
let isMoving = undefined
let width1 = box[0].offsetWidth
let width2 = box[3].offsetWidth

for (let i = 0; i < handle.length; i++) {
  box[i].addEventListener('mousedown', function (e) {
    if (i <= 2) {
      move1(e.clientX, i)
    } else {
      move2(e.clientX, i)
    }
    isMoving = true
  })
  box[i].addEventListener('mousemove', function (e) {
    if (isMoving) {
      i <= 2 ? move1(e.clientX, i) : move2(e.clientX, i)
    }
  })

  box[i].addEventListener('mouseup', function () {
    isMoving = false
    handleCircle[i].style.borderWidth = '2px'
  })
  circle[i].addEventListener('mousedown', function () {
    handleCircle[i].style.borderWidth = '4px'
    isMoving = true
  })
  box[i].addEventListener('dragstart', function () {
    return false
  })
}

function move1 (x, i) {
  x = (x - 222) * 100 / width1 + '%'
  handle[i].style.left = x
  p1[i].style.width = x
}

function move2 (x, i) {
  if (x >= 785) {
    x = x - 785
  } else {
    x = x - 222
  }
  x = x * 100 / width2 + '%'
  handle[i].style.left = x
  p1[i].style.width = x
}