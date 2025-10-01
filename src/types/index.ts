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