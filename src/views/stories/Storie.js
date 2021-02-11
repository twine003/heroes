import { CCard, CCardBody, CCardFooter, CCol } from "@coreui/react";
import { Link } from "react-router-dom";



const Storie = (storie) =>{
    const renderCommics = () =>{
            if (storie.comics.available)
                    return (
                        <p>
                            <strong>Comics:</strong>
                            {
                                storie.comics?.items.map((c,i)=>(
                                    <span key={i}>{c.name}; </span> 
                                ))
                            }
                        </p>
                    )
                    
    }

    const renderCreators = () =>{
        if (storie.creators.available)
                return (
                    <p>
                        <strong>Creators:</strong>
                        {
                            storie.creators?.items.map((c,i)=>(
                                <span   key={i}>{c.name}; </span> 
                            ))
                        }
                    </p>
                )
                
    }
    return (

        <CCol sm="12" md="4" lg="3">
            <CCard>
                <CCardBody>
                    <div className="h6">
                    { storie.title}
                    </div>
                    <p>
                        { storie.description}
                    </p>
                    {
                        renderCommics()
                    }
                    
                    
                    {
                        renderCreators()
                    }

                </CCardBody>
                <CCardFooter>
                    <Link to={ `/storie/${storie.id}` } >See more</Link>
                </CCardFooter>
            </CCard>
        </CCol>

      
    )
}

export default Storie