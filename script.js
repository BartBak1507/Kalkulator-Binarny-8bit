const przyciskiA = document.querySelectorAll('[aria-label^="Bit A"]');
const przyciskiB = document.querySelectorAll('[aria-label^="Bit B"]');
const przyciskiS = document.querySelectorAll('[aria-label^="Bit S"]');
const przyciskCout = document.querySelector('[aria-label="Bit przeniesienia Cout"]');

let bajtA = "00000000";
let bajtB = "00000000";

/******************************************************** 
* nazwa funkcji:       zamienBit
* parametry wejściowe: bit - jeden bit 0 albo 1
* wartość zwracana:    zwraca przeciwny bit
* autor:               Bartosz Bak
* ****************************************************/
function zamienBit(bit) {
    if (bit === "0") {
        return "1";
    } else {
        return "0";
    }
}

/******************************************************** 
* nazwa funkcji:       aktualizujBajt
* parametry wejściowe: bajt - liczba binarna, pozycja - numer bitu
* wartość zwracana:    nowy bajt po zmianie bitu
* autor:               Bartosz Bak
* ****************************************************/
function aktualizujBajt(bajt, pozycja) {
    let tablica = bajt.split("");
    tablica[pozycja] = zamienBit(tablica[pozycja]);
    return tablica.join("");
}

/******************************************************** 
* nazwa funkcji:       odswiezWidok
* parametry wejściowe: przyciski - przyciski z bitami, bajt - aktualna liczba binarna 
* wartość zwracana:    brak
* autor:               Bartosz Bak
* ****************************************************/
function odswiezWidok(przyciski, bajt) {
    for (let i = 0; i < 8; i++) {
        przyciski[i].textContent = bajt[i];
    }
}

/******************************************************** 
* nazwa funkcji:       dodajBinarne
* parametry wejściowe: A - pierwszy bajt, B - drugi bajt 
* wartość zwracana:    wynik dodawania i bit przeniesienia
* autor:               Bartosz Bak
* ****************************************************/ 
function dodajBinarne(A, B) {
    let carry = 0;
    let wynik = new Array(8);

    for (let i = 7; i >= 0; i--) {
        let ai = A[i] === "1" ? 1 : 0;
        let bi = B[i] === "1" ? 1 : 0;

        let suma = ai + bi + carry;
        wynik[i] = (suma % 2 === 1) ? "1" : "0";
        carry = (suma >= 2) ? 1 : 0;
    }

    return { wynik: wynik.join(""), cout: carry.toString() };
}

/******************************************************** 
* nazwa funkcji:       pokazWynik
* parametry wejściowe: brak
* wartość zwracana:    brak
* autor:               Bartosz Bak
* ****************************************************/ 
function pokazWynik() {
    const rezultat = dodajBinarne(bajtA, bajtB);

    for (let i = 0; i < 8; i++) {
        przyciskiS[i].textContent = rezultat.wynik[i];
    }

    przyciskCout.textContent = rezultat.cout;
}

przyciskiA.forEach((przycisk, index) => {
    przycisk.addEventListener("click", () => {
        bajtA = aktualizujBajt(bajtA, index);
        odswiezWidok(przyciskiA, bajtA);
        pokazWynik();
    });
});

przyciskiB.forEach((przycisk, index) => {
    przycisk.addEventListener("click", () => {
        bajtB = aktualizujBajt(bajtB, index);
        odswiezWidok(przyciskiB, bajtB);
        pokazWynik();
    });
});

pokazWynik();
