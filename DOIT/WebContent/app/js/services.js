'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var asd = angular.module('myApp.services', []);
 

asd.service( 'projectServices',function() {	
	var projectDetails = [{
		 id : "1",
		 name : "HU ASSIGNMENT",
		 coordinators : [ "ralph", "vinit" ],
		 description :"decription of 1",
         tasks :[{
       	 
			       	 task:"taskname of 1",
			       	 priority:"high",
			       	 assignedTo:"ralph",
			       	 dueDate : "06/08/2014",
			         status :"complete" ,
			         description:"first project Description of task 1",
			       	 createdAt:"06/08/2014",
           	 
         		},{
       	 
			       	 task:"taskname of 2",
			       	 priority:"low",
			       	 assignedTo:"vinit",
			       	 dueDate : "06/08/2014",
			         status :"complete" ,
			       	 description:"first project Description of task 2",
			       	 createdAt:"06/08/2014"
			        	 
			        }]
       
	},{
    		id : "2",
    		name : "sqldatabase",
    		coordinators : [ "Ralph","chi","vinit" ],
    		description :"description of 1",
    		tasks :[{
		           	 
		           	 task:"taskname of 1",
		           	 priority:"high",
		           	 assignedTo:"ralph",
		           	 dueDate : "06/08/2014",
		             status :"complete" ,
		             description:"secon project Description of task 1",
		           	 createdAt:"06/08/2014"
		              
            },{
           	 
		           	 task:"taskname of 2",
		           	 priority:"low",
		           	 assignedTo:"vinit",
		           	 dueDate : "06/08/2014",
		             status :"inprogress" ,
		           	 description:"second project Description of task 2",
		           	 createdAt:"06/08/2014"
		            	 
            }]  
	    
	    } ];    
            
     this.list = function(){
    	 
    	    return projectDetails;
    	 
    	 
     };
	    
	
     this.save = function(projectDetail) {
 	
    	projectDetail.id = projectDetails.length;
 		projectDetails.push(projectDetail);
 		
        }	
	});
                       
	


