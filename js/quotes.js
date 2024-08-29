const quotes = [
    {
        quote: 'Happiness in this world, when it comes, comes incidentally. Make it the object of pursuit, and it leads us a wild-goose chase, and is never attained.',
        movie: 'The Scarlet Letter',
    },
    {
        quote: 'All sorts of persons, and every individual, has a place to fill in the world, and is important in some respects, whether he chooses to be so or not.',
        movie: 'The Scarlet Letter',
    },
    {
        quote: 'Selfishness is one of the qualities apt to inspire love. This might be thought out at great length.',
        movie: 'The Scarlet Letter',
    },
    {
        quote: 'Dare and the world always yield. If it beats you sometimes, dare it again and again and it will succumb.',
        movie: 'Vanity Fair',
    },
    {
        quote: 'A kind heart is a fountain of gladness, making everything in its vicinity freshen into smiles.',
        movie: 'The Legend of the Sleepy Hollow',
    },
    {
        quote: 'He who loses wealth loses much; he who loses a friend loses more; he who loses courage loses all.',
        movie: 'Don Quixote',
    },
    {
        quote: 'Naked I came into the world, and naked I must go out.',
        movie: 'Don Quixote',
    },
    {
        quote: "One is unworthy of being tolerated if he can't forgive others.",
        movie: 'Fathers and Children',
    },
    {
        quote: 'No other misfortune can be compared with the loss of time.',
        movie: 'Fathers and Children',
    },
    {
        quote: 'The word tomorrow was invented for indecisive people and for children.',
        movie: 'Fathers and Children',
    },
    {
        quote: 'Do not, for one repulse, give up the purpose that you resolved to effect.',
        movie: 'The Tempest',
    },
    {
        quote: "I ran. A grown man running with a swarm of screaming children. But I didn't care. I ran with the wind blowing in my face, and a smile as wide as the Valley of Panjsher on my lips.",
        movie: 'The Kite Runner',
    },
];

const quote = document.querySelector('#quote span:first-child');
const movie = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
movie.innerText = todaysQuote.movie;
