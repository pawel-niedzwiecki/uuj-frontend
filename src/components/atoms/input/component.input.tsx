import { useEffect, useRef, useState } from "react";
import { Label, Input, ButtonSearch } from "./component.input.style";
import { InputInterface, InputTypeEnum } from "./component.input.type";

export default function InputComponent({ id, name, defaultValue, type, placeholder, pattern, error, register, required, accept, multiple }: InputInterface) {
  const textInput = useRef<any>(null);

  return (
    <Label htmlFor={id} type={type} ref={textInput}>
      <Input id={id} name={name} defaultValue={defaultValue} placeholder={placeholder} accept={accept} type={type} error={!!error} {...(register(id, { pattern, required }) as any)} />
    </Label>
  );
}
