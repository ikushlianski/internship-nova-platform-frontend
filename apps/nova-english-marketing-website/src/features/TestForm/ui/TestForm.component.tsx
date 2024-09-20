'use client';

import { Button } from '@repo/ui/appButton';
import { Form } from '@repo/ui/form';
import { useTranslations } from 'next-intl';
import { useWelcomeForm } from '../logic/useWelcomeForm';
import { FormFieldItem } from './FormFieldItem.component';
import { ScheduleToggleGroup } from './ScheduleToggleGroup.component';

export function TestForm() {
  const t = useTranslations('test_page.form');

  const { form, formRef, handleSubmit, formAction } = useWelcomeForm();

  return (
    <Form {...form}>
      <form
        ref={formRef}
        action={formAction}
        onSubmit={handleSubmit}
        className="flex flex-col gap-10"
      >
        <div className="grid grid-cols-2 grid-rows-2 gap-10">
          <FormFieldItem
            name="username"
            label={t('fields.name_label')}
            placeholder="Text"
            form={form}
            fieldType="input"
          />

          <FormFieldItem
            name="country"
            label={t('fields.country_label')}
            placeholder="Text"
            form={form}
            fieldType="input"
          />

          <FormFieldItem
            name="occupation"
            label={t('fields.occupation_label')}
            placeholder="Text"
            form={form}
            fieldType="select"
          />

          <ScheduleToggleGroup
            form={form}
            field="schedule"
            label={t('schedule.label')}
            options={[
              { value: 'morning', label: t('schedule.morning') },
              { value: 'day', label: t('schedule.day') },
              { value: 'evening', label: t('schedule.evening') },
            ]}
          />
        </div>

        <Button
          type="submit"
          className="text-2xl font-bold w-max text-white-foreground bg-[#0092FC] hover:bg-[#3EADFF] rounded-full px-[60px] h-[60px] self-center"
        >
          {t('cta')}
        </Button>
      </form>
    </Form>
  );
}