import { ID, LinkedID, Time } from "./abstract"
import {Grade} from "./grades"
import { Target, Rating } from "./feedback"

export type Route = Time & ID & {
    type: RouteTypes,
    grades: {
        routesetter?: Grade,
        user: Grade[]
    },
    color: string,
    name: string, // Set by the Route Setters on creation
    routesetters: ID[],
    active: boolean, // Is the route still there and useable
    image: string, // image url
    location: ID,
    ratings?: Rating[], 
    comments?: Rating[],
    // Comments are stored in their own collection, so are not apart. Data will get inflated otherwise
    // They can be found via the ID of the route (similarly for location comments)
}

export enum RouteTypes {
    Boulder = "Boulder",
    Lead = "Lead",
    TopRope = "Top Rope",
    Trad = "Trad",
    Ice = "Ice"
}

export type Project = ID & Time & {
    user: LinkedID,
    route: LinkedID | Route,
    status: ProjectStatus,
    flash?: boolean,
    onsight?: boolean,
    redpoint?: boolean,
    notes: string[]
}

export enum ProjectStatus {
    Completed = "Completed",
    Projecting = "Projecting",
    Following = "Following"
}