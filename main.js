const quotes = [
    {
       name: 'Zelda Fitzgerald' ,
      quote: 'Nobody has ever measured, even the poets, how much a heart can hold.'
       
    },
    {
        name: 'Lincoln Steffens',
        quote: 'Morality is only moral when it is voluntary.'
       
    },
    {
        name: 'W.Somerset Maugham',
        quote: 'It is a funny thing about life; if you refuse to accept anything but the best, you very often get it'
       
    },
    {
        name: 'Alexandra Stoddard',
        quote: 'The world is extremely interesting to a joyful soul'
       
    },
    {
        name: 'Bertrand Russell',
        quote: 'to be without some things you want is an indispensable part of happiness'
       
    },

];

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);
function displayQuote() {
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.textContent = quotes[number].name;
    quote.textContent = quotes[number].quote;
}
