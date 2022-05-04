
/* - ploneannuaire.js - */
// http://geoconfluences.ens-lyon.fr/portal_javascripts/ploneannuaire.js?original=1
function goto_annuaire_contact(contact_index){url=related_annuaire_contacts[contact_index]["url"];document.location=url}
function show_annuaire_contact_popup(node,contact_index){popup_node=document.createElement("div");popup_node.setAttribute('id',"annuaire-contact-popup");title_text=related_annuaire_contacts[contact_index]["title"];title_node=document.createElement("h6");title_node.appendChild(document.createTextNode(title_text));popup_node.appendChild(title_node);description_text=related_annuaire_contacts[contact_index]["description"];description_node=document.createElement("p");texts=description_text.split('\n');for(i=0;i<texts.length;i++){text=texts[i];description_node.appendChild(document.createTextNode(text));description_node.appendChild(document.createElement("br"))}
popup_node.appendChild(description_node);node.className=node.className+" annuairePopupPosition";node.appendChild(popup_node)}
function hide_annuaire_contact_popup(node,contact_index){popup_node=document.getElementById("annuaire-contact-popup");if(popup_node){node.removeChild(popup_node)}
node.className="highlightedAnnuaireTerm"}
function CBrowser(){var ua,s,i;this.isIE=false;this.isNS=false;this.isOP=false;this.version=null;ua=navigator.userAgent;s="Opera";if((i=ua.indexOf(s))>=0){this.isOP=true;this.version=7;return}
s="MSIE";if((i=ua.indexOf(s))>=0){this.isIE=true;this.version=parseFloat(ua.substr(i+s.length));return}
s="Netscape6/";if((i=ua.indexOf(s))>=0){this.isNS=true;this.version=parseFloat(ua.substr(i+s.length));return}
s="Gecko";if((i=ua.indexOf(s))>=0){this.isNS=true;this.version=6.1;return}}
var browser_info=new CBrowser();var related_annuaire_contacts=new Array();
function add_related_annuaire_contact(title,description,url,terms,show){var contact=new Array();contact["title"]=title;contact["description"]=description;contact["url"]=url;contact["terms"]=terms;contact["show"]=show;related_annuaire_contacts.push(contact)}
function highlight_related_annuaire_term_in_text(node,word,contact_index){var class_name="highlightedAnnuaireTerm";var parent_node=node.parentNode;if(parent_node.className==class_name){return}
var lword=word.toLowerCase();var content_value=node.nodeValue;var lcontent_value=content_value.toLowerCase();var word_bounds=new Array();word_bounds.push('^'+lword+'$');word_bounds.push('\\W'+lword+'\\W');word_bounds.push('^'+lword+'\\W');word_bounds.push('\\W'+lword+'$');var index=-1;for(var i=0;i<word_bounds.length;i++){index=lcontent_value.search(word_bounds[i]);if(index!=-1){if(i==1||i==3){index+=1}
break}}
if(index==-1){return}
var last_index=index+word.length;if(index!=-1){var hiword=document.createElement("span");hiword.className=class_name;hiword.appendChild(document.createTextNode(content_value.substr(index,word.length)));if(browser_info.isIE&&browser_info.version<8){hiword.setAttribute("onmouseover", function(){show_annuaire_contact_popup(this,contact_index)});hiword.setAttribute("onmouseout", function(){hide_annuaire_contact_popup(this,contact_index)});hiword.setAttribute("onclick", function(){goto_annuaire_contact(contact_index)})}
else{hiword.setAttribute("onmouseover","javascript:show_annuaire_contact_popup(this, "+contact_index+")");hiword.setAttribute("onmouseout","javascript:hide_annuaire_contact_popup(this, "+contact_index+")");hiword.setAttribute("onclick","javascript:goto_annuaire_contact("+contact_index+")")}
parent_node.insertBefore(document.createTextNode(content_value.substr(0,index)),node);parent_node.insertBefore(hiword,node);parent_node.insertBefore(document.createTextNode(content_value.substr(index+word.length)),node);parent_node.removeChild(node)}}
function highlight_related_annuaire_term_in_node(node,word,contact_index,unauthorized_tags){if(!node){return false}
tag_name=node.nodeName.toLowerCase();tag_id=node.id;tag_class=node.className;for(i=0;i<unauthorized_tags.length;i++){unauthorized_tag_name=unauthorized_tags[i].toLowerCase();if((tag_name==unauthorized_tag_name)||(tag_name+'#'+tag_id==unauthorized_tag_name)||(tag_name+'.'+tag_class==unauthorized_tag_name)){return false}}
if(node.hasChildNodes){var i;for(i=0;i<node.childNodes.length;i++){highlight_related_annuaire_term_in_node(node.childNodes[i],word,contact_index,unauthorized_tags)}
if(node.nodeType==3){highlight_related_annuaire_term_in_text(node,word,contact_index)}}
return true}
function highlight_related_annuaire_terms_in_node(target_node,unauthorized_tags){for(var def_index=0;def_index<related_annuaire_contacts.length;def_index++){var terms=related_annuaire_contacts[def_index]["terms"];for(var term_index=0;term_index<terms.length;term_index++){var word=terms[term_index];highlight_related_annuaire_term_in_node(target_node,word,def_index,unauthorized_tags)}}}
function build_related_annuaire_terms_list(target_node){if(related_annuaire_contacts.length>0){var i=0;var ul_node=document.createElement("ul");for(i=0;i<related_annuaire_contacts.length;i++){if(related_annuaire_contacts[i]["show"]=='1'){var li_node=document.createElement("li");var a_node=document.createElement("a");var url=related_annuaire_contacts[i]["url"];a_node.setAttribute("href",url);var title_text=related_annuaire_contacts[i]["title"];a_node.appendChild(document.createTextNode(title_text));li_node.appendChild(a_node);ul_node.appendChild(li_node)}}
target_node.appendChild(ul_node)}}

