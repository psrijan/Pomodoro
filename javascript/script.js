var workTime=25;
var restTime=5; 

var timeCalc = function(val) {
	console.log("HI" + val);
	switch(val) {
		case 1: 
			workTime = workTime <= 0? 0 : --workTime; 
			$(".work-time-text").html(workTime);
			break; 
		case 2: 
			workTime=workTime+1;
			$(".work-time-text").html(workTime);
			break; 
		case 3:
			restTime = restTime <= 0? 0 : --restTime; 
			$(".play-time-text").html(restTime);
			break;
		case 4:
			restTime = restTime+1;
			$(".play-time-text").html(restTime);
			break; 
	}
	console.log("WORK TIME: " + workTime);
	console.log("PLAY TIME: " + restTime);

}
