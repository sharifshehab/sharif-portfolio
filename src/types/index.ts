export type { ILogin } from "./auth.type";

export interface IUser {
    _id?: string;
    name: string;
    email: string;
    password: string;
    role: string;
};

export interface IChildren {
    children: React.ReactNode;
}

export interface IProject {
    _id?: string;
    name: string;
    title: string;
    description: string;
    thumbnail?: string;
    technologies: string;
    features: string;
    frontEndGithubRepo: string;
    backEndGithubRepo: string;
    liveLink: string;
    // upcomingFeatures?: IUpcomingFeatures[]
    // projectChallenges?: IProjectChallenges[]
}

export interface IBlog {
    _id?: string;
    title: string;
    description: string;
    thumbnail?: string;
    tags: string
}
interface IEducation {
    title: string;
    institute: string;
    session: string;
}
export interface IDetails {
    _id?: string;
    about: string;
    education: IEducation[];
}