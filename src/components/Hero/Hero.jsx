import React from "react";

// import mainHeroImg from "styles/image/hero_img.png";

import {
  HeroContainer,
  HeroWrapper,
  MainTitle,
  CompanyName,
  DescrContainer,
  CatalogSpan,
} from "./Hero.styled";

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <MainTitle>
          Discover Ukraine with <CompanyName>UaRentCar</CompanyName> - Your
          Trusted Travel Companion 😊
        </MainTitle>
        <DescrContainer>
          <p>
            Discover Ukraine with <CompanyName>UaRentCar</CompanyName> - Your
            Trusted Travel Companion 7 Years of Excellence - 24/7 Technical
            Support For seven years, <CompanyName>UaRentCar</CompanyName> has
            been your go-to car rental service in Ukraine. We offer a diverse
            fleet, impeccable customer service, and 24/7 technical support.
            Safety, convenience, and sustainability are at the heart of our
            mission. Choose <CompanyName>UaRentCar</CompanyName> for
            unforgettable journeys across Ukraine.
          </p>
        </DescrContainer>
        <p>
          For starting, select your favorite car at{" "}
          <CatalogSpan>Catalog</CatalogSpan>
        </p>
      </HeroWrapper>
    </HeroContainer>
  );
};
