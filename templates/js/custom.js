var OSV = {
	scrollNavigation: function() {
		$('.nav li a').bind('click', function(e) {
            e.preventDefault();
            $('html,body').scrollTo(this.hash, this.hash);
        });
	},
	startScrollSpy: function() {
		$('#osv-navbar').scrollspy();
	}

};

OSV.scrollNavigation();
OSV.startScrollSpy();

	
