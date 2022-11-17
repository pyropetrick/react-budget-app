import { useState } from "react";

export const useInput = <T>(initValue: T): { value: T; onChange: any } => {
  const [value, setValue] = useState<T>(initValue);

  const onChange = (event: any): void => setValue(event.target.value);

  return { value, onChange };
};
