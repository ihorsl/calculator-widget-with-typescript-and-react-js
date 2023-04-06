/**
 * This component implements the Clear button.
 * The component dispatches button click event to the main React Reducer of the Calculator.
 * It uses the Styled component to render the HTML of the button.
 *
 * The author's homepage: https://ihorsl.com
 */

import { useContext } from 'react';
import contextDispatchAppStateAction from '../ContextDispatchAppStateAction';
import { ClearButtonClickAction } from '../AppStateReducer';
import StyledClearButton from '../styled-components/StyledClearButton';

export default function ClearButton()
{
    const dispatchAppStateAction = useContext(contextDispatchAppStateAction);

    function onClickHandler()
    {
        const action: ClearButtonClickAction = {
            type: 'clear-button-click'
        };
        dispatchAppStateAction(action);
    }

    return (
        <StyledClearButton onClick={onClickHandler}>C</StyledClearButton>
    );
}