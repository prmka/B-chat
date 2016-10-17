angular.module('starter.chats', [])

.factory('Chats', function(Bluetooth) {
    // Co ma robic:
    // - zapamietuje historie czatow (fajnie jakby w pliku czy cos ale moze byc w tabelce)
    // - decyduje co zrobic z przychodzacym message
    // - i reszta funkcji

	// Some fake testing data
	var chats = [{
        id: "1-2-3-4",
        paired: true,
        name: "Nazwa",
        chat: [
            {text: "dsafwew", yours: true},
            {text: "dfghhthe", yours: true},
            {text: "sdfsdfs", yours: false},
        ]
	}, {
        id: "2-2-3-4",
        paired: true,
		name: 'Max Lynx',
        chat: [
            {text: "xcdgd", yours: true},
            {text: "dsd", yours: true},
            {text: "dsfsd", yours: false},
        ]
	}, {
        id: "3-2-3-4",
        paired: true,
		name: 'Adam Bradleyson',
        chat: [
            {text: "hytjyr", yours: false},
            {text: "sdfsdf", yours: true},
            {text: "hytjyu", yours: false},
        ]
	}, {
        id: "4-2-3-4",
        paired: true,
		name: 'Perry Governor',
        chat: [
            {text: "sdvtrj", yours: false},
            {text: "43trty", yours: false},
            {text: "ytjt", yours: false},
        ]
	}, {
        id: "5-2-3-4",
        paired: false,
		name: 'Mike Harrington',
        chat: [
            {text: "sdf3yty56n", yours: true},
            {text: "fefgtrh", yours: true},
            {text: "sdfsds", yours: true},
        ]
	}];

	return {
        // zwraca liste wszystkich czatow
		list: function() {
			return chats;
		},
        // zwraca konkretny czat
		get: function(chatId) {
			for (var i = 0; i < chats.length; i++) {
				if (chats[i].id === parseInt(chatId)) {
					return chats[i];
				}
			}
			return null;
		},
        // zostaje odpalony kiedy przychodzi pakiet od rozmowcy
        onMessage: function(message) {
            
        },
        // zostaje odpalony kiedy ma zostac wyslana wiadomosc do rozmowcy
        onInput: function(text) {
            
        }
	};
});
