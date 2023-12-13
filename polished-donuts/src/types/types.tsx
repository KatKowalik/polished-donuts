export type Donut = {
    name: string;
    background: string;
    description: string;
};

export type User = {
    email: string;
};

export type UserContext = {
    activeUser: {
        email: string, 
        password: string
    };
    setActiveUser: React.Dispatch<React.SetStateAction<{email: string, password: string}>> | React.Dispatch<React.SetStateAction<null>>;
    dispatch: React.Dispatch<any>
}

export type LoginError = { message: string };
export type SubmitEvent = React.FormEvent<HTMLFormElement>;
export type InputEvent = React.ChangeEvent<HTMLElement>;
export type ClickEvent = React.MouseEvent<HTMLElement>;

export type SetUserInfo = React.Dispatch<React.SetStateAction<string>>;

export type SetBoolean = React.Dispatch<React.SetStateAction<boolean>>;