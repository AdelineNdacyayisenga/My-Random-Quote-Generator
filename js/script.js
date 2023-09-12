/******************************************
@author Adeline Ndacyayisenga
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * Stores random quotes, authors, sources, years 
***/

let quotes = [
  {
    quote: "Kindness is one thing you can't give away. It always comes back.",
    source: "George Skolsky"
  },
  {
    quote: "Fight for the things that you care about, but do it in a way that will lead others to join you.",
    source: "Ruth Bader Ginsburg"
  },
  {
    quote: "Do to others whatever you would like them to do to you.",
    source: "Jesus Christ",
    citation: "Bible"
  },
  {
    quote: "The single story creates stereotypes, and the problem with stereotypes is not that they are untrue, but that they are incomplete. They make one story become the only story.",
    source: "Chimamanda Ngozi Adichie",
    citation: "TED",
    year: 2009
  },
  {
    quote: "Trouble knowed at the door, but hearing laughter, hurried away.",
    source: "Benjamin Franklin",
    year: 2023
  },
  {
    quote: "Ooops! Sorry I didn't respond to your text. I answered it in my head, and thought it was in real life.",
    source: "Unknown Author",
    citation: "NoSolomon.com",
    year: 2019
  },
  {
    quote: "Did you know 'DIET' stands for: DID I EAT THAT?",
    source: "Elif Bilgin",
    citation: "Pinterest"
  },
  {
    quote: "Where nature blooms so does hope",
    source: "Lady Bird Johnson",
    citation: "RD.com",
    year: 2023
  }
];

/**
 * Returns a random quote between 0 and the last index of the array
 *  
 * @return the random quote object
*/

function getRandomQuote () {
  let random = Math.floor(Math.random() * quotes.length);
  console.log(random);
  return quotes[random];
}

/**
 * uses the getRandomQuote() returned object to find quote details and prints that on the web
 * 
 * @returns html string with quote, source, citation, and year
*/


function printQuote () {
  let randomQuoteObject = getRandomQuote();
  console.log(randomQuoteObject);
  let html = `
  <p class="quote"> ${randomQuoteObject.quote} </p>
  <p class="source"> ${randomQuoteObject.source}
  `;
  if (randomQuoteObject.citation) {
    html += `<span class="citation"> ${randomQuoteObject.citation} </span>`;
  }
  if (randomQuoteObject.year) {
    html += `<span class="year"> ${randomQuoteObject.year} </span>`
  }
  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html;
  return html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
