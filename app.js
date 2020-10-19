const API_KEY = '37b7623c-c665-4cd7-b09c-422c6859cd77'

const SYMBOL_URL = 'https://www.dictionaryapi.com/api/v3/references/sd2/json/test?key=37b7623c-c665-4cd7-b09c-422c6859cd77'

let wordList = document.getElementById('wordList');
let search = document.getElementById('search');
let words = [];


search.addEventListener('click', (getWord) => {
    let searchString = search.target.value.toLowerCase();

    let filteredWords = words.filter((word) => {
        return (
            words.toLowerCase().includes(searchString)
        )})
    
    displayWords(filteredWords)
        })


const getWord = async () => {
    try {
        let response = await axios.get('https://www.dictionaryapi.com/api/v3/references/sd2/json/?key=37b7623c-c665-4cd7-b09c-422c6859cd77')
    let words = await response.data

displayWords(words)
    }
    catch (error){
        console.log(error)
       
    }
}
let displayWords= (words) => {
    const htmlString = words
        .map((word) => {
            return `
<li class="word">
                <h2>${word}</h2>
                <p>${word}</p>
                <img src="${word}"></img>
            </li>
        `;
        })
        .join('');
        wordList.innerHTML = htmlString;
};
window.onload = getWord

