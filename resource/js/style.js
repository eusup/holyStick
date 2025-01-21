$(document).ready(function () {
    $(".card-area li").click(function () {
        $(this).addClass("act");
    });

    $("video").click(function(){
        const videoNow = $('video').get(0);
        if(videoNow.paused == true){
            videoNow.play();
            $(this).siblings(".play").addClass("hide");
            $(this).siblings(".play").removeClass("show");
        }else{
            videoNow.pause();
            $(this).siblings(".play").addClass("show");
            $(this).siblings(".play").removeClass("hide");
        }
    });

    // 인트로페이지 로그인 애니메이션입니다. 로딩바가 100% 가 되면 버튼 이 노출됩니다.
    function introLoading() {
        $(".wrap.intro .bottom .progress-bar .ball").animate({ width: '100%' }, 1500);
        setTimeout(function () {
            $(".wrap.intro .bottom > div:nth-child(1)").hide();
            $(".wrap.intro .bottom > .btn-wrap").addClass("act");
        }, 1600);
    }

    introLoading();

    // test
    $(".recording").click(function(){
        $(this).toggleClass("act");
    });

    // 다크모드 테스트
    $(".darkMode-btn").click(function(){
        $(this).toggleClass("act");
        $(this).find("i").toggleClass("act");
        $(".wrap").toggleClass("dark");
    });
});
