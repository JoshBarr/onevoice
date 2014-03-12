(function(window, document, $) {

    var site = {
        init: function() {
    		
        },
        showDownloadLink: function(url, el) {
			var $el = $("[data-download]");
			// var $fb = $("[data-likebox]");
			$el.addClass("toxic__active");
			$el.hide();
			$el.html("<a href='https://soundcloud.com/nakita-turner-music' class='btn btn-primary'>Thanks! Grab the track on SoundCloud</a>");
			$el.fadeIn();
            // $fb.fadeOut();
        }
    };


    window.Site = site;
    
    $(document).ready(function() {
        site.init();
        QuickTube.init();
    });

})(window, document, $);
