function optellen(){
	var array;
	var words = document.getElementById('getallen').value;
	array = (words.split(","));
	var operator = document.getElementById('keuze').value;

 
	for(i=0; i <array.length; i++){
		 array[i] = parseFloat(array[i]);

	}

	var result = array[0];
	for(i=1; i<array.length; i++){
		result = berekenen(result,array[i],operator);

	}

	function berekenen(nummer,nummer2,operator){
		if (operator == '+') {
            result = nummer + nummer2;

        } else if (operator == '-') {
            result = nummer - nummer2;

        } else if (operator == '*') {
            result = nummer * nummer2;

        } 
        return result;
    }
    console.log(result);
    document.getElementById('result').innerHTML = "result:" + result;
}

