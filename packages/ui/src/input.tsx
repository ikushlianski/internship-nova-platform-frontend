'use client';

import { ReactNode, useState } from 'react';
import styles from './input.module.css';
import { Input } from './components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './components/ui/select';

interface country {
  name: string;
  image: string;
}

interface InputProps {
  className?: string;
  appName: string;
  type: 'input';
  size: 'L' | 'S';
  placeholder: string;
  countries?: country[];
}

export const InputComponent = ({
  className,
  appName,
  type = 'input',
  size = 'L',
  placeholder,
  countries,
}: InputProps) => {
  const [selectedCountry, setSelectedCountry] = useState(
    countries ? countries[0] : null
  );

  const [inputValue, setInputValue] = useState('');
  
  return (
    <div
      className={`${className || ''} ${styles.input} ${size === 'L' ? styles.large : styles.small} ${
        inputValue ? styles.input_filled : ''
      }`}
    >
      {countries && (
        <Select defaultValue={selectedCountry?.name}>
          <SelectTrigger className={`w-[35px] ${styles.select}`}>
            <SelectValue
              placeholder={<img src={selectedCountry?.image}></img>}
            />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country, index) => {
              return (
                <SelectItem
                  className={styles.select_item}
                  key={index}
                  value={country.name}
                  onSelect={() => setSelectedCountry(country)}
                >
                  <img src={country.image}></img>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      )}
      <Input
        type={type}
        placeholder={placeholder}
        className={`${className || ''} ${styles.input_textField} ${
          inputValue ? styles.input_filled : ''
        }`}
        onChange={(event) => setInputValue(event.target.value)}
      ></Input>
    </div>
  );
};
