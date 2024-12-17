// 버튼 선택
const scrollTopBtn = document.getElementById("scrollTopBtn");

// 스크롤 이벤트 감지
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) { // 300px 이상 스크롤 시 버튼 표시
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

// 버튼 클릭 이벤트
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // 부드러운 스크롤
    });
});