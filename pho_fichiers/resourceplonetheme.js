
/* - ++resource++plonetheme.geoconfluences.javascripts/footnote.js - */
// http://geoconfluences.ens-lyon.fr/portal_javascripts/++resource++plonetheme.geoconfluences.javascripts/footnote.js?original=1
$(document).ready(function(){$('#content a[href^="#"][name]').each(function(index){retour=$(this).attr('name');objCible=retour.replace('ref','');$('#content a[name="'+objCible+'"]').attr('href','#'+retour)});$('#content a[href^="#"]').click(function(event){event.preventDefault();$('html,body').animate({scrollTop:$('[name="'+this.hash.substring(1)+'"]').offset().top},500)});$('#content a[href^="#"]').hover(function(){var hrefValue=$(this).attr('href');var hrefName=hrefValue.split('#')[1];var blockText='a[name="'+hrefName+'"]';var getTexte=$(blockText).text();$(blockText).css({'color':'#333'});$(this).css({'cursor':'help'});if(getTexte.length>300){texteRelated=getTexte.substring(0,300)+'...'} else{texteRelated=getTexte}
if(getTexte.length>50){var popup_node=$('<div/>').attr({'id':'footnote-popup'}).text(texteRelated);$(this).append(popup_node)} else{$('div#footnote-popup').hide();$(this).css({'cursor':'pointer'})}}, function(){$('div#footnote-popup').remove()});fnote=$(".footnote")
nbrFnote=fnote.length;if(nbrFnote>0){htmlNote="<hr/><div id='footNote'>";fnote.each(function(i){index=i+1;ref="ftn"+index+"ref";repere="<a href='#ftn"+index+"' name='"+ref+"'>["+index+"]</a>";text=$(this).html().replace("((","").replace("))","");$(this).html(repere);htmlNote+="<a href='#"+ref+"' name='ftn"+index+"'>["+index+"] </a><span class='ftn"+index+"'>"+text+"</span><br/>"});htmlNote+="</div>";if($("#citation").length){$("#citation").before(htmlNote)} else{$("#content-core").append(htmlNote)}
$(".footnote a[name^='ftn']").hover(function(){name=$(this).attr('name').replace('ref','');selector="span."+name;myText=$(selector).html();$(this).css({'cursor':'help'});var popup_node=$('<div/>').attr({'id':'footnote-popup'}).html(myText);$(this).append(popup_node)}, function(){$('div#footnote-popup').remove()});$('#content a[href^="#"]').click(function(event){event.preventDefault();cible=this.hash.substring(1);$('html,body').animate({scrollTop:$('a[name="'+cible+'"]').position().top},500)})}
$('body').append('<div id="returnOnTop" title="Retour en haut">Retour en haut</div>');$('#returnOnTop').click( function(){$('html,body').animate({scrollTop:0},'slow')})});$(window).scroll(function(){if($(window).scrollTop()==0)
$('#returnOnTop').fadeOut();else
$('#returnOnTop').fadeIn()});