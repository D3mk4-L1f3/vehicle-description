import styled from "styled-components";

export const CardContainer = styled.li`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 14px;
  position: relative;
  width: 264px;
  padding: 15px;
  border-radius: 10px;
  background-color: rgba(50, 50, 50, 0.1);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const FavoriteBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  padding: 0;

  &:hover {
    transform: scale(1.3);
  }

  &:active {
    transform: scale(2);
  }
`;

export const Image = styled.img`
  width: 264px;
  height: 268px;
  border-radius: 14px;
`;

export const AlterImage = styled.img`
  width: 264px;
  height: 268px;
  object-fit: contain;
`;

export const CentralInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text);
`;

export const Title = styled.h2`
  white-space: nowrap;
  overflow: hidden;
  width: 180px;
  text-overflow: ellipsis;
  font-weight: 500;
  font-size: 16px;
`;

export const Span = styled.span`
  color: var(--blue);
`;

export const Price = styled.p`
  font-weight: 500;
  font-size: 16px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  & p {
    font-weight: 400;
    font-size: 12px;
    color: var(--transp50);
  }
`;

export const Button = styled.button`
  border: none;
  color: var(--white);
  background-color: var(--blue);
  font-size: 14px;
  font-weight: 600;
  margin-top: 8px;
  padding: 12px 70px;
  border-radius: 12px;

  &:hover {
    background-color: var(--btn-hover);
    transform: scale(1.01);
  }
`;
