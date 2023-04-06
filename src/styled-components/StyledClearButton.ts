/**
 * This is a Button component, implemented with React Styled Components https://styled-components.com/
 * It is used for Clear, Clear Entry, and Backspace buttons.
 * The component uses npm Color package to automatically calculate color shades.
 *
 * The author's homepage: https://ihorsl.com
 */

import Color from 'color';
import StyledComponents from 'styled-components';

import StyledButton from './StyledButton';

const gradientMiddle = Color('#e8d4d1');
const gradientTop = gradientMiddle.darken(0.25);

const activeGradientMiddle = gradientMiddle.darken(0.2);
const activeGradientTop = activeGradientMiddle.darken(0.25);

const border = gradientMiddle.darken(0.6);

const StyledClearButton = StyledComponents(StyledButton)`
    border: 0.1rem solid ${border.hex()};
    background-image: linear-gradient(to bottom, ${gradientTop.hex()} 0%, ${gradientMiddle.hex()} 50%, ${gradientTop.hex()} 100%);
    font-size: 0.9rem;
    &:active {
        background-image: linear-gradient(to bottom, ${activeGradientTop.hex()} 0%, ${activeGradientMiddle.hex()} 50%, ${activeGradientTop.hex()} 100%);
    }
    &:focus {
        outline-color: ${border.hex()};
    }
`;

export default StyledClearButton;