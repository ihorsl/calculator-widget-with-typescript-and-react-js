/**
 * This component implements the Dot button.
 * The component dispatches button click event to the main React Reducer of the Calculator.
 * It uses the Styled component to render the HTML of the button.
 *
 * The author's homepage: https://ihorsl.com
 */

import { useContext } from 'react';
import contextDispatchAppStateAction from '../ContextDispatchAppStateAction';
import { DotButtonClickAction } from '../AppStateReducer';
import StyledDotButton from '../styled-components/StyledDotButton';

export default function DotButton()
{
    const dispatchAppStateAction = useContext(contextDispatchAppStateAction);

    function onClickHandler()
    {
        const action: DotButtonClickAction = {
            type: 'dot-button-click'
        };
        dispatchAppStateAction(action);
    }

    return (
        <StyledDotButton onClick={onClickHandler}>.</StyledDotButton>
    );
}