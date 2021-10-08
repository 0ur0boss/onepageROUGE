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
		
		scrollIndicator = document.getElementById('scroll-indicator');
		sections = document.querySelectorAll('section');
		
		var ul = document.createElement('ul');
		
		//build the scroll nav
		for (var i = 0; i < sections.length; i++) {
			
			var count = (i < 10 ? '0' : '') + (i + 1),
				section = sections[i],
				li = document.createElement('li'),
				a = document.createElement('a'),
				id = section.id;
				// if (count = 01){
				// 	a.innerHTML = "🏠"
				// } else if(count = 02){
				// 	a.innerHTML = "💀"
				// }else if(count = 03){
				// 	a.innerHTML = "⛽"
				// }else if(count = 04){
				// 	a.innerHTML = "🌹"
				// }else{
				// 	a.innerHTML = "🔪"
				// }

				
				li.setAttribute('data-title', section.getAttribute('data-title'));
				
				a.innerHTML = count;
				a.href = '#' + id;

			
			console.log("a =",a);
			console.log("id =",id);
			console.log("count =",count);
			
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
