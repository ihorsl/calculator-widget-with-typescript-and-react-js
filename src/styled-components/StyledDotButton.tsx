/**
 * This is a Button component, implemented with React Styled Components https://styled-components.com/
 * It is used for the Dot button.
 *
 * The author's homepage: https://ihorsl.com
 */

import StyledComponents from 'styled-components';
import StyledButton from './StyledButton';

const StyledDotButton = StyledComponents(StyledButton)`
    font-size: 1.3rem;
`;

export default StyledDotButton;