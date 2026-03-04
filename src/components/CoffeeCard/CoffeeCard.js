"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";
import Swal from "sweetalert2";
import styles from "./CoffeeCard.module.css";

export default function CoffeeCard({ coffee }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const formattedPrice = coffee.price.toFixed(2).replace(".", ",");

  const handleAdd = () => {
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
      <img src={coffee.image} alt={coffee.name} className={styles.coffeeImg} />

      <div className={styles.coffeeTags}>
        {coffee.tags &&
          coffee.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag.toUpperCase()}
            </span>
          ))}
      </div>
      <h3 className={styles.title}>{coffee.name}</h3>
      <p className={styles.description}>{coffee.description}</p>

      <div className={styles.footer}>
        <div className={styles.price}>
          <span style={{ fontSize: "0.875rem", fontWeight: 400 }}>R$</span>{" "}
          <strong>{formattedPrice}</strong>
        </div>

        <div className={styles.actions}>
          <div className={styles.quantitySelector}>
            <button
              className="btn btn-sm"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              style={{ color: "#8047F8", border: "none", background: "none" }}
            >
              <FaMinus size={12} />
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              className="btn btn-sm"
              onClick={() => setQuantity((q) => q + 1)}
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
