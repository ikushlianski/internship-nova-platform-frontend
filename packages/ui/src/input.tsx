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
  classNameComponent: string;
  classNameInput: string;
  classNameSelect?: string;
  appName: string;
  type: 'input';
  placeholder: string;
  props?: prop[];
}

export const InputComponent = ({
  classNameComponent,
  classNameInput,
  classNameSelect,
  appName,
  type = 'input',
  placeholder,
  props,
}: InputProps) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div
      className={`${classNameComponent} flex gap-2 items-center max-w-[342px] pr-[20px] pl-[20px] rounded-3xl border-2 border-input transition-colors duration-300 ease-in-out focus-within:border-blue-600 ${
        inputValue ? 'bg-secondary border-2 border-blue-500' : ''
      }`}
    >
      {props && (
        <SelectComponent
          classNameSelect={classNameSelect || ''}
          appName={appName}
          type={type}
          size="L"
          props={props}
        />
      )}
      <Input
        type={type}
        placeholder={placeholder}
        className={`${classNameInput} border-0 outline-none ${
          inputValue ? 'bg-secondary border-2 border-blue-500' : ''
        }`}
        onChange={(event) => setInputValue(event.target.value)}
      ></Input>
    </div>
  );
};
