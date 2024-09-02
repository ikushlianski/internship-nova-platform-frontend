type Props = Array<string | undefined | boolean | null>;

export const cn = (...props: Props) => props.filter(Boolean).join(' ');
