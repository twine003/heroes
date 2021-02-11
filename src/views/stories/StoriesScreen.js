import { CCol, CContainer, CRow } from "@coreui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingStories } from "../../store/actions/storiesActions";
import Paginator from "../widgets/Paginator";
import Storie from "./Storie";

const StoriesScreen = ()=>{
  const dispatch = useDispatch();
  const state_stories = useSelector( state => state.stories);
  const stories = state_stories.stories || [];
  
  useEffect(() => {
    search()
  }, [dispatch]);

  const changePage = (page) => {
    if (page !== state_stories.page) {
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
    

    const {
      page,
      name,
      exactMatch,
      sortName,
      limit,
    } = Object.assign({
      page: 1,
      name: state_stories.filters.name.value,
      exactMatch: state_stories.filters.name.exactMatch,
      sortName: state_stories.sortName,
      limit: state_stories.limitPerPage,
    }, options);

    const offset = page ? (page - 1) * limit : 0;

    dispatch( startLoadingStories({ page, offset, name, exactMatch, sortName, limit }));

  }

  const renderStorie = () => {
    console.log('cargando historias', stories);
    if(stories)
      return (
        <>
          <CRow > {
              stories.map(s=>(
                    
                <Storie 
                  key ={s.id} 
                  {...s} />
                  
                  
              ))
            }
          </CRow>
        </>
      ) 
          
  }

  const paginator = {};
  return (
    <CContainer>
      
    
      <CRow>
         
          {
            renderStorie()
          }
          
      </CRow>
      <CRow>
        
          <CCol md="6">
            <Paginator ref={paginator => paginator = paginator}
                    page={state_stories?.page}
                    maxPage={state_stories?.maxPage}
                    onChangePage={changePage}
                    onNext={nextPages}
                    onPrevious={previousPages} />
          </CCol>
        </CRow>
    </CContainer>
  )
}
export default StoriesScreen;