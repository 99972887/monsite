
/* Merged Plone Javascript file
 * This file is dynamically assembled from separate parts.
 * Some of these parts have 3rd party licenses or copyright information attached
 * Such information is valid for that section,
 * not for the entire composite file
 * originating files are separated by - filename.js -
 */

/* - plone-rwd-nav.js - */
// http://geoconfluences.ens-lyon.fr/portal_javascripts/plone-rwd-nav.js?original=1
function below_600(){if(window.location.hash!='#portal-globalnav'){if(window.innerWidth<=600){$("#portal-globalnav").prepend('<button type="button" class="navigation-button">Afficher le menu</button>');$('#portal-top').addClass('nav-menu');$(".nav-primary").prepend('<span class="nav-section" />');$('.nav-primary').find('span.nav-section').bind('click focus', function(){$(this).parent().toggleClass('expanded')});$('button.navigation-button').bind('click', function(){$('.nav-primary').toggleClass('expanded')});$("button.navigation-button").toggle(function(){$(this).text("Masquer le menu")},
function(){$(this).text("Afficher le menu")})}}}
$(document).ready(function(){$('ul#portal-globalnav').wrap('<div class="nav-primary" />');if($(".navigation-button").length==0){below_600()}
$(window).resize(function(){if(window.innerWidth<=600){if($(".navigation-button").length==0){below_600()}}
if(window.innerWidth>600){if($(".navigation-button").length>0){$('#portal-top').removeClass('nav-menu');$('.navigation-button').remove();$('.nav-section').remove()}}})});

/* - jquery.rwdImageMaps.min.js - */
// http://geoconfluences.ens-lyon.fr/portal_javascripts/jquery.rwdImageMaps.min.js?original=1
;(function(a){a.fn.rwdImageMaps=function(){var c=this;var b=function(){c.each(function(){if(typeof(a(this).attr("usemap"))=="undefined"){return}var e=this,d=a(e);a("<img />").load(function(){var g="width",m="height",n=d.attr(g),j=d.attr(m);if(!n||!j){var o=new Image();o.src=d.attr("src");if(!n){n=o.width}if(!j){j=o.height}}var f=d.width()/100,k=d.height()/100,i=d.attr("usemap").replace("#",""),l="coords";a('map[name="'+i+'"]').find("area").each(function(){var r=a(this);if(!r.data(l)){r.data(l,r.attr(l))}var q=r.data(l).split(","),p=new Array(q.length);for(var h=0;h<p.length;++h){if(h%2===0){p[h]=parseInt(((q[h]/n)*100)*f)}else{p[h]=parseInt(((q[h]/j)*100)*k)}}r.attr(l,p.toString())})}).attr("src",d.attr("src"))})};a(window).resize(b).trigger("resize");return this}})(jQuery);
