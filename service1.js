angular.module('app').service('service1', function($q, $timeout,$http){
    //Basic example
    
    this.getMeAUnicorn = function(){
        var deferredObject = $q.defer();
        
        $timeout(function(){
            
            var boxOfToys = {
                squirrels: "Nut breaking kind",
                goldedGoose: "Really golden",
                snozberries: "Super Snozzy"
            }
            
            deferredObject.resolve(boxOfToys);
            
            //deferredObject.reject
        }, 1);
        //  
        
        return deferredObject.promise;
    }
    
});



angular.module('app').service('pokemonService', function($http, $q){
    // Config example
    
    //keep the pokemon we found
    var pokeCenterPokemon = null;
    
    this.getPokemon = function(){
        //defer
        var defer = $q.defer();
        
        //if pokemeon
        if(pokeCenterPokemon){
            //resolve pokemon
            defer.resolve(pokeCenterPokemon);   
        }
        else {
        //else 
            //http pokemon
            var httpPromise = $http.get("http://pokeapi.co/api/v2/pokemon/1");
                //resolve pokemon
            
            httpPromise.then(function(pokemon){
                  defer.resolve(pokemon.data);
                  pokeCenterPokemon = pokemon.data;
            })
        }
    
    //return promise
        return defer.promise;
    }
});

angular.module('app').service('multiPointDataService', function($http, $q){
    // Multi-data example
    
    
});






