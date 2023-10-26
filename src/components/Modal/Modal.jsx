import React from 'react';
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr';
import res from 'styles/image/modality.png';
import { toast } from 'react-toastify';
import {
  Overlay,
  ModalContainer,
  BtnClose,
  Image,
  Title,
  Span,
  InfoContainer,
  Text,
  DescriptionText,
  SecondaryTitle,
  ListConditions,
  ItemContidions,
  Number,
  RentLink,
  DescriptContainer,
  ConditionContainer,
} from './Modal.styled';

export function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const DescriptionModal = ({ isOpen, closeModal, car }) => {
  const addressParts = car.address.split(', ');
  const city = addressParts[0];
  const country = addressParts[1];
  const accessories = car.accessories.join(' | ');
  const functionalities = car.functionalities.join(' | ');
  const rentalConditionsArray = car.rentalConditions.split('\n');

  const ageRegex = /\d+/;

  const ageMatch = car.rentalConditions.match(ageRegex);
  const minimumAge = ageMatch ? ageMatch[0] : null;

  const closeModalOnOverlayClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleImageError = e => {
    e.target.src = res;
    toast.error('Downloaded images were crushed, try later :(');
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Car Modal"
      overlayClassName="custom-overlay-class"
      className="custom-content-class"
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
    >
      <Overlay onClick={closeModalOnOverlayClick}>
        <ModalContainer>
          <BtnClose onClick={closeModal}>
            <GrClose style={{ width: '24', height: '24' }} />
          </BtnClose>
          <Image
            src={car.img}
            alt={`${car.make} ${car.model}`}
            onError={handleImageError}
          />
          <Title>
            {car.make} <Span>{car.model}</Span>, {car.year}
          </Title>
          <InfoContainer>
            <Text>
              {city} | {country} | id: {car.id} | year: {car.year} | type:{' '}
              {car.type} | Fuel Consumption: {car.fuelConsumption} | Engine
              Size: {car.engineSize}
            </Text>
            <DescriptionText>{car.description}</DescriptionText>
          </InfoContainer>
          <DescriptContainer>
            <SecondaryTitle>Accessories and functionalities:</SecondaryTitle>
            <Text>
              {accessories} | {functionalities}
            </Text>
          </DescriptContainer>
          <ConditionContainer>
            <SecondaryTitle>Rental Conditions:</SecondaryTitle>
            <ListConditions>
              {rentalConditionsArray.map((condition, index) => {
                if (condition.includes(minimumAge)) {
                  return (
                    <ItemContidions key={index}>
                      Minimum age: <Number>{minimumAge}</Number>
                    </ItemContidions>
                  );
                }
                return <ItemContidions key={index}>{condition}</ItemContidions>;
              })}
              <ItemContidions>
                Mileage: <Number>{formatNumberWithCommas(car.mileage)}</Number>
              </ItemContidions>
              <ItemContidions>
                Price: <Number>{car.rentalPrice}</Number>
              </ItemContidions>
            </ListConditions>
          </ConditionContainer>
          <RentLink
            onClick={() => (window.location.href = 'tel:+380730000000')}
          >
            Rental car
          </RentLink>
        </ModalContainer>
      </Overlay>
    </Modal>
  );
};
