angular.module("modular").controller("homeController", function ($scope, testeService) {
    $scope.message = "Angular JS modular";
    $scope.diaSemana = 6;
    $scope.name = testeService.name;
    $scope.diasSemana = testeService.diasSemana;
    $scope.showModal = false;
    $scope.contato = { name: 'arley', idade: 40 };
    $scope.display_name = 'teste';
    $scope.adid = '001';    
});