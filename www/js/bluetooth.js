angular.module('starter.bluetooth', ['ionic'])


.factory('Bluetooth', function(Serializer, $ionicPlatform) {

	return {

		/// struct DevInfo
		/// 
		/// Struktura opisuje dostepne informacje o urzadzeniu
		/// FIELDS
		///   id                      ID urzadzenia
		///   name                    Wyswietlana nazwa urzadzenia
		///   paired                  Informacja o aktualnym stanie sparowania urzadzenia
		DevInfo: function () {
			return {
				dev_id: -1,
				dev_name: "uninitialized",
				dev_paired: false
			};
		},
		
		/// DevInfo bt_devinfo
		/// zawiera informacje o lokalnym urzadzeniu  
		bt_localdevifno: {},

		/// {id, DevInfo} bt_devmap
		/// Mapa znalezionych urzadzen
		bt_devmap: {/* (id, devinfo) */},

		/// bool bt_listautoupdate
		/// Flaga ustawiajaca autoupdate szukanych urzadzen
		bt_listautoupdate: false,

		/// bool bt_issearching
		/// Flaga mowiaca czy aktualnie sa szukane urzadzenia
		bt_issearching: false,

		/// bool isconnected
		/// Flaga mowiaca o tym czy jestesmy polaczeni z czatem
		bt_isconnected: false,

		/// bool isvisible
		/// Flaga mowiaca o widocznosci urzadzenia
		bt_isvisible: false,
		

		/// void init()
		/// Inicjalizuje modul bt
		init: function() {
			this.bt_localdevifno = this.DevInfo();
			this.bt_localdevinfo.dev_id = 0;
			this.bt_localdevifno.dev_name = "noname";
		},


		/// void refreshList()
		///
		/// Aktualizuje liste dostepnych urzadzen
		refreshList: function () {

			// HACK
		/*	$ionicPlatform.ready(function() {
				networking.bluetooth.getAdapterState(function (adapterInfo) {
				    alert('Adapter ' + adapterInfo.address + ': ' + adapterInfo.name);
				}, function (errorMessage) {
				    alert(errorMessage);
				});
			})*/
		},
        

		/// [{int, string, bool}] list()
		///
		/// Zwraca liste wszystkich aktualnie dostepnych urzadzen,
		/// zarowno tych polaczonych jak i tylko dostepnych
		///
		/// RETURNS
		///   [{id, name, paired}]    Kolekcja list o polach: id, nazwa urzadzenia, czy sparowane
		///
		list: function() {
			var devs = [];

			// HACK fix later
			for(obj in this.bt_devmap) {
				devs += { 
					'id': this.bt_devmap[obj].dev_id, 
					'name': this.bt_devmap[obj].dev_name, 
					'paired': this.bt_devmap[obj].dev_paired
				};
			}

			return devs;
		},


		/// void setName(string)
		/// 
		/// Zmienia wyswietlana nazwe urzadzenia
		///
		/// PARAMS
		///   name                     Nowa wyswietlana nazwa urzadzenia
        setName: function(name) {
        	this.bt_localdevifno.name = name;
			// TODO shd
        },


		/// bool isConnected()
		///
		/// Sprawdza czy urzadzenie jest polaczone z chatem
		///
		/// RETURNS
		///   true                      Udalo sie nawiazac polaczenie
		///   false                     Urzdzenie nie jest polaczone
        isConnected: function() {
        	return this.bt_isconnected;
        },


		/// void connect(int)
		///
		/// polacz z urzadzeniem o podanym id
		///
		/// PARAMS
		///   id                         ID urzadzenia, z ktrrym chcemy sie polaczyc
        connect: function(id) {
            // TODO shd
        },


		/// bool isVisible()
		///
		/// Sprawdza czy urzadzenie jest widoczne dla niesparowanych urzadzen
		///
		/// RETURNS
		///   true                       Urzadzenie jest widoczne
		///   false                      Urzadzenie nie jest widoczne
        isVisible: function() {
        	return this.bt_isvisible;
        },


		/// void setVisible(bool)
		///
		/// Ustawia widocznosc urzadzenia dla niesparowanych urzadzen
		///
		/// PARAMS
		///   visibility                  Widocznosc urzadzenie (true = widoczny, false = niewidoczny)
        setVisible: function(visibility) {
        	this.bt_isvisible = true;
        	// TODO shd
        },


		/// bool isSearching()
		///
		/// Sprawdza czy auto-wyszukiwanie nowych urzadzen jest wlaczone
		/// 
		/// RETURNS
		///   true                        Wykonywany jest auto-update dostepnych urzadzen
		///   false                       Dostepne urzadzenia nie sa automatycznie aktualizowane
        isSearching: function () {
        	return this.bt_issearching;
        },


		/// void setSearching()
		///
		/// Ustawia auto-wyszukiwanie nowych urzadzen, z ktorymi mozna sie polaczyc
		/// 
		/// PARAMS
		///   searching                    Ustawia auto-wyszykiwanie (true = wlaczone, false = wylaczone)
        setSearching: function(searching) {
        	this.bt_issearching = true;
			// TODO shd
        }
	};
})
