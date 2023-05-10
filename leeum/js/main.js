// 베너부분 슬라이드

$(document).ready(function () {
  var current = 0; //초기에 보이는 메인이미지 인덱스값
  var setIntervalId;
  $(".benner_btns li").eq(current).addClass("on");

  //$('.btns').click(function () { })
  //$('.btns').on('click', function () { });
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
    //setInterval():함수를 정해놓은 시간마다 반복적으로 실행하는 메소드
    //setInterval()함수를 멈추게하는 메소드는 clearInterval(반복실행함수의 객체명)
    //var setIntervalId = setInterval(function () { }, 3000);
    //clearInterval(setIntervalId)

    //정해진 시간에 한번 실행
    //var stopFunc = setTimeout(함수명(), 시간);
    //clearTimeout(stopFunc); setTimeout()함수를 실행중지

    setIntervalId = setInterval(function () {
      var n = current + 1; //0 1 2
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
    //현재보이는이미지와 다음에 보이는 이미지가 같다면 애니메이션 중지

    //변수를 선언
    var currentEl = $(".benner_area > ul > li").eq(current);
    var nextEl = $(".benner_area > ul > li").eq(i);

    currentEl.css({ top: "0px" }).stop().animate({ top: "265px" });
    nextEl.css({ top: "265px" }).stop().animate({ top: "0px" });

    current = i;
  }
});
