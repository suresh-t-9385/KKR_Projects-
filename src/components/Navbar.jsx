// import { useEffect, useState } from "react";
// import { NavLink, Link, useLocation } from "react-router-dom";
// import Logo from "./Logo.jsx";
// import { Chevron, Pin } from "./Icons.jsx";
// import { navLinks, productMenu, locations } from "../data/siteData.js";

// function ProductsMenu() {
//   return (
//     <div className="dropdown dropdown-products" role="menu">
//       <ul className="dd-grid">
//         {productMenu.map((item) => (
//           <li key={item.label} role="none">
//             <Link to={item.to} role="menuitem" className="dd-tile">
//               <img
//                 src={item.image}
//                 alt=""
//                 width="120"
//                 height="90"
//                 loading="lazy"
//                 decoding="async"
//               />
//               <span>{item.label}</span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <Link to="/products" className="dd-all">
//         View all products
//       </Link>
//     </div>
//   );
// }

// function LocationMenu() {
//   return (
//     <div className="dropdown dropdown-location" role="menu">
//       <ul>
//         {locations.map((l) => (
//           <li key={l.id} role="none">
//             <Link
//               to={`/location?site=${l.id}`}
//               role="menuitem"
//               className="dd-place"
//             >
//               <span className="dd-pin">
//                 <Pin />
//               </span>
//               <span>
//                 <strong>{l.label}</strong>
//                 <small>{l.lines[l.lines.length - 1]}</small>
//               </span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// const menus = { products: ProductsMenu, location: LocationMenu };

// export default function Navbar() {
//   const [open, setOpen] = useState(false); // mobile menu
//   const [sub, setSub] = useState(null); // mobile accordion
//   const [scrolled, setScrolled] = useState(false);
//   const { pathname, search } = useLocation();

//   // close menus after navigating
//   useEffect(() => {
//     setOpen(false);
//     setSub(null);
//   }, [pathname, search]);

//   // compact the header after scrolling a little (passive + rAF throttled)
//   useEffect(() => {
//     let ticking = false;
//     const onScroll = () => {
//       if (ticking) return;
//       ticking = true;
//       requestAnimationFrame(() => {
//         setScrolled(window.scrollY > 60);
//         ticking = false;
//       });
//     };
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Escape closes any open dropdown
//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") {
//         setSub(null);
//         setOpen(false);
//         document.activeElement?.blur?.();
//       }
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   return (
//     <header className={`navwrap ${scrolled ? "is-scrolled" : ""}`}>
//       <div className="container">
//         <nav className="navbar" aria-label="Main">
//           <Logo />
//           <button
//             className="hamburger"
//             aria-label="Toggle menu"
//             aria-expanded={open}
//             onClick={() => setOpen(!open)}
//           >
//             <span />
//             <span />
//             <span />
//           </button>
//           <ul className={`nav-links ${open ? "open" : ""}`}>
//             {navLinks.map((l) => {
//               const Menu = l.menu ? menus[l.menu] : null;
//               return (
//                 <li
//                   key={l.to}
//                   className={
//                     Menu
//                       ? `has-menu ${sub === l.menu ? "open" : ""}`
//                       : undefined
//                   }
//                 >
//                   <NavLink
//                     to={l.to}
//                     end={l.to === "/"}
//                     className={({ isActive }) => (isActive ? "active" : "")}
//                   >
//                     {l.label}
//                     {Menu && (
//                       <span className="caret">
//                         <Chevron />
//                       </span>
//                     )}
//                   </NavLink>
//                   {Menu && (
//                     <>
//                       <button
//                         type="button"
//                         className="menu-toggle"
//                         aria-label={`Show ${l.label} menu`}
//                         aria-expanded={sub === l.menu}
//                         onClick={() => setSub(sub === l.menu ? null : l.menu)}
//                       >
//                         <Chevron />
//                       </button>
//                       <Menu />
//                     </>
//                   )}
//                 </li>
//               );
//             })}
//             <li>
//               <Link to="/pay-online" className="btn-pay">
//                 Pay Online
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

// -----------------------------------------------------------
import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Logo from "./Logo.jsx";
import { Chevron, Pin } from "./Icons.jsx";
import { navLinks, productMenu, locations } from "../data/siteData.js";

function ProductsMenu({ onSelect }) {
  return (
    <div className="dropdown dropdown-products" role="menu">
      <ul className="dd-grid">
        {productMenu.map((item) => (
          <li key={item.label} role="none">
            <Link
              to={item.to}
              role="menuitem"
              className="dd-tile"
              /* close the popup + go to the page */
              onClick={() => onSelect("products")}
            >
              <img
                src={item.image}
                alt=""
                width="120"
                height="90"
                loading="lazy"
                decoding="async"
              />
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to="/products"
        className="dd-all"
        onClick={() => onSelect("products")}
      >
        View all products
      </Link>
    </div>
  );
}

function LocationMenu({ onSelect }) {
  return (
    <div className="dropdown dropdown-location" role="menu">
      <ul>
        {locations.map((l) => (
          <li key={l.id} role="none">
            <Link
              to={`/location?site=${l.id}`}
              role="menuitem"
              className="dd-place"
              onClick={() => onSelect("location")}
            >
              <span className="dd-pin">
                <Pin />
              </span>
              <span>
                <strong>{l.label}</strong>
                <small>{l.lines[l.lines.length - 1]}</small>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const menus = { products: ProductsMenu, location: LocationMenu };

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile menu
  const [sub, setSub] = useState(null); // mobile accordion
  const [dismissed, setDismissed] = useState(null); // desktop dropdown that was just used
  const [scrolled, setScrolled] = useState(false);
  const { pathname, search } = useLocation();

  /**
   * Closes every menu (mobile panel, mobile accordion and the desktop
   * hover dropdown) so nothing stays open after a navigation.
   * `menuKey` = the dropdown we just clicked inside, it is kept hidden
   * until the user leaves and re-enters that item.
   */
  const closeMenus = (menuKey = null) => {
    setOpen(false);
    setSub(null);
    setDismissed(menuKey);
  };

  // close menus after navigating
  useEffect(() => {
    setOpen(false);
    setSub(null);
    // NOTE: "dismissed" is intentionally NOT reset here,
    // otherwise the hover dropdown would pop back open right after the click.
  }, [pathname, search]);

  // compact the header after scrolling a little (passive + rAF throttled)
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 60);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes any open dropdown
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setSub(null);
        setOpen(false);
        document.activeElement?.blur?.();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`navwrap ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container">
        <nav className="navbar" aria-label="Main">
          <Logo />
          <button
            className="hamburger"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
          <ul className={`nav-links ${open ? "open" : ""}`}>
            {navLinks.map((l) => {
              const Menu = l.menu ? menus[l.menu] : null;
              const isDismissed = Menu && dismissed === l.menu;
              return (
                <li
                  key={l.to}
                  className={
                    Menu
                      ? `has-menu ${sub === l.menu ? "open" : ""}`
                      : undefined
                  }
                  /* moving the mouse back in re-enables the dropdown */
                  onMouseEnter={() => Menu && setDismissed(null)}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={() => closeMenus(l.menu ?? null)}
                  >
                    {l.label}
                    {Menu && (
                      <span className="caret">
                        <Chevron />
                      </span>
                    )}
                  </NavLink>
                  {Menu && (
                    <>
                      <button
                        type="button"
                        className="menu-toggle"
                        aria-label={`Show ${l.label} menu`}
                        aria-expanded={sub === l.menu}
                        onClick={() => {
                          setDismissed(null);
                          setSub(sub === l.menu ? null : l.menu);
                        }}
                      >
                        <Chevron />
                      </button>
                      {/* not rendered at all once dismissed -> popup really closes */}
                      {!isDismissed && <Menu onSelect={closeMenus} />}
                    </>
                  )}
                </li>
              );
            })}
            <li>
              <Link
                to="/pay-online"
                className="btn-pay"
                onClick={() => closeMenus()}
              >
                Pay Online
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
