const API_KEY = '37b7623c-c665-4cd7-b09c-422c6859cd77'

const WORD_URL = 'https://www.dictionaryapi.com/api/v3/references/sd2/json/test?key=37b7623c-c665-4cd7-b09c-422c6859cd77'

let wordList = document.getElementById('wordList')
let dogsDiv = document.querySelector('dogs')
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
            await axios.get(`https://www.dictionaryapi.com/api/v3/references/sd2/json/${searchWord}?key=37b7623c-c665-4cd7-b09c-422c6859cd77`)
            .then(response => {
                ("second")
            })
            console.log(words)
            console.log(Object.values(response.data.target.value))
            let resultWords = Object.values(response.data.target.value)
            for (let i=0; i<resultWords.length; i++){
                
        }
        catch (error){
            console.log(error)
       
        }
    }
    getWord()
})

