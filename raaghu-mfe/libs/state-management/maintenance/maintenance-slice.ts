import { maintenance, WebLogLines } from "./maintenance-models";
export interface maintenanceState {
    maintenances: maintenance;
    error: string | null;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const maintenanceInitialState: maintenanceState = {
    maintenances: { items: [] },
    error: null,
    status: 'pending',
};

export interface Websitelogstate {
    Websitelogs: WebLogLines;
    error: string | null;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const WebsitelogInitialState: Websitelogstate = {
    Websitelogs: { latestWebLogLines: [] },
    error: null ,
    status: 'pending',
};
