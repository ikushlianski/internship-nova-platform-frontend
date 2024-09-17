// Example shared util function to mask a phone number
export function phoneMask(phone: string): string {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}
