
import Card from '../Components/Card';

import { useDentiStates } from '../Components/utils/global.context';

import '../index.css';




const Home = () => {

  // llamo al context y reducer
  const {dentiState} = useDentiStates();

  return (
    <main className={dentiState.theme} >
    {/*//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context*/}

      <h1>Home con reducer</h1>
      
      <div className='wrapper'>

        {/* Aqui deberias renderizar las cards */}
        {dentiState.dentiList.map(item =>
          <Card data={item} key={item.id}/>
        )}

      </div>
    
    </main>
  )
}

export default Home