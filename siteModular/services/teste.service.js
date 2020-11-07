angular.module("modular").service("testeService", function () {
    var listarDiasSemana = function () {
        return [
            { text: 'segunda', value: 2 },
            { text: 'terca', value: 3 },
            { text: 'quarta', value: 4 },
            { text: 'quinta', value: 5 },
            { text: 'sexta', value: 6 },
            { text: 'sabado', value: 7 },
            { text: 'domingo', value: 1 }
        ];
    };
    var name = 'Arley';

    return {
        diasSemana: listarDiasSemana(),
        name: name
    };    
});