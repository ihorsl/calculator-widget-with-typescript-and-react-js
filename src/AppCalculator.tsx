/**
 * This app is the math calculator widget.
 * The author created it with the purpose of his skills demonstration.
 * It was built with the React.js, React Styled Components, and the TypeScript.
 *
 * React Styled Components bring component-orientated principles into CSS styling.
 * Styles are joined with their components.
 * It makes obvious the purpose of each CSS rule and resolves the problem of the "unused styles ballast"
 * in common style files. After a style editing the chance of regressions in another components is much lower.
 *
 * The use of TypeScripts reduces the number of bugs, ensures splendid autocompletion.
 * Adds better Classes functionality and makes the code clearer and more self-explaining.
 *
 * The author's homepage: https://ihorsl.com
 */

import React, { useReducer } from 'react';

import { appStateReducer, getAppStateInitial } from './AppStateReducer';
import contextDispatchAppStateAction from './ContextDispatchAppStateAction';
import StyledMainGrid from './styled-components/StyledMainGrid';
import StyledFiguresBoard from './styled-components/StyledFiguresBoard';
import NumberButton from './components/NumberButton';
import OperationButton from './components/OperationButton';
import NegativeButton from './components/NegativeButton';
import BackspaceButton from './components/BackspaceButton';
import ClearButton from './components/ClearButton';
import ClearEntryButton from './components/ClearEntryButton';
import DotButton from './components/DotButton';
import ResultButton from './components/ResultButton';

function AppCalculator()
{
    const [ appState, dispatchAppStateAction ] = useReducer(appStateReducer, getAppStateInitial());

    // Prepare current figures to show in GUI
    let figuresBoardValue: string;
    if (appState.currentNumberAsString.length === 0) {
        if (appState.totalNumber !== false) {
            figuresBoardValue = appState.totalNumber.toString();
        } else {
            figuresBoardValue = '0';
        }
    } else {
        figuresBoardValue = appState.currentNumberAsString;
    }

    // Render the GUI
    return (
        <div className="calculator-app-inner-div">
            <contextDispatchAppStateAction.Provider value={dispatchAppStateAction}>
                <StyledMainGrid>
                    <StyledFiguresBoard value={figuresBoardValue} readOnly/>

                    <NumberButton buttonNumber={1}/>
                    <NumberButton buttonNumber={2}/>
                    <NumberButton buttonNumber={3}/>
                    <OperationButton operation="/"/>

                    <NumberButton buttonNumber={4}/>
                    <NumberButton buttonNumber={5}/>
                    <NumberButton buttonNumber={6}/>
                    <OperationButton operation="*"/>

                    <NumberButton buttonNumber={7}/>
                    <NumberButton buttonNumber={8}/>
                    <NumberButton buttonNumber={9}/>
                    <OperationButton operation="-"/>

                    <NegativeButton/>
                    <NumberButton buttonNumber={0}/>
                    <DotButton/>
                    <OperationButton operation="+"/>

                    <ClearButton/>
                    <ClearEntryButton/>
                    <BackspaceButton/>
                    <ResultButton/>

                </StyledMainGrid>
            </contextDispatchAppStateAction.Provider>
        </div>
    );
}

export default AppCalculator;

