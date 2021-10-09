console.clear();

ScrollIndicator = (function(){
	
	var scrollIndicator,
			sections;
	
	function update(val) {
		
		var winOffset = window.innerHeight * 0.25;
		
		for (var i = 0; i < sections.length; i++) {
			var activeTitle = sections[i].getAttribute('data-title'),
					activeSection = scrollIndicator.querySelector('[data-title=' + activeTitle + ']');

			if (val >= (sections[i].offsetTop - winOffset) && val < sections[i].offsetTop + (sections[i].clientHeight - winOffset)) {
				activeSection.className = 'active';
			} else {
				activeSection.removeAttribute('class');
			}
		}
		
	}
	
	function init() {
		var icone1,icone2,icone3,icone4;
		
		scrollIndicator = document.getElementById('scroll-indicator');
		sections = document.querySelectorAll('section');
		
		icone1 = new Image();
		icone2 = new Image();
		icone3 = new Image();
		icone4 = new Image();

		icone1.src = "img/La Mort de Sardanapale.png";
		icone2.src = "img/Gas.png";
		icone3.src = "img/Stageworkers.png";
		icone4.src = "img/Angel of War.png";

		console.log("icone 1 =",icone1);
		// console.log("icone et src 1 =",icone1.src);

		var ul = document.createElement('ul');
		
		//build the scroll nav
		for (var i = 0; i < sections.length; i++) {
			var count = (i < 10 ? '0' : '') + (i + 1),
				section = sections[i],
				li = document.createElement('li'),
				a = document.createElement('a'),
				id = section.id;
	
				if (count == 01){
					a.innerHTML = "1"
				} else if(count == 02){
					a.appendChild(icone1);
				}else if(count == 03){
					a.appendChild(icone2);
				}else if(count == 04){
					a.appendChild(icone3);
				}else{
					a.appendChild(icone4);
				}

				
				li.setAttribute('data-title', section.getAttribute('data-title'));
				
				// a.innerHTML = count;
				a.href = '#' + id;
			
			// console.log("a =",a);
			// console.log("id =",id);
			// console.log("count =",count);
			
			li.appendChild(a);
			ul.appendChild(li);
		}
		
		scrollIndicator.appendChild(ul);
		
	}
	
	document.addEventListener('DOMContentLoaded', init);
	
	return {
		update: update
	}
	
})();


GlobalScroll = (function() {
	var scrollPos;
	
	function getValue() {
		return scrollPos;
	}
	
	function scrollVal() {
		scrollPos = window.pageYOffset || document.body.scrollTop;
		ScrollIndicator.update(scrollPos);
		requestAnimationFrame(scrollVal);
	}
	
	document.addEventListener('DOMContentLoaded', scrollVal);
	
})();
