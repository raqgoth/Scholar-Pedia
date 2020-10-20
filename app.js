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
            axios.get(`https://www.dictionaryapi.com/api/v3/references/sd2/json/${searchWord}?key=37b7623c-c665-4cd7-b09c-422c6859cd77`)
            .then((response)=>{
                let wordStuff = response.data[0].shortdef
                let dictionaryDiv = document.querySelector('.dictionary')
                dictionaryDiv.textContent = wordStuff
                console.log(response.data[data[0]].shortdef)

            })
           
        } catch (error) {
             console.log(error)
        } 
    }
    getWord() 
    
    const result = document.createElement('div')
    const buildResult = (data) => {
        return result
  }
    buildResult()   
  
})
