'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
 

.controller('pList',[ '$scope','projectServices', function($scope,projectServices) {
			// $scope.message = "Hello This message is from View 1";
	$scope.Projects = projectServices.list();

}])


		
.controller('pDetails', [ '$scope', '$routeParams','projectServices', function($scope,$routeParams,projectServices) {
	 $scope.message = "Hello This message is from View 1";


                         
      var Details = projectServices.list();

	
	for (var i = 0; i < Details.length; ++i) {

		var Det = Details[i];
 
		if (Det.id == $routeParams.id) {

			$scope.Details = Det;

		};

	}
} ])

// modal

.controller('createProjectControl', function($scope, $modal, $log) {

	$scope.open = function() {

		var modalInstance = $modal.open({
			templateUrl : 'myModalContent.html',
			controller : 'ModalInstanceCtrl'
			
			
		})
		;
	};
})

.controller('ModalInstanceCtrl',function($scope, $modalInstance,projectServices) {

	$scope.ok = function() {
		
		
		 
		var newProject ={
				 
				 name:this.newProject.name ,
				 description:this.newProject.description,
				 coordinators:[this.newProject.coordinator]	 
				 
		                 };
		 
		projectServices.save(newProject);
		
		
		
		$modalInstance.close();
	};

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
});
