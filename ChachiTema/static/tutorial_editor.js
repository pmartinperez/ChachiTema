// Funciones en js ue se usaran en el menu de personalizacion de los snippets
(function() {
    'use strict';
    var website = openerp.website;
    website.openerp_website = {};
    // Funcion para el snippet de lso testimonios
    website.snippet.options.snippet_testimonial_options = website.snippet.Option.extend({
        on_focus: function() {
            alert("On focus!");
        }
    })
})();


