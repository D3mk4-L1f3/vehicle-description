import styled from "styled-components";
import mainHeroImg from "styles/image/hero_img.png";

export const HeroContainer = styled.div`
  background-image: url(${mainHeroImg});
  width: 100%;
  height: calc(100vh - 108px);
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  padding: 0 15px;
  gap: 20px;
  margin-top: -20px;
  height: calc(100vh - 108px);
  background-color: rgba(128, 128, 128, 0.9);

  & p {
    font-size: clamp(14px, 2vw, 24px);
  }
`;

export const MainTitle = styled.h1`
  display: inline-block;
  font-weight: 600;

  color: var(--white);
  font-size: clamp(28px, 2vw, 60px);
`;

export const CompanyName = styled.span`
  color: var(--orange);
`;

export const DescrContainer = styled.div`
  & p {
    font-size: clamp(14px, 2vw, 30px);
    color: var(--yellow);
  }
`;

export const CatalogSpan = styled.span`
  color: var(--white);
`;
