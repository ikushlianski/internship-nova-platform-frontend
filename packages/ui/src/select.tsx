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
  classNameSelect: string;
  appName: string;
  type: string;
  size: 'L' | 'S';
  props: prop[];
}

export const SelectComponent = ({
  classNameSelect,
  appName,
  type = 'select',
  size = 'L',
  props,
}: SelectProps) => {
  const [selectedProp, setSelectedProp] = useState(props[0]);

  return (
    <div
      className={`${classNameSelect} flex gap-2 items-center justify-between max-w-[342px] border-2 border-input rounded-[32px] transition-colors duration-300 ease-in-out focus-within:border-blue-500" ${type === 'input' ? 'border-0 outline-none p-0' : ''}`}
    >
      <Select defaultValue={selectedProp?.name}>
        <SelectTrigger
          className={`w-[35px] flex justify-between w-full gap-1 outline-none`}
        >
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
                className={`flex flex-row-reverse p-[18px] w-full gap-1 border-none outline-none hover:bg-secondary hover:text-secondary-foreground`}
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
