jQuery(function ($) {

    var isSafari = navigator.userAgent.indexOf('Safari') > -1;

    var loadScript = function (src, loadCallback) {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = src;
        s.onload = loadCallback;
        document.body.appendChild(s);
    };

    if (isSafari) {
        loadScript('//cdnjs.cloudflare.com/ajax/libs/webshim/1.15.10/dev/polyfiller.js', function () {
            webshims.setOptions('forms', {
                overrideMessages: true,
                replaceValidationUI: false
            });
            webshims.setOptions({
                waitReady: true
            });
            webshims.polyfill();
        });
    }

    function toggleIcon(e) {
        $(e.target)
            .prev('.panel-heading')
            .find(".more-less")
            .toggleClass('glyphicon-plus glyphicon-minus');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);

    let categories = [];
    let metalTypes = [];

    $.getJSON("src/dummy/parts.json", function (obj) {
        $.each(obj, function (key, value) {
            if (key.toLowerCase() === "categories") {
                obj[key].forEach(element => {
                    categories.push(element);
                    mapCategories(element.key, element.values);
                });
            }
        });
    });


    function mapCategories(key, values) {
        switch (key) {
            case 'metal-type':
                metalTypes = values;
                break;
            default: break;
        }
    }

    function fillOptions() {

    }

    $('.target').click


    // Selecting watch options
    $('.opt-metal-type').click(function (event) {
        var contentPanelId = jQuery(this).attr("id");
        var currentMetalType = metalTypes.filter(x => x.key === contentPanelId)[0];
        $('.metal-type').attr('src', './src/images/' + currentMetalType.image)
        var url = "?metal-type=" + currentMetalType.description;
        // window.history.replaceState(null, null, url);
        if (history.pushState) {
            var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + url;
            window.history.pushState({path:newurl},'',newurl);
        }
    });

});

isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    iPad: function () {
        return navigator.userAgent.match(/iPad/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
