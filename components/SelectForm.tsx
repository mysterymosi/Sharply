import React from "react";
import Select, { StylesConfig } from "react-select";
import { MultiOptionType } from "../types";
import AsyncSelect from "react-select/async";
interface OptionType {
  value: string;
  label: string;
}
interface SelectFormProps {
  options?: OptionType[] | MultiOptionType[];
  async?: boolean;
  promiseOptions?: any;
  onChange: (selectedOption: any) => void;
  placeholder: string;
  disabled?: boolean;
  isMulti?: boolean;
  closeMenuOnSelect?: boolean;
  value?: {};
  getOptionLabel?: any;
  getOptionValue?: any;
  defaultValue?: {};
  isKeywordSearch?: boolean;
  defaultInputValue?: any;
  formatOptionLabel?: any;
  formatGroupLabel?: any;
  id?: string;
}
const SelectForm: React.FC<SelectFormProps> = ({
  id,
  formatGroupLabel,
  defaultInputValue,
  getOptionLabel,
  getOptionValue,
  promiseOptions,
  async,
  isKeywordSearch,
  defaultValue,
  value,
  closeMenuOnSelect,
  isMulti,
  options,
  onChange,
  placeholder,
  disabled,
  formatOptionLabel,
}) => {
  const setControlBorderColorOnFocused = (isFocusedFormState: boolean) => {
    if (!isFocusedFormState) {
      return "#ebebec";
    }
    return "#ebebeb";
  };
  const setOptionBackgroundColor = (
    isDisabled: boolean,
    isSelected: boolean,
    isFocused: boolean
  ) => {
    if (isDisabled) {
      return undefined;
    } else if (isSelected) {
      return "#ffffff";
    } else if (isFocused) {
      return "#ffffff";
    } else {
      return undefined;
    }
  };
  const setOptionColor = (isDisabled: boolean, isSelected: boolean) => {
    if (isDisabled) {
      return "#ccc";
    } else if (isSelected) {
      return "#335AFF";
    } else {
      return "#323242";
    }
  };
  const setOptionBackgroundColorOnActive = (isSelected: boolean) => {
    if (isSelected) {
      return "#ffffff";
    } else {
      return "#fff";
    }
  };
  const customStyles: StylesConfig<any> = {
    control: (styles, { isDisabled, isFocused }) => ({
      ...styles,
      minHeight: "57px",
      borderRadius: "8px",
      width: isKeywordSearch ? "190px" : "normal",
      backgroundColor: isDisabled ? "#f4f5f6" : "#ffffff",
      boxShadow: isFocused ? "none" : undefined,
      border: isKeywordSearch ? "0px" : "2px solid rgba(217, 217, 217, 0.4)",
      padding: isKeywordSearch ? "0px 4px 0px 0px" : "0px 4px",
      cursor: "pointer",
      ":hover": {
        ...styles[":hover"],
        borderColor: !isDisabled
          ? setControlBorderColorOnFocused(isFocused)
          : undefined,
      },
    }),
    placeholder: (styles) => ({
      ...styles,
      color: "#323242",
      fontSize: "13px",
      fontWeight: "500",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "#2c2c2c",
      fontSize: "14px",
      fontWeight: "500",
    }),
    indicatorSeparator: (styles) => ({ ...styles, width: 0 }),
    indicatorsContainer: (styles) => ({ ...styles, paddingRight: "8px" }),
    valueContainer: (styles) => ({
      ...styles,
      paddingLeft: isKeywordSearch ? "0px" : "6px",
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      color: "#bcbcbc",
      paddingRight: "8px",
      svg: {
        height: "25px",
        width: "20px",
      },
    }),
    menu: (styles) => ({
      ...styles,
      boxShadow: "0px 2px 16px rgba(182, 182, 182, 0.25)",
      border: "0px",
      zIndex: 4,
    }),
    option: (styles, { isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: setOptionBackgroundColor(
          isDisabled,
          isSelected,
          isFocused
        ),
        color: setOptionColor(isDisabled, isSelected),
        whiteSpace: "pre-wrap",
        cursor: isDisabled ? "not-allowed" : "pointer",
        fontSize: "14px",
        fontWeight: "500",
        ":last-child": {
          borderBottom: 0,
        },
        ":first-of-type": {
          borderBottom: 0,
        },

        ":hover": {
          backgroundColor: "#eaf4fe",
        },

        ":active": {
          ...styles[":active"],
          backgroundColor: !isDisabled
            ? setOptionBackgroundColorOnActive(isSelected)
            : undefined,
        },
      };
    },
    multiValue: (styles) => {
      return {
        ...styles,
        backgroundColor: "#f4f5f6",
        borderRadius: "16px",
        padding: "4.5px 10px",
        display: "flex",
        alignItems: "center",
      };
    },
    multiValueLabel: (styles) => ({
      ...styles,
      color: "#2c2c2c",
      fontSize: "12px",
      fontWeight: 600,
      paddingRight: "5px",
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      color: "#fff",
      backgroundColor: "#2D9AF8",
      width: "15px",
      height: "15px",
      paddingLeft: "2px",
      paddingRight: "2px",
      borderRadius: "50%",
      ":hover": {
        backgroundColor: "#2D9AF8",
        color: "#fff",
      },
    }),
  };
  return !async ? (
    <Select
      value={value}
      defaultValue={defaultValue}
      closeMenuOnSelect={closeMenuOnSelect}
      isMulti={isMulti}
      options={options}
      onChange={onChange}
      styles={customStyles}
      placeholder={placeholder}
      isDisabled={disabled}
      formatOptionLabel={formatOptionLabel}
      formatGroupLabel={formatGroupLabel}
    />
  ) : (
    <AsyncSelect
      id={id}
      isMulti={isMulti}
      defaultInputValue={defaultInputValue}
      defaultValue={defaultValue}
      value={value}
      formatOptionLabel={formatOptionLabel}
      formatGroupLabel={formatGroupLabel}
      onChange={onChange}
      getOptionLabel={getOptionLabel}
      getOptionValue={getOptionValue}
      styles={customStyles}
      placeholder={placeholder}
      cacheOptions
      loadOptions={promiseOptions}
      defaultOptions
    />
  );
};

export default SelectForm;
