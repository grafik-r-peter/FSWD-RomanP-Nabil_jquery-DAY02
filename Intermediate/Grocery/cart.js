$(document).ready(function(){
	for(var i = 0; i < nab.length; i++){
		var res=("<div class='cart'><img class='img' src='img/"+nab[i].Picture+"'><p>"+nab[i].price+"</p><p>"+nab[i].status+"</p><button class='btn'>buy</button><p class='result'>"+nab[i].ammount+"</p><br>");
		$("#container").prepend(res);
	}
		/*$(".btn").click(function(){
			$(this).parent().slideToggle(500);*/

		});

			function buy(itemsNumber,classNumber){
		document.getElementsByClassName("result")[classNumber].innerHTML = itemsNumber + 1 ;
	}

		for(let j =0 ; j < nab.length ; j++){
		document.getElementsByClassName('btn')[j].onClick = function(){
			buy(nab[j].ammount,j);
		}
	};

	/*$(".btn").click(function(){
		$(this).parent().prepend(res);

	});*/
