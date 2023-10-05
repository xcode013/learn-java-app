import {useState} from 'react';

interface Props {
  initialValue?: boolean;
}

export default function useToggle({
  initialValue = false,
}: Props): [boolean, () => void] {
  const [toggle, setToggle] = useState<boolean>(initialValue);

  const setterToggle = () => {
    setToggle((prev): boolean => !prev);
  };

  return [toggle, setterToggle];
}
