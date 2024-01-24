const board = document.querySelector('.board')

const eraseButton = document.querySelector('.erase')
const paintButton = document.querySelector('.paint')
const generateButton = document.querySelector('.generate')
const clearButton = document.querySelector('.clear')

let lastColor = '#fbfef9'
const color = document.querySelector('#color')

const heightSlider = document.querySelector('#height')
const heightValue = document.querySelector('#height-value')

const widthSlider = document.querySelector('#width')
const widthValue = document.querySelector('#width-value')

let mouseDown = false

function updateHeightValue() {
  const heightSliderValue = document.querySelector('#height').value
  heightValue.innerHTML = heightSliderValue
}

heightSlider.addEventListener('input', updateHeightValue)

function updateWdithValue() {
  const widthSliderValue = document.querySelector('#width').value
  widthValue.innerHTML = widthSliderValue
}

widthSlider.addEventListener('input', updateWdithValue)

function ShowWidthValue() {
  const widthValue = document.querySelector('#width-value')
  const width = document.querySelector('#width').value
  widthValue.innerHTML = width
}

function getTableSize() {
  const height = document.querySelector('#height').value
  const width = document.querySelector('#width').value
  return { height, width }
}

function clearTable() {
  let board = document.querySelector('.board')
  board.innerHTML = ''
}

function drawTable() {
  clearTable()
  const tableSize = getTableSize()
  const { height, width } = tableSize
  for (let i = 0; i < height; i++) {
    const row = document.createElement('tr')
    row.classList.add('row')
    for (let j = 0; j < width; j++) {
      const cell = document.createElement('td')
      cell.classList.add('cell')
      row.appendChild(cell)
    }
    board.appendChild(row)
  }
}

generateButton.addEventListener('click', drawTable)
clearButton.addEventListener('click', clearTable)

board.addEventListener('click', function (e) {
  const el = e.target
  if (el.classList.contains('cell')) {
    el.style.backgroundColor = color.value
  }
})

board.addEventListener('mousedown', function (e) {
  mouseDown = true
})

board.addEventListener('mouseup', function (e) {
  mouseDown = false
})

board.addEventListener('mousemove', function (e) {
  const el = e.target
  if (el.classList.contains('cell') && mouseDown) {
    el.style.backgroundColor = color.value
  }
})

paintButton.addEventListener('click', function () {
  color.value = lastColor
})

eraseButton.addEventListener('click', function () {
  lastColor = color.value
  color.value = '#fbfef9'
})

updateHeightValue()
updateWdithValue()
