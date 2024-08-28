'use client';

import { ReactNode, useState } from 'react';
import styles from './input.module.css';
import { Input } from './components/ui/input';
import { SelectComponent } from './select';

export interface prop {
  name: string;
  content: string;
}

interface InputProps {
  className?: string;
  appName: string;
  type: 'input';
  size: 'L' | 'S';
  placeholder: string;
  props?: prop[];
}

export const InputComponent = ({
  className,
  appName,
  type = 'input',
  size = 'L',
  placeholder,
  props,
}: InputProps) => {

  const [inputValue, setInputValue] = useState('');
  
  return (
    <div
      className={`${className || ''} ${styles.input} ${size === 'L' ? styles.large : styles.small} ${
        inputValue ? styles.input_filled : ''
      }`}
    >
      {props && (
        <SelectComponent appName={appName} type={type} size='L' props={props} />
      )}
      <Input
        type={type}
        placeholder={placeholder}
        className={`${className || ''} ${styles.input_textField} ${size === 'L' ? styles.large : styles.small} ${
          inputValue ? styles.input_filled : ''
        }`}
        onChange={(event) => setInputValue(event.target.value)}
      ></Input>
    </div>
  );
};
