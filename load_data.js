var callback;

function loadSummaries()
{
	$.ajax({
    url:'summaries.html',
    success: function (data){
		//console.log(data);
		summariesLoaded(data);
    }
  });
}

function loadData(file, callback) {
	
	//alert("loading test data"+file);
	
	this.callback=callback;
	
	var reader = new FileReader();

	reader.onload = function(e) {
	  var data = e.target.result;
	  var workbook = XLSX.read(data, {
		type: 'binary'
	  });

	  workbook.SheetNames.forEach(function(sheetName) {
		// Here is your object
		var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
		var json_object = JSON.stringify(XL_row_object);
		var array_object=JSON.parse(json_object);
		
		array_object.sort(compare);
		
		//console.log(array_object);

		callback(array_object);
	  })

	};

	reader.onerror = function(ex) {
	  console.log(ex);
	};

	reader.readAsBinaryString(file);
}

function compare(a,b) {
  if (a.Name < b.Name)
    return -1;
  if (a.Name > b.Name)
    return 1;
  return 0;
}