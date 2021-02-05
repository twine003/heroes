import React, { lazy } from 'react'
import Heroes from '../../hooks/useCharapter'

import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

var heroes;


const Charapters = () => {
  return (
    <>
      <div className="row">
        <div className="row-md-4">
          Heroes().then((data)=> (
            heroes = data.data.results;
          ));
        </div>
      </div>
    </>
  )
}

export default Charapters
