(function () {

    'use strict';

    function contatoController() {

        var self = this;

        self.isSearched = false;

        self.showDialog = function () {
            var modal = '#' + self.modalId;

            $(modal).on('shown.bs.modal', function () {
               
                $('#' + self.inputSearchId).focus();
            });

            $(modal).modal('show');
        };

        self.searchUser = function () {
            if (self.userInput && self.userInput.length >= 3) {
                
            }
        };

        self.selectUser = function (user) {
            self.adid = user.ad_id;
            self.userId = user.user_id;
            self.displayName = user.display_name;
            self.nolsAccount = user.nols_account

            if (self.callback) {
                self.callback({ user: user });
            }

            $('#' + self.modalId).modal('hide');
        };

        self.hitEnter = function (keyEvent) {
            if (keyEvent.which === 13) {
                self.searchUser();
            }
        };

        self.$onInit = function () {
            var uuid = uuidv4();
            self.modalId = 'modalSelectUser' + uuid;
            self.inputSearchId = 'inputSearchUser' + uuid;
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
        .module('modular')
        .controller('contatoController', [contatoController])
        .component('contatoComponent', {

            controller: 'contatoController as vmc',
            templateUrl: 'views/contato.html',            
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
                contato: '='
            }
        });

})();