import { useEffect } from "react";

import Portfolio1 from "../../assets/Portfolio1.png";
import Portfolio2 from "../../assets/Portfolio2.png";
import Portfolio3 from "../../assets/Portfolio3.png";
import Portfolio4 from "../../assets/Portfolio4.png";
import Portfolio5 from "../../assets/Portfolio5.png";
import Portfolio6 from "../../assets/Portfolio6.png";
import Products1 from "../../assets/Products1.png";
import Products2 from "../../assets/Products2.png";

import {
  Backdrop,
  Sidebar,
  CloseSVG,
  Section,
  SectionTitle,
  LinkList,
  LinkItem,
  ImageGrid,
  ImageWrapper,
  Image,
  HoverOverlay,
  RotatedIcon,
  ProductList,
} from "./OverlayMenu.styles";

export default function OverlayMenu({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const sampleImages = [
    Portfolio1,
    Portfolio2,
    Portfolio3,
    Portfolio4,
    Portfolio5,
    Portfolio6,
  ];

  const products = [
    {
      name: "Business Financial Package",
      price: "$29",
      rating: 4,
      image: Products1,
    },
    {
      name: "Premium Package",
      price: "$69",
      oldPrice: "$79",
      rating: 4,
      image: Products2,
    },
    {
      name: "All In One Package",
      price: "$99",
      rating: 5,
      image: Products1,
    },
  ];

  return (
    <>
      <Backdrop isOpen={isOpen} onClick={onClose} />

      {isOpen && (
        <CloseSVG onClick={onClose} viewBox="0 0 24 24">
          <line x1="4" y1="4" x2="20" y2="20" />
          <line x1="20" y1="4" x2="4" y2="20" />
        </CloseSVG>
      )}

      <Sidebar isOpen={isOpen}>
        <Section>
          <SectionTitle>Quick Access</SectionTitle>
          <LinkList>
            <LinkItem>Contact Us</LinkItem>
            <LinkItem>Support</LinkItem>
            <LinkItem>Online Documentation</LinkItem>
            <LinkItem>Purchase Now</LinkItem>
          </LinkList>
        </Section>

        <Section>
          <SectionTitle>Portfolio</SectionTitle>
          <ImageGrid>
            {sampleImages.map((src, idx) => (
              <ImageWrapper key={idx}>
                <Image src={src} alt={`portfolio-${idx}`} />
                <HoverOverlay className="overlay">
                  <RotatedIcon />
                </HoverOverlay>
              </ImageWrapper>
            ))}
          </ImageGrid>
        </Section>

        <Section>
          <SectionTitle>Products</SectionTitle>
          <ProductList>
            {products.map((p, i) => (
              <div className="product" key={i}>
                <img src={p.image} alt={p.name} />
                <div className="info">
                  <span className="name">{p.name}</span>
                  <div className="stars">{"★".repeat(p.rating)}</div>
                  <div className="price">
                    {p.oldPrice && (
                      <span className="old-price">{p.oldPrice}</span>
                    )}
                    <span className="current-price">{p.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </ProductList>
        </Section>
      </Sidebar>
    </>
  );
}
