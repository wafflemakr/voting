var ui =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/abi.js":
/*!***********************!*\
  !*** ./src/js/abi.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst votacionABI =[\n\t{\n\t\t\"constant\": false,\n\t\t\"inputs\": [\n\t\t\t{\n\t\t\t\t\"name\": \"_idCandidato\",\n\t\t\t\t\"type\": \"uint256\"\n\t\t\t}\n\t\t],\n\t\t\"name\": \"votar\",\n\t\t\"outputs\": [],\n\t\t\"payable\": false,\n\t\t\"stateMutability\": \"nonpayable\",\n\t\t\"type\": \"function\"\n\t},\n\t{\n\t\t\"inputs\": [],\n\t\t\"payable\": false,\n\t\t\"stateMutability\": \"nonpayable\",\n\t\t\"type\": \"constructor\"\n\t},\n\t{\n\t\t\"anonymous\": false,\n\t\t\"inputs\": [\n\t\t\t{\n\t\t\t\t\"indexed\": true,\n\t\t\t\t\"name\": \"_idCandidato\",\n\t\t\t\t\"type\": \"uint256\"\n\t\t\t}\n\t\t],\n\t\t\"name\": \"eventoVoto\",\n\t\t\"type\": \"event\"\n\t},\n\t{\n\t\t\"constant\": true,\n\t\t\"inputs\": [\n\t\t\t{\n\t\t\t\t\"name\": \"\",\n\t\t\t\t\"type\": \"uint256\"\n\t\t\t}\n\t\t],\n\t\t\"name\": \"candidatos\",\n\t\t\"outputs\": [\n\t\t\t{\n\t\t\t\t\"name\": \"id\",\n\t\t\t\t\"type\": \"uint256\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"name\": \"nombre\",\n\t\t\t\t\"type\": \"string\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"name\": \"numeroVotos\",\n\t\t\t\t\"type\": \"uint256\"\n\t\t\t}\n\t\t],\n\t\t\"payable\": false,\n\t\t\"stateMutability\": \"view\",\n\t\t\"type\": \"function\"\n\t},\n\t{\n\t\t\"constant\": true,\n\t\t\"inputs\": [],\n\t\t\"name\": \"numeroCandidatos\",\n\t\t\"outputs\": [\n\t\t\t{\n\t\t\t\t\"name\": \"\",\n\t\t\t\t\"type\": \"uint256\"\n\t\t\t}\n\t\t],\n\t\t\"payable\": false,\n\t\t\"stateMutability\": \"view\",\n\t\t\"type\": \"function\"\n\t},\n\t{\n\t\t\"constant\": true,\n\t\t\"inputs\": [\n\t\t\t{\n\t\t\t\t\"name\": \"\",\n\t\t\t\t\"type\": \"address\"\n\t\t\t}\n\t\t],\n\t\t\"name\": \"votantes\",\n\t\t\"outputs\": [\n\t\t\t{\n\t\t\t\t\"name\": \"\",\n\t\t\t\t\"type\": \"bool\"\n\t\t\t}\n\t\t],\n\t\t\"payable\": false,\n\t\t\"stateMutability\": \"view\",\n\t\t\"type\": \"function\"\n\t}\n];\n\n//module.exports = { votacionABI: votacionABI };\n/* harmony default export */ __webpack_exports__[\"default\"] = (votacionABI);\n\n//# sourceURL=webpack://ui/./src/js/abi.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: lanzarApp, refrescar, generarVoto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lanzarApp\", function() { return lanzarApp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"refrescar\", function() { return refrescar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generarVoto\", function() { return generarVoto; });\n/* harmony import */ var _abi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abi */ \"./src/js/abi.js\");\n\n\n\nvar votaPorPresidente;\nvar cuentaUsuario;\nvar totalCandidatos;\nvar web3js;\n\nfunction lanzarApp() {\n    var direccionContrato = \"0x18319a776c48D8Aef4FBe4d7a3D7Caa106d04b22\";\n    votaPorPresidente = new web3js.eth.Contract(_abi__WEBPACK_IMPORTED_MODULE_0__[\"default\"], direccionContrato);\n\n    \n    var revisarCuenta = setInterval(function() {\n        // Si la cuenta cambia, actualizar interfaz\n        web3.eth.getAccounts((err, account) => {\n            if (account[0] !== cuentaUsuario) {\n                cuentaUsuario = account[0];\n                numeroCandidatos();\n                actualizarInterfaz();\n            }\n        });\n    }, 1000);\n\n    \n    votaPorPresidente.events.eventoVoto()\n    .on(\"data\", function(event) {\n        let candidato = event.returnValues;\n        infoCandidatos(candidato._idCandidato)\n        .then((Candidato) => {\n            console.log(\"Nuevo voto a: \", Candidato.nombre);\n            $(\"#resultadoCandidatos\").empty();\n            numeroCandidatos();\n            actualizarInterfaz();\n        });\n    }).on(\"error\", console.error);\n    \n    //Devuelve todos los votos que se han realizado.\n    votaPorPresidente.getPastEvents(\"eventoVoto\", { fromBlock: 0, toBlock: \"latest\" })\n    .then(function(events) {\n        console.log(events);\n    });\n\n}\n\nfunction refrescar() {\n    actualizarInterfaz();\n    $(\"#estadoTx\").empty();\n}\n\nfunction actualizarInterfaz() {\n\n    $(\"#votante\").empty();\n    $(\"#votante\").append(`<div class=\"dirVotante\">\n        <p>Votando desde: ${cuentaUsuario}</p>`);\n    $(\"#resultadoCandidatos\").empty();\n    $(\"#seleccionCandidato\").empty();\n    $(\"#estadoTx\").empty();\n    for (let i=1; i <= totalCandidatos; i++) {\n        //revisar todos los nominados\n        infoCandidatos(i)\n        .then(function(candidato) { //Devuelve promesa\n          $(\"#resultadoCandidatos\").append(\"<tr><th>\" + candidato.id + \"</th><td>\" + \n          candidato.nombre + \"</td><td>\" + candidato.numeroVotos + \"</td></tr>\");\n          $(\"#seleccionCandidato\").append(\"<option value='\" + candidato.id +\n           \"' >\" + candidato.nombre + \"</ option>\");\n        });\n    }\n}\n\nfunction infoCandidatos(_id) {\n    return votaPorPresidente.methods.candidatos(_id).call()\n}\n\nfunction votanteRegistrado(_add) {\n    return votaPorPresidente.methods.votantes(_add).call()\n}\n\nfunction numeroCandidatos() {\n    votaPorPresidente.methods.numeroCandidatos().call()\n    .then(function(result) {\n        totalCandidatos = result; \n    });\n}\n\nfunction generarVoto() {\n    //let idVoto = document.getElementById('idVoto').value\n    let idVoto = $('#seleccionCandidato').val();\n    $(\"#estadoTx\").empty();\n    votanteRegistrado(cuentaUsuario).then(function(result) {\n        if (result === true) {\n            $(\"#estadoTx\").text(`Error: No puede votar dos veces!!`);\n            window.alert(\"Error: No puede votar dos veces!!\");\n        }else {\n            $(\"#estadoTx\").text(`Votando por el nominado #${idVoto}, por favor espere...`);\n            return votaPorPresidente.methods.votar(idVoto)\n            .send({ from: cuentaUsuario })\n            .on(\"receipt\", function(receipt) {\n                $(\"#estadoTx\").text(\"Se ha recibido su voto!\");\n                actualizarInterfaz();\n            })\n            .on(\"error\", function(error) {\n                // Transaccion fallo\n                $(\"#estadoTx\").text(error);\n            });\n        }\n    });\n}\n\nwindow.addEventListener('load', function() {\n    if (typeof web3 !== 'undefined') {\n        web3js = new Web3(web3.currentProvider);\n        //console.log('Metamask instalado!', web3);\n    } else {\n        console.log('No se ha detectado metamask!');\n    }\n\n    // lanzar la app y acceder a web3js en todas partes\n    lanzarApp();\n})\n\n//Depronto se pueden poner todas las funciones dentro\n// de un objeto para solo tener que exportar una cosa\n// y luego llamar al objeto\n\n\n\n\n\n\n\n\n \n\n\n\n\n\n\n//# sourceURL=webpack://ui/./src/js/index.js?");

/***/ })

/******/ });