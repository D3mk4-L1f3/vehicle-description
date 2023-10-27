import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white);
  border-radius: 24px;
  padding: 40px;
  min-width: 250px;
  max-width: 540px;
  max-height: 750px;
  z-index: 3;
  overflow-y: auto;
`;

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--transp50);
  position: fixed;
  padding: 20px;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const AlterImage = styled.img`
  object-fit: contain;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  margin: 0 auto;
  border-radius: 14px;
`;

export const Title = styled.h2`
  font-size: clamp(12px, 2vw, 18px);
`;

export const Span = styled.span`
  color: var(--blue);
`;

export const InfoContainer = styled.div`
  text-align: left;
`;

export const SecondaryTitle = styled.h3`
  font-weight: 500;
  font-size: clamp(10px, 2vw, 14px);
  color: var(--text);
`;
export const Text = styled.p`
  font-size: clamp(10px, 2vw, 12px);
`;

export const DescriptContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ConditionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const DescriptionText = styled.p`
  margin-top: 14px;
  font-weight: 400;
  font-size: clamp(10px, 2vw, 14px);
  color: var(--text);
`;

export const ListConditions = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ItemConditions = styled.li`
  display: inline-block;
  padding: 7px 14px;
  font-family: var(--second-font);
  background-color: var(--list-bg);
  border-radius: 35px;
  color: var(--modal-text);
  font-size: clamp(10px, 2vw, 12px);
`;

export const Number = styled.span`
  color: var(--blue);
  font-weight: 600;
  font-size: clamp(10px, 2vw, 12px);
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  padding: 0;
`;

export const Delimiter = styled.span`
  padding: 0 5px;
  color: var(--transp80);
`;

export const RentLink = styled.a`
  border: none;
  color: var(--white);
  background-color: var(--blue);
  font-weight: 600;
  font-size: clamp(12px, 2vw, 14px);
  width: 68px;
  padding: 12px 50px;
  border-radius: 12px;

  &:hover {
    transform: scale(1.1);
    background-color: var(--btn-hover);
  }
`;
