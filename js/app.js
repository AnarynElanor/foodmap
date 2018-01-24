/*
  setTimeout(function() {
	    $("#splash").fadeOut(500);
	},3000); /*oculta la pantalla inicial
	setTimeout(function() { /*Muestra la pantalla Principal
	    $("#main").fadeIn(500);
	},3000);
    

    paintRestaurantsHtml();




});*/


function loadPage() {

	setTimeout(function() {
	    $("#splash").fadeOut(500);
	},3000); /*oculta la pantalla inicial*/
	setTimeout(function() { /*Muestra la pantalla Principal*/
	    $("#main").fadeIn(500);
	},3000);
    

    paintRestaurantsHtml(data);

}




function paintRestaurantsHtml (restaurant) {

  for(var i=0; i<= restaurant.length-1; i++){

  	console.log(restaurant[i]);

  }






  /*// crear elementos con DOM
  var $restaurant = $("<article />", {
    "class": "panel panel-default"
  });
  var $containerRestaurantName = $("<h4 />");
  var $containerType = $("<p />");
  var  $containerPrice = $("<p />");
  

  // Agregamos atributos y eventos a los elementos creados en el dom
  

  // Asignando valores

  $containerType.text(restaurant.type);
  $containerRestaurantName.text(restaurant.name);
  $containerPrice.text(restaurant.price);

  $restaurant.append($containerRestaurantName);
  $restaurant.append($containerType);
  $restaurant.append($containerPrice);
  // console.log($newContact);
  // agregamos lo que creamos con el Dom a un elemento existente del html


  $("#section-food").prepend($restaurant);*/
  
}



function filterOptions (){
  var searchOption = $("#filtro").val().toLowerCase();
    if($("#filtro").val().trim().length > 0) {
        var filteredData = data.filter(function(restaurant) {
           console.log(restaurant);
            return restaurant.type.toLowerCase().indexOf(searchOption) >= 0;
				});
				$("#section-food").empty();
				filteredData.forEach(function(restaurant){
					paintRestaurantsHtml(restaurant);
				});
			} else {
				$("#section-food").empty();
				data.forEach(function(restaurant){
					paintRestaurantsHtml(restaurant);
				});      
			}
      
    

  
  console.log(filterOptions);

  
}






$(document).ready(loadPage);