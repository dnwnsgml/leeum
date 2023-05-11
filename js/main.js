// 헤더 슬라이드
$(document).ready(function () {
  // $(".sub").hide();

  $("#header_in .nav")
    .eq(0)
    .hover(
      function () {
        $(this).find(".sub").slideDown(700);
      },
      function () {
        $(this).find(".sub").slideUp(700);
      }
    );
});

// 베너부분 슬라이드

$(document).ready(function () {
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

  //자동실행에 대한 제어
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
