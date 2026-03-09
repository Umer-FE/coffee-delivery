import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import ReviewCard from "./ReviewCard";
import "swiper/css";
import "swiper/css/pagination";
import styles from "@/app/product/[id]/ProductDetail.module.css";

export default function ReviewList({ reviews }) {
  if (reviews.length === 0) {
    return <p className="text-center text-muted py-5">No reviews yet.</p>;
  }

  // Agar 4 ya usse kam hain to normal display
  if (reviews.length <= 4) {
    return (
      <div className="row g-3">
        {reviews.map((rev) => (
          <div key={rev.id} className="col-md-6 col-lg-3">
            <ReviewCard rev={rev} />
          </div>
        ))}
      </div>
    );
  }

  // Agar 4 se zyada hain to Swiper Slider
  return (
    <div className={styles.slider_container}>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="pb-5"
      >
        {reviews.map((rev) => (
          <SwiperSlide key={rev.id}>
            <ReviewCard rev={rev} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
