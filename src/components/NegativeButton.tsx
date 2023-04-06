/**
 * This component implements the Negative/Positive button.
 * The component dispatches button click event to the main React Reducer of the Calculator.
 * It uses the Styled component to render the HTML of the button.
 *
 * The author's homepage: https://ihorsl.com
 */

import { useContext } from 'react';
import contextDispatchAppStateAction from '../ContextDispatchAppStateAction';
import { NegativeButtonClickAction } from '../AppStateReducer';
import StyledButton from '../styled-components/StyledButton';

export default function NegativeButton()
{
    const dispatchAppStateAction = useContext(contextDispatchAppStateAction);

    function onClickHandler()
    {
        const action: NegativeButtonClickAction = {
            type: 'negative-button-click'
        };
        dispatchAppStateAction(action);
    }

    return (
        <StyledButton onClick={onClickHandler}>+/-</StyledButton>
    );
}