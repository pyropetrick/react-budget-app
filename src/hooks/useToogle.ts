import { useCallback, useState } from "react";

export const useToogle = (initValue: boolean = false): [boolean, any] => {
  const [value, setValue] = useState<boolean>(initValue);
  const toogle = useCallback(
    (): void => setValue((prevValue) => !prevValue),
    []
  );
  return [value, toogle];
};
