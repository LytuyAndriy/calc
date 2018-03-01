function Calculator(id){
	this.id=id;
	this.createDOM()
	this.createEvent();
}

Calculator.prototype.createDOM=function(){

	var calc=document.getElementById(this.id);
	if (calc==null){
		alert('Відсутній контейнер заданим Id');
		return
	}
	calc.classList.add('calculator');
	var SQRT=String.fromCharCode(8730);
	var lineButton2=[7,8,9,"/","C"];
	var lineButton3=[4,5,6,"*",SQRT];
	var lineButton4=["="];
	var lineButton5=[1,2,3,"-"];
	var lineButton6=[0,".","+"];
	var lineButton=null;
	for(var i=1;i<=6;i++){
		var divLine=document.createElement('div');
		divLine.classList.add('line');
		calc.appendChild(divLine);
		if (i==1){
			for(var j=1;j<=2;j++){
				var input=document.createElement("input");
				input.setAttribute('type','text');
				input.setAttribute('readonly','true');
				divLine.appendChild(input);
				if (j==1) {
					input.classList.add('top');
				}
				else{
					input.classList.add('button');
					input.setAttribute('value',0);
				}
			
		}
	}
	else{
		switch(i){
			case 2:
			lineButton=lineButton2;
			break;
			case 3:
			lineButton=lineButton3;
			break;
			case 4:
			lineButton=lineButton4;
			break;
			case 5:
			lineButton=lineButton5;
			break;
			case 6:
			lineButton=lineButton6;
			break;
		}
		for(j=0;j<lineButton.length;j++){
			var input=document.createElement('input');
			input.setAttribute('type','button');
			divLine.appendChild(input);
			input.value=lineButton[j];

			if (input.value=='=')
				input.classList.add('equal');
			if (input.value=='0') 
				input.classList.add('zero');
		}
	}
}
}
Calculator.prototype.createEvent=function(){
	var calcSelector='#'+this.id+'.calculator';
	var calc=document.querySelector(calcSelector);
	console.log(calc);
	calc.onmouseover=function(event){
		var target=event.target
		if (target.tagName !=='INPUT') return;
		if (target.getAttribute('type')=='text')return;
		target.classList.add('select');
	}
	calc.onmouseout=function(event){
		var target=event.target;
		target.classList.remove('select');
	}
}