let url = 'https://techy-api.vercel.app/api/text'
const num = [0,1,2,3,4,5,6,7,8,9]
const quoteNum = document.querySelector("#quoteNum")

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
    let randNum = '';
    for (let i=0;i<3; i++){
        randNum += num[getRandomNumber()];
        
    }
    console.log(randNum)
    quoteNum.textContent = "QUOTE #"+randNum;
    
});
function getRandomNumber(){
    return Math.floor(Math.random() * num.length);
}


