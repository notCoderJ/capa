import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
import Button from './Button';

type MultiSelectProps = {
  type: string;
  placeholder: string;
  menuItems: string[];
  selectedItems: string[];
  selectHandler: React.ChangeEventHandler<HTMLInputElement>;
};

type SelectButtonProps = {
  activate: boolean;
};

const MultiSelect = ({
  type,
  placeholder,
  menuItems,
  selectedItems,
  selectHandler,
}: MultiSelectProps) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = useCallback(() => setToggle((old) => !old), []);
  const handleBlur = useCallback((e: React.FocusEvent<HTMLElement>) => {
    const btn = new RegExp(`${type}-btn`);
    const option = new RegExp(`${type}-option\\w*`);
    const targetId = e.relatedTarget?.id;

    if (targetId && (btn.test(targetId) || option.test(targetId))) {
      return;
    }

    setToggle(false);
  }, []);

  return (
    <Container>
      <SelectButton
        id={`${type}-btn`}
        type="button"
        onClick={handleClick}
        onBlur={handleBlur}
        activate={selectedItems.length !== 0}
      >
        <span>
          {placeholder}
          {selectedItems.length !== 0 && `(${selectedItems.length})`}
        </span>
        {!toggle ? (
          <ArrowDropDown color="disabled" />
        ) : (
          <ArrowDropUp color="disabled" />
        )}
      </SelectButton>
      {toggle && (
        <OptionItems id={`${type}-options`} tabIndex={-1} onBlur={handleBlur}>
          {menuItems.map((menu, idx) => (
            <label key={`type${menu}`} htmlFor={`${type}-option${idx + 1}`}>
              <input
                id={`${type}-option${idx + 1}`}
                type="checkbox"
                value={menu}
                checked={selectedItems.includes(menu)}
                onChange={selectHandler}
              />
              <span>{menu}</span>
            </label>
          ))}
        </OptionItems>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: fit-content;
`;

const SelectButton = styled(Button)<SelectButtonProps>`
  width: fit-content;
  border-color: #939fa5;
  background: #ffffff;
  color: #323d45;
  transition: ease-in 300ms border;

  > span {
    line-height: 14px;
    font-size: 12px;
    font-weight: 500;
    margin: 9px 5px 9px 12px;
    pointer-events: none;
  }

  > svg {
    margin-right: 12px;
    color: #939fa5;
    pointer-events: none;
  }

  ${(props) =>
    props.activate &&
    css`
      background: #1565c0;
      color: #ffffff;

      > svg {
        color: #ffffff;
      }
    `}

  :hover {
    border-color: #2196f3;
  }
`;

const OptionItems = styled.div`
  position: absolute;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 130px;
  padding: 16px 0 16px 12px;
  border: 1px solid #939fa5;
  border-radius: 4px;
  background: #ffffff;
  z-index: 99;

  > label + label {
    margin-top: 8px;
  }

  > label {
    display: flex;
    align-items: center;
    cursor: pointer;

    > input {
      width: 18px;
      height: 18px;
      margin-right: 10px;
      cursor: pointer;
    }

    > span {
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      pointer-events: none;
    }
  }
`;

export default MultiSelect;
