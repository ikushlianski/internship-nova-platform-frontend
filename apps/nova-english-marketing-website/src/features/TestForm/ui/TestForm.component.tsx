'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@repo/ui/appButton';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@repo/ui/form';
import { Input } from '@repo/ui/inputForm';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@repo/ui/selectItem';
import { ToggleGroup, ToggleGroupItem } from '@repo/ui/toggleGroup';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import { useFormState } from 'react-dom';
import { onSubmitAction } from '../api/formSubmit';
import { schema } from '../logic/formSchema';
import { SelectOptions } from './selectOptions';

export function TestForm() {
  const t = useTranslations('test_page.form');

  const [state, formAction] = useFormState(onSubmitAction, {
    message: '',
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: '',
      country: '',
      occupation: '',
      schedule: '',
      ...(state?.fields ?? {}),
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Form {...form}>
      <form
        ref={formRef}
        action={formAction}
        onSubmit={(event) => {
          event.preventDefault();
          form.handleSubmit(() => {
            formAction(new FormData(formRef.current!));
          })(event);
        }}
        className="flex flex-col gap-10"
      >
        <div className="grid grid-cols-2 grid-rows-2 gap-10">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-5">
                <FormLabel className="text-2xl font-bold">{t('fields.name_label')}</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Text"
                    {...field}
                    className="border-2 border-gray-300 rounded-full max-w-[494px] h-[60px] text-xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-5">
                <FormLabel className="text-2xl font-bold">{t('fields.country_label')}</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Text"
                    {...field}
                    className="border-2 border-gray-300 rounded-full max-w-[494px] h-[60px] text-xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="occupation"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-5">
                <FormLabel className="text-2xl font-bold">{t('fields.occupation_label')}</FormLabel>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    form.setValue('occupation', value);
                  }}
                  defaultValue={field.value}
                >
                  <FormControl className="py-1 px-5">
                    <SelectTrigger className="border-2 border-gray-300 rounded-full max-w-[494px] h-[60px] text-xl">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white-foreground border-2 border-gray-300">
                    {SelectOptions.map(({ value, content }) => (
                      <SelectItem
                        key={value}
                        value={value}
                        className="cursor-pointer hover:border-2 hover:border-[#3EADFF] text-xl"
                      >
                        {content}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
                <input type="hidden" {...form.register('occupation')} />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="schedule"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-5">
                <FormLabel className="text-2xl font-bold mb-2">{t('schedule.label')}</FormLabel>
                <ToggleGroup
                  value={field.value}
                  onValueChange={(value) => {
                    field.onChange(value);
                    form.setValue('schedule', value);
                  }}
                  type="single"
                  className="justify-start"
                >
                  <ToggleGroupItem
                    value="morning"
                    className="rounded-full bg-[#E9E9E9] w-[180px] h-[60px] text-2xl font-medium"
                  >
                    {t('schedule.morning')}
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="day"
                    className="rounded-full bg-[#E9E9E9] w-[180px] h-[60px] text-2xl font-medium"
                  >
                    {t('schedule.day')}
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="evening"
                    className="rounded-full bg-[#E9E9E9] w-[180px] h-[60px] text-2xl font-medium"
                  >
                    {t('schedule.evening')}
                  </ToggleGroupItem>
                </ToggleGroup>
                <input type="hidden" {...form.register('schedule')} />
              </FormItem>
            )}
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
