(function ($, AdminLTE) {
    "use strict";
    $("body").toggleClass('fixed');
    setTimeout(function(){
        AdminLTE.layout.fixSidebar();
        AdminLTE.pushMenu.expandOnHover();
        AdminLTE.layout.activate();
        AdminLTE.controlSidebar._fix($(".control-sidebar-bg"));
        AdminLTE.controlSidebar._fix($(".control-sidebar"));
    }, 1000);
    $('body').on('shown.bs.modal', '.modal', function(){
        if ($('body').width() <= 780 && $('body').hasClass('sidebar-open')) {
            $('.sidebar-toggle').trigger('click');
        }
    });
})(jQuery, $.AdminLTE);
