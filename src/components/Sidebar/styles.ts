import styled from "styled-components";
import { shade } from "polished";

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
    border: 4px solid var(--gray-800);
    outline: 2px solid var(--green-500);
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
    background-color: var(--green-500);
    text-decoration: none;
    color: var(--gray-100);

    border-radius: 50%;
    padding: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.3s;

    :hover {
      background: ${shade(0.2, "#00875f")};
    }
  }
`;
