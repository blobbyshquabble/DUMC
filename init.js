


var elem = document.querySelector('.sidenav');
var instance = M.Sidenav.init(elem, {});

(function($){
    $(function(){

        $("#dropdown-trigger1").dropdown();
        $("#dropdown-trigger2").dropdown();


    }); // end of document ready
})(jQuery); // end of jQuery name space
var elem = document.querySelector('.slider');
var instance = M.Slider.init(elem, {height: 450});
