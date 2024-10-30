export default function Formula() {
let input = document.querySelector('.formula-input');
let transform = document.querySelector('.formula-transform');
let reset = document.querySelector('.formula-reset');
let separatorSelect = document.querySelector('.formula-separator-select');
let wrapperSelect = document.querySelector('.formula-wrapper-select');
let space = document.getElementById('space');

transform.addEventListener('click', () => {
  let separator;

  space.checked
    ? (separator = separatorSelect.value + ' ')
    : (separator = separatorSelect.value);

  let arr = input.value;
  let arr2 = arr
    .split('\n')
    .map((item) => {
      item.trim();
      return wrapperSelect.value + item + wrapperSelect.value;
    })
    .join(separator);
  // .slice(0, -2);
 
  input.value = arr2;
});

reset.addEventListener('click', () => {
  input.value = '';
  // document.location.reload();
});
}
