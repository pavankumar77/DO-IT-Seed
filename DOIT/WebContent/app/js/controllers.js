'use strict';

/* Controllers */

angular.module('myApp.controllers', []).controller('pList',
		[ '$scope', function($scope) {
			// $scope.message = "Hello This message is from View 1";

			$scope.Projects = [ {
				"id" : "1",
				"Name" : "asda",
				"Description" : "dsfhasjdahd",
				"Coordinators" : [ "sbdha", "text" ]
			}, {
				"id" : "2",
				"Name" : "as",
				"Description" : "dsfhasjdahd",
				"Coordinators" : [ " ada" ]

			} ];

		} ])

.controller('pDetails', [ '$scope', '$routeParams', function($scope,$routeParams) {
	// $scope.message = "Hello This message is from View 1";

	var Details = [ {
		"id" : "1",
		"Name" : "asda",
		"Description" : "description 0f 1",
		"Coordinators" : [ "sbdha", "text" ]
	}, {
		"id" : "2",
		"Name" : "as",
		"Description" : "description of 2",
		"Coordinators" : [ " ada" ]

	}

	];

	for (var i = 0; i < Details.length; i++) {

		var Det = Details[i];
 
		if (Det.id == parseInt($routeParams.id)) {

			$scope.Details = Det;

		}

	}
} ]);

// modal

var createProjectControl = function($scope, $modal, $log) {

	$scope.open = function() {

		var modalInstance = $modal.open({
			templateUrl : 'myModalContent.html',
			controller : ModalInstanceCtrl,
			resolve : {
				items : function() {
				}
			}
		});

		modalInstance.result.then(function(selectedItem) {

		}, function() {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};
};

var ModalInstanceCtrl = function($scope, $modalInstance, items) {

	$scope.ok = function() {
		$modalInstance.close($scope.selected.item);
	};

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
};