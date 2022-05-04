
/* - graphique.js - */
// http://geoconfluences.ens-lyon.fr/portal_javascripts/graphique.js?original=1
$(document).ready(function(){var lesCharts=$("table.dynamicChart");lesCharts.each(function(){var firstLine=$(this).find("tr:first-child");var firstLineColumn=firstLine.find("td");var tableId=$(this).attr('id').trim();var idChart="chart"+tableId;var idButton="btn"+tableId;var typeChart=$(this).find('caption').text().trim();$("#"+tableId).before("<canvas id='"+idChart+"'></canvas>");var titleChart="";var chartLabels="";var labelY="";var labelX="";var legende="";var legendeDisplay=true;var stackedChart=false;var stackedStr="";var myPieData="";var myPieBg="";var myChartLabels=[];var htmlButton="<button id='"+idButton+"' class='exportChart_btn'>Exporter l'image</button>";if(typeChart=='pie'||typeChart=='doughnut'||typeChart=='PolarArea'){firstLineColumn.each(function(i){if(i==0){titleChart=$(this).text().trim()} else if(i==1){myPieData=$(this).text().trim()} else if(i==2){chartLabels=$(this).text().trim()} else if(i==3){myPieBg=$(this).text().trim()}});myOptions={responsive:true,title:{display:true,text:titleChart},tooltips:{mode:'index',intersect:true},legend:{display:true,position:'right',align:'start',},}
var cavasChart=$("#"+idChart);var myChartPieGenere=new Chart(cavasChart,{type:typeChart,data:{datasets:[{data:myPieData.split(';'),backgroundColor:myPieBg.split(';'),}],labels:chartLabels.split(';')},options:myOptions,})} else{firstLineColumn.each(function(i){if(i==0){titleChart=$(this).text().trim()} else if(i==1){stackedStr=$(this).text().trim();if(stackedStr!=''&&stackedStr=='true'){stackedChart=true} else{stackedChart=false}} else if(i==2){chartLabels=$(this).text().trim();if(chartLabels.indexOf('generateArrayOfNumbers')==-1){myChartLabels=chartLabels.split(';')} else{myArguments=chartLabels.split(';');min=parseInt(myArguments[1]);max=parseInt(myArguments[2]);int=parseInt(myArguments[3]);myChartLabels=generateArrayOfNumbers(min,max,int);console.log(min);console.log(max)}
console.log(myChartLabels)} else if(i==3){labels=$(this).text().trim();if(labels.indexOf(';')>0){labelY=labels.split(';')[0];labelX=labels.split(';')[1]}else{labelY=labels;labelX=''}} else if(i==4){legende=$(this).text().trim();if(legende!=''&&legende=='true'){legendeDisplay=true} else{legendeDisplay=false}}});var cavasChart=$("#"+idChart);var color=Chart.helpers.color;var lesLignes=$(this).find("tr").not(":first");var myDataSets=[];var myLabel="";var myData="";var myBorderColor="";var myFillS="";var myFill=false;lesLignes.each(function(){var columns=$(this).find("td").not(":first");columns.each(function(i){if(i==0){myLabel=$(this).text().trim()} else if(i==1){myData=$(this).text().trim()} else if(i==2){myFillS=$(this).text().trim();if(myFillS=='false'){myFill=false} else{myFill=true}} else if(i==3){myBorderColor=$(this).text().trim();myBgColor=color(myBorderColor).alpha(0.1).rgbString()}});var dictData={"label":myLabel,"data":myData.split(';'),"borderColor":myBorderColor,"fill":myFill,"lineTension":0.1,}
if(typeChart=='line'){dictData['backgroundColor']=myBgColor} else{dictData['backgroundColor']=myBorderColor}
myDataSets.push(dictData)});myOptions={responsive:true,interpolateNulls:true,title:{display:true,text:titleChart},legend:{display:legendeDisplay,position:'right',align:'start',},tooltips:{mode:'index',intersect:true},scales:{xAxes:[{display:true,scaleLabel:{display:true,labelString:labelX,},stacked:stackedChart,distribution:'series',ticks:{beginAtZero:true,callback: function(value,index,values){return value.toLocaleString()}}}],yAxes:[{display:true,scaleLabel:{display:true,labelString:labelY,},stacked:stackedChart,ticks:{beginAtZero:true,callback: function(value,index,values){return value.toLocaleString()}}}],},}
var myChartGenere=new Chart(cavasChart,{type:typeChart,data:{labels:myChartLabels,datasets:myDataSets,},options:myOptions,})}
cavasChart.after(htmlButton);$("#"+tableId).hide();var myButton=$("#"+idButton);myButton.click(function(){cavasChart.get(0).toBlob(function(blob){saveAs(blob,idChart+'.png')})})})});
function generateArrayOfNumbers(min,max,intervalle=2){var years=[min]
for(var i=min;i<max;){i=i+intervalle;years.push(i)}
return years}