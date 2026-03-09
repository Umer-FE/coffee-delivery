import { FaStar, FaRegStar } from "react-icons/fa";
import styles from "@/app/product/[id]/ProductDetail.module.css";

export default function ReviewCard({ rev }) {
  return (
    <div className={styles.review_card}>
      <div className="d-flex justify-content-between mb-2">
        <span className={styles.reviewer_name}>{rev?.user || "Anonymous"}</span>
        <div className={styles.stars_container}>
          {[...Array(5)].map((_, i) => (
            <span key={i} style={{ color: "#DBAC2C", fontSize: "14px" }}>
              {i < (rev?.rating || 0) ? <FaStar /> : <FaRegStar />}
            </span>
          ))}
        </div>
      </div>
      <p className={styles.review_comment}>
        "{rev?.comment || "No comment provided."}"
      </p>
    </div>
  );
}
