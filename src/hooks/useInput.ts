import { ChangeEvent, useState } from "react";

export const useInput = <T>(
  initValue: T,
): { value: T; onChange: (e: ChangeEvent<HTMLInputElement>) => void } => {
  const [value, setValue] = useState<T>(initValue);

  const onChange = (event: any) => setValue(event.target.value);

  return { value, onChange };
};
