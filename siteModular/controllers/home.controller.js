angular
    .module(MY_APP_NAME)
    .controller("homeController", function ($scope, testeService) {
        var vm = this;
        vm.message = "Angular JS modular";
        vm.diaSemana = 6;
        vm.name = testeService.name;
        vm.diasSemana = testeService.diasSemana;
        vm.nome = 'teste';
        vm.adid = '001';        
    });