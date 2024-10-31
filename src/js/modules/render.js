export default function render (data) {
const container = document.querySelector('.container');
  let navMenu = document.createElement('nav');
  navMenu.className = 'side-menu';
  let ulMenu = document.createElement('ul');

  navMenu.append(ulMenu)
  container.append(navMenu)

   /*-Перебираем массив данных для отбора названия страницы и ИД.
   формирует разметку html-*/
  data.forEach(item => {
    /*-Формируем меню-*/
    let li = document.createElement('li');
    let a = document.createElement('a');
    let spanDot = document.createElement('span');
    let spanTitle = document.createElement('span');
    a.href = `#${item.id}`
    spanDot.className = 'dot'
    spanTitle.className = 'menu-title'
    spanTitle.textContent = item.pageName
    a.append(spanDot)
    a.append(spanTitle)
    li.append(a)
    ulMenu.append(li)

    let section = Object.assign(document.createElement('section'), {
        id: item.id,
        className: 'home'
    });
    
    let sectionTitle = Object.assign(document.createElement('h1'), {
        className: 'home-page-title',
        textContent: item.pageName
    });

    let sectionDiv = document.createElement('div');
    sectionDiv.className = 'page-container';

    item.links.forEach(a =>{
        let link = Object.assign(document.createElement('a'), {
            href: a.url,
            className: 'page-link',
            textContent: a.name
        });
        sectionDiv.append(link);
    })

    section.append(sectionTitle);
    section.append(sectionDiv);
    /*-Вставляем секции в контаинер-*/
    container.append(section)
  })
}