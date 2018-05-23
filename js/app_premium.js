
/* DATA MODELL the cats object - all possible cat are listed in here */


const cats = [
	{
		cat: 'katze1',
		img:'img/cat1.jpg',
		clickcounter: 0
	},
	{
		cat: 'katze2',
		img: 'img/cat2.jpg',
		clickcounter: 0
	},
	{
		cat: 'katze3',
		img: 'img/cat3.jpg',
		clickcounter: 0
	},
	{
		cat: 'katze4',
		img: 'img/cat4.jpg',
		clickcounter: 0
	},
	{
		cat: 'katze5',
		img: 'img/cat5.jpg',
		clickcounter: 0
	},
];



/* OCTOPUS PART */

let octopus = {

	
	/* our "cat" event listeners */

	catClick: function() {
		const catImage = document.querySelector('#main img');
		catImage.addEventListener('click', octopus.doCount);
	},


	/* our actions */

	doCount: function() {
		const counter = document.querySelector('.counter');
		cats.clickCounter += 1;
		counter.innerText = 'The cat got clicked ' + cats.clickCounter + ' times';
	},

	init: function() {
		view.createAsideList();
	}

};



/* VIEW MODELL */

let view = {

	/* 
	 *  function createAside HTML elements 
	 *  all cats are listed here 
	 */

	createAsideList: function () {
	
		const ul = document.createElement('ul');
		ul.setAttribute('class', 'catlist');

		for (let i = 0; i < cats.length; i++) {

			let cat = cats[i];

			const li = document.createElement('li');
			li.setAttribute('class', 'catlistitem');

			const img = document.createElement('img');
			img.setAttribute( 'src', cats[i].img );
			img.setAttribute( 'alt', 'katze' );

			
			img.addEventListener('click', (function(catCopy) {
				return function() {
					document.getElementById('main').innerHTML = '';
					cats.clickCounter = 0;
					view.createHtmlFragments(catCopy); // Versuch, die Katze in Großansicht zu zeigen
				};
			})(cat));




			li.appendChild(img);

			ul.appendChild(li);
		}

		document.getElementById('aside').appendChild(ul);

	},


	/*  
	 *  function createMain HTML cat element   
	 *  the single selected cat is shown here 
	 */

	createHtmlFragments: function(catCopy) {

		const div = document.createElement('div');

		const p = document.createElement('p');
		p.classList.add('catname');
		p.innerHTML = catCopy.cat;
		div.appendChild(p);
		

		const img = document.createElement('img');
		img.setAttribute( 'src', catCopy.img );
		img.setAttribute( 'alt', 'katze' );
		div.appendChild(img);


		const p3 = document.createElement('p');
		p3.classList.add('counter');
		p3.innerHTML = 'The cat got clicked 11 times';
		div.appendChild(p3);


		document.getElementById('main').appendChild(div);

		octopus.catClick();

	}

};



/* activate things */

octopus.init();

