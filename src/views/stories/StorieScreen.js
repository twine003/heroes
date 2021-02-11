import { CCard, CCardBody, CCardHeader, CCol, CContainer, CImg, CRow } from "@coreui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { startLoadingSingleStorie } from "../../store/actions/storiesActions";

const StorieScreen = () =>{

    const dispatch = useDispatch();
    const { id } = useParams();
    const state_storie = useSelector( state => state.stories);
    const single_storie = state_storie.single_storie;
    console.log('single_storie', single_storie);

    const loadStorie = () => {
        dispatch(startLoadingSingleStorie({id: id}));
    }
    useEffect(() => {
        loadStorie()
      }, [id]);

    return(
        <>
            {
                (!!single_storie)? (
                    <CContainer>
                        <CRow >
                            <CCol>
                                <CCard>
                                    <CCardBody>
                                    <div className="h3 text-danger">
                                    { single_storie.title}
                                    </div>
                                    <div>
                                    { single_storie.description}
                                    </div>
                                    </CCardBody>
                                </CCard>
                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol>
                                <CCard>
                                    <CCardHeader>
                                        Comics
                                    </CCardHeader>
                                    <CCardBody>
                                        <CRow>
                                            {
                                                single_storie?.comics?.items?.map(comic=>(
                                                    <CCol sm="12" md="6" lg="6">
                                                        <div className="h3  text-info">{comic.title}</div> 
                                                        
                                                        
                                                        <CRow>
                                                            <CCol sm="12" md="6" lg="6">
                                                                <CImg
                                                                src={comic?.thumbnail?.path + '.jpg'}
                                                                fluid
                                                                thumbnail
                                                                className="mb-2"
                                                                style={{ maxWidth: "300px"}}
                                                                />
                                                            </CCol>
                                                            <CCol sm="12" md="6" lg="6">
                                                                <strong>Description:</strong>
                                                                {
                                                                    comic.description
                                                                }
                                                                <hr></hr>
                                                                <strong>Characters:</strong>
                                                                {
                                                                    comic.characters?.items.map(c=>(
                                                                        <span>{c.name}; </span> 
                                                                    ))
                                                                }
                                                                <hr></hr>
                                                                <strong>Creators:</strong>
                                                                {
                                                                    comic.creators?.items.map(c=>(
                                                                        <span>{c.name}; </span> 
                                                                    ))
                                                                }
                                                                
                                                                <div className="h5  text-dark">Page count: {comic.pageCount}</div> 
                                                                <div className="text-success">Print price: $ {comic.prices[0]?.price}</div> 
                                                                <div className="text-success">Digital price: $ {comic.prices[1]?.price}</div> 
                                                            </CCol>
                                                        </CRow>
                                                        
                                                        
                                                    </CCol>
                                                    
                                                ))
                                            }
                                        </CRow>
                                    </CCardBody>
                                </CCard>
                            </CCol>
                            
                        </CRow>
                    </CContainer>
                    
                ) : (
                    <CContainer>
                    <CRow >
                        <CCol>
                            <CCard>
                                <CCardBody>
                                    <div className="h1 text-danger">Historia no encontrada :(</div> 
                                </CCardBody>
                                
                            </CCard>
                        </CCol>
                    </CRow>
                </CContainer>
                )
            }
        </>
    );
}
export default StorieScreen;