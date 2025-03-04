// 미디어쿼리 설정
const mediaQueryTablet = window.matchMedia("(max-width: 1280px)");
const mediaQueryMobile = window.matchMedia("(max-width: 640px)");


// 전체 페이지 슬라이드 Swiper 설정
const swiper = new Swiper('.view.swiper', {
  direction: 'vertical',
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false,
  // },
  mousewheel: {
    enabled: false, // 초기에는 Swiper 스크롤 비활성화
  },
  on: {
    slideChangeTransitionStart: () => {
      const activeSection = document.querySelector('.swiper-slide-active section');

      // 1번 슬라이드 활성화 설정
      if (activeSection.classList.contains('section1')) {
        activateFirstSlide();
      }

      // 2번 슬라이드 활성화 설정
      if (activeSection.classList.contains('section2')) {
        activateSecondSlide(); // 2번 슬라이드 설정 함수 호출
      }

      // 3번 슬라이드 활성화 설정
      if (activeSection.classList.contains('section3')) {
        activateThirdSlide(); // 3번 슬라이드 설정 함수 호출
      }

      // 4번 슬라이드 활성화 설정
      if (activeSection.classList.contains('section4')) {
        activateFourthSlide(); // 4번 슬라이드 설정 함수 호출
      }

      // 5번 슬라이드 활성화 설정
      if (activeSection.classList.contains('section5')) {
        activateFifthSlide(); // 5번 슬라이드 설정 함수 호출
      }

      // 6번 슬라이드 활성화 설정
      if (activeSection.classList.contains('section6')) {
        activateSixthSlide(); // 6번 슬라이드 설정 함수 호출
      }

      // 7번 슬라이드 활성화 설정
      if (activeSection.classList.contains('section7')) {
        activateSeventhSlide(); // 7번 슬라이드 설정 함수 호출
      }

      // 8번 슬라이드 활성화 설정
      if (activeSection.classList.contains('section8')) {
        activateEighthSlide(); // 8번 슬라이드 설정 함수 호출
      }

        // 9번 슬라이드 활성화 설정
        if (activeSection.classList.contains('section9')) {
        activateNinthSlide(); // 9번 슬라이드 설정 함수 호출
      }

      
      
      
    },
  },
});





// 첫 번째 슬라이드 애니메이션 (기존 initialAnimation과 firstScrollAnimation 통합)
const activateFirstSlide = () => {
  // 이전 애니메이션 강제 중단 및 초기화
  gsap.killTweensOf([
    ".conMain-products",
    "header h1 .black",
    "header h1 .white",
    "header nav div",
    ".conMain-ellipseBox",
    ".conMain-text p",
    ".conMain-text.beMore",
    ".conMain-text.dynamic",
    ".conMain-scrollDownCircle"
  ]);

  // 초기 상태 설정
  gsap.set(".conMain-products", { opacity: 0.4, scale: 0.4 });
  gsap.set(".header h1 .black", { opacity: 0 });
  gsap.set(".header h1 .white", { opacity: 1 });
  gsap.set(".header nav div", { color: "#ffffff" });

  // 애니메이션 실행
  const animationScale = mediaQueryMobile.matches
    ? 2.5
    : mediaQueryTablet.matches
    ? 1.8
    : 1;

  const ellipseBoxScale = mediaQueryMobile.matches
    ? 750
    : mediaQueryTablet.matches
    ? 450
    : 400;
  
  const conMainTextRightLeft = mediaQueryMobile.matches
    ? "5vw"
    : mediaQueryTablet.matches
    ? 40
    : "8vw";
  
  const ellipseBoxScaleY = mediaQueryMobile.matches
    ? 180
    : mediaQueryTablet.matches
    ? 140
    : 100;

  gsap.timeline({
    onComplete: () => {
      initialAnimationCompleted = true;
      swiper.mousewheel.enable(); // 애니메이션 완료 후 Swiper 활성화
    },
  })
    .fromTo(
      ".conMain-products",
      { scale: 0.4, opacity: 0.4, filter: "blur(1.8vw)" },
      {
        scale: animationScale,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.inOut",
      }
    )
    .fromTo(
      ".conMain-ellipseBox",
      { opacity: 1, scale: 0 },
      { opacity: 1, scale: ellipseBoxScale, duration: 0.4, ease: "power1.inOut" },
      "<50%"
    )
    .fromTo(
      ".conMain-ellipseBox",
      { rotate: -15, backgroundColor: "#ffffff", borderRadius: "50%" },
      { rotate: -35, backgroundColor: "#F81884", borderRadius: 0, duration: 0.6, ease: "power3.inOut" },
      "<50%"
    )
    .fromTo(
      ".conMain-ellipseBox",
      { rotate: -35, backgroundColor: "#ffffff", borderRadius: "50%" },
      { scaleY: ellipseBoxScaleY, rotate: 35, backgroundColor: "#F81884", borderRadius: 0, duration: 0.6, ease: "power3.inOut" },
      "<50%"
    )
    .fromTo(
      ".conMain-text p",
      { color: "#F81884" },
      { color: "#ffffff", duration: 0.6, ease: "power1.inOut" },
      "<"
    )
    .fromTo(
      ".conMain-text.beMore",
      { right: "100%", opacity: 0 },
      { right: conMainTextRightLeft, opacity: 1, duration: 0.4 }
    , "<")
    .fromTo(
      ".conMain-text.dynamic",
      { left: "100%", opacity: 0 },
      { left: conMainTextRightLeft, opacity: 1, duration: 0.4 }
    , "<90%")
    .fromTo(
      ".conMain-scrollDownCircle",
      { opacity: 0 },
      { opacity: 1, duration: 0.4 }
    , "<");
    
};

// 2번 슬라이드 애니메이션 설정 함수
const activateSecondSlide = () => {
  // 이전 애니메이션 강제 중단 및 초기화
  gsap.killTweensOf([
    "header h1 .black",
    "header h1 .white",
    "header nav div",
    ".conMain-products2",
    ".conMain-text2",
    ".conMain-text3",
    ".conMain-text3 .count b",
    ".conMain-text4 .detail"
  ]);

  // 초기 상태 강제 설정
  gsap.set(".header h1 .black", { opacity: 0 });
  gsap.set(".header h1 .white", { opacity: 1 });
  gsap.set(".header nav div", { color: "#ffffff" });
  gsap.set(".conMain-products2", { opacity: 0, scale: 0.9 });
  gsap.set(".conMain-text2", { opacity: 0, y: 50 });
  gsap.set(".conMain-text3", { opacity: 0, y: 50 });
  gsap.set(".conMain-text3 .count b", { innerText: 0 });
  gsap.set(".conMain-text4 .detail", { opacity: 0, y: 20 });
  
  // 애니메이션 실행
  gsap.timeline()
    .fromTo("header h1 .black",
    { opacity: 0 },
    { opacity: 0, duration: 0.8 }
    )
    .fromTo("header h1 .white",
      { opacity: 1 },
      { opacity: 1, duration: 0.8 }
    , "<")
    .fromTo("header nav div", 
      { color: "#ffffff" },
      { color: "#ffffff", duration: 0.8 }
    , "<")
    .fromTo(
      ".conMain-products2",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 2, ease: "power3.out" }
    , "<")
    .fromTo(
      ".conMain-text2",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out", delay: 0.1 },
      "<"
    )
    .fromTo(
      ".conMain-text3",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out", delay: 0.2 },
      "<"
    )
    .fromTo(
      ".conMain-text3 .count b",
      { innerText: 0 },
      {
        innerText: 10000,
        duration: 0.8,
        ease: "linear",
        snap: { innerText: 1 },
        onUpdate: function () {
          const countElement = document.querySelector(".conMain-text3 #count");
          countElement.textContent = Math.floor(this.targets()[0].innerText);
        },
      },
      "<"
    )
    .fromTo(
      ".conMain-text4 .detail",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "power3.out", delay: 0.3},
      "<"
    );
};

// 3번 슬라이드 애니메이션 설정 함수
const activateThirdSlide = () => {
// 이전 애니메이션 강제 중단 및 초기화
gsap.killTweensOf([
  "header h1 .black",
  "header h1 .white",
  "header nav div",
  ".conMain-products3",
  ".conMain-text5",
  ".conMain-text6"
]);

// 초기 상태 강제 설정
gsap.set(".header h1 .black", { opacity: 0 });
gsap.set(".header h1 .white", { opacity: 1 });
gsap.set(".header nav div", { color: "#ffffff" });
gsap.set(".conMain-products3", { opacity: 0, scale: 0.9 });
gsap.set(".conMain-text5", { opacity: 0, y: 50 });
gsap.set(".conMain-text6", { opacity: 0, y: 50 });

// 애니메이션 실행
gsap.timeline()
  .fromTo("header h1 .black",
    { opacity: 0 },
    { opacity: 0, duration: 0.8 }
  )
  .fromTo("header h1 .white",
    { opacity: 1 },
    { opacity: 1, duration: 0.8 }
  , "<")
  .fromTo("header nav div", 
    { color: "#ffffff" },
    { color: "#ffffff", duration: 0.8 }
  , "<")
  .fromTo(
    ".conMain-products3",
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1, duration: 2, ease: "power3.out" }
  , "<")
  .fromTo(
    ".conMain-text5",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 2, ease: "power3.out", delay: 0.2 },
    "<"
  )
  .fromTo(
    ".conMain-text6",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 2, ease: "power3.out", delay: 0.4 },
    "<"
  );
};

// 4번 슬라이드 애니메이션 설정 함수
const activateFourthSlide = () => {
// 이전 애니메이션 강제 중단 및 초기화
gsap.killTweensOf([
  "header h1 .black",
  "header h1 .white",
  "header nav div",
  ".conQuality-bestQuality",
  ".conQuality-bestQuality img.afterimage",
  ".conQuality-1-text2",
  ".conQuality-1-text3",
  ".conQuality-1-text2 img.afterimage",
  ".conQuality-1-text3 img.afterimage"
]);

// 초기 상태 강제 설정
gsap.set(".header h1 .black", { opacity: 0 });
gsap.set(".header h1 .white", { opacity: 1 });
gsap.set(".header nav div", { color: "#ffffff" });
gsap.set(".conQuality-bestQuality", { opacity: 0.5, transform: "scale(2)" });
gsap.set(".conQuality-bestQuality img.afterimage", { opacity: 1, transform: "scale(1)" });
gsap.set(".conQuality-1-text2", { opacity: 0, transform: "scale(2)" });
gsap.set(".conQuality-1-text2 img.afterimage", { opacity: 1, transform: "scale(1)" });
gsap.set(".conQuality-1-text3", { opacity: 0, transform: "scale(2)" });
gsap.set(".conQuality-1-text3 img.afterimage", { opacity: 1, transform: "scale(1)" });

// 애니메이션 실행
gsap.timeline()
  .fromTo("header h1 .black",
    { opacity: 0 },
    { opacity: 0, duration: 0.8 }
  )
  .fromTo("header h1 .white",
    { opacity: 1 },
    { opacity: 1, duration: 0.8 }
  , "<")
  .fromTo("header nav div", 
    { color: "#ffffff" },
    { color: "#ffffff", duration: 0.8 }
  , "<")
  .fromTo('.conQuality-bestQuality', 
    { opacity: 0.5, transform: 'scale(2)' },
    { opacity: 1, transform: 'scale(0.8)', duration: 0.3 }
  , "<")
  .fromTo('.conQuality-bestQuality img.afterimage', 
    { opacity: 1, transform: 'scale(1)' }, 
    { opacity: 0, transform: 'scale(1.3)' }
    , "<80%")
  .fromTo('.conQuality-1-text2', 
    { opacity: 0, transform: 'scale(2)' },
    { opacity: 1, transform: 'scale(1)', duration: 0.3 }
  , "<20%")
  .fromTo('.conQuality-1-text2 img.afterimage', 
    { opacity: 1, transform: 'scale(1)' }, 
    { opacity: 0, transform: 'scale(1.3)' }
    , "<80%")
  .fromTo('.conQuality-1-text3', 
    { opacity: 0, transform: 'scale(2)' },
    { opacity: 1, transform: 'scale(1)', duration: 0.3 }
  , "<20%")
  .fromTo('.conQuality-1-text3 img.afterimage', 
    { opacity: 1, transform: 'scale(1)' }, 
    { opacity: 0, transform: 'scale(1.3)' }
    , "<80%")

};

// 5번 슬라이드 애니메이션 설정 함수
const activateFifthSlide = () => {
// 이전 애니메이션 강제 중단 및 초기화
gsap.killTweensOf([
  "header h1 .black",
  "header h1 .white",
  "header nav div",
  ".conQuality-text2 .imgBox .txtBox",
  ".conQuality-text2 .imgBox .afterimage",
  ".conQuality-2-text2",
  ".conQuality-2-text2 img.afterimage",
  ".conQuality-2-text3",
  ".conQuality-2-text3 img.afterimage"
]);

// 초기 상태 강제 설정
gsap.set(".header h1 .black", { opacity: 0 });
gsap.set(".header h1 .white", { opacity: 1 });
gsap.set(".header nav div", { color: "#ffffff" });
gsap.set(".conQuality-text2 .imgBox .txtBox", { opacity: 0.5, transform: 'scale(2)' });
gsap.set(".conQuality-text2 .imgBox .afterimage", { opacity: 1, transform: 'scale(1)' });
gsap.set(".conQuality-2-text2", { opacity: 0, transform: 'scale(2)' });
gsap.set(".conQuality-2-text2 img.afterimage", { opacity: 1, transform: 'scale(1)' });
gsap.set(".conQuality-2-text3", { opacity: 0, transform: 'scale(2)' });
gsap.set(".conQuality-2-text3 img.afterimage", {  opacity: 1, transform: 'scale(1)' });

// 애니메이션 실행
gsap.timeline()
  .fromTo("header h1 .black",
    { opacity: 0 },
    { opacity: 0, duration: 0.8 }
  )
  .fromTo("header h1 .white",
    { opacity: 1 },
    { opacity: 1, duration: 0.8 }
  , "<")
  .fromTo("header nav div", 
  { color: "#ffffff" },
  { color: "#ffffff", duration: 0.8 }
  , "<")
  .fromTo('.conQuality-text2 .imgBox .txtBox', 
    { opacity: 0.5, transform: 'scale(2)' },
    { opacity: 1, transform: 'scale(1)', duration: 0.3 }
  , "<")
  .fromTo('.conQuality-text2 .imgBox .afterimage', 
    { opacity: 1, transform: 'scale(1)' }, 
    { opacity: 0, transform: 'scale(1.3)' }
    , "<80%")
  .fromTo('.conQuality-2-text2', 
    { opacity: 0, transform: 'scale(2)' },
    { opacity: 1, transform: 'scale(1)', duration: 0.3 }
  , "<20%")
  .fromTo('.conQuality-2-text2 img.afterimage', 
    { opacity: 1, transform: 'scale(1)' }, 
    { opacity: 0, transform: 'scale(1.3)' }
    , "<80%")
  .fromTo('.conQuality-2-text3', 
    { opacity: 0, transform: 'scale(2)' },
    { opacity: 1, transform: 'scale(1)', duration: 0.3 }
  , "<20%")
  .fromTo('.conQuality-2-text3 img.afterimage', 
    { opacity: 1, transform: 'scale(1)' }, 
    { opacity: 0, transform: 'scale(1.3)' }
    , "<80%")
};

// 6번 슬라이드 애니메이션 설정 함수
const activateSixthSlide = () => {
// 이전 애니메이션 강제 중단 및 초기화
gsap.killTweensOf([
  "header h1 .black",
  "header h1 .white",
  "header nav div",
  ".conQuality-text3 .detail .underline",
  ".conQuality-bg.blue",
  ".conQuality-text3",
  ".conQuality-text4",
  ".conQuality-text4 .detail span"
]);

// 초기 상태 강제 설정
gsap.set(".header h1 .black", { opacity: 0 });
gsap.set(".header h1 .white", { opacity: 1 });
gsap.set(".header nav div", { color: "#ffffff" });
gsap.set(".conQuality-bg.blue", { backgroundColor: "#720EFF" });
gsap.set(".conQuality-text3 .detail .underline", { width: 0 });
gsap.set(".conQuality-text3", { top: "50%", opacity: 1 });
gsap.set(".conQuality-text4", { opacity: 0, left: 0 });
gsap.set(".conQuality-text4 .detail span", { opacity: 0 });

// 애니메이션 실행
const animationTop = mediaQueryMobile.matches
? "-90%"
: mediaQueryTablet.matches
? "-20%"
: "-10%";
const animationLeft = mediaQueryMobile.matches
? "0"
: mediaQueryTablet.matches
? "-85%"
: "-75%";
const animationTop2 = mediaQueryMobile.matches
? "-60%"
: mediaQueryTablet.matches
? "0"
: "0";
const animationTop3 = mediaQueryMobile.matches
? "-30%"
: mediaQueryTablet.matches
? "0"
: "0";

gsap.timeline()
  .fromTo("header h1 .black",
    { opacity: 0 },
    { opacity: 0, duration: 0.8 }
  )
  .fromTo("header h1 .white",
    { opacity: 1 },
    { opacity: 1, duration: 0.8 }
  , "<")
    .fromTo("header nav div", 
    { color: "#ffffff" },
    { color: "#ffffff", duration: 0.8 }
  , "<")
  .fromTo('.conQuality-bg.blue', 
      { backgroundColor: "#720EFF" },
      { backgroundColor: "#0E6EFF", delay: 0.2, duration: 0.4 }
  , "<")
  .fromTo('.conQuality-text3 .detail .underline',
    { width: 0 },
    { width: "100%", duration: 0.2 }
  , "<50%")
  .fromTo('.conQuality-text3', 
    { top: "50%" },
    { top: animationTop, duration: 0.4 }
  , "<180%")
  .fromTo('.conQuality-text4', 
    { top: "70%", opacity: 0 },
    { top: animationTop2, opacity: 1, duration: 0.4 }
  , "<")
  .fromTo('.conQuality-text3', 
    { opacity: 1 },
    { opacity: 0, duration: 0.4 }
  , "<30%")
  .fromTo('.conQuality-text4', 
    { left: 0 },
    { left: animationLeft, duration: 0.4 }
  )
  .fromTo('.conQuality-text4 .imgBox', 
    { y: "0" },
    { y: animationTop3, duration: 0.4 }
  , "<")
  .fromTo('.conQuality-text4 .detail span',
    { opacity: 0 },
    { stagger: { each: 0.06 }, opacity: 1, duration: 0.4 }
  , "<50%");
};

// 7번 슬라이드 애니메이션 설정 함수
const activateSeventhSlide = () => {
// 이전 애니메이션 강제 중단 및 초기화
gsap.killTweensOf([
  "header h1 .black",
  "header h1 .white",
  "header nav div",
  ".conQuality-experts-text .blueCircle",
  ".conQuality-experts-text .detail"
]);

// 초기 상태 강제 설정
gsap.set(".header h1 .black", { opacity: 0 });
gsap.set(".header h1 .white", { opacity: 1 });
gsap.set(".header nav div", { color: "#ffffff" });
gsap.set(".conQuality-experts-text .blueCircle", { scale: 100, left: "50%" });
gsap.set(".conQuality-experts-text .detail", { x: -100, opacity: 0 });

// 애니메이션 실행
gsap.timeline()
.fromTo("header h1 .black",
  { opacity: 0 },
  { opacity: 0, duration: 0.8 }
)
.fromTo("header h1 .white",
  { opacity: 1 },
  { opacity: 1, duration: 0.8 }
, "<")
.fromTo("header nav div", 
  { color: "#ffffff" },
  { color: "#ffffff", duration: 0.8 }
, "<")
.fromTo('.conQuality-experts-text .blueCircle', 
    { scale: 100 },
    { scale: 1, duration: 0.8, ease: "power3.out" }
, "<")
.fromTo('.conQuality-experts-text .blueCircle', 
    { left: "50%" },
    { left: 0, duration: 0.8, ease: "power3.out" }
)
.fromTo('.conQuality-experts-text .detail', 
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, stagger: { each: 0.1 }, duration: 0.8, ease: "power3.out" }
, "<30%")
};

// 8번 슬라이드 애니메이션 설정 함수
const activateEighthSlide = () => {
// 이전 애니메이션 강제 중단 및 초기화
gsap.killTweensOf([
  "header h1 .black",
  "header h1 .white",
  "header nav div",
]);

// 초기 상태 강제 설정
gsap.set(".header h1 .black", { opacity: 0 });
gsap.set(".header h1 .white", { opacity: 1 });
gsap.set(".header nav div", { color: "#ffffff" });

// 애니메이션 실행
gsap.timeline()
.fromTo("header h1 .black",
  { opacity: 0 },
  { opacity: 0, duration: 0.8 }
)
.fromTo("header h1 .white",
  { opacity: 1 },
  { opacity: 1, duration: 0.8 }
, "<")
.fromTo("header nav div", 
{ color: "#ffffff" },
{ color: "#ffffff", duration: 0.8 }
, "<")
};

// 9번 슬라이드 애니메이션 설정 함수
const activateNinthSlide = () => {
// 이전 애니메이션 강제 중단 및 초기화
gsap.killTweensOf([
  "header h1 .black",
  "header h1 .white",
  "header nav div",
  ".conAboutUs-descriptionBox",
  ".conAboutUs-topBtn"
]);

// 초기 상태 강제 설정
gsap.set(".header h1 .black", { opacity: 0 });
gsap.set(".header h1 .white", { opacity: 1 });
gsap.set(".header nav div", { color: "#ffffff" });
gsap.set(".conAboutUs-descriptionBox", { opacity: 0});
gsap.set(".conAboutUs-topBtn", { opacity: 0});

// 애니메이션 실행
gsap.timeline()
.fromTo("header h1 .black",
  { opacity: 0 },
  { opacity: 1, duration: 0.8 }
)
.fromTo("header h1 .white",
  { opacity: 1 },
  { opacity: 0, duration: 0.8 }
, "<")
.fromTo("header nav div", 
{ color: "#ffffff" },
{ color: "#0d0d0d", duration: 0.8 }
, "<")
.fromTo("header nav div", 
  { color: "#ffffff" },
  { color: "#0d0d0d", duration: 0.8 }
, "<")
.fromTo(".conAboutUs-descriptionBox", 
  { opacity: 0 },
  { opacity: 1, duration: 1 }
, "<")
.fromTo(".conAboutUs-topBtn", 
  { opacity: 0 },
  { opacity: 1, duration: 1 }
, "<")





};





















// 스크롤 이벤트 처리
window.addEventListener(
  "wheel",
  (event) => {
    if (!initialAnimationCompleted) {
      event.preventDefault();
    }
  },
  { passive: false }
);

// 초기 애니메이션 자동 실행
document.addEventListener("DOMContentLoaded", () => {
  activateFirstSlide();
});

















// Flavor swiper 설정
document.addEventListener("DOMContentLoaded", () => {
  // swiper 설정
  const swiper2 = new Swiper('.swiper.flavor', {
      // Optional parameters
      direction: 'horizontal',
      slidesPerView: 3,
      spaceBetween: 0,
      loop: true,
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      mouseWheel: true,
      breakpoints: {
        640: {
          slidesPerView: 3,
        },
        0: {
          slidesPerView: 1,
        }
      },
  });


  // [conFlavor 의 이미지 슬라이드에 해당하는 맛 설명 나오는 함수]
  // 설명 업데이트 함수
  function updateDescription(flavor) {
    // 모든 설명 숨기기
    document.querySelectorAll('.conFlavor-description .list').forEach(list => {
      list.classList.remove('active');
    });
    // 현재 맛에 해당하는 설명 보이기
    const activeDescription = document.querySelector(`.conFlavor-description .list[data-flavor="${flavor}"]`);
    if (activeDescription) {
      activeDescription.classList.add('active');
    }

    // [맛 설명 바 수치 값 적용]
    let sweetness = document.querySelector(`.conFlavor-description .list[data-flavor="${flavor}"] .sweetness .value`);
    let sour = document.querySelector(`.conFlavor-description .list[data-flavor="${flavor}"] .sour .value`);
    let neck = document.querySelector(`.conFlavor-description .list[data-flavor="${flavor}"] .neck .value`);
    let weight = document.querySelector(`.conFlavor-description .list[data-flavor="${flavor}"] .weight .value`);
    let cooling = document.querySelector(`.conFlavor-description .list[data-flavor="${flavor}"] .cooling .value`);
    // 맛 설명 바 의 data-value 값 가져오기
    let sweetnessValue = sweetness.dataset.value;
    let sourValue = sour.dataset.value;
    let neckValue = neck.dataset.value;
    let weightValue = weight.dataset.value;
    let coolingValue = cooling.dataset.value;
    // 맛 설명 바 수치 값 적용
    // 1.초기화
      sweetness.style.width = '0%'; 
      sour.style.width = '0%';
      neck.style.width = '0%';
      weight.style.width = '0%';
      cooling.style.width = '0%';
    // 2. 브라우저가 스타일 변경을 인지하도록 강제 트리거
    requestAnimationFrame(() => {
      sweetness.style.width = `${sweetnessValue * 10}%`;
      sour.style.width = `${sourValue * 10}%`;
      neck.style.width = `${neckValue * 10}%`;
      weight.style.width = `${weightValue * 10}%`;
      cooling.style.width = `${coolingValue * 10}%`;
    });
  }

  // 초기 설명 표시
  const initialSlide = swiper2.slides[swiper2.activeIndex];
  const initialFlavor = initialSlide.getAttribute('data-flavor');
  updateDescription(initialFlavor);

  // 슬라이드 변경 시 설명 업데이트
  swiper2.on('slideChange', function () {
    const activeSlide = swiper2.slides[swiper2.activeIndex];
    const activeFlavor = activeSlide.getAttribute('data-flavor');
    updateDescription(activeFlavor);
  });


  // [swiper 각 슬라이드 클릭 시 active 상태로 변경]
  let swiper2Slides = document.querySelectorAll('.conFlavor .conFlavor-imgs .swiper-slide');
  swiper2Slides.forEach((slide, index) => {
      slide.addEventListener("click", (event) => {
          // 클릭된 슬라이드의 인덱스 가져오기
          const slideIndex = index;

          // 해당 슬라이드로 이동
          swiper2.slideToLoop(slideIndex);

          // 모든 슬라이드에서 active 클래스 제거
          swiper2Slides.forEach(slide => {
              slide.classList.remove("swiper-slide-active");
          });
          // 클릭한 슬라이드에 active 클래스 추가
          slide.classList.add("swiper-slide-active");

          // 해당하는 맛 설명으로 변화
          const clickedSlide = event.currentTarget;
          const clickedFlavor = clickedSlide.getAttribute('data-flavor');
          updateDescription(clickedFlavor);
      });
  });
});




// 첫 화면의 scrollDownCircle 클릭 시 두 번째 슬라이드로 이동
document.addEventListener("DOMContentLoaded", () => {
  const scrollDownCircle = document.querySelector(".conMain-scrollDownCircle");
  scrollDownCircle.addEventListener("click", () => {
    swiper.slideTo(1, 1000, false);
  });
});





// top 버튼 클릭 시 상단 이동

document.addEventListener("DOMContentLoaded", () => {

  const topBtn = document.querySelector(".conAboutUs .topBtn");

  const navigateToSlide = (index) => {
    // 특정 슬라이드로 이동
    swiper.slideTo(index, 1000, false);

    // 슬라이드에 따라 header 색상 변경
    const activeSection = document.querySelector(`.swiper-slide:nth-child(${index + 1}) section`);

    if (activeSection.classList.contains('section1') || activeSection.classList.contains('section9')) {
      // Section 1과 9에서는 header를 밝은 색으로 설정
      gsap.set("header h1 .black", { opacity: 0 });
      gsap.set("header h1 .white", { opacity: 1 });
      gsap.set("header nav div", { color: "#ffffff" });
    } else {
      // 다른 섹션에서는 header를 어두운 색으로 설정
      gsap.set("header h1 .black", { opacity: 1 });
      gsap.set("header h1 .white", { opacity: 0 });
      gsap.set("header nav div", { color: "#0d0d0d" });
    }

    // transitionEnd 이벤트가 발생하면 마우스 휠 활성화
    swiper.once("transitionEnd", () => {
      swiper.mousewheel.enable(); // 마우스 휠 활성화
    });
  };

  // top 버튼 클릭 시
  topBtn.addEventListener("click", () => {
    navigateToSlide(0);
  });
});






// 메뉴클릭과 페이지 전환 설정
document.addEventListener("DOMContentLoaded", () => {
  let menuItems = document.querySelectorAll("header nav > div");
  const dynamic1Page = document.querySelector(".dynamic1");
  const dynamic2Page = document.querySelector(".dynamic2");
  const dynamic3Page = document.querySelector(".dynamic3");

  // 메뉴 스타일 변화
  menuItems.forEach((menu, index) => {
    menu.addEventListener("click", () => {
      // 모든 메뉴에서 'on' 클래스 제거
      menuItems.forEach(item => item.classList.remove("on"));
      // 클릭된 메뉴에만 'on' 클래스 추가
      menu.classList.add("on");

      // 화면 전환
      switch (index) {
        case 0: // 첫 번째 메뉴 (DYNAMIC I)
          dynamic1Page.classList.add("on");
          dynamic2Page.classList.remove("on");
          dynamic3Page.classList.remove("on");
          // 스크롤 상단으로 이동
          swiper.slideTo(0, 1000, true);
          break;
        case 1: // 두 번째 메뉴 (DYNAMIC II)
          dynamic1Page.classList.remove("on");
          dynamic2Page.classList.add("on");
          dynamic3Page.classList.remove("on");
          break;
        case 2: // 세 번째 메뉴 (DYNAMIC III)
        dynamic1Page.classList.remove("on");
        dynamic2Page.classList.remove("on");
        dynamic3Page.classList.add("on");
          break;
      }
    });
  });
});


