import { useAnimate } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";

export default function Menu() {
  const [scope, animate] = useAnimate();
  const [openMenu, setOpenMenu] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const setMenu = (open: boolean) => {
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

  const closeMenu = () => setMenu(false);

  return (
    <div
      ref={scope}
      className="lg:hidden fixed top-0 bg-white z-100 h-(--navbar-h) w-full border-b px-2.5 flex items-center justify-between"
    >
      <div className="logo">Keepix</div>

      <button
        onClick={() => setMenu(!openMenu)}
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
        <Link to="/" onClick={() => closeMenu()}>
          Home
        </Link>
        <Link to="/gallery" onClick={() => closeMenu()}>
          Gallery
        </Link>
        {isSignedIn ? (
          <Link to="/account" onClick={() => closeMenu()}>
            My Account
          </Link>
        ) : (
          <Link to="/login" onClick={() => setIsSignedIn(true)}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
