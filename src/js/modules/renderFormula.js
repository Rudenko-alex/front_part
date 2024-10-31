

/*--------------formula----------------------------------------------*/

// Создаем секцию с ID и классом
let section = document.querySelector('#formula');
section.id = 'formula';
section.className = 'formula-all';

let hpt = section.querySelector('.home-page-title');
let pc = section.querySelector('.page-container');
hpt.remove();
pc.remove();

// Создаем main с заголовком и текстовой областью
let main = document.createElement('main');
main.className = 'formula-wrapper-input';

let mainTitle = document.createElement('h3');
mainTitle.textContent = 'Преобразуем ваши столбцы в строку';

let textarea = document.createElement('textarea');
textarea.className = 'formula-input';
textarea.cols = 70;
textarea.rows = 25;

// Создаем контейнер для кнопок управления
let formulaControl = document.createElement('div');
formulaControl.className = 'formula-control';

let transformButton = document.createElement('button');
transformButton.className = 'formula-transform formula-btn';
transformButton.textContent = 'Преобразовать';

let resetButton = document.createElement('button');
resetButton.className = 'formula-reset formula-btn';
resetButton.textContent = 'Очистить';

formulaControl.append(transformButton, resetButton);
main.append(mainTitle, textarea, formulaControl);

// Создаем aside с настройками
let aside = document.createElement('aside');
aside.className = 'formula-settings';

let asideTitle = document.createElement('h3');
asideTitle.className = 'formula-settings-head';
asideTitle.textContent = 'Настройки';

// Создаем чекбокс для пробела
let spaceDiv = document.createElement('div');
spaceDiv.className = 'formula-space';

let spaceCheckbox = document.createElement('input');
spaceCheckbox.type = 'checkbox';
spaceCheckbox.id = 'space';
spaceCheckbox.name = 'space';
spaceCheckbox.checked = true;

let spaceLabel = document.createElement('label');
spaceLabel.htmlFor = 'space';
spaceLabel.textContent = 'Добавлять пробел';

spaceDiv.append(spaceCheckbox, spaceLabel);

// Создаем выбор разделителя
let separatorDiv = document.createElement('div');
separatorDiv.className = 'separator';

let separatorTitle = document.createElement('h4');
separatorTitle.textContent = 'Выбор разделителя';

let separatorSelect = document.createElement('select');
separatorSelect.className = 'formula-separator-select';

let separatorOptions = [
    { value: ',', text: 'запятая (,)' },
    { value: '.', text: 'точка (.)' },
    { value: ';', text: 'точка с запятой (;)' },
    { value: ':', text: 'двоеточие (:)' }
];

separatorOptions.forEach(optionData => {
    let option = document.createElement('option');
    option.value = optionData.value;
    option.textContent = optionData.text;
    if (optionData.value === ',') option.selected = true;
    separatorSelect.appendChild(option);
});

separatorDiv.append(separatorTitle, separatorSelect);

// Создаем выбор обертки элемента
let wrapperDiv = document.createElement('div');
wrapperDiv.className = 'formula-wrapper';

let wrapperTitle = document.createElement('h4');
wrapperTitle.textContent = 'Обернуть каждый элемент';

let wrapperSelect = document.createElement('select');
wrapperSelect.className = 'formula-wrapper-select';

let wrapperOptions = [
    { value: '', text: 'не оборачивать' },
    { value: "'", text: 'одиночная кавычка (\')' },
    { value: '&quot', text: 'двойная кавычка (")' }
];

wrapperOptions.forEach(optionData => {
    let option = document.createElement('option');
    option.value = optionData.value;
    option.innerHTML = optionData.text;  // используем innerHTML для &quot
    if (optionData.value === '') option.selected = true;
    wrapperSelect.appendChild(option);
});

wrapperDiv.append(wrapperTitle, wrapperSelect);

// Составляем aside
aside.append(asideTitle, spaceDiv, separatorDiv, wrapperDiv);

// Добавляем main и aside в section
section.append(main, aside);
console.log(section)
