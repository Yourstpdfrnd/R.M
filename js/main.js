 const data = {
    menu: {
        imgLogo: 'img/logo.png',
        items: [
            {
                title: 'Home',
                src: '#'
            },
            {
                title: 'Features',
                src: '#'
            },
            {
                title: 'Pricing',
                src: '#'
            }
        ]
    },
    content:{
        articles:[
            {
                title: 'Lorem ipsum dolor sit amet.',
                content: `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam assumenda beatae commodi
                    corporis
                    culpa doloremque enim laborum, maxime nihil nisi, nulla obcaecati, quae quos sed tempore veniam
                    vitae
                    voluptate? Adipisci autem dolor doloremque, dolores eligendi exercitationem in ipsa modi odio
                    officia
                    placeat, recusandae rem rerum saepe sequi, ullam voluptatibus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores dolorum, eius id
                    laudantium
                    obcaecati sed ullam velit voluptates! Adipisci alias debitis dolores fuga in ipsum iusto molestiae
                    quisquam
                    sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid, asperiores consequatur
                    corporis
                    nihil officia perspiciatis possimus quasi suscipit! Animi blanditiis corporis, dicta doloribus
                    ducimus error
                    esse explicabo hic illum impedit incidunt inventore necessitatibus nihil pariatur, quam quasi
                    repudiandae
                    rerum totam ut voluptatem. Consequatur, optio?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis dolor dolores est nobis
                    possimus qui sed sequi, tempore voluptatem?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum cumque dolore eligendi est eveniet, ex
                    expedita
                    facilis fuga incidunt, obcaecati optio sunt voluptate. Dolores minus modi nesciunt, nulla soluta
                    tempora
                    unde voluptatum! Ab dicta impedit iure laborum sapiente? Ad aliquid, aspernatur atque distinctio
                    dolorum
                    expedita fugit illo impedit iusto nisi odit officiis perspiciatis quam quasi quibusdam reiciendis
                    repellendus soluta tempora tenetur velit veritatis voluptas voluptatem? Ad assumenda aut debitis,
                    distinctio, dolorum eligendi est harum magnam, nam placeat reiciendis repellendus voluptate?</p>`
            }
        ]
    },
    dopMenu:[
        {title:'Season 1', src: '#'},
        {title:'Season 2', src: '#'},
        {title:'Season 3', src: '#'},
        {title:'Season 4', src: '#'},
        {title:'Season 5 - coming soon', src: '#'}
    ],
    cards: [
        {
            title: 'Название карточки',
            img: 'img/img1.jpg',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s data.',
            buttonLink: '#'
        },
        {
            title: 'Название карточки',
            img: 'img/img2.jpg',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s data.',
            buttonLink: '#'
        },
        {
            title: 'Название карточки',
            img: 'img/img3.jpg',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s data.',
            buttonLink: '#'
        }
    ],
    footer: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, dolorum!'
    }
};

function createElement(tagName, arrayClasses = []) {
  const newElement = document.createElement(tagName);
  
  for (className of arrayClasses) {
    newElement.classList.add(className);
  }
  return newElement;
}


//функция создания хедера
function renderHeader() {
  const menu = document.querySelector('#menu .container');

  const menuInner =createElement('div', ['menu__inner'])
  menu.append(menuInner);

  const menuPic = createElement('div', ['menu-pic']);
  menuInner.append(menuPic);

  menuPicImg = createElement('img')
  menuPicImg.src = data.menu.imgLogo;
  menuPic.append(menuPicImg);

  const menuNav = createElement('div', ['menu__nav']);
  menuInner.append(menuNav);

  const menuNavList = createElement('ul', ['menu__nav-list']);
  menuNav.append(menuNavList);

  const dfMenuNavList = document.createDocumentFragment();

  for (item of data.menu.items) {
    const menuNavLinkLI = createElement('li', ['menu__nav-link']);
    const menuNavLinkA = createElement('a');
    menuNavLinkA.href = item.src;
    menuNavLinkA.textContent = item.title;
    menuNavLinkLI.append(menuNavLinkA);
    dfMenuNavList.append(menuNavLinkLI);
  }

  menuNavList.append(dfMenuNavList);
}

//функция создания текстового контента страницы
function renderContent() {
  const content = document.querySelector('#content');
  
  const dfArticle = document.createDocumentFragment();
  
  
  for (article of data.content.articles) {
    const articleContainer = createElement('div');
    content.append(articleContainer);

    const title = createElement('h1');
    title.textContent = article.title
    articleContainer.append(title);
    
    const contentContainer = document.createElement('div');
    contentContainer.innerHTML = article.content;
    articleContainer.append(contentContainer);
    dfArticle.append(articleContainer);
  }
  content.append(dfArticle);
  
}

//функция создания бокового контента
function renderDopMenu() {
  const dopMenu = document.querySelector('#dopMenu');
  
  const listGroup = createElement('ul', ['list-group']);
  const dfListGroupItem = document.createDocumentFragment();
  
  for (item of data.dopMenu) {
    const listGroupItem = createElement('li', ['list-group-item']);
    console.log(item.title)
    const listGroupItemA = createElement('a');
    listGroupItemA.href = item.src;
    listGroupItemA.textContent = item.title;
    listGroupItem.append(listGroupItemA);
    dfListGroupItem.append(listGroupItem);
  }
  
  listGroup.append(dfListGroupItem);
  dopMenu.append(listGroup);
}

//функция создания карточек
function renderCards() {
  const cards = document.querySelector('#cards');
  const dfCardItem = document.createDocumentFragment();
  
  for (card of data.cards) {
    const cardItem = createElement('div', ['card-item', 'col-lg-4', 'col-12']);
    const img = createElement('img');
    img.src = card.img;
    img.alt = card.title;
    cardItem.append(img);
    
    const title = createElement('h4');
    title.textContent = card.title;
    cardItem.append(title);
    
    const text = createElement('p');
    text.textContent = card.text;
    cardItem.append(text);
    
    const button = createElement('a', ['btn' ,, 'btn-primary']);
    button.href = card.buttonLink;
    button.textContent = 'Go somewhere';
    cardItem.append(button);
    dfCardItem.append(cardItem);
  }
  
  cards.append(dfCardItem);
  
}

//функция создания футера
function renderFooter() {
  const footer = document.querySelector('#footer');
  footer.textContent = data.footer.text;
}

//вызов всех созданных функций
renderHeader();
renderContent();
renderDopMenu();
renderCards();
renderFooter();