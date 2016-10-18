angular.module('starter.serializer', [])

.factory('Serializer', function() {

	return {
        // Stara sie utworzyć jeden pakiet z danych z buforu
        // Zwraca `pakiet, resztaDanych` jak sie uda
        // jak buffer jest pusty albo nie ma w nim calego pakiety to zwraca `null`
        // buffer i resztaDanych to https://nodejs.org/api/buffer.html
        // resztaDanych powinna zostac zapisana bo moze zawierac kolejne pakiety
		fromBytes: function(buffer) {
            
		},
        // serializuje pakiet i zwraca buffer
		toBytes: function(packet) {
            
		}
	};
})
