import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';
import { IconBaseProps } from 'react-icons';

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ComponentType<IconBaseProps>;
    marginLeft?: number;
    iconSize?: number;
    size?: number;
    spin?: boolean;
  }

const GlassButton: React.FC<buttonProps> = ({ icon: Icon, marginLeft, iconSize, size, spin, ...rest }) => {

    return (
        <Container spin={spin || false} iconSize={ iconSize ? iconSize : 30} size={ size ? size : 55} {...rest}>
            {Icon && <Icon size={ iconSize ? iconSize : 30} style={{marginLeft: marginLeft ? marginLeft + 'px' : '0px'}} />}
        </Container>
    )
};

export default GlassButton;
