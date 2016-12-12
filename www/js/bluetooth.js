angular.module('starter.bluetooth', ['ionic'])

.factory('Bluetooth', function(Serializer, $ionicPlatform) {


	// struct DevInfo
	// 
	// Struktura opisuje dostepne informacje o urzadzeniu
	// FIELDS
	//   id                      ID urzadzenia
	//   name                    Wyswietlana nazwa urzadzenia
	//   paired                  Informacja o aktualnym stanie sparowania urzadzenia
	/* struct DevInfo {
	     int id;
	     string name;
	     bool paired
	   };
	*/

	return {
		// void refreshList()
		//
		// Aktualizuje liste dostepnych urzadzen
		refreshList: function () {

			// HACK
			$ionicPlatform.ready(function() {
				networking.bluetooth.getAdapterState(function (adapterInfo) {
				    alert('Adapter ' + adapterInfo.address + ': ' + adapterInfo.name);
				}, function (errorMessage) {
				    alert(errorMessage);
				});
			})
		},
        

		// {(int, string, bool)} list()
		//
		// Zwraca liste wszystkich aktualnie dostepnych urzadzen,
		// zarowno tych polaczonych jak i tylko dostepnych
		//
		// RETURNS
		//   {(id, name, paired)}    Kolekcja list o polach: id, nazwa urzadzenia, czy sparowane
		//
		list: function() {
            // TODO shd
		},


		// void setName(string)
		// 
		// Zmienia wyswietlana nazwe urzadzenia
		//
		// PARAMS
		//   name                     Nowa wyswietlana nazwa urzadzenia
        setName: function(name) {
            // TODO shd
        },


		// bool isConnected()
		//
		// Sprawdza czy urzadzenie jest polaczone z chatem
		//
		// RETURNS
		//   true                      Udalo sie nawiazac polaczenie
		//   false                     Urzadzenie nie jest polaczone
        isConnected: function() {
            // TODO shd
        },


		// void connect(int)
		//
		// polacz z urzadzeniem o podanym id
		//
		// PARAMS
		//   id                         ID urzadzenia, z ktrrym chcemy sie polaczyc
        connect: function(id) {
            // TODO shd
        },


		// bool isVisible()
		//
		// Sprawdza czy urzadzenie jest widoczne dla niesparowanych urzadzen
		//
		// RETURNS
		//   true                       Urzadzenie jest widoczne
		//   false                      Urzadzenie nie jest widoczne
        isVisible: function() {
            // TODO shd
        },


		// void setVisible(bool)
		//
		// Ustawia widocznosc urzadzenia dla niesparowanych urzadzen
		//
		// PARAMS
		//   visibility                  Widocznosc urzadzenie (true = widoczny, false = niewidoczny)
        setVisible: function(visibility) {
            // TODO shd
        },


		// bool isSearching()
		//
		// Sprawdza czy auto-wyszukiwanie nowych urzadzen jest wlaczone
		// 
		// RETURNS
		//   true                        Wykonywany jest auto-update dostepnych urzadzen
		//   false                       Dostepne urzadzenia nie sa automatycznie aktualizowane
        isSearching: function () {
            // TODO shd
        },


		// void setSearching()
		//
		// Ustawia auto-wyszukiwanie nowych urzadzen, z ktorymi mozna sie polaczyc
		// 
		// PARAMS
		//   searching                    Ustawia auto-wyszykiwanie (true = wlaczone, false = wylaczone)
        setSearching: function(searching) {
            // TODO shd
        }
	};
})
