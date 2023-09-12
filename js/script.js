/******************************************
@author Adeline Ndacyayisenga
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/**
 * Stores random quotes, authors, sources, years 
*/

let quotes = [
  {
    quote: "Kindness is one thing you can't give away. It always comes back.",
    source: "George Skolsky",
    tag: "Motivation"
  },
  {
    quote: "Fight for the things that you care about, but do it in a way that will lead others to join you.",
    source: "Ruth Bader Ginsburg",
    tag: "Motivation"
  },
  {
    quote: "Do to others whatever you would like them to do to you.",
    source: "Jesus Christ",
    citation: "Bible",
    tag: "Society"
  },
  {
    quote: "The single story creates stereotypes, and the problem with stereotypes is not that they are untrue, but that they are incomplete. They make one story become the only story.",
    source: "Chimamanda Ngozi Adichie",
    citation: "TED",
    tag: "Society",
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
    tag: "Humor",
    year: 2019
  },
  {
    quote: "Did you know 'DIET' stands for: DID I EAT THAT?",
    source: "Elif Bilgin",
    citation: "Pinterest",
    tag: "Humor"
  },
  {
    quote: "Where nature blooms so does hope",
    source: "Lady Bird Johnson",
    citation: "RD.com",
    tag: "Wellness",
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
  let randomQuoteObject = getRandomQuote(); //calls the getRandomQuote function
  let html = `
  <p class="quote"> ${randomQuoteObject.quote} </p>
  <p class="source"> ${randomQuoteObject.source}
  `;
  if (randomQuoteObject.citation) {
    html += `<span class="citation"> ${randomQuoteObject.citation} </span>`;
  }
  if (randomQuoteObject.tag) {
    html += `<span class="tag"> ${randomQuoteObject.tag} </span>`;
  }
  if (randomQuoteObject.year) {
    html += `<span class="year"> ${randomQuoteObject.year} </span>`
  }
  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html;
  return html;
}

/**
 * The show random quote button loads new quotes
*/
document.getElementById('load-quote').addEventListener("click", printQuote, false);

/**
 * Creates random background color and returns the rgb value of that color
 * Which is then used in the css file, to make sure as a user clicks the button,
 * the background color changes to a random color
 */

function changeBackGround () {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let backGrColor = `rgb(${x}, ${y}, ${z})`;
  console.log(backGrColor);
  document.body.style.background = backGrColor;
}

/**
 * Prints a new quote at regularly after 10 seconds and changes the background
 * color too
 * Using the setInterval() method
 */

setInterval(printQuote, 10000); // 10 sec, 10000 milliseconds
setInterval(changeBackGround, 10000);

