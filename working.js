
let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenvalue = "";
for(let item of buttons){
	screenvalue="";
	item.addEventListener('click' , (e)=>{
		let buttonText = e.target.innerText;
		if (buttonText=='*') {
			buttonText = '*';
			screenvalue += buttonText
			screen.value += buttonText;
		}
		else if (buttonText=='C') {
			screenvalue="";
			screen.value = "";
		}
		else if (buttonText=='/') {
			screenvalue += buttonText
			screen.value += buttonText;
		}
		else if (buttonText=='+') {
			screenvalue += buttonText
			screen.value += buttonText;
		}
		else if (buttonText=='-') {
			screenvalue += buttonText
			screen.value += buttonText;
		}
		else if (buttonText=='=')
		{
			screen.value = eval(screenvalue);
			console.log(screenvalue)
			console.log("bingooo")
		}
		else if (buttonText=='1')
		{
			screenvalue += buttonText
			screen.value += buttonText;
			//screen.value = eval(screenvalue);
		}
		else if (buttonText=='2')
		{
			screenvalue += buttonText
			screen.value += buttonText;
			//screen.value = eval(screenvalue);
		}

		else if (buttonText=='3')
		{
			screenvalue += buttonText
			screen.value += buttonText;
			//screen.value = eval(screenvalue);
		}
		else if (buttonText=='4')
		{
			screenvalue += buttonText
			screen.value += buttonText;
			//screen.value = eval(screenvalue);
		}
		else if (buttonText=='5')
		{
			screenvalue += buttonText
			screen.value += buttonText;
			//screen.value = eval(screenvalue);
		}
		else if (buttonText=='6')
		{
			screenvalue += buttonText
			screen.value += buttonText;
			//screen.value = eval(screenvalue);
		}
		else if (buttonText=='7')
		{
			screenvalue += buttonText
			screen.value += buttonText;
			//screen.value = eval(screenvalue);
		}
		else if (buttonText=='8')
		{
			screenvalue += buttonText
			screen.value += buttonText;
			//screen.value = eval(screenvalue);
		}
		else if (buttonText=='9')
		{
			screenvalue += buttonText
			screen.value += buttonText;
			//screen.value = eval(screenvalue);
		}
		else if (buttonText=='0')
		{
			screenvalue += buttonText
			screen.value += buttonText;
			//screen.value = eval(screenvalue);
		}

	//screenvalue += buttonText	

	})

}