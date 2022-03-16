const input = document.querySelector('#idName')
const button = document.querySelector('#confirm')

const addConviviality = (data, url) => {
  const request = new XMLHttpRequest()
  request.open('POST', url, true)
  request.setRequestHeader('Content-type', 'application/json')
  request.send(JSON.stringify(data))

  request.onload = function () {
    console.log(this.responseText)
  }

  return request.responseText
}

button.addEventListener('click', function (event) {
  event.preventDefault()
  const data = input.value

  const url = 'https://convite-casamento-rr.herokuapp.com/convites'

  const body = {
    name: data
  }

  addConviviality(body, url)
})
