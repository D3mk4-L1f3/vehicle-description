import React, { useState } from 'react';
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr';
import res from 'styles/image/modality.png';
import { toast } from 'react-toastify';
import {
  Overlay,
  ModalContainer,
  BtnClose,
  AlterImage,
  Image,
  Title,
  Span,
  InfoContainer,
  Text,
  DescriptionText,
  SecondaryTitle,
  ListConditions,
  ItemConditions,
  Number,
  RentLink,
  Delimiter,
  DescriptContainer,
  ConditionContainer,
} from './Modal.styled';

export const formatNumberWithCommas = number => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const DescriptionModal = ({ isOpen, closeModal, car }) => {
  const [imageLoadError, setImageLoadError] = useState(false);
  const {
    address,
    accessories,
    functionalities,
    rentalConditions,
    make,
    model,
    year,
    id,
    type,
    fuelConsumption,
    engineSize,
    description,
    mileage,
    rentalPrice,
    img,
  } = car;

  const addressParts = address.split(', ');
  const [city, country] = addressParts;

  const rentalConditionsArray = rentalConditions.split('\n');
  const accessoriesString = accessories ? accessories.join(' | ') : 'Unknown';
  const functionalitiesString = functionalities
    ? functionalities.join(' | ')
    : 'Unknown';

  const ageRegex = /\d+/;
  const ageMatch = rentalConditions.match(ageRegex);
  const minimumAge = ageMatch ? ageMatch[0] : null;

  const closeModalOnOverlayClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleImageError = e => {
    setImageLoadError(true);
    toast.error('Downloading was crushed :( , try later to see car photo ');
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
          {imageLoadError ? (
            <AlterImage
              src={res}
              alt={`${make ?? 'Unknown'} ${model ?? 'Unknown'}`}
            />
          ) : (
            <Image
              src={img ?? 'Unknown'}
              alt={`${make ?? 'Unknown'} ${model ?? 'Unknown'}`}
              onError={handleImageError}
            />
          )}
          <Title>
            {make ?? 'Unknown'} <Span>{model ?? 'Unknown'}</Span>,{' '}
            {year ?? 'Unknown'}
          </Title>
          <InfoContainer>
            <Text>
              {city ?? 'Unknown'}
              <Delimiter>|</Delimiter>
              {country ?? 'Unknown'} <Delimiter>|</Delimiter> id:{' '}
              {id ?? 'Unknown'}
              <Delimiter>|</Delimiter>year: {year ?? 'Unknown'}{' '}
              <Delimiter>|</Delimiter> type:
              {type ?? 'Unknown'}
              <Delimiter>|</Delimiter>Fuel Consumption:
              {fuelConsumption ?? 'Unknown'}
              <Delimiter>|</Delimiter>Engine Size: {engineSize ?? 'Unknown'}
            </Text>
            <DescriptionText>{description ?? 'Unknown'}</DescriptionText>
          </InfoContainer>
          <DescriptContainer>
            <SecondaryTitle>Accessories and functionalities:</SecondaryTitle>
            <Text>
              {accessoriesString}
              <Delimiter>|</Delimiter>
              {functionalitiesString}
            </Text>
          </DescriptContainer>
          <ConditionContainer>
            <SecondaryTitle>Rental Conditions:</SecondaryTitle>
            <ListConditions>
              {rentalConditionsArray.map((condition, index) => {
                if (condition.includes(minimumAge)) {
                  return (
                    <ItemConditions key={index}>
                      Minimum age: <Number>{minimumAge}</Number>
                    </ItemConditions>
                  );
                }
                return <ItemConditions key={index}>{condition}</ItemConditions>;
              })}
              <ItemConditions>
                Mileage:{' '}
                <Number>{formatNumberWithCommas(mileage ?? 'Unknown')}</Number>
              </ItemConditions>
              <ItemConditions>
                Price: <Number>{rentalPrice ?? 'Unknown'}</Number>
              </ItemConditions>
            </ListConditions>
          </ConditionContainer>
          <RentLink
            onClick={() => (window.location.href = 'tel:+380730000000')}
            title="Should call to rent?"
          >
            Rental car
          </RentLink>
        </ModalContainer>
      </Overlay>
    </Modal>
  );
};
