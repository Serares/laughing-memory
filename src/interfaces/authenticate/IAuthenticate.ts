export interface ILoginProps {
  onLogin(e: React.FormEvent<HTMLFormElement>, arg1: ILoginInformation): void;
}

export interface ISignupProps {
    onSignup(e: React.FormEvent<HTMLFormElement>, arg1: ISignupInformation): void;
}

export interface ILoginInformation {
    email: String;
    password: String;
}

export interface ISignupInformation {
    email: String;
    password: String;
    lastName: String;
    firstName: String;
    phoneNumber: Number;
}
