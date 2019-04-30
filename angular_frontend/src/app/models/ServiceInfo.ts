import { Game } from './Game';

export interface ServiceInfo {
    host: string;
    port: number;
    metadata: any;
    secure: any;
    instanceId: string;
    serviceId: string;
    uri: string;
    instanceInfo: any;
    scheme: any;
}