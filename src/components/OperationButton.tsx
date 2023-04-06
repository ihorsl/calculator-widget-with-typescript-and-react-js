/**
 * This component implements the Plus, Minus, Divide and Multiply buttons.
 * The component dispatches button click events to the main React Reducer of the Calculator.
 * It uses the Styled component to render the HTML of the button.
 *
 * The author's homepage: https://ihorsl.com
 */

import { useContext } from 'react';
import contextDispatchAppStateAction from '../ContextDispatchAppStateAction';
import { OperationButtonClickAction, Operations } from '../AppStateReducer';
import StyledOperationButton from '../styled-components/StyledOperationButton';

export type OperationButtonProps = {
    operation: Operations
}

export default function OperationButton({ operation }: OperationButtonProps)
{
    const dispatchAppStateAction = useContext(contextDispatchAppStateAction);

    function onClickHandler()
    {
        const action: OperationButtonClickAction = {
            type: 'operation-button-click',
            operation
        };
        dispatchAppStateAction(action);
    }

    let operationAsString;
    switch (operation) {
        case '/':
            operationAsString = '÷';
            break
        case '*':
            operationAsString = '×';
            break

        default:
            operationAsString = operation;
    }

    return (
        <StyledOperationButton onClick={onClickHandler}>{operationAsString}</StyledOperationButton>
    );
}