import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {startLoadingCharapters} from '../../store/actions/charaptersActions'
import Caracter from './Caracter';
import Paginator from '../widgets/Paginator';

import {
  CCol,
  CRow
} from '@coreui/react'
import Filters from '../widgets/Filter';



const Charapters = () => {
  const dispatch = useDispatch();
  const state_charapters = useSelector( state => state.characters);
  const charapters = state_charapters.characters || [];
  const [filter, setfilter] = useState('')

  


  const changePage = (page) => {
    if (page !== state_charapters.page) {
      search({
        page,
      });
    }
  }

  

  const nextPages = (maxPage) => {
    console.log(maxPage);
    changePage(maxPage + 1);
  }

  const previousPages = (minPage) => {
    if (minPage > 1) {
      changePage(minPage - 1)
    }
  }

  

  const search = (options = {}) => {
    // this.setState({ loading: true });
    const {
      page,
      name,
      exactMatch,
      sortName,
      limit,
    } = Object.assign({
      page: 1,
      name: state_charapters.filters.name.value,
      exactMatch: state_charapters.filters.name.exactMatch,
      sortName: state_charapters.sortName,
      limit: state_charapters.limitPerPage,
    }, options);

    const offset = page ? (page - 1) * limit : 0;

    dispatch( startLoadingCharapters({ page, offset, name, exactMatch, sortName, limit }));

  }


  useEffect(() => {
    search()
  }, [dispatch]);

  const applyFilters = () => {
    console.log(filter);
    search({
      name: filter.state.name,
      exactMatch: filter.state.exactMatch,
    }) // .then(afterFilter);
    // afterFilter()
   
  }

  const resetFilters = () => {
    search({ name: '', exactMatch: false });
    // afterFilter();
  }

  const afterFilter = ({ page, maxPage }) => paginator.setPages(page, maxPage)

  // const sortByName = (event) => this.search({ page: this.state.page, sortName: event.target.value })

  // const changeLimitPerPage = (event) => this.search({ page: this.state.page, limit: event.target.value })

  const paginator = {};
  return (
    <>
      <CRow>
          <CCol md="6">
            <Paginator ref={paginator => paginator = paginator}
                    page={state_charapters?.page}
                    maxPage={state_charapters?.maxPage}
                    onChangePage={changePage}
                    onNext={nextPages}
                    onPrevious={previousPages} />
          </CCol>
          <CCol md="6">
            <Filters ref={filters => setfilter(filters)} onApply={applyFilters} onReset={resetFilters} />
          </CCol>
        </CRow>
    
      <CRow>
         
          {
            charapters &&
              charapters.map(charapter=>(
                <Caracter 
                  key ={charapter.id} 
                  {...charapter} />
              ))
          }
          
      </CRow>
      
    </>
  )
}

export default Charapters
