import React from 'react';
import styled from 'styled-components';

type SwitchProps = {
  name: string;
  onToggle: React.ChangeEventHandler<HTMLInputElement>;
};

const Switch = ({ name, onToggle }: SwitchProps) => (
  <Slider htmlFor={`${name}_switch`}>
    <input id={`${name}_switch`} type="checkbox" onChange={onToggle} />
    <div />
  </Slider>
);

const Slider = styled.label`
  position: relative;
  width: 34px;
  height: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  > input {
    display: none;
  }

  > div {
    width: 100%;
    height: 14px;
    border-radius: 12px;
    background-color: #c2c2c2;
    transition: ease-in-out 300ms all;

    ::before {
      content: '';
      position: absolute;
      top: 0;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #f5f5f5;
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12),
        0px 2px 2px rgba(0, 0, 0, 0.24);
      transition: ease-in-out 300ms all;
    }
  }

  > input:checked + div {
    background-color: #bbdefb;

    ::before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #2196f3;
      transform: translateX(70%);
    }
  }
`;

export default Switch;
