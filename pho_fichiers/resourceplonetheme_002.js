
/* Merged Plone Javascript file
 * This file is dynamically assembled from separate parts.
 * Some of these parts have 3rd party licenses or copyright information attached
 * Such information is valid for that section,
 * not for the entire composite file
 * originating files are separated by - filename.js -
 */

/* - ++resource++plonetheme.geoconfluences.javascripts/myFeedEk.js - */
// http://geoconfluences.ens-lyon.fr/portal_javascripts/++resource++plonetheme.geoconfluences.javascripts/myFeedEk.js?original=1
(function($){$.fn.myFeedEk=function(opt){var def=$.extend({MaxCount:50,ShowDesc:true,ShowPubDate:true,DescCharacterLimit:0,TitleLinkTarget:"_blank",DateFormat:"",DateFormatLang:"en",leadImage:false,},opt);var id=$(this).attr("id"),i,s="",dt;$("#"+id).empty();if(def.FeedUrl==undefined) return;$("#"+id).append('<img src="/geoconfluences/loader.png" />');var YQLstr='SELECT channel.item FROM feednormalizer WHERE output="rss_2.0" AND url ="'+def.FeedUrl+'" LIMIT '+def.MaxCount;$.ajax({url:"https://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent(YQLstr)+"&format=json&diagnostics=false&callback=?",dataType:"json",success: function(data){$("#"+id).empty();if(!(data.query.results.rss instanceof Array)){data.query.results.rss=[data.query.results.rss]}else{s=s}
$.each(data.query.results.rss, function(e,itm){if(def.leadImage){s+='<div class="sommaireViewTileItem visualIEFloatFix">';s+='<div class="tileImage" ><img alt="" src="'+itm.channel.item.link+'/leadImage_mini" class="sommaireViewLeadImageMini"/></div>'} else{s+='<div class="sommaireViewTileItem visualIEFloatFix sansBorder">'}
s+='<a class="summary url" href="'+itm.channel.item.link+'" target="'+def.TitleLinkTarget+'" >'+itm.channel.item.title+'</a>';if(def.ShowPubDate){dt=new Date(itm.channel.item.pubDate);s+='<p><span class="portletItemDetails">';if($.trim(def.DateFormat).length>0){try{moment.lang(def.DateFormatLang);s+=moment(dt).format(def.DateFormat)}
catch(e){s+=dt.toLocaleDateString()}}
else{s+=dt.toLocaleDateString()}
s+='</span></p><p class="auteurs">'+String(itm.channel.item.author).split(',').join(', ')+'</p>'}
if(def.ShowDesc&&itm.channel.item.description){s+='<p class="tileBody"><span class="description">';if(def.DescCharacterLimit>0&&itm.channel.item.description.length>def.DescCharacterLimit){s+=itm.channel.item.description.substring(0,def.DescCharacterLimit)+' (...)'}
else{s+=itm.channel.item.description}
s+='</span></p>'}
s+='</div>'});$("#"+id).append('<div id="sommaireViewBody">'+s+'</div>')}})}})(jQuery);

/* - ++resource++plonetheme.geoconfluences.javascripts/insertRss.js - */
// http://geoconfluences.ens-lyon.fr/portal_javascripts/++resource++plonetheme.geoconfluences.javascripts/insertRss.js?original=1
$(document).ready(function(){var $blocksRss=$("a.myRss");$blocksRss.each(function(){var rel=$(this).attr('rel');var myId=rel.split(';')[0];var titre=$(this).html();var myElement='#'+myId;var url=$(this).attr('href');var parent=$(this).parent();var limitNbr=rel.split(';')[2];if(limitNbr!=''){limitNbr=limitNbr} else{limitNbr=5}
parent.after("<div id='"+myId+"'></div>");parent.html(titre);if(rel.split(';')[1]=='true'){$(myElement).myFeedEk({FeedUrl:url,MaxCount:limitNbr,ShowDesc:true,ShowPubDate:true,TitleLinkTarget:'_blank',DescCharacterLimit:800,leadImage:true,})} else{$(myElement).myFeedEk({FeedUrl:url,MaxCount:limitNbr,ShowDesc:false,ShowPubDate:false,TitleLinkTarget:'_blank',DescCharacterLimit:800,leadImage:false,})}})});

/* - ++resource++plonetheme.geoconfluences.javascripts/sendNewsLetter.js - */
// http://geoconfluences.ens-lyon.fr/portal_javascripts/++resource++plonetheme.geoconfluences.javascripts/sendNewsLetter.js?original=1
$(document).ready(function(){$("#htmlCode").hide();$(".getHTML").click(function(){titre=$(".subsection-lettre-dinformation #parent-fieldname-title").text();contentCore=$("div[id^='parent-fieldname-text-']").html();html="<html>\n\t<head><title>"+titre.trim()+"</title>\n"+"<meta charset='UTF-8'/>\n";html+="<style>\n";html+="body{\n"+"font-size: 100%;\n"+"line-height: 1.2em;}\n"+"h1, h2, h3, h4, h5, h6{\n"+"font-family: 'Helvetica Neue',Arial,FreeSans,sans-serif;\n"+"font-weight: bold;\n"+"color: Black;\n"+"line-height: 1.5em;}\n"+"p,a{\n"+"hyphens: auto;\n"+"text-align: justify;\n"+"text-align-last: left;\n"+"font-family:'bebas_neueregular', Arial,FreeSans,sans-serif;}\n"+"a:link, a:visited{\n"+"color: #E54426;}\n"+"* *:link, *:visited {\n"+"text-decoration: none;}\n"+"h1 {\n"+"font-family: 'bebas_neueregular',arial,sans-serif;\n"+"font-size: 2em;\n"+"font-weight: normal;\n"+"letter-spacing: 0em;\n"+"line-height: 1.1em;\n"+"text-transform: uppercase;\n"+"font-weight: bold;}\n"+"h3{\n"+"border-left: 3px solid #999999;\n"+"color: black;\n"+"font-family: 'bebas_neueregular',arial,sans-serif;\n"+"font-size: 1.2em;\n"+"font-weight: normal;\n"+"letter-spacing: 0.01em;\n"+"line-height: 0em;\n"+"padding: 10px;\n"+"text-transform: uppercase;\n"+"font-weight: bold;}\n"+"*::selection, *::-moz-selection {\n"+"background: #EDEBEC none repeat scroll 0 0;\n"+"color: #fff;}\n"+".sommaireViewTileItem {\n"+"border: 1px dotted #ccc;\n"+"margin-top: 15px;\n"+"padding: 10px;}\n"+"#sommaireViewBody .sommaireViewLeadImageMini, .sommaireViewThumbImageMini {\n"+"float: left;\n"+"margin-right: 10px;}\n"+"#sommaireViewBody .sommaireViewLeadImageMini {\n"+"width: 100px;}\n"+".portletItemDetails {\n"+"background: #272727 none repeat scroll 0 0;\n"+"color: #ffffff;\n"+"display: inline-block;\n"+"font-size: 70%;\n"+"margin: 0 0 4px;\n"+"padding: 0.2em 0.5em;}\n"+".sansBorder{\n"+"border:none;\n"+"margin-top: 0;\n"+"padding: 5px;}\n";html+="</style>";html+="</head>\n<body>\n<img alt='logo du site' src='http://geoconfluences.ens-lyon.fr/a-propos/collections/a-la-une/imagesui/logo-geoconfluences.png'/>\n";html+="<h2>"+titre.trim()+"</h2>"
html+=contentCore+"\n";html+="</body>\n</html>";$("#blockHTML").text(html);$("#htmlCode").fadeIn();$("#quitter").show();$('html,body').animate({scrollTop:0},'slow');$("#quitter").click(function(){$("#htmlCode").fadeOut();$("#quitter").hide()})})});
