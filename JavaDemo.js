window.init();

function init(){

	/*
	var a = [1,2,4,5]
	for(var i in a)
	{
		console.log(i +' has value -->'+a[i])
	}

	
	for(var property in history)
	{
		console.log(property +'---'+ history[property]);
	}
	

	for(var proper in screen){

		console.log(proper +screen.property)
	}
	*/


	var Dilip =
	{

	title : 'Mean',
	name : 'Dilip',
	id : 23,
	course : 'Diginxt'

	};

	for(var x in Dilip){
		console.log('title---'+Dilip.title);
	}


	var Rohit =
	{

	title : 'Mean',
	name :'Rohit',
	id : 23,
	course : 'Diginxt',

	location :
	{
		street :'Dargah Road',
		city: 'kalyan',
		District: 'Thane',

	},

	learn :function()
	{

		console.log('function called');
	}

	};

	Rohit.learn();

	for(var x in Rohit['location']){
		console.log(x +'------'+ Rohit['location'][x])


	}

	





}