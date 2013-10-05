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

	galleryLinks: function() {
		$('#gallery a').on('click', function(){
			console.log('a');
			$(this).preventDefault();
		})
	}
};

OSV.scrollNavigation();
OSV.startScrollSpy();
OSV.galleryLinks();

	
