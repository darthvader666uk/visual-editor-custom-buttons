// JavaScript Document

function getBaseURL () {
   return location.protocol + '//' + location.hostname + 
      (location.port && ':' + location.port) + '/';
}

(function() {
    tinymce.create('tinymce.plugins.vecb_button3', {
        init : function(ed, url) {
            ed.addButton('vecb_button3', {
                title : 'Broken',image : url+'/icons/circlearrow_down.png',onclick : function() {
                     ed.selection.setContent('<img class="aligncenter size-full wp-image-10726" src="https://www.thumbculture.co.uk/wp-content/uploads/2019/10/Broken-Award.png" alt="" width="300" height="197" />');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('vecb_button3', tinymce.plugins.vecb_button3);
})();