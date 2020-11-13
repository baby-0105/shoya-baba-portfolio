/* eslint-disable */

import $ from 'jquery'
import router from './modules/Router'
import '../scss/app.scss'

$(() => {
  const $bodyAndHtml = $('body, html');

  let scrollPosi;
      lowerTitle=['intro', 'skills', 'production', 'canDo', 'contact'],
      upperTitle=['Intro', 'Skills', 'Production', 'CanDo', 'Contact'];

  // ページの一番上までスクロールさせます。
  $("#to_top").on('click', function() {
    $bodyAndHtml.animate({scrollTop: 0}, 300, 'linear');
  });

  // SP用：ハンバーガーのトグルアクション
  $(document).on('click', function(e) {
    const $headerNav = $('#headerNav');

    if($(e.target).is('#hamburger')) {
      $headerNav.toggleClass('c-header__is-active');
    } else if($(e.target).is('*')) {
      $headerNav.removeClass('c-header__is-active');
    }
  });

  // headerボタンクリック：指定の位置までスクロール（クロージャー使用）
  for (let i=0; i < upperTitle.length; i++) {
    $(`#header${upperTitle[i]}`).on('click', (function() {
      let x = i;

      return function() {
        let headerHeight = $('#header').innerHeight(); //innerHeight()は、paddingも含めた高さ

        $bodyAndHtml.animate({scrollTop: $(`#${lowerTitle[x]}`).offset().top - headerHeight});
      }
    })());
  }

  // スクロールイベント
  $(window).scroll(function() {
    let windowHeight = $(window).height();

    scrollPosi = $(window).scrollTop();

    (function appearTitleText() {
      for (let i=0; i < lowerTitle.length; i++) {
        $(`#${lowerTitle[i]}TitleWord`).each(function() {
          let titleTextPosi = $(this).offset().top;

          if (scrollPosi > titleTextPosi - windowHeight + 100){
            $(this).addClass('slideInToDown'); // 速度：addClass、removeClass > .css()
          }
        });
      }
    })();

    (function apperAboutText() {
      $('.p-top-intro__infoTextBlock').each(function() {
        let aboutTextPosi = $(this).offset().top;

        if (scrollPosi > aboutTextPosi - windowHeight + 150){
          $(this).addClass('slideInToUp');
        }
      })
    })();

    (function appearLang() {
      let langArea = ['front', 'back', 'tools'];
      let frontDetailsPosi = $('#frontDetailList').offset().top,
          backDetailsPosi = $('#backDetailList').offset().top,
          toolsDetailsPosi = $('#toolsDetailList').offset().top;

      if (scrollPosi > frontDetailsPosi - windowHeight + 300){
        for (let i=0; i < 6; i++) {
          $(`#frontItemUnit${i+1}`).addClass('slideInToUp');
        }
        for (let i=0; i < 7; i++) {
          $(`#frontExtendGraph${i}`).each(function() {
            extend = $(this).data('extend');
            $(this).css({'width': extend * 20 + '%', 'opacity': '1'});
          });
        }
      }

      if (scrollPosi > backDetailsPosi - windowHeight + 300){
        for (let i=0; i < 6; i++) {
          $(`#backItemUnit${i+1}`).addClass('slideInToUp');
        }
        for (let i=0; i < 7; i++) {
          $(`#backExtendGraph${i}`).each(function() {
            extend = $(this).data('extend');
            $(this).css({'width': extend * 20 + '%', 'opacity': '1'});
          });
        }
      }

      if (scrollPosi > toolsDetailsPosi - windowHeight + 300){
        for (let i=0; i < 6; i++) {
          $(`#toolsItemUnit${i+1}`).addClass('slideInToUp');
        }
        for (let i=0; i < 7; i++) {
          $(`#toolsExtendGraph${i}`).each(function() {
            extend = $(this).data('extend');
            $(this).css({'width': extend * 20 + '%', 'opacity': '1'});
          });
        }
      }

      (function productionAddShadow() {
        $('.p-top-production__itemList__img').each(function() {
          let productsPosi = $(this).offset().top;

          if (scrollPosi > productsPosi - windowHeight + 200){
            $(this).addClass('productionAnim');
            $(this).addClass('productionSlideInToUp');
          }
        });
      })();
    })();
  });

  // production画像クリック→詳細表示/非表示
  for (let i=0; i < lowerTitle.length; i++) {
    $(document).on('click', function(e) {
      let $productionDetail = $(`#productionDetail${i+1}`);

      if($(e.target).is(`#productionItemList${i+1}`)) {
        $productionDetail.toggleClass('show');
      } else if($(e.target).is('*')) {
        $productionDetail.removeClass('show');
      }
    });
  }

  // 問い合わせフォーム：バリデーション
  $("#contactForm").validate({
    rules: {
      name: {
        required: true, // 入力必須チェック
        rangelength: [1, 50],
      },
      email: {
        required: true, // 入力必須チェック
        email: true, // 形式チェック
      },
      message: {
        required: true // 入力必須チェック
      }
    },
    messages: {
      name: {
        required: "*お名前を入力してください",
      },
      email: {
        required: "*メールアドレスを入力してください",
        email: "*正しいメールアドレス形式で入力してください",
      },
      message: {
        required: "*メッセージを入力してください"
      }
    }
  });
})
