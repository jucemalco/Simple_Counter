//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props) {
	return (
		<div className="relojDigital">
			<div className="calendar"></div>
			<i className="far fa-clock"></i>
			<div className="cuatro">{props.digitoCuatro % 10}</div>
			<div className="tercero">{props.digitoTres % 10}</div>
			<div className="segundo">{props.digitoDos % 10}</div>
			<div className="primero">{props.digitoUno % 10}</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	digitoCuatro: PropTypes.number,
	digitoTres: PropTypes.number,
	digitoDos: PropTypes.number,
	digitoUno: PropTypes.number,
};

let counter = 0;
setInterval(function () {
	const Cuatro = Math.floor(counter / 1000);
	const Tres = Math.floor(counter / 100);
	const Dos = Math.floor(counter / 10);
	const Uno = Math.floor(counter / 1);
	//console.log(Cuatro, Tres, Dos, Uno);
	//render your react application
	counter++;
	ReactDOM.render(
		<SimpleCounter
			digitoUno={Uno}
			digitoDos={Dos}
			digitoTres={Tres}
			digitoCuatro={Cuatro}
		/>,
		document.querySelector("#app")
	);
}, 1000);

//JulioM 10-01-2020
