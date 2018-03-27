export declare class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any): any;
    static emailValidator(control: any): {
        'invalidEmailAddress': boolean;
    };
    static passwordValidator(control: any): any;
}
