window.init();

function init()
{


	//---------Creating a Object/array in Javascript-------
/*
		var a = [1,2,4,5]
		for(var i in a)
		{
			console.log(i +' has value -->'+a[i])  //accesing member like array
		}

		
		for(var property in history)
		{
		   console.log(property+'---'+history[property]); 
		}
		

		for(var proper in screen){

			console.log(proper +screen.property) //accesing member using .operator
		}
	

  	//---------Creating a collection in javascript-------

		var Dilip =
		{

		title : 'Mean',
		name : 'Dilip',
		id : 23,
		course : 'Diginxt'

		}
	//Looping through collection...
		for(var x in Dilip)
		{
			console.log('title---'+Dilip.title);
		}



	 //--------------Nesting of Object-------------
		var Rohit =
		{

			title : 'Mean',
			name :'Rohit',
			id : 23,
			course : 'Diginxt',

			location :   //location object declared inside object rohit
			{
				street :'Dargah Road',
				city: 'kalyan',
				District: 'Thane',
			}
		
		};
        
	    //Accesing all nested object value...
			for(var x in Rohit['location'])
			{
				//ways to access object like array than object
				console.log(x +'------'+ Rohit['location'][x])			
			}
		//Accesing particular value in object various way...
			console.log(Rohit.title);
			console.log(Rohit.location.city);

*/

	//----Array containing objects as element (Array of Objects)----- 

		const Students= [

			{
				title : 'Mean',
				name :'Rohit',
				id : 23,
				course : 'Diginxt'			
			},

			{
				title : 'Testing',
				name : 'Dilip',
				id : 25,
				course : 'Diginxt'
			},
			
			{
				title :'Mean',
				name : 'Dheeraj',
				id : 36,
				course : 'Diginxt'
			}
		];

	//----Accesing those object elements from array------
			for (var x in Students)
			{
				console.log(x +'----'+Students[x].id)
			}	

			console.log(Students[2]); //Accesing particular object completely 
			console.log(Students[2].name) // Particular value of object
}
