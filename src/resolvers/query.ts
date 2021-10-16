//resolvers lo que devolvera la query ya sea una mutacion o lo que sea pero es la funcion que retornara una query
// Las querys se tienen que definir en los resolvers y en los schemas
// por ejemplo en mi schema tengo estudiantes:[Estudiante]
// lo cual me da el acceso para poder crear una query con  el nombre estudiantes en resolvers  y la query tambien esta definida 
// solo por nombre en el schema como type Query lo cual me da acceso a estudiantes:[Estudiante] y poder hacer 
// que esa query me retorne algo
import { IResolvers } from "graphql-tools";
import { database } from "../data/data.store";
//graphql-tools 4   ---> npm install graphql-tools@4.x
const query:IResolvers = {
    Query :{
        estudiantes(): any{
            return database.estudiantes;
        },
        estudiante(__:void,{id}): any{
            const resultado=database.estudiantes.filter(estudiante=>estudiante.id===id)[0];
            if (resultado === undefined){
                return {
                    id:'-1',
                    name:`No hay estudiante con el id ${id}`,
                    email:'',
                    website:'',
                    course:[]
                   
                    
                }
            }
            return resultado;
        },
        cursos():any{
            return database.cursos;
        },
        curso(__:void,{id}): any{
            const resultado=database.cursos.filter(curso=>curso.id===id)[0];
            if (resultado === undefined){
                return {
                    id:'',
                    title:`No se ha encontrado el curso con el ID ${id} `,
                    description:'',
                    clases:-1,
                    time:0.0,
                    logo:'',
                    level:'',
                    path:'',
                    teacher:'',
                    reviews:[]
                    
                }
            }
            return resultado;
        }
    }
    
    
   
}
export default query;