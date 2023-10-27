import styled from 'styled-components';
import Select from 'react-select';

export const FilterContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
  padding: 0 15px;
`;

export const CustomValSelect = styled(Select)`
  .my-cosum-select__container {
    cursor: pointer;
  }
  .my-cusom-select__control {
    border-radius: 0;
    padding-right: 5px;
    font-size: 18px;
    box-shadow: none;
    width: 140px;
    border: none;
    cursor: pointer;
    background-color: var(--filter-bg);
    border-radius: 12px;
  }

  .my-cusom-select__control:hover {
    border-color: --transp-40;
    cursor: pointer;
  }

  .my-cusom-select__single-value {
    color: var(--text);
  }

  .my-cusom-select-control--is-focused {
    border: 0;
    outline: none;
  }

  .my-cusom-select__indicator {
    position: absolute;
    bottom: 7px;
    right: 5px;
    padding: 0;
    color: var(--red);

    transform: ${props => (props.menuIsOpen ? 'rotate(180deg)' : 'none')};
    display: ${props => (props.menuIsOpen ? 'block' : 'display')};
  }

  .my-cusom-select__indicator-separator {
    display: none;
  }

  .my-cusom-select__menu {
    background: var(--nav-gradient);
    color: var(--transp50);
  }

  .my-cusom-select__menu-list {
    color: var(--white);
    font-size: 16px;

    &::-webkit-scrollbar {
      width: 0;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--orange);
    }
  }

  .my-cusom-select__option--is-focused {
    color: var(--orange);
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
  .my-cusom-select__option--is-selected {
    color: var(--orange);
    cursor: pointer;
  }
`;

export const OdoContainer = styled.div`
  display: flex;
  gap: 1px;
`;

export const OdoInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & p {
    font-size: clamp(12px, 2vw, 22px);
  }
`;

export const OdoFrom = styled.input`
  width: 80px;
  padding: 0 0 0 10px;
  text-align: center;
  gap: 32px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  background-color: var(--filter-bg);
  border: none;
  outline: none;
  color: var(--text);
  font-size: 18px;
  height: 38px;

  &::placeholder {
    text-align: left;
  }
`;

export const OdoTo = styled.input`
  width: 80px;
  padding: 0 10px 0 0;
  height: 38px;
  text-align: center;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: var(--filter-bg);
  border: none;
  outline: none;
  color: var(--text);
  font-size: 18px;
  &::placeholder {
    text-align: right;
  }
`;

export const BtnForm = styled.button`
  padding: 11px 30px;
  background-color: var(--blue);
  border-radius: 12px;
  color: var(--white);
  font-size: 14px;
  font-weight: 600;
  border: none;

  &:hover {
    transform: scale(1.2);
    background-color: var(--btn-hover);
  }
`;
