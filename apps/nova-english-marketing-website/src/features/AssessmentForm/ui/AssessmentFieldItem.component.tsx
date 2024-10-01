import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@repo/ui/form';
import { Input } from '@repo/ui/inputForm';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@repo/ui/selectItem';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@repo/ui/tooltip';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { schema } from '../logic/formSchema';
import { SelectOptions } from './selectOptions';

type AssessmentFieldItemProps = {
  name: keyof z.infer<typeof schema>;
  label: string;
  placeholder: string;
  form: UseFormReturn<z.infer<typeof schema>>;
  fieldType: 'input' | 'select';
  tooltipText?: string;
};

export function AssessmentFieldItem({
  name,
  label,
  placeholder,
  form,
  fieldType,
  tooltipText,
}: AssessmentFieldItemProps) {
  const { errors } = form.formState;

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col md:gap-5">
          <div className="relative w-max">
            <FormLabel className="text-lg sm:text-2xl font-bold">{label}</FormLabel>
            {tooltipText && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger
                    onClick={(e) => e.preventDefault()}
                    className="flex items-center justify-center absolute -right-4 md:-right-8 -top-1 md:-top-2 border-[1px] border-dashed border-gray-400 rounded-full w-4 h-4 md:w-6 md:h-6 font-semibold text-sm"
                  >
                    ?
                  </TooltipTrigger>
                  <TooltipContent className="border-none">
                    <p className="max-w-60 bg-white-foreground p-2">{tooltipText}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>

          <FormControl>
            {fieldType === 'input' ? (
              <Input
                placeholder={placeholder}
                {...field}
                className={`border-2 rounded-full lg:max-w-[494px] md:h-[60px] sm:text-xl ${
                  errors[name] ? 'border-[#F1363C]' : 'border-gray-300'
                }`}
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
                  <SelectTrigger className="border-2 border-gray-300 rounded-full lg:max-w-[494px] h-10 md:h-[60px] sm:text-xl px-4">
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
