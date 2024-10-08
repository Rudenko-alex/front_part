let input = document.querySelector('.input');
let transform = document.querySelector('.transform');
let reset = document.querySelector('.reset');
let separatorSelect = document.querySelector('.separator-select');
let wrapperSelect = document.querySelector('.wrapper-select');
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
  document.location.reload();
});
