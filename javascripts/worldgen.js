var c=document.getElementById("worldCanvas");
var ctx=c.getContext("2d");
var log=document.getElementById("log");

function create2DArray(rows){
	var arr = [];
	for(var i = 0;i < rows;i++){
		arr[i] = [];
	}
	return arr;
}

function Site(x, y, type) {
	this.x = x;
	this.y = y;
	this.type = type;
}

function genClick(){
	//for(i=0;i<10;i++){
    //	ctx.fillStyle="#FF0000";
    //	ctx.fillRect(i*5,10+i*5,5,5);
	//}

	//for(i=0;i<10;i++){
	    //ctx.fillStyle="#008F00";
	    //ctx.fillRect(10+i*5,10+i*5,3,3);
	//}
	
	
	//create array for world
	var worldArr = create2DArray(worldCanvas.height);
	log.innerHTML="Created world of size " + worldArr.length + ".<br /> ";
	log.innerHTML="Seeding continents.<br />";
	
	//select 10 random sites and add them to an array
	var newSiteList = [];
	var oldSiteList = [];
	while(newSiteList.length < 10){
		var xLoc = Math.floor((Math.random()*100));
		var yLoc = Math.floor((Math.random()*100));
		var count = 0; //If this is greater than 1 a site is possibly dupicated and ignored
		//add first site
		if(newSiteList.length == 0){
			newSiteList.push(new Site(xLoc,yLoc,"LAND"));
			log.innerHTML+="Added site: 1 "+ " (" + xLoc + "," + yLoc 
				+ ") - Land.<br />";
		}
		//go through the array and test for duplicates
		for(var i = 0;i < newSiteList.length;i++){
			if(newSiteList[i].x == xLoc){
				if (newSiteList[i].y == yLoc) {count++};
			}
		}
		if(count == 0){
			newSiteList.push(new Site(xLoc,yLoc,"LAND"));
			log.innerHTML+="Added site: " + newSiteList.length 
				+ " (" + xLoc + "," + yLoc + ") - Land<br />";
		}
	}
	//draw the initial sites on the canvas
	for (var s in newSiteList) {
		ctx.fillStyle="#008F00";
		var site = newSiteList[s];
		ctx.fillRect(site.x*3,site.y*3,3,3);
		log.innerHTML+="Painting at: " + site.y*3 + "<br />";
	}

	log.innerHTML+="Creating the land and the sea.<br />";
	//while the map still has open spaces keep going through the list
	//TODO:complete this when 'complete' logic is ready to go
	var complete=0;
	//while(complete==0){

		for (var i = newSiteList.length - 1; i >= 0; i--) {
			//select site at top of newSiteList and move it to oldSiteList
			var site = newSiteList.shift();
			oldSiteList.push(site);
			//go through site neighbours, check if they are in oldSiteList
			for(var i = -1; i<2; i++){
				for(var j = -1; j<2; j++){
					if(i==0 && j==0){continue;};
					
				}
			}

			//if the site is water then make all nearby sites not in oldSiteList also water

			//if the neighbour is not in oldSiteList and current site is land randomly determine if water or land
		}

		//for loop to check if the world is full or not		
		var completionTrack=0;
		for (var i = 0; i < 100*100; i++) {			
			for(var j = 0; j < 100*100; j++){
				for(var s in oldSiteList){
					if (s.x==i && s.y==j) {completionTrack++;};
					if (completionTrack==100) {complete=1;};
				}
			}
		}
	//}

	log.innerHTML+="END!";
}