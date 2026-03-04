"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { FaMapMarkerAlt, FaShoppingCart } from "react-icons/fa";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.headerWrapper} ${scrolled ? styles.headerScrolled : ""}`}
    >
      <div className="container">
        <nav className={styles.navbar}>
          <Link href="/">
            <img src="/images/Logo.svg" alt="Logo" height="40" />
          </Link>

          <div className={styles.navActions}>
            <div className={styles.locationBadge}>
              <FaMapMarkerAlt
                size={18}
                style={{ marginRight: "4px", color: "#8047F8" }}
              />
              Porto Alegre, RS
            </div>

            <Link href="/checkout">
              <button className={styles.cartButton}>
                <FaShoppingCart size={20} color="#C47F17" />
                {isMounted && totalQuantity > 0 ? (
                  <span className={styles.badge}>{totalQuantity}</span>
                ) : null}
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
