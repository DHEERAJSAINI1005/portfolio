import styled from "styled-components";

export const Container = styled.section`
  padding: 4rem 2rem;
  backdrop-filter: blur(4px); /* Optional: adds a nice frosted glass effect */
  border-radius: 16px;
  color: #fff;
  text-align: center;
  margin: 10rem 0rem;

  .section-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;
    margin-bottom: 2rem;

    span {
      color: #f8e71c; /* yellow highlight like in your image */
    }
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 1.5rem;
    justify-items: center;
  }

  .skill-card {
    background-color: #121212; /* Pure dark */
    padding: 1.2rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 20px rgba(248, 231, 28, 0.4); /* yellow glow */
    }

    img {
      width: 100px;
      height: 100px;
      margin-bottom: 0.5rem;
    }

    p {
      margin: 0;
      font-size: 1.8rem;
      color: #ddd;
    }
  }
`;
