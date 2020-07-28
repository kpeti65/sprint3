function calcAmount() {
    let price = 1000; /* felvettem egy változót mennyi a darab ár*/
    let amountInput = document.querySelector("input[name='amount-input']"); /* felvettem egy változót ami rámutat az input mezőre ahol a darab szám van*/
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber; /* egy sorban lévő if használata */
    
    showSumPrice(price, amountNumber);
}

function showSumPrice(price = 1000, amountNumber = 1) {
    amountNumber = amountNumber || 0;
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhat!");
    } else if (amountNumber < 1) {
        alert("Minimum 1db terméket kell vásárolnia");
    } else {     
        let amount = amountNumber * price; /* darabszám szorozva */
        showAmount.innerHTML = amount; /* itt adom meg, hogy mi legyen kiíratva. Az innenHTML elemmel a nullát tudjuk változtatni */
        /* alert("Fizetendő: " + amount + "Ft"); /* kiíratás*/
    }

}

/* 4 > 2 || 3 > 14
  4 > 2 && 3 > 5
  4 > 2 && 3 > 1
  3 !== 3
  */


