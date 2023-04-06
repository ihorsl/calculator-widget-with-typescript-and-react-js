/**
 * This component implements the Result button.
 * The component dispatches button click event to the main React Reducer of the Calculator.
 * It uses the Styled component to render the HTML of the button.
 *
 * The author's homepage: https://ihorsl.com
 */

import { useContext } from 'react';
import contextDispatchAppStateAction from '../ContextDispatchAppStateAction';
import { OperationButtonClickAction } from '../AppStateReducer';
import StyledResultButton from '../styled-components/StyledResultButton';

export default function ResultButton()
{
    const dispatchAppStateAction = useContext(contextDispatchAppStateAction);

    function onClickHandler()
    {
        const action: OperationButtonClickAction = {
            type: 'operation-button-click',
            operation: '='
        };
        dispatchAppStateAction(action);
    }

    return (
        <StyledResultButton onClick={onClickHandler}>=</StyledResultButton>
    );
}