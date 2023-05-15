$(document).ready(function () {
  // 헤더 네비게이션

  $(".sub").hide();
  $("#header_in .nav")
    .eq(0)
    .hover(
      function () {
        $(this).find(".sub").stop().slideDown(700);
      },
      function () {
        $(this).find(".sub").stop().slideUp(700);
      }
    );


  //  포스터 효과
  $('.poster li a').mouseover(function () {
    $(this).css('opacity', '0.4');
  })

  $('.poster li a').mouseout(function () {
    $(this).css('opacity', '1');
  })

  // 소장품 효과
  $('#collection li').mouseover(function () {
    $(this).css('opacity', '0.4');
  })

  $('#collection li').mouseout(function () {
    $(this).css('opacity', '1');
  })



  // 슬라이드 베너
  var current = 0;
  var setIntervalId;
  $(".benner_btns li").eq(current).addClass("on");

  $(".benner_btns li").on({
    click: function () {
      var tg = $(this);
      var i = tg.index();

      movie(i);
      console.log(i);

      $(".benner_btns li").removeClass("on");
      $(this).addClass("on");
    },
  });

  $("#benner").on({
    mouseover: function () {
      clearInterval(setIntervalId);
    },
    mouseout: function () {
      timer();
    },
  });

  timer();
  function timer() {
    setIntervalId = setInterval(function () {
      var n = current + 1;
      if (n == 3) {
        n = 0;
      }
      movie(n);
      $(".benner_btns li").removeClass("on");
      $(".benner_btns li").eq(n).addClass("on");
    }, 3000);
  }

  function movie(i) {
    if (current == i) return;

    var currentEl = $(".benner_area > ul > li").eq(current);
    var nextEl = $(".benner_area > ul > li").eq(i);

    currentEl.css({ top: "0px" }).stop().animate({ top: "265px" });
    nextEl.css({ top: "265px" }).stop().animate({ top: "0px" });

    current = i;
  }
});

$(document).ready(function () {
  // 메인이미지 슬라이드

  var current = 0; //초기에 보이는 메인이미지 인덱스값
  var setIntervalId;

  $("#main_img").on({
    mouseover: function () {
      clearInterval(setIntervalId);
    },
    mouseout: function () {
      timer();
    },
  });

  timer();
  function timer() {
    setIntervalId = setInterval(function () {
      var n = current + 1;
      if (n == 2) {
        n = 0;
      }
      movie(n);
    }, 3000);
  }

  function movie(i) {
    if (current == i) return;

    var currentEl = $("#main_img > ul > li ").eq(current);
    var nextEl = $("#main_img > ul > li ").eq(i);

    currentEl.css({ left: 0 }).stop().animate({ left: "-100%" }, 1500);
    nextEl.css({ left: "100%" }).stop().animate({ left: 0 }, 1500);

    current = i;
  }
});
