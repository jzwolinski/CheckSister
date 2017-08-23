

function checkSister(school){	
	try{
		lookup = document.getElementById("SCHOOLDISP"+school).value.toLowerCase();
	
		var mySchool=new Array(); for(i=0;i<20;i++){mySchool[i] ='xxxxxx';}
		mySchool[0]='art institute'; mySchool[1] ='mackie'; mySchool[2] ='argosy'; mySchool[3] ='south uni';   
		amess = 'Can Not Add An EDMC Sister School!';	
   		for(i=0;i<20;i++){if(lookup.indexOf(mySchool[i]) != -1) {checkSister2(school,mySchool)}}

		var mySchool=new Array(); for(i=0;i<20;i++){mySchool[i] ='xxxxxx';}
		mySchool[0]='henager'; mySchool[1] ='collegeamerica'; mySchool[2] ='college america'; mySchool[3] ='ccsd'; mySchool[4] ='college san diego'; mySchool[5] ='indep';
		amess = 'Can Not Add A CEHE Sister School!';	
	   	for(i=0;i<20;i++){if(lookup.indexOf(mySchool[i]) != -1) {checkSister2(school,mySchool)}}
	
		var mySchool=new Array(); for(i=0;i<20;i++){mySchool[i] ='xxxxxx';}
		mySchool[0] ='career tech'; mySchool[1]='mccann'; mySchool[2] ='jacobs'; mySchool[3] ='motte'; mySchool[4] ='tucson'; 
		amess = 'Can Not Add A Delta Career Education Corporation Sister School!';	
		for(i=0;i<20;i++){if(lookup.indexOf(mySchool[i]) != -1) {checkSister2(school,mySchool)}}	
	
		var mySchool=new Array(); for(i=0;i<20;i++){mySchool[i] ='xxxxxx';}
		mySchool[0]='devry'; mySchool[1] ='keller'; amess = 'Can Not Add A Devry Sister School!';	
		for(i=0;i<20;i++){if(lookup.indexOf(mySchool[i]) != -1) {checkSister2(school,mySchool)}}	
		
		var mySchool=new Array(); for(i=0;i<20;i++){mySchool[i] ='xxxxxx';}
		mySchool[0] ='american int'; mySchool[1] ='aiu'; mySchool[2] ='brooks'; mySchool[3] ='colorado tech'; mySchool[4] ='ctu'; mySchool[5] ='iadt'; 
		mySchool[6] ='academy of design';
		amess = 'Can Not Add A Career Education Sister School!';	
		for(i=0;i<20;i++){if(lookup.indexOf(mySchool[i]) != -1) {checkSister2(school,mySchool)}}	
		waRecalculate(document.main);
	}
	catch(e){}
}

