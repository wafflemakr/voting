pragma solidity 0.4.24;

/// @title Contrato Para elegir candidatos
/// @notice Un voto por direccion de eth
/// @dev use 0.4.24 commits compiler without nightly
contract Elecciones {
    /// @notice Estructura para la info de un Candidato
    struct Candidato {
        uint id;
        string nombre;
        uint numeroVotos;
    }

    /// @notice Almacenar las direcciones eth de los votantes
    mapping(address => bool) public votantes;
    
    /// @notice Almacenar los candidatos
    /// y devuelve la info del candidato segun su ID
    mapping(uint => Candidato) public candidatos;
    
    /// @notice Almacenar la cantidad de candidatos
    uint public numeroCandidatos;

    /// @notice Define un evento cuando se registra un voto
    event eventoVoto (
        uint indexed _idCandidato
    );
    
    /// @notice Funcion para agregar los candidatos por defecto
    /// @dev se podria crear un modifier para que esto se haga una vez
    /// y no se pueda modificar nunca mas, depronto renunciando al Contrato
    /// para que nadie pueda entrar a modificar el contrato.
    /// @dev funcion que se ejecuta de inmediato al crear el contrato
    constructor () public {
        agregarCandidato("Donald Trompeto");
        agregarCandidato("Nicolas Maburro");
        agregarCandidato("Ivan Duquesa");
        agregarCandidato("Voto en Blanco");
    }
    
    /// @notice Funcion para crear un nuevo candidato
    /// @dev Privada para que nadie pueda modificarla
    function agregarCandidato (string _nombre) private {
        numeroCandidatos ++;
        candidatos[numeroCandidatos] = Candidato(numeroCandidatos, _nombre, 0);
    }
    
    /// @notice Funcion para registrar un voto del candidato
    /// @param  _idCandidato solo se necesita la identificacion del candidato para votar
    /// @dev falta mirar la forma de requerir tambien la cedula del votante 
    function votar (uint _idCandidato) public {
        /// @notice asegurarse que la direccion eth no ha votado todavia
        require(!votantes[msg.sender]);

        /// @notice opcion de candidato valida, entre 0 y el total de candidatos
        require(_idCandidato > 0 && _idCandidato <= numeroCandidatos);

        /// @notice almacenar que la direccion eth de este usuario ya voto
        votantes[msg.sender] = true;

        /// @notice Aumentar un voto al candidato seleccionado
        candidatos[_idCandidato].numeroVotos ++;

        /// @notice Emitir evento de voto hecho
        emit eventoVoto(_idCandidato);
    }
}
