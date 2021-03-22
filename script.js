const $container = document.getElementById('container')
const $display = document.getElementById('display')

const listOfDescriptions = [
    `This is description 1.`,
    `This is description 2.`,
    `This is description 3.`,
    `This is description 4.`,
    `This is description 5.`,
    `This is description 6.`,
    `This is description 7.`,
    `This is description 8.`,
    `This is description 9.`,
    `This is description 10.`,
    `This is description 11.`,
    `This is description 12.`
 

  
]

$container.addEventListener('click', function (event) {
    $display.textContent = listOfDescriptions[event.target.textContent[10] - 1]
})


function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }