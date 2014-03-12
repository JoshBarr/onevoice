(function(window, document, $) {

    var site = {
        init: function() {
    		$('#locker-464').liketodl({
		        download_url: 'sampleDownload.zip',
		        like_url: 'http://google.com',
		        like_colorscheme: 'dark'
		    });
        }
    };
    

    window.Site = site;
    
    $(document).ready(function() {
        site.init();
        QuickTube.init();
    });

})(window, document, $);
