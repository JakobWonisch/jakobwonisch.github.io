let imgs={
"Agora":52,
"Alfanar":30,
"Amani Institute":49,
"Ashoka":22,
"Bonventure":5,
"Boost Aid for Social Entrepreneurship by Training":2,
"Centre for Social Innovation":33,
"Deshpande Foundation":12,
"Echoing Green":24,
"Enactus":46,
"Endeva":40,
"Entrepreneurship School":27,
"Enviu":50,
"Euforia":42,
"European Social Innovation Competition":11,
"EY - Entrepreneur of the Year":28,
"Facebook Social Entrepreneurship Award":45,
"Fledge":18,
"Fossil Foundation":31,
"Global Social Entrepreneurship Network":37,
"Global Social Venture Competition":13,
"Global Center for Social Entrepreneurship Networks":20,
"Halcyon":51,
"HKCSS Impact Incubator":39,
"Hult Prize":26,
"Impact Engine":19,
"Makesense":16,
"Masschallenge":53,
"Middlesex University Online Course":3,
"Miller Center for Social Entrepreneurship":29,
"Ogunte":44,
"Orange Social Venture Prize":17,
"PlusAcumen":6,
"Schwab Foundation for Social Entrepreneurship":38,
"Seakademie":54,
"SEED Initiative":14,
"Seed Stars":25,
"Segal Family Foundation":34,
"Singularity University":8,
"Social Change Nation":10,
"Social Enterprise Academy":48,
"Social Enterprise Institute":47,
"Social Entrepreneurship Coach":36,
"Social Entrepreneurship Corps":56,
"Society Profits":4,
"Taproot Foundation":41,
"The Chivas Venture":57,
"The Difference Incubator":7,
"The School for Social Entrepreneurs":1,
"The Skoll Foundation":23,
"Uncharted":21,
"UnLtd":32,
"Unreasonable Group":58,
"Village Capital":43,
"Vulcan Impact Investing":15,
"Y-Combinator":35,
"Ygap":9,
"Yunus Social Business":55,
"Google Foundation Award":1
}

function getImg(name)
{
	name=name.trim();
	
	if(!(name in imgs)||typeof imgs[name]=="undefined")
	{
		//console.log(name+" not found in img list.");
		return "";
	}
	
	return "<div class=\"logo_container\"><img class=\"logo\" src=\"images\\image"+imgs[name]+".png\"></img></div>"
}