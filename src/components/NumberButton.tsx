/**
 * This component implements the number buttons (0-9).
 * The component dispatches button click events to the main React Reducer of the Calculator.
 *
 * The author's homepage: https://ihorsl.com
 */

import { useContext } from 'react';
import contextDispatchAppStateAction from '../ContextDispatchAppStateAction';
import { ButtonNumbers, NumberButtonClickAction } from '../AppStateReducer';
import StyledButton from '../styled-components/StyledButton';

export type NumberButtonProps = {
    buttonNumber: ButtonNumbers
}

export default function NumberButton({ buttonNumber }: NumberButtonProps)
{
    const dispatchAppStateAction = useContext(contextDispatchAppStateAction);

    function onClickHandler()
    {
        const action: NumberButtonClickAction = {
            type: 'number-button-click',
            buttonNumber
        };
        dispatchAppStateAction(action);
    }

    return (
        <StyledButton onClick={onClickHandler}>{buttonNumber}</StyledButton>
    );
}