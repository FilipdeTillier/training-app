import { IntlFormatters } from "react-intl";

export type TPropsWithClassName<T> = {
  className?: string;
} & T;

export type TNullable<T> = T | null;

export type TFormatMessage = Pick<
  IntlFormatters,
  "formatMessage"
>["formatMessage"];
