'use client';
import React from 'react';
import { Button } from '@repo/ui/button';
import { InputComponent } from '@repo/ui/input';

import { title } from 'process';
import { LinkComponent } from '../components/link';
import { SelectComponent } from '../../../../../packages/ui/src/select';

export default function Page() {
  const countries = [
    {
      name: 'Belarus',
      content: '<img src="assets/icons/countryBelarus.svg"/>',
    },
    {
      name: 'Italy',
      content: '<img src="assets/icons/arrow_blue.svg"/>',
    },
    {
      name: 'Greece',
      content: '<img src="assets/icons/button_present.svg"/>',
    },
  ];
  const callback = () => {
    console.log('Hello');
  };

  return (
    <div>
      <h1>Hello im B1 and B2 level course!!</h1>
      <Button
        classNameButton="bg-blue-500 text-white-foreground"
        classNameImage="bg"
        appName="WBS"
        imageLink={'assets/icons/button_present.svg'}
        callback={callback}
      >
        Button
      </Button>
      <Button
        classNameButton="bg-disabled text-foreground "
        classNameImage="bg"
        appName="WBS"
        imageLink={'assets/icons/button_present.svg'}
        callback={callback}
      >
        BUTTON
      </Button>
      <Button
        classNameButton="bg-blue-50"
        classNameImage="bg"
        appName="WBS"
        imageLink={'assets/icons/arrow_blue.svg'}
        callback={callback}
      ></Button>
      <Button
        classNameButton="bg-disabled text-foreground"
        appName="WBS"
        imageLink={'assets/icons/arrow_white.svg'}
        callback={callback}
      ></Button>
      <InputComponent
        classNameComponent="bg"
        classNameInput="bg"
        classNameSelect="bg"
        appName="WBS"
        placeholder="Text"
        type="input"
      />
      <InputComponent
        classNameComponent="bg"
        classNameInput="bg"
        classNameSelect="bg"
        appName="WBS"
        placeholder="Text"
        type="input"
        props={countries}
      />
      <InputComponent
        classNameComponent="bg"
        classNameInput="bg"
        classNameSelect="bg"
        appName="WBS"
        placeholder="Text"
        type="input"
        props={countries}
      />
      <SelectComponent classNameSelect="bg" appName="WBS" type="select" size="L" props={countries} />
      <SelectComponent classNameSelect="bg" appName="WBS" type="select" size="S" props={countries} />
      <LinkComponent appName="WBS" navLink={[{ title: 'Home', path: '/' }]}>
        Link
      </LinkComponent>
    </div>
  );
}
