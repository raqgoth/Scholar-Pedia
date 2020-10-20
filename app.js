const API_KEY = '37b7623c-c665-4cd7-b09c-422c6859cd77'

const WORD_URL = (`https://www.dictionaryapi.com/api/v3/references/sd2/json/test?key=37b7623c-c665-4cd7-b09c-422c6859cd77`)
const SYN_URL = (`https://dictionaryapi.com/api/v3/references/thesaurus/json/test?key=b7b8c718-bbf6-49f6-a5f2-0e8a2a8f1c6b`)

let buildResult = document.querySelector('.dictionary')
let searchInput = document.getElementById('search-input')
let searchButton = document.getElementById('search-button')
let displayWord = document.querySelector('.word-search')
let synonim = document.querySelector('.synonim')
let synStuff = ""
let synButton = document.getElementById('synSearch')
console.log (searchInput, searchButton)
let words = document.querySelector('.short-def')
let searchWord = ""
let wordStuff = ""
let clearSearchButton = document.getElementById('clearSearch')

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
                wordStuff.innerHtml = response.data[0].shortdef
                let dictionaryDiv = document.querySelector('.dictionary')
                dictionaryDiv.textContent = wordStuff
                console.log(response.data[[0]].shortdef)
                words.innerHTML = `${searchWord}`
                displayWord.innerHTML = (response.data[[0]].shortdef)
                

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

clearSearchButton.addEventListener('click', (event) => {
searchInput.value = ''
searchWord = ''
displayWord.innerHTML = ''
words.innerHTML = ''
synonim.innerHTML = ''
})


synButton.addEventListener('click', (event) => {
    event.preventDefault()

    const getSyn = async () => {
        try {
            axios.get(`https://dictionaryapi.com/api/v3/references/thesaurus/json/${searchWord}?key=b7b8c718-bbf6-49f6-a5f2-0e8a2a8f1c6b`)
            .then((response)=>{
             
                searchInput.addEventListener('change', function(event) {
                    synStuff += event.syns.value
                    console.log(synStuff)
                 } )}
            )}
         catch (error) {
             console.log(error)
        } 
       
    getSyn()

}}
)
