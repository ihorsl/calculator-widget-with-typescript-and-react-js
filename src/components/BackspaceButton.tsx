/**
 * This component implements the Backspace button, which deletes last digit of current number.
 * The component dispatches button click event to the main React Reducer of the application.
 * It uses the Styled component to render the HTML of the button.
 *
 * The author's homepage: https://ihorsl.com
 */

import { useContext } from 'react';
import contextDispatchAppStateAction from '../ContextDispatchAppStateAction';
import { BackspaceButtonClickAction } from '../AppStateReducer';
import StyledClearButton from '../styled-components/StyledClearButton';

export default function BackspaceButton()
{
    const dispatchAppStateAction = useContext(contextDispatchAppStateAction);

    function onClickHandler()
    {
        const action: BackspaceButtonClickAction = {
            type: 'backspace-button-click'
        };
        dispatchAppStateAction(action);
    }

    return (
        <StyledClearButton onClick={onClickHandler}>⌫</StyledClearButton>
    );
}