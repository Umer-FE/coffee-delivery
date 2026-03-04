"use client";
import { useState, useEffect } from "react";
import styles from "./Success.module.css";
import { FaMapMarkerAlt, FaClock, FaDollarSign } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Success() {
  const [isMounted, setIsMounted] = useState(false);
  const order = useSelector((state) => state.cart.orderInfo);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  if (!order) {
    return (
      <div className="container py-5 mt-5 text-center">
        <h2>Oops! No order found.</h2>
        <p>Go back to the home page to start your coffee journey.</p>
      </div>
    );
  }

  return (
    <main className="container py-5 mt-5">
      <div className={styles.header}>
        <h1 className={styles.title}>Yay! Order confirmed</h1>
        <p className={styles.subtitle}>
          Now just wait, and your coffee will arrive shortly.
        </p>
      </div>

      <div className="row align-items-center mt-5">
        <div className="col-md-6">
          {/* Is container par gradient border apply hoga */}
          <div className={styles.gradientBorderBox}>
            <div className={styles.infoBox}>
              <div className={styles.infoItem}>
                <div className={styles.icon} style={{ background: "#8047F8" }}>
                  <FaMapMarkerAlt color="white" />
                </div>
                <p className="mb-0">
                  Delivery in{" "}
                  <strong>
                    {order.street}, {order.number}
                  </strong>
                  <br /> {order.city} - {order.uf}
                </p>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.icon} style={{ background: "#DBAC2C" }}>
                  <FaClock color="white" />
                </div>
                <p className="mb-0">
                  Delivery estimate <br /> <strong>20 min - 30 min</strong>
                </p>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.icon} style={{ background: "#C47F17" }}>
                  <FaDollarSign color="white" />
                </div>
                <p className="mb-0">
                  Payment on delivery <br />{" "}
                  <strong>{order.paymentMethod}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="/images/Illustration.png"
            alt="Delivery"
            className="img-fluid"
          />
        </div>
      </div>
    </main>
  );
}
