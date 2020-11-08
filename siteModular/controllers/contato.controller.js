angular
    .module(MY_APP_NAME)
    .controller("contatoController", function () {
        var vm = this;
        vm.message = "CONTATO";        
        vm.contatos = [
            { nome: 'arley', idade: 40, telefone: '3133962971', tipoTelefone: 1 },
            { nome: 'bruna', idade: 34, telefone: '31997566055', tipoTelefone: 3 }];              
    });