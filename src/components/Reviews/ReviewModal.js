import { FaTimes, FaStar } from "react-icons/fa";
import styles from "@/app/product/[id]/ProductDetail.module.css";
import { useState } from "react";

export default function ReviewModal({
  isOpen,
  onClose,
  onSubmit,
  form,
  setForm,
}) {
  const [hover, setHover] = useState(null);

  if (!isOpen) return null;

  return (
    <div className={styles.modal_overlay} onClick={onClose}>
      <div className={styles.modal_box} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close_modal} onClick={onClose}>
          <FaTimes />
        </button>
        <h3 className="text-center mb-4">Write your Review</h3>

        <form onSubmit={onSubmit}>
          {/* Star Rating Selection */}
          <div className="text-center mb-4">
            <p className="mb-2 small text-muted text-uppercase fw-bold">
              Your Rating
            </p>
            <div className="d-flex justify-content-center gap-2">
              {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                  <label key={index} style={{ cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="rating"
                      style={{ display: "none" }}
                      value={ratingValue}
                      onClick={() => setForm({ ...form, rating: ratingValue })}
                    />
                    <FaStar
                      size={30}
                      color={
                        ratingValue <= (hover || form.rating)
                          ? "#DBAC2C"
                          : "#E6E5E5"
                      }
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                      style={{ transition: "color 0.2s" }}
                    />
                  </label>
                );
              })}
            </div>
          </div>

          <input
            type="text"
            placeholder="Your Name"
            className={styles.review_input}
            required
            value={form.user}
            onChange={(e) => setForm({ ...form, user: e.target.value })}
          />

          <textarea
            placeholder="Your Review"
            className={styles.review_textarea}
            rows="4"
            required
            value={form.comment}
            onChange={(e) => setForm({ ...form, comment: e.target.value })}
          />

          <div className="text-center mt-2">
            <button type="submit" className={styles.submit_review_btn}>
              POST REVIEW
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
