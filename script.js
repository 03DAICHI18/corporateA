$(function() {

// トップスクロール
// (必要であれば)画面リロード時に一旦非表示設定をしておく
$(window).on('load resize', function(){
  $('#page-top').css('display','none');
  });

// 表示位置がトップからどれくらいに位置しているか
  $(window).scroll(function () {
  if ($(this).scrollTop() < 200) {
// 200px以下だとフェードアウト
    $('#page-top').fadeOut();
    } else {
// 200px以上離れたらフェードイン
    $('#page-top').fadeIn();
    }
    });
// クリックしたらトップ（高さ0px）へスクロール（0.5秒かけて）
    $('#page-top').click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
    });

//SPサイズで表示されるハンバーガーメニュー
    $('#header-sp-btn').on('click', function () {
      $('#header-sp-menu').animate({ width: 'toggle'}, 300);
    });

  });