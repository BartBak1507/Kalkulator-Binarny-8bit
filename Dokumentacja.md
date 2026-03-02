# Dokumentacja – Kalkulator Binarny

## 1. Cel projektu

Celem projektu było stworzenie interaktywnej aplikacji webowej umożliwiającej dodawanie dwóch liczb binarnych w systemie 8-bitowym.

Projekt miał na celu utrwalenie wiedzy z zakresu:
- systemów liczbowych
- działań na liczbach binarnych
- JavaScript
- manipulacji elementami HTML

---

## 2. Wymagania funkcjonalne

- Program umożliwia zmianę wartości bitów (0/1)
- Program automatycznie oblicza wynik
- Program wyświetla wynik w postaci binarnej
- Program obsługuje liczby 8-bitowe

---

## 3. Wymagania niefunkcjonalne

- Intuicyjny interfejs użytkownika
- Czytelny układ graficzny
- Szybkie przeliczanie danych
- Działanie w przeglądarce bez instalacji

---

## 4. Opis działania algorytmu

1. Pobranie wartości bitów z interfejsu
2. Złączenie bitów w ciąg znaków
3. Konwersja liczby binarnej na dziesiętną
4. Wykonanie dodawania
5. Konwersja wyniku na system binarny
6. Uzupełnienie do 8 bitów (padding zerami)
7. Wyświetlenie wyniku

---

## 5. Testowanie

Przetestowano:
- 0 + 0
- 1 + 1
- 255 + 1 (sprawdzenie przepełnienia)
- Losowe kombinacje bitów

Program działa poprawnie.
