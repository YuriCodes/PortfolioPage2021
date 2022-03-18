//Text animation
consoleText(["Hello There.", "I'm Yuri.", "Full-Stack Developer."], 'text', ['#004d4d']);

function consoleText(words, id, colors){
    if(colors === undefined) 
    colors = ['#fff'];
    
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    let  target = document.getElementById(id)

    target.setAttribute('style', 'color:' + colors[0])
    
    window.setInterval(() => {
        if (letterCount === 0 && waiting === false){
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(() => {
                let usedColor = colors.shift();
                colors.push(usedColor)
                let usedWord = words.shift();
                words.push(usedWord)
                x = 1;
                target.setAttribute('style', 'color:' + colors[0])
                letterCount += x;
                waiting = false;
            }, 120)
        } else if (letterCount === words[0].length + 1 && waiting === false){
            waiting = true;
            window.setTimeout(() =>{
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if ( waiting === false){
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 120)

}

//Go to top button:
mybutton = document.getElementById("buttonToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
