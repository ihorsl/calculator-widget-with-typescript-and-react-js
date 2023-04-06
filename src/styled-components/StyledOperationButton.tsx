/**
 * This is a Button component, implemented with React Styled Components https://styled-components.com/
 * It is used for the Plus, Minus, Divide and Multiply buttons.
 * The component uses npm Color package to automatically calculate color shades.
 *
 * The author's homepage: https://ihorsl.com
 */

import Color from 'color';
import StyledComponents from 'styled-components';

import StyledButton from './StyledButton';

const gradientMiddle = Color('#8ed6fa');
const gradientTop = gradientMiddle.darken(0.3);

const activeGradientMiddle = gradientMiddle.darken(0.2);
const activeGradientTop = activeGradientMiddle.darken(0.3);

const border = gradientMiddle.darken(0.6);

const StyledOperationButton = StyledComponents(StyledButton)`
    border: 0.1rem solid ${border.hex()};
    background-image: linear-gradient(to bottom, ${gradientTop.hex()} 0%, ${gradientMiddle.hex()} 50%, ${gradientTop.hex()} 100%);
    font-size: 1.1rem;
    &:active {
        background-image: linear-gradient(to bottom, ${activeGradientTop.hex()} 0%, ${activeGradientMiddle.hex()} 50%, ${activeGradientTop.hex()} 100%);
    }
    &:focus {
        outline-color: ${border.hex()};
    }
`;

export default StyledOperationButton;