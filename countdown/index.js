(function(){

	var finalDate = new Date(1528541081697);
  var sNum, mNum, hNum, dNum;
	
  function getSeconds(newDate){
  	return Math.floor((finalDate - newDate) / 1000)%60;
  }
  
  function getMinutes(newDate){
  	return Math.floor((finalDate - newDate) / 60000)%60;
  }
  
  function getHours(newDate){
  	return Math.floor((finalDate - newDate) / 3600000)%24;
  }
  
  function getDays(newDate){
  	return Math.floor((finalDate - newDate) / 86400000);
  }
  
  function updateClock(){
    var newDate = new Date();
	  sNum.innerHTML = getSeconds(newDate);
    mNum.innerHTML = getMinutes(newDate);
    hNum.innerHTML = getHours(newDate);
    dNum.innerHTML = getDays(newDate);
  }
    
  window.onload = function(){
  	sNum = document.querySelector(".seconds-container .number");
    mNum = document.querySelector(".minutes-container .number");
    hNum = document.querySelector(".hours-container .number");
    dNum = document.querySelector(".days-container .number");
    var interval = setInterval(updateClock, 1000);
  };
      
})();