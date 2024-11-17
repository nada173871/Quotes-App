var Quotes = [
    {
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author: "― Albert Einstein",
    },
    {
        quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        author: "― Bernard M. Baruch",
    },
    {
        quote: "“So many books, so little time.”",
        author: "― Frank Zappa",
    },
    {
        quote: "“In three words I can sum up everything I've learned about life: it goes on.”",
        author: "― Robert Frost",
    },
    {
        quote: "“Be yourself; everyone else is already taken.”",
        author: "― Oscar Wilde",
    },
];

var NewIndex;
var LastIndex;

var displayedQuotes = [];

function getQuotes() {


    if ( displayedQuotes.length == Quotes.length ){

        displayedQuotes = [];
}



    do {
        NewIndex = Math.floor(Math.random() * Quotes.length)

    } while (NewIndex == LastIndex  || displayedQuotes.includes(NewIndex));

    LastIndex = NewIndex;

    console.log(NewIndex);
    document.getElementById('quote').innerHTML = Quotes[NewIndex].quote;
    document.getElementById('auther').innerHTML = Quotes[NewIndex].author;

}