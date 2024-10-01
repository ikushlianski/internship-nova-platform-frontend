'use client';

import { Button } from '@repo/ui/appButton';
import { Form } from '@repo/ui/form';
import { useTranslations } from 'next-intl';
import { useWelcomeForm } from '../logic/useWelcomeForm';
import { AssessmentFieldItem } from './AssessmentFieldItem.component';
import { ScheduleToggleGroup } from './ScheduleToggleGroup.component';

export function AssessmentForm() {
  const t = useTranslations('test_page.form');

  const { form, formRef, handleSubmit, formAction } = useWelcomeForm();

  return (
    <Form {...form}>
      <form
        ref={formRef}
        action={formAction}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 md:gap-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-4 md:gap-10">
          <AssessmentFieldItem
            name="email"
            label={t('fields.email_label')}
            placeholder="Text"
            form={form}
            fieldType="input"
          />

          <AssessmentFieldItem
            name="country"
            label={t('fields.country_label')}
            placeholder="Text"
            form={form}
            tooltipText={t('tooltip_text')}
            fieldType="input"
          />

          <AssessmentFieldItem
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
          className="text-xl md:text-2xl font-bold w-max text-white-foreground bg-[#0092FC] hover:bg-[#3EADFF] rounded-full px-5 md:px-[60px] md:h-[60px] self-center"
        >
          {t('cta')}
        </Button>
      </form>
    </Form>
  );
}
