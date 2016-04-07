angular.module('app').controller('controller', function ($scope, service1, pokemonService) {
    $scope.says = "I am a scope";

    $scope.theThingWeAskedFor = "Asking for the thing...";

    $scope.my6yearOldWantsAUnicorn = function () {
        var promise = service1.getMeAUnicorn();
        promise.then(function(toys){
            $scope.theThingWeAskedFor = toys.snozberries;
        })
    }
    
    $scope.my6yearOldWantsAUnicorn();

    


//CONFIG

    $scope.getPokemon = function(){
        $scope.pokemon = "Loading...";
      var promise = pokemonService.getPokemon()
      
      promise.then(function(pokemon){
          $scope.pokemon = pokemon;
      })
    }
   
   
    // promise.then(resolve, reject);
    
    function askIntroverToDoSomething(){
        //Way #1 to do this
        introvertService.willHangOutWithMe().then(function(result){
            //defer.resolve
            goToAMovie()
        }, function(err){
           //defer.reject
           sadFace();
        })
        
        //Way #2 to do this
        function resolveHandler(){
            //defer.resolve
            goToAMovie()
        }
        function rejectHandler(){
            //defer.reject
            sadFace();
        }
        introvertService.willHangOutWithMe().then(resolveHandler, rejectHandler);
    }

//




    



});