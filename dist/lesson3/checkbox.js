"use strict";
const checkbox1 = document.querySelector('checkbox1');
const checkbox2 = document.querySelector('checkbox2');
// const isHTMLInputElement = (
//   element: HTMLElement | null,
// ): element is HTMLInputElement => {
//   if (element instanceof HTMLInputElement) {
//     return true;
//   } else {
//     return false;
//   }
// }
const isHTMLInputElement = (element) => element instanceof HTMLInputElement;
const isNumber = (value) => typeof value === 'number';
const format = (value) => {
    if (isNumber(value)) {
        return value.toFixed(2);
    }
    else {
        return parseFloat(value).toFixed(2);
    }
};
