import react, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> //TODOS ELEMENTOS DE BUTTON EX: TYPE, VALUE E <ETC className="6"></ETC>

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {

    return (
        <Container {...rest}>
            {children}
        </Container>
    )
}

export default Button;