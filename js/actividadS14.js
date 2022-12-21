
let app = angular.module("MyApp",[])

app.controller("formControl", function($scope){
$scope.master = {codigo: 0, horas: 0, tarifa: 0, sueldoBruto: 0, descuento: 0, sueldoNeto: 0,};
$scope.calcularSalario = function(){
    $scope.empleado = $scope.master
    $scope.master.sueldoBruto = $scope.master.horas * $scope.master.tarifa;

    if($scope.master.sueldoBruto < 500){
        $scope.master.descuento = 0;
    }else if($scope.master.sueldoBruto >= 501 && $scope.master.sueldoBruto <= 1000){
        $scope.master.descuento = 0.02
    }else if($scope.master.sueldoBruto >= 1001 && $scope.master.sueldoBruto <= 4000){
        $scope.master.descuento = 0.08;
    }else if($scope.master.sueldoBruto >= 4001 && $scope.master.sueldoBruto <= 8000){
        $scope.master.descuento = 0.15;
    }else if($scope.master.sueldoBruto >= 8001 && $scope.master.sueldoBruto <= 10000){
        $scope.master.descuento = 0.21;
    }else if($scope.master.sueldoBruto >= 10000){
        $scope.master.descuento = 0.30;

    }
    
    $scope.master.sueldoNeto = $scope.master.sueldoBruto - ($scope.master.sueldoBruto * $scope.master.descuento);
}
$scope.calcularSalario()

}) 
