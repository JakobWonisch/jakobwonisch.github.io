

$(function(){
	//dom loaded
	
  $('#world-map').vectorMap({map: 'world_mill'});
  
  $.ajax({
	  url: "jakobwonisch.github.io/data.xlsx",
	  success: function(data)
	  {
		loadData(data, dataLoaded);
	  }
  })
});


function dataLoaded(result)
{
	alert("got result");
}
