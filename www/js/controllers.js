angular.module('starter.controllers', [])

.controller('SettingsCtrl', function($scope, Bluetooth) {
	$scope.settings = {
		visible: Bluetooth.isVisible(),
		searching: Bluetooth.isSearching(),
	};
	Bluetooth.refreshList()
})

.controller('PeopleCtrl', function($scope, Chats) {
	$scope.chats = Chats.all();
	$scope.remove = function(chat) {
		Chats.remove(chat);
	};
})

.controller('ChatCtrl', function($scope, $stateParams, $interval, Chats) {
	$scope.other = Chats.get($stateParams.chatId);
	var c = 0;
	$interval(() => $scope.count = c++, 500)
});
