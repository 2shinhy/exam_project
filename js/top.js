
// 햄버거 버튼
$(".short_menu").parent().on('click', function() {
    $(".about_menu").toggleClass('show');
});

// 메뉴 드롭다운
$(".about_menu>ul>li").on('click', function(event){
    $(event.currentTarget).find(".sub").toggleClass('.show');
});

  
