import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@repo/ui/form';
import { Input } from '@repo/ui/inputForm';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@repo/ui/selectItem';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { schema } from '../logic/formSchema';
import { SelectOptions } from './selectOptions';

type FormFieldItemProps = {
  name: keyof z.infer<typeof schema>;
  label: string;
  placeholder: string;
  form: UseFormReturn<z.infer<typeof schema>>;
  fieldType: 'input' | 'select';
};

export function FormFieldItem({ name, label, placeholder, form, fieldType }: FormFieldItemProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col gap-5">
          <FormLabel className="text-2xl font-bold">{label}</FormLabel>
          <FormControl>
            {fieldType === 'input' ? (
              <Input
                placeholder={placeholder}
                {...field}
                className="border-2 border-gray-300 rounded-full max-w-[494px] h-[60px] text-xl"
              />
            ) : (
              <>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    form.setValue('occupation', value);
                  }}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="border-2 border-gray-300 rounded-full max-w-[494px] h-[60px] text-xl px-4">
                    <SelectValue className="py-1 px-5" placeholder="Select your role" />
                  </SelectTrigger>
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
              </>
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
