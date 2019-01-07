let pageCountries=[],
	pageSummaries={};

$(function(){
	//dom loaded
	
 // $('#world-map').vectorMap({map: 'world_mill'});
  
   map = new jvm.Map({
    container: $('#world-map'),
    map: 'world_mill',
	backgroundColor: "#7bb3d1",
	regionStyle: {
			initial: {
				fill: '#424242',
				"fill-opacity": 1,
				stroke: 'none',
				"stroke-width": 0,
				"stroke-opacity": 1
				},
			hover: {
				fill: 'white',
				"fill-opacity": 0.8,
				cursor: 'mouse'
			},
			selected: {
				fill: '#ff9b30'
			},
			selectedHover: {
			}
		}
  });
  
 // map.setSelectedRegions(highlights);
 
  //load data from excel sheet
  var oReq = new XMLHttpRequest();
	oReq.open("GET", "/data.xlsx", true);
	oReq.responseType = "arraybuffer";

	oReq.onload = function(oEvent) {
	  var arrayBuffer = oReq.response;
		var blob = new Blob([arrayBuffer], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
		
		loadData(blob, dataLoaded);
	};

	oReq.send();
	
	//setup page left and right
	$("#page_left").click(function(){
		changePage(-1);
		updateHighlights();
	});
	$("#page_right").click(function(){
		changePage(1);
		updateHighlights();
	});
});

function updateHighlights()
{
	//console.log(pageCountries[curIndex]);
	map.clearSelectedRegions();
	map.setSelectedRegions(pageCountries[curIndex]);
}

function summariesLoaded(data)
{
	let el=$("<html></html>");
	el.html(data);
	
	let counter=0;
	
	el.find("table.c58 td").each(function(){
		//let title=$(this).find("span.c10.c8,span.c9.c7").first().text().trim();
		let title=$(this).find("span").first().text().trim();
		
		$(this).find("span").first().addClass("orgTitle");
		
		//console.log(title +" exists: "+(title in pageSummaries));
		//console.log(title +" exists: "+(title in pageSummaries));
		if(title in pageSummaries)
		{
			pageSummaries[title].html(getImg(title)+$(this).html());
		
			counter++;
		}
	});
	
	//console.log(pageSummaries["Agora"]);
	console.log(counter);
}

function dataLoaded(result)
{
	//remove all unwanted rows
	for(let i=result.length-1; i>=0; i--)
	{
		if(result[i].Name=="Name")
			result.splice(i, 1);
	
	}
	
	//put all countries in pageCountries
	pageCountries=[];
	
	for(let i=0; i<result.length; i++)
	{
		let cs=[];
		
		if(typeof result[i]["undefined"]!=="undefined")
		{
			let temp=result[i]["undefined"].split(",");
			
			//convert to country codes
			for(let j=0; j<temp.length; j++)
			{
				let code=countryNameToCode(temp[j].trim());
				
				if(Array.isArray(code))
				{
					for(let u=code.length; u>=0; u--)
					{
						if(code[u]==""||!(code[u] in jvmCountries))
							code.splice(u, 1);
					}
					cs=cs.concat(code);
				}else
				{
					if(code!=""&&code in jvmCountries)
						cs.push(code);
				}
			}
			//console.log(cs);
		}		
		
		pageCountries.push(cs);
	}
	
	//alert("got result");
	let container=$("#data_container");

	//create all views and add to list
	for(let i=0; i<result.length; i++)
	{
		let page=$("<div></div>");
		
		page.addClass("page");
		
		//console.log(result[company].Name);
		
		page.css("display","none");
		
		page.html(getImg(result[i].Name)+result[i].Name);
		
		//page.prop("id", "id"+result[i].Name);
		
		pageSummaries[result[i].Name.trim()]=page;
		
		container.append(page);
	}
	
	loadSummaries();
	
	initPageHandler();
	pageChanged();
	updateHighlights();
}