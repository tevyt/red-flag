import classNames from "@/app/utils/classNames";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

export interface InputProps {
  label: string;
  name: string;
  type?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (event: any) => void;
  required?: boolean;
  error?: string;
}

export default function Input(props: Readonly<InputProps>) {
  const errorName = `${props.name}-error`;
  const baseClassName =
    "block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-white/5";

  const className = classNames(
    baseClassName,
    props.error
      ? "text-red-900  ring-red-300 placeholder:text-red-300 focus:ring-red-500"
      : "text-white ring-white/10 focus:ring-indigo-500"
  );

  return (
    <>
      <label
        htmlFor={props.name}
        className="block text-sm font-medium leading-6 text-white"
      >
        {props.label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type={props.type ?? "text"}
          name={props.name}
          id={props.name}
          className={className}
          placeholder={props.placeholder ?? ""}
          defaultValue={props.defaultValue ?? ""}
          aria-invalid={props.error ? "true" : "false"}
          aria-describedby={errorName}
          onChange={props.onChange}
        />
        {props.error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {props.error && (
        <p className="mt-2 text-sm text-red-600" id={errorName}>
          {props.error}
        </p>
      )}
    </>
  );
}
