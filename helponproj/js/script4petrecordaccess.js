
$(document).ready(function(e){

    $("input[type='button']").click(function(){  

        //$("script[src='js/en.js']").remove();        
       
        var breedChosen = $("input[name='optradio']:checked").val();  
				var baseurl = "https://api.petfinder.com/pet.find?key=311acd0ca6ee16428a93eb5dafe77634&animal=dog";																																 	
				var zipcode = document.getElementById("zipcod");					
				var endurl = "&output=basic&format=json&callback=?";

				var url = baseurl + "&breed=" + breedChosen + "&location=" + zipcode.value + endurl;		
				alert("url before calling addGetJSONScript function below, is " + url); 

				//result = str.replace('?({"@encoding":"iso-8859-1","@version":"1.0",','');
                		//var pfAPIdata = JSON.parse(result);
				
				$.getJSON(url).success 		
				alert('Data retrieved!'); 

					//"data-123".replace('data-','');					

            (function(pfAPIdata)
                { 
                		//var str = '?({"@encoding":"iso-8859-1","@version":"1.0",';
                		//var petfinder = '"@encoding":"iso-8859-1","@version":"1.0","petfinder"'

                		//pfAPIdata = str.replace('?({"@encoding":"iso-8859-1","@version":"1.0",','');
                		//var pfAPIdata = JSON.parse(pfAPIdata);

                    alert('Data retrieved!'); 
                    //alert('petfinder is  ' + petfinder);
                    //alert('Number of pets received is   ' + pfAPIdata.petfinder.pets.pet.length);
                  
                   // alert('this is data pf pf  ' + pfAPIdata.petfinder.pets.pet); //gives me 3 objects in an array.
                    //pet is an array of options
                    $.each(pfAPIdata, function(index, element) {                    	
                        //for(var i=0; i<10; i++) {
                        	alert("this is after the string of arrays below");
                        	alert("this is the petfinder pfAPIdata.petfinder " + pfAPIdata.petfinder[0].pets[0].pet[0].status);
                        	alert("this is after the string of arrays above");
                        	//console.log("this is output from  pfAPIdata.petfinder.pet['pet']  " + pfAPIdata.petfinder.pets.pet[0].status);
                        	/*console.log("these are the pet options" + pfAPIdata.petfinder.pet.options);
                        	console.log("these are the pet options" + pfAPIdata.petfinder.pet.options.option);
                        	console.log("these are the pets" + pfAPIdata.petfinder.pet.status);
                        	console.log("these are the pets" + pfAPIdata.petfinder.pet.contact);*/

                        	/*Objects are set up using a key and value like...

												person.age = 15;
												If the key value is a variable, then one could access it like...

												var key = "age";
												alert(person[key]);
												Arrays use an integer[1] index and take a value.

												player[1].score += 1000;
												[1] Yes, I know ... in Javascript the integer index is really turned 
												into a string behind the scenes. Ignore that. Think of arrays taking an integer value ESPECIALLY when you think of JSON. */


                        	//[{"options":{"option":[{"$t":"specialNeeds"},{"$t":"hasShots"},{"$t":"altered"},{"$t":"housetrained"}]}
                            //alert('this pet id is ' + i  + pfAPIdata.petfinder.pets.pet[i]);
                            /*alert(' this is iteration data ');
		                        alert(" this is the index  " + index);
		                        alert(" this is the element  " + element);
		                        alert(" this is pet[i]  " + pfAPIdata.petfinder.pets.status{"$t": "A"});
		                        alert(" this is pet[i][\"$t\"]" + pfAPIdata.petfinder.pets.pet[i][status]);*/
		                      	//{console.log(petfinder.pets.pet[i][]);} 
		                        //$('#stage').html('<p> Name: ' + element.petfinder.pets.pet + '<p>'),
		                        //$('#stage').append($('<p> Breed: ' + elememt.petfinder.pets.pet.breed + '<p>'));

		                    // }

                      });  

        				});
		});

	});
			
				/*
				addGetJSONScript = function(newoptions) {
					    var head = document.getElementsByTagName("head")[0],
					        script = document.createElement('script');

					    script.type = 'text/javascript'
					    script.src = 'en.js'
					    head.appendChild(script);
					};

						addGetJSONScript('en');
				*/





    

  
