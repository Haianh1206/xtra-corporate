import styled, { keyframes } from "styled-components";
import { Link as LinkIcon } from "lucide-react";
const fadeInScale = keyframes`
  0% { transform: scale(0.5); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

// Styles
const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9998;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const Sidebar = styled.div`
  position: fixed;

  top: 0;
  right: 0;
  width: 340px;
  max-height: 100vh;
  background: #fff;
  z-index: 9999;
  padding: 0px 30px 120px 30px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform ${({ isOpen }) => (isOpen ? "0.5s" : "0.5s")} ease-in;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.15);
  will-change: transform;
`;

const CloseSVG = styled.svg`
  position: fixed;
  top: 10px;
  right: 355px;
  width: 28px;
  height: 28px;
  stroke: #fff;
  stroke-width: 2;
  fill: none;
  cursor: pointer;
  z-index: 10000;
  transition: transform 0.4s ease;

  &:hover {
    transform: rotate(180deg);
  }
`;

const Section = styled.div`
  margin-top: 40px;
  padding-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
  padding-left: 30px;
  margin-left: -30px; // 6px border + 30px khoảng cách
  border-left: 4px solid #002699;
  color: #002699;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: 6px;
  margin-top: 32px; /* xóa thụt */
`;

const LinkItem = styled.li`
  margin-bottom: 10px;
  font-size: 16px;
  color: #000;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #002699;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-left: 6px;
  margin-top: 32px;
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 2px;

  &:hover .overlay {
    opacity: 1;
    transform: scale(1);
  }
`;

const Image = styled.img`
  width: 100%;

  display: block;
`;

const HoverOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  opacity: 0;
  transform: scale(0.8);
  animation: ${fadeInScale} 0.4s ease;
`;

const RotatedIcon = styled(LinkIcon)`
  transform: rotate(200deg);
  stroke-width: 2;
  color: blue;
  transition: transform 1s ease;
`;

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 6px;
  margin-top: 34px;
  .product {
    display: flex;
    gap: 16px;
    align-items: center;
    padding-bottom: 12px;
    border-bottom: 1px solid rgb(167 167 167 / 0.2);
    img {
      width: 80px;
      height: auto;
    }

    .info {
      display: flex;
      flex-direction: column;

      .name {
        font-weight: 600;
        color: #000000;
        transition: color 0.3s ease;
        cursor: pointer;
        font-size: 14px;
        &:hover {
          color: #002699;
        }
      }

      .price {
        font-weight: 500;
      }

      .old-price {
        text-decoration: line-through;
        color: gray;
        margin-right: 8px;
        background: rgb(167 167 167 / 0.2);
        padding: 4px;
        display: inline-block;
        border-radius: 2px;
      }

      .current-price {
        background: rgb(167 167 167 / 0.2);
        padding: 6px 4px;
        display: inline-block;
        border-radius: 2px;
      }

      .stars {
        color: gold;
        font-size: 22px;
      }
    }
  }
`;
export {
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
};
