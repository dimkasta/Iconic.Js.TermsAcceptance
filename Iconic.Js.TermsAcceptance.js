var TermsService = function (name, element, triggerNotoficationCallback) {
    return {
        init: function() {
            if( ! this.isAccepted()){
                triggerNotoficationCallback(this);
            }
        },
        isAccepted: function () {
            var decodedCookie = decodeURIComponent(document.cookie);
            var cookies = decodedCookie.split(";");
            for(var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i];
                while(cookie.charAt(0) === " ") {
                    cookie = cookie.substr(1);
                }
                if(cookie.indexOf(name) === 0) {
                    return true;
                }
            }
            return false;
        },
        accept: function () {
            var now = new Date();
            now.setTime(now.getTime() + 31536000000); //year
            var expires = "expires=" + now.toUTCString();
            document.cookie = name + "=" + 1 + ";" + expires + ";path=/";
        },
        getElement: function () {
            return element;
        }
    };
};
