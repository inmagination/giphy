import React, {Suspense} from 'react'
import 'components/TrendingSearches/styles.scss'
import Spinner from 'components/Spinner';
import useNearScreen from 'hooks/useNearScreen'

// cargar el componente y su js solo cuando lo necesitemos
const TrendingSearches = React.lazy(
  () => import('./TrendingSearches')
)

export default function LazyTrending () {    
  const {isNearScreen, fromRef} = useNearScreen({
    distance: '200px'
  })   
  
  return <div ref={fromRef}>
    <Suspense fallback={<Spinner />}>
      {isNearScreen ? <TrendingSearches /> : <Spinner />}
    </Suspense>
  </div>   
}