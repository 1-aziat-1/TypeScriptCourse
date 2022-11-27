const checkbox1 = <HTMLInputElement> document.querySelector('checkbox1');
const checkbox2 = document.querySelector('checkbox2') as HTMLInputElement;

// const isHTMLInputElement = (
//   element: HTMLElement | null,
// ): element is HTMLInputElement => {
//   if (element instanceof HTMLInputElement) {
//     return true;
//   } else {
//     return false;
//   }
// }

const isHTMLInputElement = (
  element: HTMLElement | null,
): element is HTMLInputElement => element instanceof HTMLInputElement;

const isNumber = (value: unknown) : value is number => typeof value === 'number';

const format = (value: string | number): string => {
  if (isNumber(value)) {
    return value.toFixed(2);
  } else {
    return parseFloat(value).toFixed(2);
  }
}