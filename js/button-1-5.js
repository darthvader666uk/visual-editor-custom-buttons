// JavaScript Document

function getBaseURL () {
   return location.protocol + '//' + location.hostname + 
      (location.port && ':' + location.port) + '/';
}

(function() {
    tinymce.create('tinymce.plugins.vecb_button5', {
        init : function(ed, url) {
            ed.addButton('vecb_button5', {
                title : 'Silver',image : url+'/icons/circlearrow_right.png',onclick : function() {
                     ed.selection.setContent('<img class="aligncenter size-full wp-image-10726" src="https://www.thumbculture.co.uk/wp-content/uploads/2019/03/silver.png" alt="" width="300" height="197" />');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('vecb_button5', tinymce.plugins.vecb_button5);
})();