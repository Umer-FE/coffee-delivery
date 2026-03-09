import { coffees } from "../data/coffees";
import CoffeeCard from "../components/CoffeeCard/CoffeeCard";
import { FaShoppingCart, FaBox, FaClock, FaCoffee } from "react-icons/fa";

export default function Home() {
  return (
    <main className="">
      <section className="hero_sec">
        <div className="container">
          <div className="row align-items-center py-5w">
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
            </div>
            <div className="col-md-5">
              <img src="/images/coffee.png" alt="Hero" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="mb-5">Our coffees</h2>
          <div className="row g-5">
            {coffees.map((coffee) => (
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
