/*
drupal-theme.info
Created by Sergio Cerrutti
http://www.sergiocerrutti.com
July 2010
*/

$(document).ready(function() {
    
		Cufon.replace('h2, label');
    
    $("#code").focus(function(){
        if(this.value == this.defaultValue){
            this.select();
        }
    });
    
    $(".sortable").sortable({
        opacity: 0.6,
        placeholder: 'ui-state-highlight',
        forcePlaceholderSize: true,
        tolerance: 'pointer'
    });
    
    $('#description').keyup(function() {
        var len = this.value.length;
        if (len >= 75) {
            this.value = this.value.substring(0, 75);
        }
    });
    
    $('.help a').tipsy({
    	gravity: 'n',
    	fade: true,
    	delayOut: 1000,
    	opacity: 0.8
    });

});