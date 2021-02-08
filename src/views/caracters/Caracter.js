import React from 'react'
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CImg,

} from '@coreui/react'
import { Link } from 'react-router-dom'



const Caracter = (caracter) => {
    return (
        <>
            <CCol sm="6" lg="4">

                <CCard>
                    <CCardBody>
                        <CRow>
                            <CCol sm="6">
                                <CImg
                                    src={caracter.thumbnail.path + '.jpg'}
                                    fluid
                                    thumbnail
                                    className="mb-2"
                                    />
                            </CCol>
                            <CCol sm="6">
                                <p><b>{caracter.name}</b></p>
                                <Link to={ `/caracter/${caracter.id}` } >Ver mas</Link>
                            </CCol>
                        </CRow>
                    </CCardBody>
                </CCard>
                
            </CCol>
            
            
        </>
    )
}

export default Caracter
