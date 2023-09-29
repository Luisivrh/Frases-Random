const apiButton = document.getElementById("new-quote")
const src="https://gist.githubusercontent.com/gejocad/f4914ce6eb4412909e6ebf8e61d6729f/raw/9cee3f9e72a911f3e69d58713821d349f343491b/frases.json";
const apiPhrase = document.getElementById("text")
const apiAuthor = document.getElementById("author")


    function random() {
        
    let ran =  Math.floor((Math.random() * (20 - 0 + 1)) + 0);
    function generateColor(){
        var myRandomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        return myRandomColor; 
    }
    document.querySelector("#quote-box").style.backgroundColor = generateColor();
    document.querySelector("#base").style.backgroundColor = generateColor();
    


    return (fetch(src) 
    .then(res => res.json())
    .then(response => { 
        apiPhrase.innerText = JSON.stringify(response.frases[ran].frase);
        apiAuthor.innerText = `- ${JSON.stringify(response.frases[ran].autor)}`;
        const text = apiPhrase.innerText + " " + apiAuthor.innerText;
        const urlTwi = `https://twitter.com/intent/tweet?text=${text}`
    }))
    .catch(e=> console.error(new Error(e)))
    }
    apiButton.addEventListener('click', random)
    
    
    
