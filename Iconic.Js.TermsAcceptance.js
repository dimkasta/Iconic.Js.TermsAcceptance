var TermsService = function (name, modalName) {
    if (typeof jQuery === 'undefined') {
        console.error("MAKE SURE JQUERY IS LOADED BEFORE THE CONSENT SCRIPT")
        return false;
    }
    else {
        if ( typeof $().modal !== 'function') {
            console.error("MAKE SURE BOOTSTRAP JS IS LOADED BEFORE THE CONSENT SCRIPT")
            return false;
        }
    }

    name = name + "_consent";

    return {
        init: function() {
            var self = this;
            if( ! this.isAccepted()){
                $(function () {
                    var modal = $(modalName);
                    modal.modal('show');
                    modal.on('hidden.bs.modal', self.accept);
                });
            }
        },
        isAccepted: function () {
            return localStorage.getItem(name) === 'true';
        },
        accept: function() {
            localStorage.setItem(name, true);
        },
        removeAcceptance: function() {
            localStorage.setItem(name, false);
        }
    };
};