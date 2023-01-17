
import { decodeToken } from "react-jwt";

export const Decoder = (token) => {

    const decodedToken = decodeToken(token);

    return decodedToken;
    
}