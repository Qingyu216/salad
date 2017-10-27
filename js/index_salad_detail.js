 $(function () {
     //点击进入购物车
     $('.footer_one').click(function () {
         window.location = '../cart/cart.html';
     });

     //加入购物车
     $('.footer_three').click(function () {
         $('.salad_btn_submit').html('<div class="salad_btn_cart" onclick="salad_btn_cart(this)">加入购物车</div>');
         $('.salad_popup').show();
         $('.canopy').show();
     });
     //购买数量加减

     $(".minus").click(function () {
         var t = $(this).parent().find('.result');
         t.text(parseInt(t.text()) - 1);
         if (t.text() <= 1) {
             t.text(1);
         }
     });
     // 数量加
     $(".plus").click(function () {
         var t = $(this).parent().find('.result');
         t.text(parseInt(t.text()) + 1);
         if (t.text() <= 1) {
             t.text(1);
         }
     });

     //日期时间选择
     $('.salad_list_day li').click(function () {
         $(this).addClass('salad_list_active');
         $('.delivery_time').text($(this).text());
         $(this).siblings().removeClass('salad_list_active');
     });
     $('.salad_list_time li').click(function () {
         $(this).addClass('salad_list_active');
         $('.delivery_date').text($(this).text());
         $(this).siblings().removeClass('salad_list_active');
     });


     //选择酱汁
     console.log($('.sauce_one').text());
     console.log($('.sauce_two').text());
     for (var i = 0; i < $('.salad_list_sauce li').length; i++) {
         if ($('.salad_list_sauce li:eq(' + i + ')').text() == $('.sauce_one').text() || $('.salad_list_sauce li:eq(' + i + ')').text() == $('.sauce_two').text()) {
             $('.salad_list_sauce li:eq(' + i + ')').attr('flag', '1');
             if ($('.salad_list_sauce li:eq(' + i + ')').attr('flag') == 1) {
                 $('.salad_list_sauce li:eq(' + i + ')').addClass('salad_list_active');
             }
         }
     }

     $('.salad_list_sauce li').click(function () {
         if ($(this).attr('flag') == 0) {
             if ($('.salad_list_sauce li.salad_list_active').length < 2) {
                 $(this).addClass('salad_list_active');
                 $(this).attr('flag', '1');
             } else {
                 $(this).removeClass('salad_list_active');
                 $(this).removeClass('salad_list_active');
             }
         } else {
             $(this).attr('flag', '0');
             $(this).removeClass('salad_list_active');
         };
     });

     //点击隐藏时间日期选择弹窗
     $('.salad_cancel_img').click(function () {
         $(this).parent().parent().parent().hide();
         $('.canopy').hide();
     })



     //立即购买
     $('.footer_two').click(function () {
         $('.salad_btn_submit').html('<div class="salad_btn_buy" onclick="salad_btn_buy(this)">下一步</div>');
         $('.salad_popup').show();
         $('.canopy').show();
     });


     //点击配送时间和日期选择
     $('.salad_name .color').click(function () {
         $('.salad_btn_submit').html('<div class="time_select" onclick="salad_btn_buy(this)">立即购买</div><div class="time_select" onclick="salad_btn_cart(this)">加入购物车</div>');
         $('.salad_popup').show();
         $('.canopy').show();
     })
 });
 var num = parseInt($('.badge').text());

 function sum() {
     if (num <= 0) {
         $('.badge').hide();
     } else {
         $('.badge').show();
         if (num >= 100) {
             $('.footer_one .badge').css({
                 'font-size': '0.1rem',
                 'color': 'black'
             });
         }
     }
 }
 sum();


 //加入购物车

 function salad_btn_cart(_this) {
     if ($('.salad_list_day li').hasClass('salad_list_active') && $('.salad_list_time li').hasClass('salad_list_active') && $('.salad_list_sauce li').hasClass('salad_list_active') && $(".salad_list_sauce li[flag='1']").length == 2) {
         $(_this).parent().parent().hide();
         $('.canopy').hide();
         var t = $('.footer_three').parent().find('b[class*=badge]');
         num = t.text(parseInt(t.text()) + parseInt($('.result').text()));
         sum();
     } else {
         $('.plase_select').show(300).delay(1000).hide(300);
     }
 }

 //立即购买
 function salad_btn_buy(_this) {
     if ($('.salad_list_day li').hasClass('salad_list_active') && $('.salad_list_time li').hasClass('salad_list_active') && $('.salad_list_sauce li').hasClass('salad_list_active') && $(".salad_list_sauce li[flag='1']").length == 2) {
         $(_this).parent().parent().hide();
         $('.canopy').hide();
         var t = $('.footer_three').parent().find('b[class*=badge]');
         num = t.text(parseInt(t.text()) + parseInt($('.result').text()));
         sum();
         location.href = "../cart/submit_order.html";
     } else {
         $('.plase_select').show(300).delay(1000).hide(300);
     }
 }