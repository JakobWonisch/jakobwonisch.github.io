

$(function(){
	//dom loaded
	
  $('#world-map').vectorMap({map: 'world_mill'});
  
  //load data from excel sheet
  var oReq = new XMLHttpRequest();
	oReq.open("GET", "/data.xlsx", true);
	oReq.responseType = "arraybuffer";

	oReq.onload = function(oEvent) {
	  var arrayBuffer = oReq.response;
		var blob = new Blob(arrayBuffer, {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
		
		loadData(blob, dataLoaded);
	};

	oReq.send();
});


function dataLoaded(result)
{
	alert("got result");
}
