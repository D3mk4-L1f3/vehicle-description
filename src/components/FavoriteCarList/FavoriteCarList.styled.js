import styled from 'styled-components';

export const EmptyParkingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  height: calc(100vh - 140px);
  margin-top: -20px;

  & p {
    text-align: center;
    font-size: clamp(18px, 2vw, 60px);

    & span {
      color: var(--orange);
    }
  }

  & img {
    width: calc(100vh - 140px);
  }
`;
