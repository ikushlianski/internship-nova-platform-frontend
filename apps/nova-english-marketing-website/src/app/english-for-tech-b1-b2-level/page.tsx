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
  
  return (
    <div>
      <h1>Hello im B1 and B2 level course!!</h1>
      <Button
        className="bg-blue-500 text-white-foreground"
        appName="WBS"
        imageLink={'assets/icons/button_present.svg'}
        form="REC"
        size="L"
      >
        BUTTON
      </Button>
      <Button
        className="bg-disabled text-foreground"
        appName="WBS"
        imageLink={'assets/icons/button_present.svg'}
        form="REC"
        size="S"
      >
        BUTTON
      </Button>
      <Button
        className="bg-blue-50"
        appName="WBS"
        imageLink={'assets/icons/arrow_blue.svg'}
        form="ROUND"
        size="L"
        outline="TRUE"
      ></Button>
      <Button
        className="bg-disabled text-foreground"
        appName="WBS"
        imageLink={'assets/icons/arrow_white.svg'}
        form="ROUND"
        size="S"
      ></Button>
      <InputComponent
        className="bg"
        appName="WBS"
        placeholder="Text"
        type="input"
        size="S"
      />
      <InputComponent
        className="bg"
        appName="WBS"
        placeholder="Text"
        type="input"
        props={countries}
        size="S"
      />
      <InputComponent
        className="bg"
        appName="WBS"
        placeholder="Text"
        type="input"
        props={countries}
        size="L"
      />
      <SelectComponent appName="WBS" type='select' size='L' props={countries} />
      <SelectComponent appName="WBS" type='select' size='S' props={countries} />
      <LinkComponent appName="WBS" navLink={[{ title: 'Home', path: '/' }]}>
        Link
      </LinkComponent>
    </div>
  );
}
