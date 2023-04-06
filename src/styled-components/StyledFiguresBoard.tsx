/**
 * This component was implemented with React Styled Components https://styled-components.com/
 * Its purpose is to display figures of a calculation.
 *
 * The author's homepage: https://ihorsl.com
 */

import StyledComponents from 'styled-components';
import Color from 'color';

const border = Color('#ffffff').darken(0.6);

const StyledFiguresBoard = StyledComponents.input`
    grid-column: 1 / 5;
    aspect-ratio: 7;
    border: 0.1rem solid ${border.hex()};
    outline: 0.05rem solid white;    
    margin: 0.1rem;
    border-radius: 0.25rem;
    padding: 0.25rem 1rem;
    font-size: 1.3rem;
    line-height: 1rem;
    &:focus {
        outline-color: ${border.hex()};
    }
`;

export default StyledFiguresBoard;