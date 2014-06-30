'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('pList',[ '$scope', function($scope) {
			// $scope.message = "Hello This message is from View 1";

			$scope.Projects = [ {
				id : "1",
				Name : "HU ASSIGNMENT",
				Description : "3rd assignment frist project",
				coordinators : [ "vinit", "ralph" ]
			}, {
				id : "2",
				Name : "SQL DATABASE",
				Description : "3rd assignment second project" ,
				coordinators : [ "naga" ]

			} ];

		} ])

.controller('pDetails', [ '$scope', '$routeParams', function($scope,$routeParams) {
	 $scope.message = "Hello This message is from View 1";

	var Details = [ {
		 id : "1",
		 Name : "HUDASSIGNMENT",
		 coordinators : [ "ralph", "vinit" ],

         tasks :[{
        	 
        	 task:"taskname of 1",
        	 priority:"high",
        	 assignedTo:"ralph",
        	 dueDate : "06/08/2014",
             status :"complete" ,
             description:"first project Description of task 1",
        	 createdAt:"06/08/2014",
             isComplete :"0",
            isClosed:""	 
         },{
        	 
        	 task:"taskname of 2",
        	 priority:"low",
        	 assignedTo:"vinit",
        	 dueDate : "06/08/2014",
             status :"complete" ,
        	 description:"first project Description of task 2",
        	 createdAt:"06/08/2014",
         	 isComplete:"",
         	 isClosed:"0"
         }]           
                         
      	},{
		id : "2",
		Name : "sqldatabase",
		Description : "description of 2",
		coordinators : [ "Ralph","naga","vinit" ],
        priority :["High","low","medium"],
        dueDate : "06/08/2014",
        status : ["inprogress ","complete","inprogress"],
        task :	["second project Description of task 1","second project Description of task 2","second project Description of task 3"]
	}];

	
	for (var i = 0; i < Details.length; ++i) {

		var Det = Details[i];
 
		if (Det.id == $routeParams.id) {

			$scope.Details = Det;

		}

	}
} ])

// modal

.controller('createProjectControl', function($scope, $modal, $log) {

	$scope.open = function() {

		var modalInstance = $modal.open({
			templateUrl : 'myModalContent.html',
			controller : 'ModalInstanceCtrl',
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
})

.controller('ModalInstanceCtrl', function($scope, $modalInstance, items) {

	$scope.ok = function() {
		$modalInstance.close($scope.selected.item);
	};

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
});
