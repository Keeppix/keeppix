import { useAnimate } from "motion/react";
import { useState } from "react";

export default function Menu() {
  const [scope, animate] = useAnimate();
  const [openMenu, setOpenMenu] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isSignedIn, setIsSignedIn] = useState(false);

  const toggleAnimation = () => {
    const open = !openMenu;
    setOpenMenu(open);

    const options = { duration: 0.3, ease: "easeInOut" } as const;
    const lineColor = open ? "#ffffff" : "#000000";

    animate(".menu", { x: open ? "0%" : "100%" }, options);
    animate(
      ".line-1",
      { y: open ? 6 : 0, rotate: open ? 45 : 0, backgroundColor: lineColor },
      options,
    );
    animate(
      ".line-2",
      {
        opacity: open ? 0 : 1,
        scaleX: open ? 0 : 1,
        backgroundColor: lineColor,
      },
      options,
    );
    animate(
      ".line-3",
      { y: open ? -6 : 0, rotate: open ? -45 : 0, backgroundColor: lineColor },
      options,
    );
  };

  return (
    <div
      ref={scope}
      className="lg:hidden fixed top-0 bg-white z-100 h-(--navbar-h) w-full border-b px-2.5 flex items-center justify-between"
    >
      <div className="logo">Keepix</div>

      <button
        onClick={toggleAnimation}
        aria-label={openMenu ? "Close menu" : "Open menu"}
        aria-expanded={openMenu}
        className="menu-icon relative z-50 flex gap-0.5 flex-col p-2 cursor-pointer"
      >
        <div className="line-1 w-5 h-1 bg-black rounded-sm"></div>
        <div className="line-2 w-5 h-1 bg-black rounded-sm"></div>
        <div className="line-3 w-5 h-1 bg-black rounded-sm"></div>
      </button>

      <div
        className="menu fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-4 text-white text-2xl"
        style={{ transform: "translateX(100%)" }}
      >
        <a href="/">Home</a>
        <a href="/gallery">Gallery</a>
        {isSignedIn ? (
          <a href="/account">My Account</a>
        ) : (
          <a href="/login">Login</a>
        )}
      </div>
    </div>
  );
}
