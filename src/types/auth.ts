export interface User {
   id:number;
   name:string;
   email:string;
}

interface AuthState {
   user: User | null;
}