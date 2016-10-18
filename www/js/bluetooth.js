angular.module('starter.bluetooth', [])

.factory('Bluetooth', function(Serializer, Chats) {
    // Trzeba jeszcze jakis plugin znalesc bo https://www.npmjs.com/package/cordova-plugin-bluetooth-serial nie moze laczyc sie telefon-telefon
    // Co ma robic:
    // - odpala bt na starcie
    // - subskrybuje do RawData i zapisuje to do bufferu.
    // - przekazuje buffer do serializera tak dlugo az on przestanie zwracac pakiety. patrz Serializer.fromBytes()
    // - przekazuje pakiety do Chats.onMessage()
    // - co jakies 30s robi discoverUnpaired zapisujac co znajdzie i zapominajac od poprzednim szukaniu
    // - i uzupelnij funkcje

	return {
        // wyszukuje na nowo niezparowane urzadzenia
		refreshList: function() {
            
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
