import { Container } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  typeButton?: "primary" | "secondary";
  title: string;
}

export function Button({
  title,
  typeButton = "primary",
  ...rest
}: ButtonProps) {
  return (
    <Container {...rest} typeButton={typeButton} type="button">
      {title}
    </Container>
  );
}
