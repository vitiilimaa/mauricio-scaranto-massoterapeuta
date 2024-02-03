import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { classNames } from "primereact/utils";
import { ChangeEvent } from "react";

type CustomInputTextProps = {
  label: string;
  type?: string;
  register?: object;
  inputError?: {
    hasError: boolean;
    message: string;
  };
  value?: string;
  onChange?: (ev: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: () => void;
};

const CustomInputText = (props: CustomInputTextProps) => {
  const { label, type = "", inputError, register = {}, ...rest } = props;

  return (
    <div className="w-full">
      <span className="p-float-label ">
        {type.toUpperCase() !== "TEXTAREA" ? (
          <InputText
            {...register}
            {...rest}
            className={`${classNames({
              "p-invalid": inputError?.hasError,
            })} focus:border-purple-600 active:border-purple-600 hover:border-purple-400 focus:shadow-none w-full`}
          />
        ) : (
          <InputTextarea
            {...register}
            {...rest}
            className={`${classNames({
              "p-invalid": inputError?.hasError,
            })} focus:border-purple-600 active:border-purple-600 hover:border-purple-400 focus:shadow-none w-full`}
            rows={10}
            autoResize
          />
        )}
        <label>{label}</label>
      </span>
      <div className="p-error mt-1 text-sm">
        {inputError?.hasError && inputError?.message}
      </div>
    </div>
  );
};

export default CustomInputText;
