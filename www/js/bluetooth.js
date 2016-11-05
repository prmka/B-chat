angular.module('starter.bluetooth', ['ionic'])

.factory('Bluetooth', function(Serializer, $ionicPlatform) {

	return {
        // wyszukuje na nowo niezparowane urzadzenia
		refreshList: function() {
			$ionicPlatform.ready(function() {
				networking.bluetooth.getAdapterState(function (adapterInfo) {
				    alert('Adapter ' + adapterInfo.address + ': ' + adapterInfo.name);
				}, function (errorMessage) {
				    alert(errorMessage);
				});
			})
		},
        // Wszystkie zparowane i niezparowane urzadzenia jako array:
        // {
        //     id: "Unikatowe ID",
        //     name: "Nazwa",
        //     paired: true/false
        // }
		list: function() {
            
		},
        // zmienia nazwe bluetooth
        setName: function() {
            
        },
        // laczenie do urzadzen (connectInsecure dla niezparowanych)
        isConnected: function() {
            
        },
        connect: function(id) {
            
        },
        // widocznosc dla niezparowanych
        isVisible: function() {
            
        },
        setVisible: function(visible) {
            
        },
        // szukanie niezparowanych
        isSearching: function() {
            
        },
        setSearching: function(searching) {
            
        },
	};
})
