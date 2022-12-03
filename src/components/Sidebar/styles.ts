import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--gray-800);
  border-radius: 8px;
  overflow: hidden;

  .cover {
    width: 100%;
    height: 72px;
    object-fit: cover;
  }

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: calc(0px - 1.5rem - 6px);
  }

  .profile img {
    width: calc(3rem + 12px);
    height: calc(3rem + 12px);
    border-radius: 8px;
    border: 4px solid var(--gray-900);
    outline: 2px solid var(--orange-600);
  }

  .profile strong {
    margin-top: 1rem;
    color: var(--gray-100);
    line-height: 1.6;
  }

  .profile span {
    font-size: 0.875rem;
    color: var(--gray-400);
    line-height: 1.6;
  }

  .footer {
    border-top: 1px solid var(--gray-600);
    margin-top: 1.5rem;
    padding: 1.5rem 0;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .footer a {
    background-color: transparent;
    border: 1px solid var(--orange-600);
    text-decoration: none;
    color: var(--orange-600);

    border-radius: 50%;
    padding: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: color 0.3s, background-color 0.3s;

    :hover {
      background: var(--orange-600);
      color: var(--gray-100);
    }
  }
`;
