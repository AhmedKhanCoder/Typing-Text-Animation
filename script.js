const SecondText = document.querySelector('.second-text')
const TextFunction = ()=>{
    setTimeout(()=>{
        SecondText.innerHTML="YouTuber"
    },0)

    setTimeout(()=>{
        SecondText.innerHTML="Freelancer"
    },4000)

    setTimeout(()=>{
        SecondText.innerHTML="Web Developer"
    },8000)
}

TextFunction()
setInterval(TextFunction,12000)