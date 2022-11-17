interface IProps {
  name: string;
  price: number;
}

export const ListItem = ({ name, price }: IProps) => {
  return (
    <li>
      {name} {price}
    </li>
  );
};
