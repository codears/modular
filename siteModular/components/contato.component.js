(function () {

    'use strict';

    function contatoController() {

        var self = this;       

        self.isSearched = false;
        self.tiposTelefone = [
            { label: '[selecione]' },
            { id: 3, label: 'celular' },
            { id: 2, label: 'comercial' },
            { id: 1, label: 'residencial' }
        ];
       
        self.showDialog = function () {
            var modal = '#' + self.modalId;
            
            $(modal).on('shown.bs.modal', function () {
               
                $('#' + self.inputSearchId).focus();
            });

            $(modal).modal('show');
        };      

        self.validarTelefone = function ($phone) {
         
            if (self.contato.tipoTelefone==3)
                return new RegExp(/^\(?[1-9]{2}\)? ?(:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/).test($phone);
                      
            return new RegExp(/^\(?[1-9]{2}\)? ?([1-9])[0-9]{3}\-?[0-9]{4}$/).test($phone);
        }      

        self.hitEnter = function (keyEvent) {
            if (keyEvent.which === 13) {
                self.searchUser();
            }
        };

        self.$onInit = function () {
            var uuid = uuidv4();
            self.modalId = 'modalSelectUser' + uuid;           
        };

        function uuidv4() {
            /* jshint ignore:start */
            return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
            /* jshint ignore:end */
        }

        self.isDisabled = false;
        
    }

    angular
        .module(MY_APP_NAME)
        .controller('contatoController', [contatoController])
        .component('contatoComponent', {

            controller: 'contatoController as vmc',
            templateUrl: 'views/contato.component.html',            
            bindings: {
                label: '@',
                adid: '=',
                userId: '=',
                nolsAccount: '=',
                displayName: '=',
                isRequired: '<',
                callback: '&',
                widthFormGroup: '@',
                widthControlLabel: '@',
                widthInputGroup: '@',
                isDisabled: '=',
                contato: '=',
                indice: '='
            }
        });

})();