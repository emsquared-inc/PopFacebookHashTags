// ==UserScript==
// @name         Pop Facebook Hash Tags
// @namespace    http://www.emsquared-inc.com/
// @version      1.0 alpha
// @description  Makes hashtag links open in a new window or tab
// @author       Eric Mintz
// @oujs:author  emsquared-inc
// @license      GNU GPL v3.0; https://github.com/emsquared-inc/PopFacebookHashTags/blob/gh-pages/LICENSE
// @homepageURL  http://www.emsquared-inc.com
// @supportURL   https://github.com/emsquared-inc/PopFacebookHashTags
// @match        https://www.facebook.com/*
// @match        https://www.facebook.com
// @grant        none
// ==/UserScript==

(function() {

	// Manage handlers
	addEventListeners = function() {
		document.addEventListener ('load',fixFacebookLinks, false );
		document.addEventListener ('DOMNodeInserted',fixFacebookLinks, false);
    }
	removeEventListeners = function() {
	    document.removeEventListener('load',fixFacebookLinks);
	    document.removeEventListener('DOMNodeInserted',fixFacebookLinks);
	}

	// Modify hashtag links
	var fixFacebookLinks = function() {

	    // remove handlers to prevent recursion
	    removeEventListeners();
    
	    // find hashtag links
    	var allLinks = document.getElementsByTagName('a');
		for (var i = 0; i < allLinks.length; i++) {
    		if (allLinks[i].href.contains('facebook.com/hashtag/')) {
            
        	    // make the linke pop open a new brower window/tab
       			allLinks[i].setAttribute('target','_blank');
	    	}
		}
    
	    // restore the handlers
	    addEventListeners();
	};

	// Add listeners
	addEventListeners();
})();
