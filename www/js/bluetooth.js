angular.module('starter.bluetooth', ['ionic'])

.factory('Bluetooth', function(Serializer, $ionicPlatform) {


	// struct DevInfo
	// 
	// Struktura opisuje dost?pne informacje o urz?dzeniu
	// FIELDS
	//   id                      ID urz?dzenia
	//   name                    Wy?wietlana nazwa urz?dzenia
	//   paired                  Informacja o aktualnym stanie sparowania urz?dzenia
	/* struct DevInfo {
	     int id;
	     string name;
	     bool paired
	   };
	*/

	return {
		// void refreshList()
		//
		// Aktualizuje list? dost?pnych urz?dze?
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
		// Zwraca list? wszystkich aktualnie dost?pnych urz?dze?,
		// zar�wno tych po??czonych jak i tylko dost?pnych
		//
		// RETURNS
		//   {(id, name, paired)}    Kolekcja list o polach: id, nazwa urzadzenia, czy sparowane
		//
		list: function() {
            // TODO shd
		},


		// void setName(string)
		// 
		// Zmienia wy?wietlan? nazw? urz?dzenia
		//
		// PARAMS
		//   name                     Nowa wy?wietlana nazwa urz?dzenia
        setName: function(name) {
            // TODO shd
        },


		// bool isConnected()
		//
		// Sprawdza czy urz?dzenie jest po??czone z chatem
		//
		// RETURNS
		//   true                      Uda?o si? nawi?za? po??czenie
		//   false                     Urz?dzenie nie jest po??czone
        isConnected: function() {
            // TODO shd
        },


		// void connect(int)
		//
		// ??czy z urz?dzeniem o podanym id
		//
		// PARAMS
		//   id                         ID urz?dzenia, z kt�rym chcemy si? po??czy?
        connect: function(id) {
            // TODO shd
        },


		// bool isVisible()
		//
		// Sprawdza czy urz?dzenie jest widoczne dla niesparowanych urz?dze?
		//
		// RETURNS
		//   true                       Urz?dzenie jest widoczne
		//   false                      Urz?dzenie nie jest widoczne
        isVisible: function() {
            // TODO shd
        },


		// void setVisible(bool)
		//
		// Ustawia widoczno?? urz?dzenia dla niesparowanych urz?dze?
		//
		// PARAMS
		//   visibility                  Widoczno?? urz?dzenie (true = widoczny, false = niewidoczny)
        setVisible: function(visibility) {
            // TODO shd
        },


		// bool isSearching()
		//
		// Sprawdza czy auto-wyszukiwanie nowych urz?dze? jest w??czone
		// 
		// RETURNS
		//   true                        Wykonywany jest auto-update dost?pnych urz?dze?
		//   false                       Dost?pne urz?dzenia nie s? aktualizowane
        isSearching: function () {
            // TODO shd
        },


		// void setSearching()
		//
		// Ustawia auto-wyszukiwanie nowych urz?dze?, z kt�rymi mo?na si? po??czy?
		// 
		// PARAMS
		//   searching                    Ustawia auto-wyszykiwanie (true = w??czone, false = wy??czone)
        setSearching: function(searching) {
            // TODO shd
        }
	};
})
