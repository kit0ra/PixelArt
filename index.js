const board = document.querySelector('.board')

const generateButton = document.querySelector('.generate')
const clearButton = document.querySelector('.clear')

const heightSlider = document.querySelector('#height')
const heightValue = document.querySelector('#height-value')

const widthSlider = document.querySelector('#width')
const widthValue = document.querySelector('#width-value')

function updateHeightValue() {
  const heightSliderValue = document.querySelector('#height').value
  console.log(heightSliderValue)
  heightValue.innerHTML = heightSliderValue
}

heightSlider.addEventListener('input', updateHeightValue)

function updateWdithValue() {
  const widthSliderValue = document.querySelector('#width').value
  console.log(widthSliderValue)
  widthValue.innerHTML = widthSliderValue
}

widthSlider.addEventListener('input', updateWdithValue)

function ShowWidthValue() {
  const widthValue = document.querySelector('#width-value')
  const width = document.querySelector('#width').value
  console.log(width)
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

const eraseButton = document.querySelector('.erase')
eraseButton.addEventListener('click', function () {
  color.value = '#fbfef9'
})
