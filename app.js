const API_KEY = '37b7623c-c665-4cd7-b09c-422c6859cd77'

const WORD_URL = 'https://www.dictionaryapi.com/api/v3/references/sd2/json/test?key=37b7623c-c665-4cd7-b09c-422c6859cd77'

let buildResult = document.querySelector('.dictionary')
let searchInput = document.getElementById('search-input')
let searchButton = document.getElementById('search-button');
console.log(searchInput, searchButton)
let words = []
let searchWord = ""
searchInput.addEventListener('change', function(event) {
searchWord += event.target.value
console.log(searchWord)
})

searchButton.addEventListener('click', (event) => {
    event.preventDefault()

    const getWord = async () => {
        try {
            const response = await axios.get(`https://www.dictionaryapi.com/api/v3/references/sd2/json/${searchWord}?key=37b7623c-c665-4cd7-b09c-422c6859cd77`)
            buildResult(response.data)
        } catch (error) {
             console.log(error)
        } 
    }
getWord() 

  const buildResult = (data) => {
    const dictionaryDiv = document.querySelector('.dictionary')
    const result = document.createElement('div')
        
    result.forEach(data) 
        let optionElement = document.createElement('option')
        optionElement.innerText = `${taget.value}`
        optionElement.setAttribute('value', symbol.symbol)
        result.appendChild(optionElement)
    }
    
})
  


