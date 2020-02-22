$(document).ready(function(){
    $("nav").hide();
    $(".cerrar-menu, .cerrar-menu-about").hide();

    $(".btn-menu, .btn-menu-about").click(function(){
       $("nav").show();
       $(".portada,.about").css("height","90vh");
       $(".cerrar-menu, .cerrar-menu-about").show();
       $(".btn-menu, .btn-menu-about").hide();
    })
    
    $(".cerrar-menu, .cerrar-menu-about").click(function(){
        $(".portada, .about").css("height","100vh");
        $(".btn-menu, .btn-menu-about").show();
        $(".cerrar-menu, .cerrar-menu-about").hide();
        $("nav").hide();
    })
})