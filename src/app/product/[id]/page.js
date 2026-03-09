"use client";
import { useParams } from "next/navigation";
import { coffees } from "@/data/coffees";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { useState, useEffect } from "react";
import { FaPlus, FaMinus, FaShoppingCart, FaChevronLeft } from "react-icons/fa";

// Components Import
import ReviewList from "@/components/Reviews/ReviewList";
import ReviewModal from "@/components/Reviews/ReviewModal";
import ReviewCard from "@/components/Reviews/ReviewCard";

import Swal from "sweetalert2";
import styles from "./ProductDetail.module.css";
import Link from "next/link";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  // States
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [localReviews, setLocalReviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    user: "",
    comment: "",
    rating: 5,
  });

  const product = coffees.find((c) => String(c.id) === String(id));

  // Load reviews from LocalStorage
  useEffect(() => {
    const savedReviews = localStorage.getItem(`reviews_${id}`);
    if (savedReviews) {
      setLocalReviews(JSON.parse(savedReviews));
    } else if (product?.reviews) {
      setLocalReviews(product.reviews);
    }
  }, [id, product]);

  // Save reviews to LocalStorage
  useEffect(() => {
    if (localReviews.length > 0) {
      localStorage.setItem(`reviews_${id}`, JSON.stringify(localReviews));
    }
  }, [localReviews, id]);

  if (!product)
    return (
      <div className="container py-5 mt-5 text-center">
        <h2>Product not found</h2>
      </div>
    );

  const handleAdd = () => {
    dispatch(addToCart({ ...product, quantity }));
    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${quantity} ${product.name} added to cart.`,
      timer: 1500,
      showConfirmButton: false,
      toast: true,
      position: "top-end",
      iconColor: "#8047F8",
    });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (reviewForm.user && reviewForm.comment) {
      const newReviewData = {
        id: Date.now(),
        user: reviewForm.user,
        comment: reviewForm.comment,
        rating: parseInt(reviewForm.rating),
      };

      setLocalReviews([newReviewData, ...localReviews]);
      setIsModalOpen(false);
      setReviewForm({ user: "", comment: "", rating: 5 });

      Swal.fire({
        icon: "success",
        title: "Review Posted!",
        timer: 1000,
        showConfirmButton: false,
      });
    }
  };

  return (
    <div className="container py-5 mt-5">
      <Link
        href="/"
        className="text-decoration-none d-inline-flex align-items-center mb-4 mt-4"
        style={{ color: "#8047F8", fontWeight: "600" }}
      >
        <FaChevronLeft className="me-2" /> Back to Menu
      </Link>

      {/* Product Top Section */}
      <div className="row align-items-start mb-5">
        <div className="col-md-6 text-center">
          <div className={styles.product_detail_image}>
            <img src={product.image} alt={product.name} className="img-fluid" />
          </div>
        </div>

        <div className="col-md-6 ps-md-4">
          <h1 className={styles.product_title}>{product.name}</h1>
          <p className="text-muted fs-5 mb-4">{product.description}</p>
          <div className="mb-2">
            {product.tags?.map((tag, index) => (
              <span key={index} className={styles.tag_badge}>
                {tag.toUpperCase()}
              </span>
            ))}
          </div>
          <div className="d-flex align-items-center gap-4 flex-wrap mt-4">
            <h2 className="mb-0 fw-bold" style={{ color: "#403937" }}>
              Rs {product.price.toFixed(2)}
            </h2>
            <div className={styles.counter_wrapper}>
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                <FaMinus size={12} />
              </button>
              <span className="fw-bold">{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)}>
                <FaPlus size={12} />
              </button>
            </div>
            <button className={styles.add_btn} onClick={handleAdd}>
              <FaShoppingCart />{" "}
              <span className="fw-bold ms-2">ADD TO CART</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-5 pt-4">
        <div className="d-flex justify-content-center gap-5 mb-4 border-bottom">
          <button
            className={`${styles.tab_link} ${activeTab === "description" ? styles.tab_active : ""}`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`${styles.tab_link} ${activeTab === "reviews" ? styles.tab_active : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews ({localReviews.length})
          </button>
        </div>

        <div className={styles.tab_content_container}>
          {activeTab === "description" ? (
            <div className="row g-4">
              <div className="col-md-7">
                <h4 className={styles.section_title}>Product Details</h4>
                <p className={styles.full_description}>
                  {product.details?.fullDescription || product.description}
                </p>
              </div>
              <div className="col-md-5">
                <div className={styles.stat_card}>
                  <h5 className="mb-4 fw-bold small text-uppercase">
                    Roast Characteristics
                  </h5>
                  {["Intensity", "Aroma"].map((stat) => (
                    <div key={stat} className="mb-4">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="small fw-bold">{stat}</span>
                        <span className="small text-muted">
                          {product.details?.[stat.toLowerCase()] || 0}%
                        </span>
                      </div>
                      <div className={styles.progress_bg}>
                        <div
                          className={styles.progress_bar}
                          style={{
                            width: `${product.details?.[stat.toLowerCase()] || 0}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="py-2">
              <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap">
                <h4 className={styles.section_title}>Customer Feedback</h4>
                <button
                  className={styles.write_review_btn}
                  onClick={() => setIsModalOpen(true)}
                >
                  Write a Review
                </button>
              </div>

              {/* Slider logic handled inside ReviewList */}
              <ReviewList reviews={localReviews} />
            </div>
          )}
        </div>
      </div>

      {/* Review Modal Component */}
      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleReviewSubmit}
        form={reviewForm}
        setForm={setReviewForm}
      />
    </div>
  );
}
