import { describe, expect, it } from 'vitest';
import { phoneMask } from './phoneMask';

// just an example

describe('phoneMask', () => {
  it('should format a valid phone number correctly', () => {
    expect(phoneMask('1234567890')).toBe('(123) 456-7890');
  });

  it('should return the input if the phone number is too short', () => {
    expect(phoneMask('12345')).toBe('12345');
  });

  it('should return the input if the phone number contains non-numeric characters', () => {
    expect(phoneMask('123abc7890')).toBe('123abc7890');
  });
});
