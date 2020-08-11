function toggleContact(id, id2) {
	if (id) {
		Effect.toggle(id, 'blind', {transition: Effect.Transitions.sinoidal});
	}

	if (id2) {
		Effect.toggle(id2, 'slide');
		//$(id2).toggle();
	}
}

var currentSwap = "";
function swapDropDowns(id, btn) {
	var currentID = currentSwap;
	
	// hiding
	if (currentID == id) {
		new Effect.toggle('expandadiv_container', 'blind', {transition: Effect.Transitions.sinoidal});
		new PeriodicalExecuter(function(pe) {
			$(id).hide();
			pe.stop();
		}, 1.0);
		currentSwap = "";

	// showing
	} else if (currentID == "") {
		$(id).show();
		new Effect.toggle('expandadiv_container', 'blind', {transition: Effect.Transitions.sinoidal});
		currentSwap = id;

	// swapping
	} else if (!btn) {
		new Effect.toggle(currentID, 'appear', {duration: 0.3});
		new Effect.toggle(id, 'appear', {delay: 0.3, duration: 0.3});
		
		/*
		new Effect.Parallel([
			new Effect.Fade(currentID, {sync: true}), 
			new Effect.Appear(id, {sync: true}) 
		], { 
			duration: 0.3
		});
		*/
		
		currentSwap = id;
	}
	
	if (btn) {
		Effect.toggle(btn, 'slide');
	}
}

Event.observe(window, "load", function(event) {
	if ($("contactEmailF")) {
		$("contactEmailF").hide();
	}
});
