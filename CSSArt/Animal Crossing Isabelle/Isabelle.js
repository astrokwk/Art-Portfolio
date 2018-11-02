var pitfall = document.getElementById('pitfall');
var heart = document.getElementById('heart');
var lefteye = document.getElementById('left-eye');
var righteye = document.getElementById('right-eye');
var mouth = document.getElementById('mouth');
var head = document.getElementById('head');


var confuse = document.createElement('div');
confuse.setAttribute('class', 'confuse');



pitfall.addEventListener('click', surprise);

function surprise() {
	
	heart.style.pointerEvents = 'none';
	
	if (lefteye.classList.contains('left-eye')){
		lefteye.classList.remove('left-eye');
		lefteye.classList.add('left-eye-surprise');
	}
	
		if (righteye.classList.contains('right-eye')){
		righteye.classList.remove('right-eye');
		righteye.classList.add('right-eye-surprise');
	}
	
	if(mouth.classList.contains('mouth')) {
		mouth.classList.remove('mouth');
		mouth.classList.add('mouth-surprise');
	}
	
	head.appendChild(confuse);
	document.getElementById('isabelle').classList.add('animation');
	
	
	setTimeout(function(){
		
		heart.style.pointerEvents = 'auto';
		
		lefteye.classList.remove('left-eye-surprise');
		lefteye.classList.add('left-eye');		
		
		righteye.classList.remove('right-eye-surprise');
		righteye.classList.add('right-eye');
		
		mouth.classList.remove('mouth-surprise');
		mouth.classList.add('mouth');
		
		document.getElementById('isabelle').classList.add('animation');
		document.getElementById('isabelle').classList.remove('animation');
		
		confuse.remove();
	}, 2000);
}








var leftcheek = document.getElementById('leftcheek');
var rightcheek = document.getElementById('rightcheek');

var love = document.createElement('div');
love.setAttribute('class', 'love');

var love2 = document.createElement('div');
love2.setAttribute('class', 'love2');


heart.addEventListener('click', admire);

function admire() {
	
	pitfall.style.pointerEvents = 'none';
	
		if (lefteye.classList.contains('left-eye')){
		lefteye.classList.remove('left-eye');
		lefteye.classList.add('left-eye-admire');
	}
	
			if (righteye.classList.contains('right-eye')){
		righteye.classList.remove('right-eye');
		righteye.classList.add('right-eye-admire');
	}
	
	if (leftcheek.classList.contains('cheek')){
		leftcheek.classList.remove('cheek');
		leftcheek.classList.add('cheek-pink');
	}
	
		if (rightcheek.classList.contains('cheek')){
		rightcheek.classList.remove('cheek');
		rightcheek.classList.add('cheek-pink');
	}
	
	
	head.appendChild(love);
	love.appendChild(love2);
	document.getElementById('isabelle').classList.add('animation2');
	
	
		setTimeout(function(){
			
			pitfall.style.pointerEvents = 'auto';
		
		lefteye.classList.remove('left-eye-admire');
		lefteye.classList.add('left-eye');		
		
		righteye.classList.remove('right-eye-admire');
		righteye.classList.add('right-eye');
			
		leftcheek.classList.remove('cheek-pink');
		leftcheek.classList.add('cheek');

		rightcheek.classList.remove('cheek-pink');
		rightcheek.classList.add('cheek');
		
			
		document.getElementById('isabelle').classList.add('animation2');
		document.getElementById('isabelle').classList.remove('animation2');
		
		love.remove();
	
	}, 3000);
	
}







