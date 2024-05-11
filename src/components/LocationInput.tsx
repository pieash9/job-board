"use client";

import { forwardRef } from "react";
import { Input } from "./ui/input";
import { useState } from "react";

interface LocationInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onLocationSelected: (location: string) => void;
}

export default forwardRef<HTMLInputElement, LocationInputProps>(
  function LocationInput({ onLocationSelected, ...props }, ref) {
    const [locationSearchInput, setLocationSearchInput] = useState("");
    return <Input {...props} ref={ref} />;
  },
);
