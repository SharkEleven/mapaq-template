/* MAX JS */


// $(function() {
//     var councillExpend = $('#js-council-map').innerWidth();
//     var councillorList = $('#js-councillor-list');
//
//     resizeMobile();
//
//
//     /* COUNCIL MAP OPEN MENU MOBILE ON CLICK */
//     $('#mapMenu').on('click', function(){
//         if (councillorList.hasClass('is-open')){
//             councillorList.removeClass('is-open');
//         }
//         else {
//             councillorList.addClass('is-open');
//         }
//     });
//
// });
//
//
//
// /* STYLE THE COUNCILLOR LIST MENU ON MOBILE */
// var resizeMobile = function() {
//     var councillorList = $('#js-councillor-list');
//
//
//     if (window.matchMedia("(max-width: 992px)").matches) {
//         councillorList.css('left', councillExpend-50 +'px');
//     }
//
//
//     $(window).resize(function() {
//         var councillExpend = $('#js-council-map').innerWidth();
//
//         if (window.matchMedia("(max-width: 992px)").matches) {
//             councillorList.css('left', councillExpend-50 +'px');
//         }
//     });
//
// }



var mapaq = {

    el: {

        window: $(window),

        councillorsMapWidth: $("#js-council-map").innerWidth(),
        councillorsList: $("#js-councillor-list"),
        mobileCouncillorsMenu: $("#mapMenu")

    },

    councillorsList: $("#js-councillor-list"),


    init: function() {
        mapaq.bindUIActions();
        mapaq.loadWindow();
        mapaq.el.window.resize(mapaq.resizeWindow);
    },

    bindUIActions: function() {
        mapaq.el.mobileCouncillorsMenu.on("click", mapaq.mobileCouncillorsMenuToggle);
    },

    loadWindow: function() {
        if (mapaq.el.window.width() <= 992) {
            mapaq.el.councillorsList.css("left", mapaq.el.councillorsMapWidth-50 +'px');
        }
    },

    resizeWindow: function() {
        console.log('aaadf');
        if(mapaq.el.window.width() <= 992) {
            mapaq.el.councillorsList.css("left", mapaq.el.councillorsMapWidth-50 +"px");
        }
    },

    mobileCouncillorsMenuToggle: function(event) {
        event.preventDefault();
        if (mapaq.el.councillorsList.hasClass("is-open")){
            mapaq.el.councillorsList.removeClass("is-open");
        }
        else {
            mapaq.el.councillorsList.addClass("is-open");
        }
    }


};

mapaq.init();
