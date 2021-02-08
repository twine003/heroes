import { CCard, CCardBody, CCardHeader, CCol, CImg, CRow } from '@coreui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, } from 'react-router-dom';
import { startLoadingSingleCharapter } from '../../store/actions/charaptersActions';
import Storie from '../stories/Storie';

const CaracterScreen = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const state_characters = useSelector( state => state.characters);
    const single_character = state_characters.single_character || {};
    console.log(single_character);
    
    
    const loadCharacter = () => {
        dispatch(startLoadingSingleCharapter({id: id}));
    }
    useEffect(() => {
        loadCharacter()
      }, [id]);

    return(
        <>
         <div>
             {
                 single_character && (
                     <div>
                         <CRow>
                            <CCol sm="12" md="12">
                                <CCard className="bg-gradient-danger text-white">
                                    <CCardBody>
                                        <CRow>
                                            <CCol sm="6">
                                                <CImg
                                                    src={single_character?.thumbnail?.path + '.jpg'}
                                                    fluid
                                                    thumbnail
                                                    className="mb-2"
                                                    />
                                            </CCol>
                                            <CCol sm="6">
                                                <div className="h4 mb-0">
                                                    {single_character.name}
                                                </div>
                                                <div className="h5 mb-0">
                                                    {single_character.description}
                                                </div>
                                                <div>
                                                    <br></br>
                                                    <CCardHeader>
                                                    <div className="h5 mb-0">Historias</div>
                                                    </CCardHeader>
                                                    <ul>
                                                    {
                                                        single_character.stories?.items.map(historia=>(
                                                            <Storie key={historia.name} name={historia.name} url={historia.resourceURI} ></Storie> 
                                                        ))
                                                    }
                                                    </ul>
                                                    
                                                    
                                                    
                                                </div>
                                                    
                                                

                                            </CCol>
                                        </CRow>

                                    </CCardBody>
                                    
                                    
                                </CCard>
                            
                            </CCol>
                         </CRow>

                         {/* <CRow>
                            <CCol sm="12" >
                                <pre>
                                {JSON.stringify(single_character, null, 2) }
                                </pre>
                            </CCol>
                         </CRow> */}
                     </div>
                 )
             }
         </div>
        </>
        
    )
}
 
export default CaracterScreen;