/**
 * The AppStateReducer module implements the whole logic of the application.
 * It defines and maintains the appState object and all the actions related to the change of the appState object.
 *
 * The appState object consists of three properties:
 *      totalNumber - it contains the result of all previous math operations. It is equal to "false" after the reset.
 *      operation - this property contains the math operation symbol, the user has chosen before entering the current number.
 *                  It is equal to the "+" after the reset.
 *      currentNumberAsString - this property holds the number, the user edits. The number is in a string representation.
 *                              It is equal to empty string after the reset.
 *
 * The AppStateReducer handles the following actions:
 *     NumberButtonClickAction - on the digit button (0-9) click
 *     OperationButtonClickAction - on the math operation (+ - * /) button click
 *     DotButtonClickAction - on the "fractional part separator" button click
 *     NegativeButtonClickAction - on the "toggle negative" button click
 *     BackspaceButtonClickAction - on the "delete last digit" button click
 *     ClearEntryButtonClickAction - reset current number
 *     ClearButtonClickAction - reset everything to initial state
 *
 * The author's homepage: https://ihorsl.com
 */


export type Operations = '+' | '-' | '*' | '/' | '=';

export type ButtonNumbers = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type AppState = {
    totalNumber: number | false,
    operation: Operations,
    currentNumberAsString: string
}

export type NumberButtonClickAction = {
    type: 'number-button-click',
    buttonNumber: ButtonNumbers
}

export type OperationButtonClickAction = {
    type: 'operation-button-click',
    operation: Operations
}

export type DotButtonClickAction = {
    type: 'dot-button-click'
}

export type NegativeButtonClickAction = {
    type: 'negative-button-click'
}

export type BackspaceButtonClickAction = {
    type: 'backspace-button-click'
}

export type ClearButtonClickAction = {
    type: 'clear-button-click'
}

export type ClearEntryButtonClickAction = {
    type: 'clear-entry-button-click'
}

export type AppStateAction =
    NumberButtonClickAction
    | OperationButtonClickAction
    | DotButtonClickAction
    | NegativeButtonClickAction
    | BackspaceButtonClickAction
    | ClearButtonClickAction
    | ClearEntryButtonClickAction;

export function appStateReducer(appState: AppState, action: AppStateAction)
{

    switch (action.type) {
        case 'number-button-click':
            if (
                // Limit size of the user input
                appState.currentNumberAsString.length < 24
                // Don't produce zeros on the beginning of the number
                && !(appState.currentNumberAsString.length === 0 && action.buttonNumber === 0)
            ) {
                appState = cloneState(appState);
                appState.currentNumberAsString += action.buttonNumber;
            }
            break;

        case 'operation-button-click':
            appState = cloneState(appState);

            let currentNumber: number;
            if (appState.currentNumberAsString) {
                // Convert the current number to float
                currentNumber = parseFloat(appState.currentNumberAsString);
            } else {
                currentNumber = 0;
            }

            if (appState.totalNumber === false) {
                // First operation after initial state
                appState.totalNumber = currentNumber;

            } else {

                if (currentNumber) {

                    // Process the last operation
                    switch (appState.operation) {
                        case '=':
                            appState.totalNumber = currentNumber;
                            break;
                        case '+':
                            appState.totalNumber += currentNumber;
                            break;
                        case '-':
                            appState.totalNumber -= currentNumber;
                            break;
                        case '*':
                            appState.totalNumber *= currentNumber;
                            break;
                        case '/':
                            appState.totalNumber /= currentNumber;
                            break;
                    }
                }
            }

            // Reset the current number
            appState.currentNumberAsString = ''

            // Set the next operation
            appState.operation = action.operation;
            break;

        case 'dot-button-click':
            if (!appState.currentNumberAsString.includes('.')) {
                appState = cloneState(appState);
                if(!appState.currentNumberAsString.length) {
                    // if dot is the first character of the number, add zero before it,
                    appState.currentNumberAsString = '0';
                }
                appState.currentNumberAsString += '.';
            }
            break;

        case 'negative-button-click':
            if (appState.currentNumberAsString.length) {
                appState = cloneState(appState);
                if (appState.currentNumberAsString[0] === '-') {
                    appState.currentNumberAsString = appState.currentNumberAsString.substring(1);
                } else {
                    appState.currentNumberAsString = '-' + appState.currentNumberAsString;
                }
            }
            break;

        case 'backspace-button-click':
            if (appState.currentNumberAsString.length) {
                appState = cloneState(appState);
                appState.currentNumberAsString = appState.currentNumberAsString.slice(0, -1);
                if (appState.currentNumberAsString.length === 1 && appState.currentNumberAsString[0] === '-') {
                    // Remove lonely - of empty number
                    appState.currentNumberAsString = '';
                } else if (appState.currentNumberAsString === '0') {
                    // Remove zero as first character of empty number
                    appState.currentNumberAsString = '';
                }
            }
            break;

        case 'clear-button-click':
            appState = getAppStateInitial();
            break;

        case 'clear-entry-button-click':
            appState = cloneState(appState);
            appState.currentNumberAsString = '';
            break;

    }

    return appState;
}

export function getAppStateInitial(): AppState
{
    return {
        totalNumber: false,
        operation: '+',
        currentNumberAsString: ''
    };
}

function cloneState(appState: AppState): AppState
{
    // Emulation of structuredClone
    return JSON.parse(JSON.stringify(appState));
}