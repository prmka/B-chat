angular.module('starter.serializer', [])

.factory('Serializer', function() {

	return {
		fromBytes: function(buffer) {
            JSON.stringify(buffer.toString('utf8'))
		},
		toBytes: function(packet) {
            JSON.stringify(packet)
		}
	};
})
