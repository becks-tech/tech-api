let url = 'https://techy-api.vercel.app/api/text'
const num = [0,1,2,3,4,5,6,7,8,9]
const adviceNum = document.querySelector("")
document.querySelector('button').addEventListener('click', () =>{
    console.log('About to fetch')
    fetch(url).then((response) => {
        console.log(response)
        return response.text();
    })
    .then((data) => {
        console.log(data)
        document.querySelector('.par').innerHTML = data;
    })
    console.log('Getting random number now...')
    randNum = ''
    for (let i=0;i<4; i++){
        randNum += num[getRandomNumber()];
    }
    adviceNum.textContent
}
})
function getRandomNumber(){
    return Math.floor(Math.random() * 4000);
}


