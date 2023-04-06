/**
 * This is a common Button component, implemented with React Styled Components https://styled-components.com/
 * It is used for number buttons and as a base for the other buttons.
 * The component uses npm Color package to automatically calculate color shades.
 *
 * The author's homepage: https://ihorsl.com
 */

import Color from 'color';
import StyledComponents from 'styled-components';

const gradientMiddle = Color('#ffffff');
const gradientTop = gradientMiddle.darken(0.3);

// Clicked button colors
const activeGradientMiddle = gradientMiddle.darken(0.2);
const activeGradientTop = activeGradientMiddle.darken(0.3);

const border = gradientMiddle.darken(0.6);

const StyledButton = StyledComponents.button`
    border: 0.1rem solid ${border.hex()};
    outline: 0.05rem solid transparent; 
    margin: 0.1rem;
    border-radius: 0.25rem;
    padding: 0.25rem 1rem;
    background-image: linear-gradient(to bottom, ${gradientTop.hex()} 0%, ${gradientMiddle.hex()} 50%, ${gradientTop.hex()} 100%);
    aspect-ratio: 1.5;
    font-size: 1rem;
    line-height: 1rem;
    &:active {
        background-image: linear-gradient(to bottom, ${activeGradientTop.hex()} 0%, ${activeGradientMiddle.hex()} 50%, ${activeGradientTop.hex()} 100%);
    }
    &:focus {
        outline-color: ${border.hex()};
    }
`;

export default StyledButton;