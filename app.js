const API_KEY = '37b7623c-c665-4cd7-b09c-422c6859cd77'

const SYMBOL_URL = 'https://www.dictionaryapi.com/api/v3/references/sd2/json/test?key=37b7623c-c665-4cd7-b09c-422c6859cd77'

let wordList = document.getElementById('wordList');
let search = document.getElementById('search');
let words = [];


search.addEventListener('click', (getWord) => {
    let searchString = search.target.value.toLowerCase();

const getWord = async () => {
    try {
        let response = await axios.get('https://www.dictionaryapi.com/api/v3/references/sd2/json/?key=37b7623c-c665-4cd7-b09c-422c6859cd77')
    let words = await response.data
    }
    catch (error){
        console.log(error)
       
    }
}
}
)
       

getWord()

