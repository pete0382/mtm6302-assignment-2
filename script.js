const $container = document.getElementById('container')
const $display = document.getElementById('display')

const listOfDescriptions = [
    `“Be yourself CLICK THE IMAGE.”.`,
    `“ so little time. CLICK THE IMAGE”.`,
    `“Be the change CLICK THE IMAGE.”.`,
    `“We accept the love CLICK THE IMAGE.”.`,
    `“Be yourself; CLICK THE IMAGE.”.`,
    `“S so little time CLICK THE IMAGE.”.`,
    `“We accept the love CLICK THE IMAGE.”.`,
    `“Be the change CLICK THE IMAGE.”.`,
    `“We accept the loveCLICK THE IMAGE.”.`,
    `This is description 10.`,
    `This is description 11.`,
    `This is description 12.`
 

  
]

$container.addEventListener('click', function (event) {
    $display.textContent = listOfDescriptions[event.target.textContent[7] - 1]
})


function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }