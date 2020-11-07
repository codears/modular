(function () {

    'use strict';
    var MY_APP_NAME = 'modularApp';

    var modularApp = angular
        .module(MY_APP_NAME, [

                        
            //'angularMask',           // phone masks
            'ui.utils.masks'         // number masks           
        ]);

    modularApp             
       
        // other routes - alphabetical order

        .constant('ROUTES', {

            'app': {
                abstract: true,
                url: '/app',
                templateUrl: 'views/layout/shell.html',
            },

            // Process - tab  Documents

            //'app.usuario': {
            //    url: '/usuario/:usuario_id',
            //    controller: 'UsuarioController as vm',
            //    templateUrl: 'views/usuario.html',
            //    params: { document_class_id: null }
            //}

        });

})();