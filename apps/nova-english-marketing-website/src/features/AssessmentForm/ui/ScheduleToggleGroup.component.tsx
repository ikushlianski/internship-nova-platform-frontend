import { FormField, FormItem, FormLabel } from '@repo/ui/form';
import { ToggleGroup, ToggleGroupItem } from '@repo/ui/toggleGroup';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { schema } from '../logic/formSchema';

type ScheduleOption = {
  value: string;
  label: string;
};

type ScheduleToggleGroupProps = {
  form: UseFormReturn<z.infer<typeof schema>>;
  field: keyof z.infer<typeof schema>;
  label: string;
  options: ScheduleOption[];
};

export function ScheduleToggleGroup({ form, field, label, options }: ScheduleToggleGroupProps) {
  return (
    <FormField
      control={form.control}
      name={field}
      render={({ field }) => (
        <FormItem className="flex flex-col gap-5">
          <FormLabel className="text-2xl font-bold">{label}</FormLabel>
          <ToggleGroup
            value={field.value}
            onValueChange={(value) => {
              field.onChange(value);
              form.setValue(field.name, value);
            }}
            type="single"
            className="justify-start"
          >
            {options.map((option) => (
              <ToggleGroupItem
                key={option.value}
                value={option.value}
                className="rounded-full bg-[#E9E9E9] w-[180px] h-[60px] text-2xl font-medium"
              >
                {option.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <input type="hidden" {...form.register(field.name)} />
        </FormItem>
      )}
    />
  );
}
