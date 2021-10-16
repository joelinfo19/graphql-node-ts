//aca se ejecuta la query
import { IResolvers } from "graphql-tools";
import type from "./type"
import query from "./query";
import mutation from "./mutation"
//graphql-tools 4   ---> npm install graphql-tools@4.x
const resolversMap:IResolvers = {
    ...query,
    ...type,
    ...mutation    
}
export default resolversMap;