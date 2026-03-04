"use client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FaMapMarkerAlt,
  FaDollarSign,
  FaTrash,
  FaPlus,
  FaMinus,
  FaRegCreditCard,
  FaRegMoneyBillAlt,
  FaUniversity,
} from "react-icons/fa";
import {
  updateQuantity,
  removeFromCart,
  clearCart,
  confirmOrder,
} from "../../redux/cartSlice";
import styles from "./Checkout.module.css";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  // Hydration fix: Ensure component is client-side before rendering cart data
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const totalItemsPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const deliveryFee = 3.5;
  const grandTotal = totalItemsPrice + deliveryFee;
  const formatMoney = (v) => v.toFixed(2).replace(".", ",");

  const handleConfirmOrder = async (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      Swal.fire({
        icon: "warning",
        title: "Pending Payment",
        text: "Please select a payment method!",
        confirmButtonColor: "#8047F8",
      });
      return;
    }

    const formData = new FormData(e.target);
    const orderData = {
      street: formData.get("street"),
      number: formData.get("number"),
      city: formData.get("city"),
      uf: formData.get("uf"),
      paymentMethod:
        paymentMethod === "credit"
          ? "Credit Card"
          : paymentMethod === "debit"
            ? "Debit Card"
            : "Money",
    };

    dispatch(confirmOrder(orderData));
    dispatch(clearCart());
    router.push("/success");
  };

  // Prevent hydration error during server rendering
  if (!isMounted) return null;

  return (
    <div className={`container ${styles.checkoutContainer}`}>
      <form
        id="addressForm"
        onSubmit={handleConfirmOrder}
        className="row mt-5 pt-5"
      >
        {/* Left Side: Address and Payment */}
        <div className="col-lg-7">
          <h5 className={styles.sectionTitle}>Complete your order</h5>

          <div className={styles.formCard}>
            <div className={styles.cardHeader}>
              <FaMapMarkerAlt color="#C47F17" size={20} />
              <div>
                <p className="mb-0">Delivery Address</p>
              </div>
            </div>
            <div className="row g-3">
              <div className="col-4">
                <input
                  required
                  name="zip"
                  className="form-control"
                  placeholder="ZIP code"
                />
              </div>
              <div className="col-12">
                <input
                  required
                  name="street"
                  className="form-control"
                  placeholder="Street"
                />
              </div>
              <div className="col-4">
                <input
                  required
                  name="number"
                  className="form-control"
                  placeholder="Number"
                />
              </div>
              <div className="col-8">
                <input
                  name="addon"
                  className="form-control"
                  placeholder="Add-on"
                />
              </div>
              <div className="col-6">
                <input
                  required
                  name="city"
                  className="form-control"
                  placeholder="City"
                />
              </div>
              <div className="col-2">
                <input
                  required
                  name="uf"
                  className="form-control"
                  placeholder="State"
                />
              </div>
            </div>
          </div>

          <div className={`${styles.formCard} mt-3`}>
            <div className={styles.cardHeader}>
              <FaDollarSign color="#8047F8" size={20} />
              <div>
                <p className="mb-0">Payment</p>
                <small>
                  Payment is made upon delivery. Choose your preferred method.
                </small>
              </div>
            </div>
            <div className={styles.paymentOptions}>
              <button
                type="button"
                className={`${styles.payBtn} ${paymentMethod === "credit" ? styles.activePayment : ""}`}
                onClick={() => setPaymentMethod("credit")}
              >
                <FaRegCreditCard color="#8047F8" /> CREDIT CARD
              </button>
              <button
                type="button"
                className={`${styles.payBtn} ${paymentMethod === "debit" ? styles.activePayment : ""}`}
                onClick={() => setPaymentMethod("debit")}
              >
                <FaUniversity color="#8047F8" /> DEBIT CARD
              </button>
              <button
                type="button"
                className={`${styles.payBtn} ${paymentMethod === "cash" ? styles.activePayment : ""}`}
                onClick={() => setPaymentMethod("cash")}
              >
                <FaRegMoneyBillAlt color="#8047F8" /> MONEY
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Summary */}
        <div className="col-lg-5">
          <h5 className={styles.sectionTitle}>Selected coffees</h5>
          <div className={styles.summaryCard}>
            {cartItems.length === 0 ? (
              <p className="text-center py-4">Your cart is empty</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles.itemImage}
                  />
                  <div className={styles.itemInfo}>
                    <div className="d-flex justify-content-between">
                      <p className="mb-1">{item.name}</p>
                      <strong>
                        R$ {formatMoney(item.price * item.quantity)}
                      </strong>
                    </div>
                    <div className={styles.itemActions}>
                      <div className={styles.quantity}>
                        <button
                          type="button"
                          onClick={() =>
                            dispatch(
                              updateQuantity({ id: item.id, type: "decrease" }),
                            )
                          }
                        >
                          <FaMinus size={10} />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() =>
                            dispatch(
                              updateQuantity({ id: item.id, type: "increase" }),
                            )
                          }
                        >
                          <FaPlus size={10} />
                        </button>
                      </div>
                      <button
                        type="button"
                        className={styles.removeBtn}
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        <FaTrash color="#8047F8" size={12} /> REMOVE
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}

            <div className={styles.totals}>
              <div className="d-flex justify-content-between mb-2">
                <span>Total items</span>
                <span>R$ {formatMoney(totalItemsPrice)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Delivery</span>
                <span>R$ {formatMoney(deliveryFee)}</span>
              </div>
              <div className="d-flex justify-content-between fw-bold fs-5 pt-2">
                <span>Total</span>
                <span>R$ {formatMoney(grandTotal)}</span>
              </div>
            </div>

            <button
              type="submit"
              form="addressForm"
              className={styles.confirmBtn}
              disabled={cartItems.length === 0}
            >
              CONFIRM ORDER
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
