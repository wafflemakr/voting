
import votacionABI from "./abi";

var votaPorPresidente;
var cuentaUsuario;
var totalCandidatos;
var web3js;

export function lanzarApp() {
    var direccionContrato = "0x18319a776c48D8Aef4FBe4d7a3D7Caa106d04b22";
    votaPorPresidente = new web3js.eth.Contract(votacionABI, direccionContrato);

    
    var revisarCuenta = setInterval(function() {
        // Si la cuenta cambia, actualizar interfaz
        web3.eth.getAccounts((err, account) => {
            if (account[0] !== cuentaUsuario) {
                cuentaUsuario = account[0];
                numeroCandidatos();
                actualizarInterfaz();
            }
        });
    }, 1000);

    
    votaPorPresidente.events.eventoVoto()
    .on("data", function(event) {
        let candidato = event.returnValues;
        infoCandidatos(candidato._idCandidato)
        .then((Candidato) => {
            console.log("Nuevo voto a: ", Candidato.nombre);
            $("#resultadoCandidatos").empty();
            numeroCandidatos();
            actualizarInterfaz();
        });
    }).on("error", console.error);
    
    //Devuelve todos los votos que se han realizado.
    votaPorPresidente.getPastEvents("eventoVoto", { fromBlock: 0, toBlock: "latest" })
    .then(function(events) {
        console.log(events);
    });

}

export function refrescar() {
    actualizarInterfaz();
    $("#estadoTx").empty();
}

function actualizarInterfaz() {

    $("#votante").empty();
    $("#votante").append(`<div class="dirVotante">
        <p>Votando desde: ${cuentaUsuario}</p>`);
    $("#resultadoCandidatos").empty();
    $("#seleccionCandidato").empty();
    $("#estadoTx").empty();
    for (let i=1; i <= totalCandidatos; i++) {
        //revisar todos los nominados
        infoCandidatos(i)
        .then(function(candidato) { //Devuelve promesa
          $("#resultadoCandidatos").append("<tr><th>" + candidato.id + "</th><td>" + 
          candidato.nombre + "</td><td>" + candidato.numeroVotos + "</td></tr>");
          $("#seleccionCandidato").append("<option value='" + candidato.id +
           "' >" + candidato.nombre + "</ option>");
        });
    }
}

function infoCandidatos(_id) {
    return votaPorPresidente.methods.candidatos(_id).call()
}

function votanteRegistrado(_add) {
    return votaPorPresidente.methods.votantes(_add).call()
}

function numeroCandidatos() {
    votaPorPresidente.methods.numeroCandidatos().call()
    .then(function(result) {
        totalCandidatos = result; 
    });
}

export function generarVoto() {
    //let idVoto = document.getElementById('idVoto').value
    let idVoto = $('#seleccionCandidato').val();
    $("#estadoTx").empty();
    votanteRegistrado(cuentaUsuario).then(function(result) {
        if (result === true) {
            $("#estadoTx").text(`Error: No puede votar dos veces!!`);
            window.alert("Error: No puede votar dos veces!!");
        }else {
            $("#estadoTx").text(`Votando por el nominado #${idVoto}, por favor espere...`);
            return votaPorPresidente.methods.votar(idVoto)
            .send({ from: cuentaUsuario })
            .on("receipt", function(receipt) {
                $("#estadoTx").text("Se ha recibido su voto!");
                actualizarInterfaz();
            })
            .on("error", function(error) {
                // Transaccion fallo
                $("#estadoTx").text(error);
            });
        }
    });
}

window.addEventListener('load', function() {
    if (typeof web3 !== 'undefined') {
        web3js = new Web3(web3.currentProvider);
        //console.log('Metamask instalado!', web3);
    } else {
        console.log('No se ha detectado metamask!');
    }

    // lanzar la app y acceder a web3js en todas partes
    lanzarApp();
})

//Depronto se pueden poner todas las funciones dentro
// de un objeto para solo tener que exportar una cosa
// y luego llamar al objeto








 




