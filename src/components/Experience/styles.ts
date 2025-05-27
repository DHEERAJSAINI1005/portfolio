import styled from "styled-components";

export const Container = styled.section`
  padding: 4rem 2rem;

  .section-title {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 4rem;
    font-weight: 700;
  }

  .timeline {
    position: relative;
    max-width: 1000px;
    margin: auto;
  }

  .timeline::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    background: #0c0684;
  }

  .timeline-item {
    position: relative;
    width: 50%;
    padding: 1rem 2rem;
    box-sizing: border-box;
  }

  .timeline-item.left {
    left: 0;
    text-align: right;
  }

  .timeline-item.right {
    left: 50%;
    text-align: left;
  }

  .timeline-item .content {
    background: #ff9200;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    position: relative;
    color: #222;
    font-size: 1rem;
  }

  .timeline-item.left .content::after {
    content: "";
    position: absolute;
    top: 20px;
    right: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent transparent #ff9200;
  }

  .timeline-item.right .content::after {
    content: "";
    position: absolute;
    top: 20px;
    left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent #ff9200 transparent transparent;
  }

  .timeline-item .circle {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 24px;
    height: 24px;
    background: #fff;
    border: 4px solid #0c0684;
    border-radius: 50%;
    z-index: 1;
  }

  .company {
    margin: 0;
    font-weight: 500;
    font-size: 1.1rem;
  }

  .duration {
    font-size: 0.9rem;
    color: #333;
    margin-top: 4px;
  }

  .view-all-btn {
    margin: 50px auto 0;
    display: inline-block;
    background: #2a00ff;
    color: white;
    padding: 12px 24px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    transition: background 0.3s;
  }

  .view-all-btn:hover {
    background: #1900b5;
  }

  @media (max-width: 768px) {
    .timeline::before {
      left: 8px;
    }

    .timeline-item {
      width: 100%;
      padding-left: 40px;
      padding-right: 10px;
    }

    .timeline-item.right,
    .timeline-item.left {
      left: 0;
      text-align: left;
    }

    .timeline-item .content::after {
      left: -10px;
      border-color: transparent #ff9200 transparent transparent;
      right: auto;
    }

    .timeline-item .circle {
      left: 8px;
      transform: none;
    }
  }
`;
