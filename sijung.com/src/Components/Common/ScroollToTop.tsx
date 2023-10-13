import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// 페이지 전환시 화면 맨 위로 초기화
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
