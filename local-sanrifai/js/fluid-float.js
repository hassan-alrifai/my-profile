jQuery(document).ready(function($) {


    var $maintitle = $('.main-title');
    var $h1reverse = $('.h1-reverse');
    var $portfoliomenu = $('.portfolio-menu');
    var $win = $(window);

    //main-title

    $win.on('scroll',function() {
        var top = $win.scrollTop() *(-0.35);
        $maintitle.css('transform', 'translateY(' + top + 'px)');
    });

    //reverse-title

    $win.on('scroll',function() {
        var top = $win.scrollTop() *(0.35);
        $h1reverse.css('transform', 'translateY(' + top + 'px) rotate(180deg)');
    });

    //works-menu
    $win.on('scroll',function() {
        var top = $win.scrollTop() *(0.75);
        $portfoliomenu.css('transform', 'translateY(' + top + 'px)');
    });

});