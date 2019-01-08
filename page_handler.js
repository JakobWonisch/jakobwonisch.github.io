let pages,
	curIndex=0, prevIndex=0;

function initPageHandler()
{
	pages=$(".page").toArray();
	
}

function changePage(dir)
{
	prevIndex=curIndex;
	curIndex=(curIndex+pages.length+dir)%pages.length;
	
	//alert("page changed");
	
	pageChanged();
}

function pageChanged()
{
	pages[prevIndex].style.display="none";
	
	pages[curIndex].style.display="inline-block";
	
	
	let top=$(pages[curIndex]).offset().top,
		yOffset=$(window).height()*0.1;
	
	if(top<yOffset)
		$(pages[curIndex]).css({position: "absolute", top: yOffset});
	//console.log();
}