import { IInputModel } from '../inputs/IInput';

/**
 * Final form model
 */
export type TForm = {
    [name: string]: IInputModel;
}