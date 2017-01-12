angular.module('starter.chats', [])

.factory('Chats', function(Bluetooth, $rootScope, $state) {
	
	if( localStorage.getItem('history') == undefined) {
		localStorage.setItem('history', '{}')
	}
	
	var history = JSON.parse(localStorage.getItem('history'))
	var currentChat = { chat: [] }
	
	Bluetooth.onMessage(message => {
		switch(message.type){
			case "text":
				currentChat.chat.push({owner: "his", text: message.text})
				localStorage.setItem('history', JSON.stringify(history))
				$rootScope.$broadcast("newMessage");
			break;
			case "handshake":
				chats = Bluetooth.list();
				for(addr in chats){
					if(chats[addr].name == message.name){
						$state.go("tab.chat", {"chatId": addr})
						return
					}
				}
				alert("Failed to start chat!\nRefresh device list and try again.")
				Bluetooth.disconnect()
			break;
		}
	})

	return {
        // zwraca liste wszystkich czatow
		list: function() {
			return Bluetooth.list();
		},
        // rozpoczyna czat
		startChat: function(addr) {
			Bluetooth.connect(addr)
		},
        // zwraca konkretny czat
		getChat: function(addr) {
			chats = Bluetooth.list();
			currentChat = chats[addr]
			if(currentChat == undefined) currentChat = {}
			if(history[addr] == undefined) history[addr] = []
			currentChat.chat = history[addr]
			return chats[addr];
		},
        // zostaje odpalony kiedy ma zostac wyslana wiadomosc do rozmowcy
        onInput: function(text) {
			if(text == "") return
            Bluetooth.send({
				type: "text",
				text: text,
			})
			currentChat.chat.push({owner: "your", text: text})
			localStorage.setItem('history', JSON.stringify(history))
        },
        // usuwa historie
        clearHistory: function(text) {
			history = {}
			localStorage.setItem('history', JSON.stringify(history))
        }
	};
});