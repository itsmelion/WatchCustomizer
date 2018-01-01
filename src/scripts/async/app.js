$(function () {

    // Selecting watch options
    $('.opt-metal-type').click(function (event) {
        var contentPanelId = jQuery(this).attr("id");
        var currentMetalType = metalTypes.filter(x => x.key === contentPanelId)[0];
        $('.metal-type').attr('src', './images/' + currentMetalType.image);
        var url = "?metal-type=" + currentMetalType.description;
        // window.history.replaceState(null, null, url);
        if (history.pushState) {
            var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + url;
            window.history.pushState({
                path: newurl
            }, '', newurl);
        }
    });

    // Real time hour markers (SVG)
    // ## Hard Pointers
    var setTime = function () {
        var date = new Date(),
            MINUTE = 60,
            HOUR = 60 * MINUTE,
            seconds = date.getSeconds(),
            minutes = (date.getMinutes() * MINUTE) + seconds,
            hours = (date.getHours() * HOUR) + minutes;

        document.getElementById('bigSecondHand').setAttribute('style', 'transform:rotate(' + (360 * (seconds / MINUTE) + 90) + 'deg)');
        document.getElementById('bigMinuteHand').setAttribute('style', 'transform:rotate(' + 360 * (minutes / HOUR) + 'deg)');
        document.getElementById('bigHourHand').setAttribute('style', 'transform:rotate(' + (360 * (hours / (12 * HOUR)) + 180) + 'deg)');
    };
    setTime();
    var interval = setInterval(setTime, 1000);

});