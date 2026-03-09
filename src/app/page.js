import { coffees } from "../data/coffees";
import CoffeeCard from "../components/CoffeeCard/CoffeeCard";
import {
  FaShoppingCart,
  FaBox,
  FaClock,
  FaCoffee,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  const featuredCoffees = coffees.slice(0, 8);

  return (
    <main className="">
      <section className="hero_sec">
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-md-7">
              <h1 style={{ fontSize: "48px", fontWeight: 800 }}>
                Find the perfect coffee for any time of day.
              </h1>
              <p className="fs-5 text-muted">
                With Coffee Delivery, you receive your coffee wherever you are,
                at any time.
              </p>

              <div className="row g-4 mt-4">
                <div className="col-md-6 d-flex align-items-center gap-2 icon_group">
                  <div
                    className="iconWrapper"
                    style={{ backgroundColor: "#C47F17" }}
                  >
                    <FaShoppingCart color="white" size={14} />
                  </div>
                  <span>Simple and secure shopping</span>
                </div>
                <div className="col-md-6 d-flex align-items-center gap-2">
                  <div
                    className="iconWrapper"
                    style={{ backgroundColor: "#574F4D" }}
                  >
                    <FaBox color="white" size={14} />
                  </div>
                  <span>Packaging keeps coffee intact</span>
                </div>
                <div className="col-md-6 d-flex align-items-center gap-2">
                  <div
                    className="iconWrapper"
                    style={{ backgroundColor: "#DBAC2C" }}
                  >
                    <FaClock color="white" size={14} />
                  </div>
                  <span>Fast and tracked delivery</span>
                </div>
                <div className="col-md-6 d-flex align-items-center gap-2">
                  <div
                    className="iconWrapper"
                    style={{ backgroundColor: "#8047F8" }}
                  >
                    <FaCoffee color="white" size={14} />
                  </div>
                  <span>The coffee arrives fresh to you</span>
                </div>
              </div>

              <div className="mt-5">
                <Link
                  href="/product"
                  className="btn btn-primary px-4 py-2"
                  style={{
                    backgroundColor: "#8047F8",
                    border: "none",
                    borderRadius: "8px",
                    fontWeight: "600",
                  }}
                >
                  EXPLORE MENU
                </Link>
              </div>
            </div>

            <div className="col-md-5">
              <img src="/images/coffee.png" alt="Hero" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h2
              className="mb-0"
              style={{ fontFamily: "'Baloo 2', cursive", fontWeight: "800" }}
            >
              Our coffees
            </h2>
            <Link
              href="/product"
              className="text-decoration-none d-flex align-items-center gap-2"
              style={{
                color: "#8047F8",
                fontWeight: "700",
                fontSize: "0.9rem",
              }}
            >
              VIEW ALL PRODUCTS <FaArrowRight size={12} />
            </Link>
          </div>

          <div className="row g-5">
            {featuredCoffees.map((coffee) => (
              <div key={coffee.id} className="col-md-6 col-lg-4 col-xl-3">
                <CoffeeCard coffee={coffee} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
