let url = 'https://techy-api.vercel.app/api/text'

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
})