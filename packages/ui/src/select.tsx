'use client';

import { ReactNode, useState } from 'react';
import styles from './select.module.css';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './components/ui/select';
import { prop } from './input';

interface SelectProps {
  className?: string;
  appName: string;
  type: string;
  size: 'L' | 'S';
  props: prop[];
}

export const SelectComponent = ({
  className,
  appName,
  type = 'select',
  size = 'L',
  props,
}: SelectProps) => {
  const [selectedProp, setSelectedProp] = useState(props[0]);
  
  return (
    <div
      className={`${className || ''} ${styles.select_form} ${type === 'input' ? styles.input: size === 'L' ? styles.large : styles.small} ${
        selectedProp ? styles.select_form_filled : ''
      }`}
    >
      <Select defaultValue={selectedProp?.name}>
        <SelectTrigger className={`w-[35px] ${styles.select}`}>
          <SelectValue
            placeholder={
              <div
                dangerouslySetInnerHTML={{
                  __html: selectedProp?.content || '',
                }}
              ></div>
            }
          />
        </SelectTrigger>
        <SelectContent>
          {props.map((prop, index) => {
            return (
              <SelectItem
                className={styles.select_item}
                key={index}
                value={prop.name}
                onSelect={() => setSelectedProp(prop)}
              >
                <div dangerouslySetInnerHTML={{ __html: prop.content }}></div>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
