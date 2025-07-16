import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

import Header from "./components/Header";
import Banner from "./components/Banner";
import bannerImage from "./assets/banner-img.png";

const Wrapper = styled.div`
  background:
    linear-gradient(rgba(0, 26, 51, 0.8), rgba(0, 26, 51, 0.8)),
    url(${bannerImage});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  color: white;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Banner />
      </Wrapper>
      <ContentPlaceholder />
    </>
  );
}

export default App;
const ContentPlaceholder = styled.section`
  padding: 100px 40px;
  background: #f8f9fa;
  color: #333;
  min-height: 1000px; /* 👈 chiều cao giả tạo để bạn cuộn được */

  h2 {
    font-size: 32px;
    margin-bottom: 20px;
  }

  p {
    max-width: 800px;
    line-height: 1.6;
  }
`;
