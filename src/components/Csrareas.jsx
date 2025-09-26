
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Scroll animations
import { FaLeaf, FaHeart, FaUsers, FaBalanceScale } from "react-icons/fa"; // Icons

function Csrareas() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const cards = [
    {
      icon: <FaLeaf size={48} className="text-success" />,
      title: "Environmental Sustainability",
      highlight: "50% Carbon Reduction",
      highlightClass: "text-success",
      description:
        "Leading the charge in renewable energy, waste reduction, and carbon neutrality initiatives.",
      link: "/environment",
      btnClass: "btn-outline-success",
    },
    {
      icon: <FaHeart size={48} className="text-danger" />,
      title: "Social Impact",
      highlight: "1M+ Lives Impacted",
      highlightClass: "text-danger",
      description:
        "Investing in education, healthcare, and social programs that create lasting positive change.",
      link: "/education",
      btnClass: "btn-outline-danger",
    },
    {
      icon: <FaUsers size={48} className="text-primary" />,
      title: "Community Engagement",
      highlight: "500+ Local Partners",
      highlightClass: "text-primary",
      description:
        "Building stronger communities through local partnerships, volunteer programs, and civic initiatives.",
      link: "/community",
      btnClass: "btn-outline-primary",
    },
    {
      icon: <FaBalanceScale size={48} className="text-warning" />,
      title: "Health & Ethics",
      highlight: "100% Compliance",
      highlightClass: "text-warning",
      description:
        "Maintaining the highest standards of ethics, transparency, and responsibility in all operations.",
      link: "/healthcare",
      btnClass: "btn-outline-warning",
      bgClass: "bg-light-yellow",
    },
  ];

  return (
    <section className="container-fluid bg-light py-5" id="csr-areas">
      <div className="container py-5">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h3 className="text-secondary text-lowercase">
            Our <strong className="text">social</strong> Commitment
          </h3>
          <p className="text-muted">
            Discover how we're making a positive impact across four key pillars
            of corporate responsibility
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              
              <div className={`shadow-sm text-center p-4 rounded h-100 d-flex flex-column card-hover ${card.bgClass}`}>

                {/* Icon Centered */}
                <div className="d-flex justify-content-center mb-3">
                  {card.icon}
                </div>

                <h5 className="text-dark">{card.title}</h5>
                <p className={`${card.highlightClass} fw-bold`}>
                  {card.highlight}
                </p>

                <p>{card.description}</p>
                <Link
                  to={card.link}
                  className={`btn ${card.btnClass} btn-sm mt-auto`}
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Csrareas;
