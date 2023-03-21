const adviceId = document.getElementById('advice_ID');
const advice = document.getElementById('advice_text');
const url = "https://api.adviceslip.com/advice";




document.querySelector('.button').addEventListener('click', () => {
    getAdvice();
    console.log(advice);
});


let  getAdvice = async () => {


    const response = await fetch(url);
    let data = await response.json();

    adviceId.textContent = `ADVICE #${data.slip.id}`;
    
    advice.textContent = `"${data.slip.advice}"`;



}
getAdvice();
