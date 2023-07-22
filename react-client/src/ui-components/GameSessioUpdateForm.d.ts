/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GameSessio } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GameSessioUpdateFormInputValues = {};
export declare type GameSessioUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GameSessioUpdateFormOverridesProps = {
    GameSessioUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type GameSessioUpdateFormProps = React.PropsWithChildren<{
    overrides?: GameSessioUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    gameSessio?: GameSessio;
    onSubmit?: (fields: GameSessioUpdateFormInputValues) => GameSessioUpdateFormInputValues;
    onSuccess?: (fields: GameSessioUpdateFormInputValues) => void;
    onError?: (fields: GameSessioUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GameSessioUpdateFormInputValues) => GameSessioUpdateFormInputValues;
    onValidate?: GameSessioUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GameSessioUpdateForm(props: GameSessioUpdateFormProps): React.ReactElement;
