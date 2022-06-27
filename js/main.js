document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const stateName = document.querySelector('input').value
    try{
        const response = await fetch(`https://state-capitals-api.herokuapp.com/api/${stateName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.capital
    }catch(error){
        console.log(error)
    }
}