const quoteDisplay = document.querySelector('#quote')
const button = document.querySelector('button')

const quotes = [
    'The greatest happiness you can have is knowing that you do not necessarily require happiness.',
    'The true secret of happiness lies in the taking a genuine interest in all the details of daily life.',
    'All happiness or unhappiness solely depends upon the quality of the object to which we are attached by love.',
    'Happiness is not an ideal of reason, but of imagination.',
    'To be without some of the things you want is an indispensable part of happiness.',
    'The secret of happiness is freedom, the secret of freedom is courage.'
]

function showQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length)
    let randomQuote = quotes[randomNumber]
    quoteDisplay.innerHTML = randomQuote
}

button.addEventListener('click', showQuote)
