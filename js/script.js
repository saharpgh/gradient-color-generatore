function getRandomColor () {
    const randHex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', 'a', 'b', 'c', 'd', 'e', 'f']

    let temp = ''
    
    temp = temp + randHex[Math.floor(Math.random()*randName.length)]
    temp = temp + randHex[Math.floor(Math.random()*randName.length)]
    temp = temp + randHex[Math.floor(Math.random()*randName.length)]
    temp = temp + randHex[Math.floor(Math.random()*randName.length)]
    temp = temp + randHex[Math.floor(Math.random()*randName.length)]
    temp = temp + randHex[Math.floor(Math.random()*randName.length)]

    return '#' + temp;
}

function generateGradient(isRandom) {
    if(isRandom) {
        colorInputs[0] = getRandomColor ()
        colorInputs[1] = getRandomColor ()
    }
     
    let gradient = 'linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})'
    gradientBox.style.background = gradient;
    console.log(colorInputs[0])
    paragrapgh.value = 'background: ${gradient};';
}

colorInputs.forEach(input  => {
    input.addEventListener("input", () => generateGradient(false));
})

function copycode() {
    navigator.clipboard.writeText(paragrapgh.value);
    copybtn.innerText = "Code Copied";
}

selectMenu.addEventListener("change", () => generateGradient(false))
refreshbtn.addEventListener("click", () => generateGradient(true))
copybtn.addEventListener("click", copycode)

let colorInputs = document.querySelectorAll('.colors input')
let gradientBox = document.querySelector('.gradient-box')
let paragrapgh = document.getElementsByClassName('text-box')[0]
let selectMenu = document.querySelector('.list select')
let refreshbtn = document.querySelector('.refresh')
let copybtn = document.querySelector('.copy')