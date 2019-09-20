import { environment } from './../../../environments/environment';
export class Constants {
    
    public static get HOME_API(): string {
        return environment.apiUrl;
    }
}