import { ReactElement } from "react";
import classNames from "classnames";
import Select, { CSSObjectWithLabel } from "react-select";

export type SELECT_OPTION = {
  value: string;
  label: string;
};

type SelectProps = {
  options: SELECT_OPTION[];
  value: string;
  onChange: (e: string | number) => void;
  name: string;
  placeholder?: string;
  id?: string;
  className?: string;
  classNamePrefix?: string;
};

export const SelectInput = ({
  options,
  value,
  onChange,
  name,
  id = name,
  placeholder,
  className,
  classNamePrefix,
}: SelectProps): ReactElement => {
  const styles = {
    control: (base: CSSObjectWithLabel) => ({
      ...base,
    }),
    menuList: (base: CSSObjectWithLabel) => ({
      ...base,
      "::-webkit-scrollbar": {
        width: "4px",
        height: "0px",
        backgroundColor: "transparent",
      },
      "::-webkit-scrollbar-track": {
        background: "#f1f1f1",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#888",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#555",
      },
    }),
  };
  return (
    <Select
      options={options}
      placeholder={placeholder}
      instanceId={name}
      value={options.find((el) => el.value === value)}
      name={name}
      className={classNames(
        "border-gray-200 focus-within:border-blue-600",
        className
      )}
      classNamePrefix={"border-gray-200 focus-within:border-blue-600"}
      id={id || name}
      styles={styles}
      onChange={(e) => e?.value && onChange(e?.value)}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        width: "200px",
        colors: {
          ...theme.colors,
          primary25: "rgb(163 230 53)",
          primary: " rgb(132 204 22)",
        },
      })}
    />
  );
};
