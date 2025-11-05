"use client";

import * as React from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof RadixCheckbox.Root> {
  label?: string;
  className?: string;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof RadixCheckbox.Root>,
  CheckboxProps
>(({ label, className, ...props }, ref) => {
  return (
    <div className="flex items-center gap-2">
      <RadixCheckbox.Root
        ref={ref}
        className={cn(
          "w-5 h-5 shrink-0 rounded border border-gray-400 flex items-center justify-center",
          "data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500",
          "hover:border-orange-400 focus-visible:ring-2 focus-visible:ring-orange-300 outline-none transition-colors",
          className
        )}
        {...props}
      >
        <RadixCheckbox.Indicator>
          <CheckIcon className="w-4 h-4 text-white" />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>

      {label && (
        <label
          htmlFor={props.id}
          className="text-sm text-gray-700 select-none cursor-pointer"
        >
          {label}
        </label>
      )}
    </div>
  );
});

Checkbox.displayName = "Checkbox";

export default Checkbox;
