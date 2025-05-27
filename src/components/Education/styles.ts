import styled from "styled-components";

export const Container = styled.section`
  margin-top: 8rem;
  padding: 4rem 2rem;

  .section-title {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .education-item {
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
    gap: 1.5rem;
    transition: transform 0.3s ease;
  }

  .education-item:hover {
    transform: translateY(-5px);
  }

  .edu-logo {
    width: 140px;
    height: 140px;
    object-fit: contain;
    flex-shrink: 0;
  }

  .edu-details {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .edu-details h2 {
    font-size: 2.50rem;
    font-weight: 700;
    margin: 0;
    color: blue;
  }

  .edu-details p {
    font-size: 1.5rem;
    margin: 0;
    color: #555;
  }

  .edu-duration {
    font-size: 0.9rem;
    color: #888;
  }

  @media (max-width: 600px) {
    .education-item {
      flex-direction: column;
      text-align: center;
    }

    .edu-logo {
      margin-bottom: 1rem;
    }
  }
`;
