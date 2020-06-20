let parentEle = document.querySelector('.row');

let title = 'Article 1';
let imgSrc = 'https://source.unsplash.com/1600x900/?laptop';
let imgAlt = 'Laptop Image';
let articleText = 'A web application (or web app) is an internet technology term used to describe a computer software program that is run on a web server, unlike computer-based software programs that are stored locally on the Operating System (OS) of a device. Web applications are accessed by the user through a web browser with an active internet connection. These applications are programmed using a client–server modeled structure—the user ("client") is provided services through an off-site server that is hosted by a third-party. Examples of commonly-used, web applications, include: web-mail, online retail sales, online banking, and online auctions.';

createArticle(title,imgSrc,imgAlt,articleText);
// createArticle();
// createArticle();

function createArticle(titleText,imgSrc,altText, articleText ){
let article = document.createElement('div');
article.classList.add('article');
let title = document.createElement('h2');
title.textContent = titleText;
let image = document.createElement('img');
image.src = imgsrc;
image.alt = altText;
image.classList.add('article-image');
let para = document.createElement('p');
para.textContent = articleText;
let tagPara = document.createElement('p');
let tagSpan = document.createElement('span');
tagSpan.classList.add('article-tag');
tagSpan.textContent = 'Learn More...';
tagPara.appendChild(tagSpan);
article.insertAdjacentElement('afterbegin', title);
article.insertAdjacentElement('beforeend', image);
article.insertAdjacentElement('beforeend', para);
article.insertAdjacentElement('beforeend', tagPara);

console.log(article);

parentEle.insertAdjacentElement('beforebegin', article);
}

