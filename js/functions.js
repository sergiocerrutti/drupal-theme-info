/*
drupal-theme.info
Created by Sergio Cerrutti
http://www.sergiocerrutti.com
July 2010
*/

function generate_item(container) {
    
    if (container != "regions") {
        var ext = '<label>.' + container + '</label>';
    } else {
        var ext = '';
    }
    $('<li><input type="text" class="form-text">' + ext +'</li>').appendTo('#' + container + ' ul');
    if (container != "regions") {
    	Cufon.replace('.sortable label');
    }
    
}

function generate_code() {
    
    var name = $('#name').val();
    var description = $('#description').val();
    
    var code_name = 'name = ' + name + '\n';
    var code_description = 'description = ' + description + '\n';
    var code_version = 'version = 1.0\n';
    var code_core = 'core = 6.x\n';
    var code_engine = 'engine = phptemplate\n\n';
    var code_regions = '';
    var code_css = '';
    /*var code_ie6 = '';
    var code_ie7 = '';*/
    var code_js = '';
    
    $('#regions ul input').each(function(){
        if ($(this).val()!='') {
            code_regions += 'regions[' + $(this).val() + '] = ' + $(this).val() + '\n';
        }
    });
    
    $('#css ul input').each(function(){
        if ($(this).val()!='') {
            code_css += 'stylesheets[all][] = css/' + $(this).val() + '.css\n';
        }
    });
    
    $('#js ul input').each(function(){
        if ($(this).val()!='') {
            code_js += 'scripts[] = js/' + $(this).val() + '.js\n';
        }
    });
    
    code_regions += '\n';
    code_css += '\n';
    
    return code_name + code_description + code_version + code_core + code_engine + code_regions + code_css + code_js;
    
}

function update_data() {
    
    var name = $('#name').val();
    var code = generate_code();
    $('#code').text(code);
    $('#wrapper-code span').text(name);
    $('#wrapper-code').fadeIn();
    $('#wrapper-code').seekAttention({
    	pulse:false,
    	opacity:0.6
    });
    
}