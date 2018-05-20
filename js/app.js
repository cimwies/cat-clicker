/* our constants */
const catName = document.querySelector('.catname');
let clickCounter = 0;
let clickCounter2 = 0;


/* create Cat objects */

const cats = [
	{
		cat: 'katze1',
		img:'<img src="img/cat.jpg" alt="our cat" >'
	},
	{
		cat: 'katze2',
		img:'<img src="img/cat.jpg" alt="our cat" >'
	}
];



/* create all the html cat elements */

function createHtmlFragments_1(){

	const div = document.createElement('div');
	div.classList.add('catcontainer');
	document.body.appendChild(div);

	const p = document.createElement('p');
	p.classList.add('catname');
	p.innerHTML = 'katze1';
	document.body.appendChild(p);
	

	const p2 = document.createElement('p');
	p2.classList.add('catimage');
	p2.innerHTML = '<img src="img/cat.jpg" alt="our cat" >';
	document.body.appendChild(p2);

	const p3 = document.createElement('p');
	p3.classList.add('counter');
	p3.innerHTML = 'The cat got clicked 11 times';
	document.body.appendChild(p3);

}

function createHtmlFragments_2(){

	const div = document.createElement('div');
	div.classList.add('catcontainer');
	document.body.appendChild(div);

	const p = document.createElement('p');
	p.classList.add('catname');
	p.innerHTML = 'Katze2';
	document.body.appendChild(p);
	

	const p2 = document.createElement('p');
	p2.classList.add('catimage2');
	p2.innerHTML = '<img src="img/cat2.jpg" alt="our cat" >';
	document.body.appendChild(p2);

	const p3 = document.createElement('p');
	p3.classList.add('counter2');
	p3.innerHTML = 'The cat got clicked 11 times';
	document.body.appendChild(p3);

}


/* our "single cat" event listeners */

function catClick() {
	const catImage = document.querySelector('.catimage img');
	catImage.addEventListener('click', doCount);
}

function catClick2() {
	const catImage2 = document.querySelector('.catimage2 img');
	catImage2.addEventListener('click', doCount2);
}

/* our actions */

function doCount() {
	const counter = document.querySelector('.counter');
	clickCounter += 1;
	counter.innerText = 'The cat got clicked ' + clickCounter + ' times';
}

function doCount2() {
	const counter2 = document.querySelector('.counter2');
	clickCounter2 += 1;
	counter2.innerText = 'The cat got clicked ' + clickCounter2 + ' times';
}


/* activate things */
createHtmlFragments_1();
createHtmlFragments_2();
catClick();
catClick2();
