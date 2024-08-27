import React from 'react';
import { Button } from '@repo/ui/button';
import { InputComponent } from '@repo/ui/input';

import { title } from 'process';
import { LinkComponent } from './link';

export default function Page() {
  interface country {
    name: string;
    image: string;
  }

  const countries: country[] = [
    { name: 'Belarus', image: 'assets/icons/countryBelarus.svg' },
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
        countries={countries}
        size="S"
      />
      <LinkComponent appName="WBS" navLink={[{ title: 'Home', path: '/' }]}>
        Link
      </LinkComponent>
    </div>
  );
}
