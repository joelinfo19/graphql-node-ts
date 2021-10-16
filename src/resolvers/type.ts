import { IResolvers } from "graphql-tools";
import { database } from "../data/data.store";
//graphql-tools 4   ---> npm install graphql-tools@4.x
import _ from 'lodash';
const type:IResolvers = {
    Estudiante :{
        course:parent=>{
            const cursosLista:Array<any>=[];
            if (parent.courses ===undefined){
                return []
            }
            parent.courses.map((curso:string)=>{
                cursosLista.push(_.filter(database.cursos,['id',curso])[0])
            })
           

            return cursosLista;
        }
        
    },
    Curso :{
        student:parent=>{
            const listaEstudiante:Array<any>=[];
            const idCurso=parent.id;
            database.estudiantes.map((estudiante:any)=>{
                if(estudiante.courses.filter((id:any)=>id===idCurso)>0){
                   listaEstudiante.push(estudiante)     
                }
            })
            return listaEstudiante
         
        },
        path:parent=>`https://www.udemy.com${parent.path}`

        
    }
    
    
   
}
export default type;