const calculate = document.getElementById('calculate');
function calculateAge() {
    const birthYear = document.getElementById('birthYear').value;
    const currentDate = new Date().getFullYear();
    const birthYearYear = new Date(birthYear).getFullYear();
    const age = currentDate - birthYearYear;
    const yourAge = document.getElementById('yourAge');
    yourAge.innerText = `Your Age is ${age}!!!`

}
calculate.addEventListener('click', calculateAge);