import { User } from './user.model';

export interface Review {
    description: string;
    rating: number; 
    // tourName: string;
    user: User;
}

export interface BikeTransport {
    type: 'bike';
    bikeType: 'mountain' | 'road';
}

export interface HikeTransport {
    type: 'hike';
    difficultyLevel: number;
}

export interface CarTransport {
    type: 'car';
    roadType: 'asphalt' | 'dirt';
}

export type TransportType = BikeTransport | HikeTransport | CarTransport;

export interface Tour {
    id: number; 
    name: string; 
    distance: number; 
    description: string; 
    transport: TransportType; 
    reviews: Review[];
}

export function getTourTransportDetails(tour: Tour): string {
    const transport = tour.transport;

    switch (transport.type) {
      // automatically knows that since this tour is bike it has bikeType  
        case 'bike':
            return `This is a ${transport.bikeType} bike tour.`;
        case 'hike':
            return `This hike has a difficulty of ${transport.difficultyLevel}.`;
        case 'car':
            return `This drive is on ${transport.roadType} roads.`;
        default:
            /**
             * This right here ensures maintainability, it ensures all types from the UML are handled.
             * If a new transport is added to the UML, this will throw an error.
             */
            const _exhaustiveCheck: never = transport;
            return _exhaustiveCheck;
    }
}