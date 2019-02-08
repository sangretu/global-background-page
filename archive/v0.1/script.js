{ /* Classes */

	function PageInfo() {
		this.hostname = window.location.hostname;
		this.pathname = window.location.pathname;
	}

}

{ /* Objects */

	var pageInfo = null;

}

$(document).ready(function() {
	log('document ready.');
	pageInfo = new PageInfo();
	log(pageInfo.hostname);
	customize();
	
});

function customize() {
	if (pageInfo.hostname === 'dominion.isotropic.org') dominionBosskey();
	else if (pageInfo.hostname === 'ecchi.me') ecchiCustom();
	else if (pageInfo.hostname + pageInfo.pathname === 'www.google.com/ig') iGoogleCustom();
};

function log(message) {
	console.log("CUSTOM : " + message);
};

{ // customizations

	function ecchiCustom() {
		log("customizing for ecchi.me.");
		
		if ($('head').length === 1)
		{
			$('head').append($(
				'<style type="text/css">' +
				'.outerheaderdiv, .topmenubg, iframe, #comdiv, .footerdiv, .comment/*, .searchdiv, .minigallery*/' +
				'{' +
				'	position   : fixed;' +
				'	max-height : 0;' +
				'	visibility : hidden;' +
				'}' +
				'</style>')
			);
		}
		
		$('#divFlashTeaser').remove();
		
	};
	
	function iGoogleCustom() {
		log("customizing for www.google.com/ig.");
		var foo = $('div')
		
	}
	
	function dominionBosskey() {
		log("customizing for dominion.isotropic.org.");
		
		if ($('head').length === 1)
		{
			$('head').append($(
				'<style type="text/css">' +
				'*' +
				'{' +
				'	background-color : black             !important;' +
				'	color            : green             !important;' +
				'	font-family      : lucida console    !important;' +
				'	font-size        : 10pt              !important;' +
				'	margin           : 0                 !important;' +
				'	padding          : 0                 !important;' +
				'}' +
				'pre#logx' +
				'{' +
				'	display: none;' +
				'}' +
				'#player_table, .constr, .avatar, .avtext, #within, #autotracker, #amveto, #set_alchemy, #set_base, #set_cornucopia, #set_hinterlands, #set_intrigue, #set_promo, #set_prosperity, #set_seaside' +
				'{' +
				'	position: fixed;' +
				'	visibility: hidden;' +
				'}' +
				'</style>'));
		}
		
		setTimeout(function()
		{
			autotracker = document.getElementById('autotracker');
			if (autotracker) autotracker.selectedIndex=2;

			amveto = document.getElementById('amveto');
			if (amveto) amveto.selectedIndex=2;
			
			seek_2p = document.getElementById('seek_2p');
			if (seek_2p) seek_2p.checked = true;
			
			seek_3p = document.getElementById('seek_3p');
			if (seek_3p) seek_3p.checked = true;
			
			seek_4p = document.getElementById('seek_4p');
			if (seek_4p) seek_4p.checked = false;
			if (seek_4p) seek_4p.click();
		},
		1250);
	};

}