
/* Merged Plone Javascript file
 * This file is dynamically assembled from separate parts.
 * Some of these parts have 3rd party licenses or copyright information attached
 * Such information is valid for that section,
 * not for the entire composite file
 * originating files are separated by - filename.js -
 */

/* - ++resource++dropdown-menu.js - */
// http://geoconfluences.ens-lyon.fr/portal_javascripts/++resource++dropdown-menu.js?original=1
jQuery(function($){$('#portal-globalnav .noClick').click(function(e){e.preventDefault()})});

/* - ckeditor_vars.js - */
// http://geoconfluences.ens-lyon.fr/portal_javascripts/ckeditor_vars.js?original=1
var CKEDITOR_BASEPATH='http://geoconfluences.ens-lyon.fr/++resource++ckeditor/';var CKEDITOR_PLONE_BASEPATH='http://geoconfluences.ens-lyon.fr/++resource++ckeditor_for_plone/';var CKEDITOR_PLONE_PORTALPATH='http://geoconfluences.ens-lyon.fr';

/* - ++resource++ckeditor_for_plone/ckeditor_plone.js - */
// http://geoconfluences.ens-lyon.fr/portal_javascripts/++resource++ckeditor_for_plone/ckeditor_plone.js?original=1
if(typeof console!='undefined')
console.log();if(window.CKEDITOR){(function(){var showCompatibilityMsg=function(){var env=CKEDITOR.env;var html='<p><strong>Your browser is not compatible with CKEditor.</strong>';var browsers={gecko:'Firefox 2.0',ie:'Internet Explorer 6.0',opera:'Opera 9.5',webkit:'Safari 3.0'};var alsoBrowsers='';for(var key in env){if(browsers[key]){if(env[key])
html+=' CKEditor is compatible with '+browsers[key]+' or higher.';else
alsoBrowsers+=browsers[key]+'+, '}}
alsoBrowsers=alsoBrowsers.replace(/\+,([^,]+), $/,'+ and $1');html+=' It is also compatible with '+alsoBrowsers+'.';html+='</p><p>With non compatible browsers, you should still be able to see and edit the contents (HTML) in a plain text field.</p>';document.getElementById('alerts').innerHTML=html};var onload=function(){if(!CKEDITOR.env.isCompatible)
showCompatibilityMsg()};if(window.addEventListener)
window.addEventListener('load',onload,false);else if(window.attachEvent)
window.attachEvent('onload',onload)})()}
launchCKInstances=function(ids_to_launch){jQuery('.ckeditor_plone').each(function(){ckid=jQuery(this).attr('id');ids_to_launch=ids_to_launch||[];if((typeof(ids_to_launch[0])=='undefined')||(jQuery.inArray(ckid,ids_to_launch)>=0)){cke_config_url=jQuery('.cke_config_url',jQuery(this).parent()).val();if(jQuery('.cke_iswidget',jQuery(this).parent()).length){cke_width=jQuery('.cke_width',jQuery(this).parent()).val();cke_height=jQuery('.cke_height',jQuery(this).parent()).val();cke_baseHref=jQuery('.cke_baseHref',jQuery(this).parent()).val();if(typeof CKEDITOR.instances!='undefined'){var instance=CKEDITOR.instances[ckid];if(instance){instance.destroy(true)}};CKEDITOR.replace(ckid,{customConfig:cke_config_url,width:cke_width,height:cke_height,baseHref:cke_baseHref})}
else{CKEDITOR.replace(ckid,{customConfig:cke_config_url})}}})}
jQuery(document).ready(launchCKInstances);(function(){var format=function format(msg){return '<p>Actual URL</p><p>'+msg+'</p>'};var showActualUrl=function showActualUrl(domElement,url){if(url.indexOf('resolveuid')!==-1){domElement.setHtml(format('Loading...'));var current_uid=url.split('resolveuid/')[1];var new_url=CKEDITOR_PLONE_PORTALPATH+'/convert_uid_to_url/'+current_uid;var settings={url:new_url,type:'GET',success: function(data,textStatus,jqXHR){if(jqXHR.status==200){domElement.setHtml(format(data))} else{domElement.setHtml(format('Could not be resolved.'))}},error: function(jqXHR,textStatus){domElement.setHtml(format('Could not be resolved.'))}};$.ajax(settings);return}
domElement.setHtml('<p></p>')};CKEDITOR.on('dialogDefinition', function(ev){var dialogName=ev.data.name;var dialogDefinition=ev.data.definition;if(dialogName=='link'){var infoTab=dialogDefinition.getContents('info');var urlOptions=infoTab.get('urlOptions');urlOptions.children.push({id:'actual',type:'html',setup: function(data){var domElement=this.getElement();if(data.url){showActualUrl(domElement,data.url.url)} else{domElement.setHtml('<p></p>')}},html:''});var url=infoTab.get('url');default_onKeyUp=url.onKeyUp;url.onKeyUp=function(){var actual=this.getDialog().getContentElement('info','actual');var domElement=actual.getElement();var url=this.getValue();showActualUrl(domElement,url);default_onKeyUp.apply(this)}}})})();
