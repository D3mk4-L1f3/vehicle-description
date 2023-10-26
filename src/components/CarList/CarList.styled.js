import styled from "styled-components";

export const CatalogContainer = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  max-width: 1280px;
  align-items: center;
  padding: 0 15px 40px;
  margin: 0 auto;
`;

export const CardContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 30px;
  row-gap: 50px;
`;

export const LoadMoreBtn = styled.button`
  padding: 15px 40px;
  background-color: var(--blue);
  border-radius: 12px;
  color: var(--white);
  font-size: 16px;
  font-weight: 600;
  border: none;

  &:hover {
    transform: scale(1.2);
    background-color: var(--btn-hover);
  }
`;
