import { useRef } from "react";

export default function HorizontallyScrollable({ children, className = "" }) {
  const scrollRef = useRef();

  function handelMouseDown(e) {
    const oldX = e.pageX;
    const scrollLeft = scrollRef.current.scrollLeft;

    function handelMouseMove(e) {
      const newX = e.pageX;
      const offset = newX - oldX;

      scrollRef.current.scrollLeft = scrollLeft - offset;
    }

    function handelMouseUp() {
      window.removeEventListener("mousemove", handelMouseMove);
      window.removeEventListener("mouseup", handelMouseUp);
    }

    window.addEventListener("mousemove", handelMouseMove);
    window.addEventListener("mouseup", handelMouseUp);
  }

  return (
    <div className={className} ref={scrollRef} onMouseDown={handelMouseDown}>
      {children}
    </div>
  );
}
