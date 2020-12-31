import { Resource } from "./Resource";

export interface Curriculum {
    id:             number;
    ownerId:        number;
    title:          string;
    slug:           string;
    description:    string;
    link:           string;
    resources:      Array<Resource>;
}