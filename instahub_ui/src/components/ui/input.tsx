"use client";
import { forwardRef, InputHTMLAttributes, useState } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, labelClassName, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";

    return (
      <div className="relative w-full">
        <input
          ref={ref}
          type={isPassword ? (showPassword ? "text" : "password") : type}
          placeholder=" "
          className={clsx(
            "peer h-15 w-full rounded-xl border border-[#3a3a3c] px-4 pt-7 pr-16 pb-2 text-[17px] text-white transition-all outline-none",
            "placeholder-transparent",
            "focus:border-[#737373]",
            className
          )}
          {...props}
        />

        {label && (
          <label
            className={clsx(
              "pointer-events-none absolute left-4 transition-all duration-200",
              "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2",
              "peer-placeholder-shown:text-base peer-placeholder-shown:text-[#a8a8a8]",
              "peer-focus:top-2 peer-focus:translate-y-0",
              "peer-focus:text-[13px] peer-focus:text-[#a8a8a8]",
              "peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:translate-y-0",
              "peer-not-placeholder-shown:text-[13px] peer-not-placeholder-shown:text-[#a8a8a8]",
              labelClassName
            )}
          >
            {label}
          </label>
        )}

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute top-1/2 right-4 -translate-y-1/2 text-sm font-semibold text-white hover:text-gray-300"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
