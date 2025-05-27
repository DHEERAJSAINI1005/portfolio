import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;

  .section-title {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .about-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    padding: 0 2rem;
  }

  .about-text {
    flex: 1;
    text-align: left;

    p {
      font-size: 1.8rem;
      letter-spacing: 0.1rem;
      font-weight: 500;
    }
  }

  .about-image {
    flex: 1;
    text-align: right;

    img {
      width: 100%;
      max-width: 400px;
      border-radius: 10px;
      transition: filter 0.5s;
    }
  }

  // Responsive styles
  @media (max-width: 960px) {
    .about-content {
      flex-direction: column;
      text-align: center;
    }

    .about-text,
    .about-image {
      text-align: center;
    }

    .about-image img {
      width: 100%;
      max-width: 100%;
    }
  }
`;
