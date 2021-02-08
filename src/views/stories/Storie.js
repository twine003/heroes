import { CLink } from "@coreui/react";
import { useEffect, useState } from "react";
import { getStorieById} from '../../store/services/API';

const Storie = ({name, url}) =>{
    console.log({name, url});
    const id = url.split('/').slice(-1)[0];
    // const [storie, setstorie] = useState({});
    // useEffect(() => {
    //     loadStorie();
    // }, [])

    // const loadStorie = ()=> {
    //    let id = props.url.split('/').slice(-1)[0];
    //     getStorieById(id).then(resp=>setstorie(resp.storie));
    // }
    return (
        <li>
            <CLink to={ `/storie/${id}` } className="h4 text-warning text-decoration-none">{name}</CLink>
        </li>
        
        

        // <div>
        //     {
        //         (storie && storie.description) && (
        //             <div>
                        
        //                     <CLink to={ `/storie/${storie.id}` } className="h4 text-warning text-decoration-none">{storie.title}</CLink>
                        
        //                 <div>{storie.description}</div>
        //             </div>
        //         )
        //     } 

                
           

        // </div>
    )
}

export default Storie