!function(window,document,$){var site={init:function(){},showDownloadLink:function(url){if(ga&&ga("send","like","click",url),url.match("NakitaTurnerMusic")){var $el=$("[data-download]");$el.addClass("toxic__active"),$el.hide(),$el.html("<a href='https://soundcloud.com/nakita-turner-music/one-voice-feat-dukes-massad' class='btn btn-primary'>Thanks! Grab the track on SoundCloud</a>"),$el.fadeIn()}}};window.Site=site,$(document).ready(function(){site.init(),QuickTube.init()})}(window,document,$);