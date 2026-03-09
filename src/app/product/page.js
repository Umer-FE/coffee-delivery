"use client";
import { useState } from "react";
import { coffees } from "@/data/coffees";
import CoffeeCard from "@/components/CoffeeCard/CoffeeCard";
import { FaSearch } from "react-icons/fa";
import styles from "./AllProducts.module.css";

export default function AllProducts() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter + Search Logic Fix
  const filteredProducts = coffees.filter((item) => {
    // Logic fix: hum filter aur tags dono ko uppercase karke match karenge
    const matchesFilter =
      filter === "all" ||
      item.tags.some((tag) => tag.toUpperCase() === filter.toUpperCase());

    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const categories = ["All", "Traditional", "Special", "With Milk", "Iced"];

  return (
    <div className="container py-5 mt-5">
      <div className="text-center mb-5">
        <h2 className={styles.page_title}>Explore Our Menu</h2>
        <p className="text-muted">Find your perfect coffee blend</p>
      </div>

      <div className="row mb-5 align-items-center g-5">
        {/* Search Bar */}
        <div className="col-lg-4 col-md-12">
          <div className={styles.search_wrapper}>
            <FaSearch className={styles.search_icon} />
            <input
              type="text"
              placeholder="Search coffee name..."
              className={styles.search_input}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="col-lg-8 col-md-12">
          <div className={styles.filter_group}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filter_btn} ${
                  filter.toLowerCase() === cat.toLowerCase()
                    ? styles.active
                    : ""
                }`}
                onClick={() => setFilter(cat.toLowerCase())}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="row g-5 mt-2">
        {filteredProducts.map((coffee) => (
          <div key={coffee.id} className="col-md-6 col-lg-4 col-xl-3">
            <CoffeeCard coffee={coffee} />
          </div>
        ))}
      </div>

      {/* No Results State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-5">
          <p className="text-muted mt-3 fs-5">
            Opps! No coffee matches your search.
          </p>
          <button
            className="btn btn-link"
            onClick={() => {
              setSearchQuery("");
              setFilter("all");
            }}
            style={{ color: "#8047F8" }}
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
