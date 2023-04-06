/**
 * This component was implemented with React Styled Components https://styled-components.com/
 * The component is a grid wrapper for buttons and figures board.
 *
 * The author's homepage: https://ihorsl.com
 */

import StyledComponents from 'styled-components';

const StyledMainGrid = StyledComponents.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export default StyledMainGrid;