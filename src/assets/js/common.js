export default {
	methods:{
		NumberFormat2(val){
	    	var fixedVal = parseFloat(val);  
	    	if (isNaN(fixedVal)) {
	    		return;      
	    	}        
	    	fixedVal = Math.round(val*100)/100;
	    	var vars = fixedVal.toString(); 
	    	var rs = vars.indexOf('.');
	    	if (rs < 0) { 
	    		rs = vars.length; 
	    		vars += '.'; 
	    	}        
	    	while (vars.length <= rs + 2) {          
	    		vars += '0';       
	    	}        
	    	return vars;
	    }
   }
}
