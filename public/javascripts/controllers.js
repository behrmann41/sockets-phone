app.controller('HomeController', ['$scope', function($scope){
  var socket = io();
  $scope.welcome = "Sockets Phone Testing";
  $scope.num = 0;

  socket.on('num', function(data){
    $scope.num = data;
    $scope.$apply();
  })
  $scope.phone = function (){
    socket.emit('click', $scope.num+1)
  }
}])
