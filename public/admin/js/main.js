(function ($, AdminLTE) {
    "use strict";

    /**
     * Get access to plugins
     */

    $('[data-toggle="control-sidebar"]').controlSidebar()
    $('[data-toggle="push-menu"]').pushMenu()
    var $pushMenu = $('[data-toggle="push-menu"]').data('lte.pushmenu')
    var $controlSidebar = $('[data-toggle="control-sidebar"]').data('lte.controlsidebar')
    var $layout = $('body').data('lte.layout')
    $(window).on('load', function() {
        // Reinitialize variables on load
        $pushMenu = $('[data-toggle="push-menu"]').data('lte.pushmenu')
        $controlSidebar = $('[data-toggle="control-sidebar"]').data('lte.controlsidebar')
        $layout = $('body').data('lte.layout')
    })
    $("body").toggleClass('fixed');
    setTimeout(function(){
        $layout.fixSidebar();
        $pushMenu.expandOnHover();
        $layout.activate();
        $controlSidebar.fix();
    }, 1000);
    $('body').on('shown.bs.modal', '.modal', function(){
        if ($('body').width() <= 780 && $('body').hasClass('sidebar-open')) {
            $('.sidebar-toggle').trigger('click');
        }
    });
})(jQuery, $.AdminLTE);
