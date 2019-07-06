// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

//  const jsx = <h1>Hello, Platzi Badges!</h1>;
//  var name = "ALi";
// const element = React.createElement('a',{href:'https://platzi.com'},'ir a platzi');
// const element = React.createElement('h1',{}, `Hola soy ${name}`);
// var sum = ()=>2+2;
// const jsx = <h1>Hola soy {sum()}</h1>;
// const jsx =(
//     <div>
//         <h1>Hola mundo</h1>
//         <p>Soy Genial</p>
//     </div>
// );

// const element = React.createElement(
//     'div',
//     {},
//     React.createElement('h1',{},'Hola Mundo'),
//     React.createElement('p',{},'Soy desarrollador React')
//     );

import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import 'bootstrap/dist/css/bootstrap.css';

//import Badge from './components/Badge';

import App from './components/App';

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
	<App/>,container);
/*	 firstName="ALi"
	  lastName="Lorenzo" 
	  jobTitle="Desarrollador Web"
	  avatarImg="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"*/