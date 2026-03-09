"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";
import Swal from "sweetalert2";
import styles from "./CoffeeCard.module.css";
// 1. Link Import Karein
import Link from "next/link";

export default function CoffeeCard({ coffee }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    // 2. Propagation aur default behavior rokein
    e.preventDefault();
    e.stopPropagation();

    dispatch(addToCart({ ...coffee, quantity }));

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${quantity} ${coffee.name} added to cart.`,
      showConfirmButton: false,
      timer: 1500,
      iconColor: "#8047F8",
      toast: true,
      position: "top-end",
    });

    setQuantity(1);
  };

  return (
    <div className={styles.card}>
      {/* 3. Image aur Title ko Link mein wrap karein */}
      <Link href={`/product/${coffee.id}`} className={styles.detailLink}>
        <img
          src={coffee.image}
          alt={coffee.name}
          className={styles.coffeeImg}
        />

        <div className={styles.coffeeTags}>
          {coffee.tags &&
            coffee.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag.toUpperCase()}
              </span>
            ))}
        </div>
        <h3 className={styles.title}>{coffee.name}</h3>
      </Link>

      <p className={styles.description}>{coffee.description}</p>

      <div className={styles.footer}>
        <div className={styles.price}>
          <span style={{ fontSize: "0.875rem", fontWeight: 400 }}>Rs</span>{" "}
          <strong>{coffee.price}</strong>
        </div>

        <div className={styles.actions}>
          <div className={styles.quantitySelector}>
            <button
              className="btn btn-sm"
              // 4. Buttons par stopPropagation zaroori hai
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setQuantity((q) => Math.max(1, q - 1));
              }}
              style={{ color: "#8047F8", border: "none", background: "none" }}
            >
              <FaMinus size={12} />
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              className="btn btn-sm"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setQuantity((q) => q + 1);
              }}
              style={{ color: "#8047F8", border: "none", background: "none" }}
            >
              <FaPlus size={12} />
            </button>
          </div>

          <button className={styles.cartBtn} onClick={handleAdd}>
            <FaShoppingCart size={20} color="#FFF" />
          </button>
        </div>
      </div>
    </div>
  );
}
