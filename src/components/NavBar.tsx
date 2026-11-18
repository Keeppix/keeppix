import { useAnimate } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";

export default function Menu() {
  const [scope, animate] = useAnimate();
  const [openMenu, setOpenMenu] = useState(false);
  const [isSignedIn] = useState(false);

  const setMenu = (open: boolean) => {
    setOpenMenu(open);

    const options = { duration: 0.3, ease: "easeInOut" } as const;

    // Colors are no longer animated: the lines use currentColor, so they
    // follow the theme (light/dark) automatically in both states.
    animate(".menu", { x: open ? "0%" : "100%" }, options);
    animate(".line-1", { y: open ? 6 : 0, rotate: open ? 45 : 0 }, options);
    animate(
      ".line-2",
      { opacity: open ? 0 : 1, scaleX: open ? 0 : 1 },
      options,
    );
    animate(".line-3", { y: open ? -6 : 0, rotate: open ? -45 : 0 }, options);
  };

  const closeMenu = () => setMenu(false);

  return (
    <div
      ref={scope}
      className="lg:hidden fixed top-0 z-100 h-(--navbar-h) w-full border-b border-gray-200 bg-white px-2.5 flex items-center justify-between text-black dark:border-gray-700 dark:bg-black dark:text-white"
    >
      <div className="logo relative z-50">Keepix</div>

      <button
        onClick={() => setMenu(!openMenu)}
        aria-label={openMenu ? "Close menu" : "Open menu"}
        aria-expanded={openMenu}
        className="menu-icon relative z-50 flex gap-0.5 flex-col p-2 cursor-pointer"
      >
        <div className="line-1 w-5 h-1 bg-current rounded-sm"></div>
        <div className="line-2 w-5 h-1 bg-current rounded-sm"></div>
        <div className="line-3 w-5 h-1 bg-current rounded-sm"></div>
      </button>

      <div
        className="menu fixed inset-0 z-40 flex flex-col items-center justify-center gap-4 bg-white text-2xl text-black dark:bg-black dark:text-white"
        style={{ transform: "translateX(100%)" }}
      >
        <Link to="/" onClick={() => closeMenu()}>
          Home
        </Link>
        <Link to="/gallery" onClick={() => closeMenu()}>
          Gallery
        </Link>
        {!isSignedIn ? (
          <Link to="/account" onClick={() => closeMenu()}>
            My Account
          </Link>
        ) : (
          <Link to="/login" onClick={() => closeMenu()}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
