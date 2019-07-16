(() => {
	console.log("heyyyy");

	// set up ur variable 
	let mobileNav = document.querySelector('.nav'),
		navPanel = document.querySelector('#burgerCon'),
		navLinks = navPanel.querySelectorAll('a');

	function toggleNav(event) {
		//e is the event object. by default, anchor tags try to navigate somewhere, we don't want that to happen,
		// so prevent that default behaviour and write your own
		event.preventDefault();

		console.log('should show nav dropdown');

		//this should only fire when you click on an anchor tag -> "this" is the element you're clicking on
		//and it has a default nodeName (look in the inspector panel to find it)

		if(this.nodeName == "A") {
			debugger;
		 // We clicked on an anchor tag, so do some navigation
		 window.scrollTo({
		 	//we can ask the window to scroll to an element on the page => smoothscroll effect
		 	top: this.offsetTop,
		 	behavior: 'smooth'
		 })
		}

		//make the mobile nav show ip when you click on the nav link at the top right 
		//and make it go awat again on a second click
		navPanel.classList.toggle('show-mobile-nav');
	}

	// these are the trigger that fire off our functionally (when the user clicks on something)
	mobileNav.addEventListener('click', toggleNav);
	navLinks.forEach(link => link.addEventListener('click', toggleNav));
	})();