# Iconic.Js.TermsAcceptance

```javascript
var triggerModal = function (service) {
        $(function () {
            var modal = $(service.getElement());
            modal.modal('show');
            modal.on('hidden.bs.modal', service.accept);
        });
    };

    var cookie = TermsService('cookies', '#cookieModal', triggerModal);
    cookie.init();
    var gdpr = TermsService('gdpr', '#gdprModal', triggerModal);
    gdpr.init();
```
