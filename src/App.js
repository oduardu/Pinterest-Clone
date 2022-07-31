import { Person, Notifications, Chat, FavoriteRounded, Search, QuestionMark, Add } from '@mui/icons-material';
import { useEffect } from 'react';
import './App.css';
import Data from './Components/Data';
import MenuContainer from './Components/MenuContainer';
import Pin from './Components/Pin';

function App() {

  useEffect(()=> {
    const allIcon = document.querySelectorAll('.iconContainer');

    function setMenuActive() {
      allIcon.forEach(n => n.classList.remove('active'))
      this.classList.add('active')
    }

    allIcon.forEach(n => n.addEventListener('click', setMenuActive))
  }, [])

  return (

    <div className="App">
      <div className='menuContainer'>
        <img 
        src='https://firebasestorage.googleapis.com/v0/b/codewithvetriapi-c56e3.appspot.com/o/pintrest.png?alt=media&token=e2f8aa13-a83f-4ae7-bcf6-a6d5c1b64df4'
        alt='logo'
        className='logo'
        />
        <div className='subMenu'>
          <div>
            <MenuContainer icon={<Person />}/>
            <MenuContainer icon={<Notifications />}/>
            <MenuContainer icon={<Chat />}/>
          </div>

          <div>
            <MenuContainer icon={<FavoriteRounded />}/>
          </div>

          <div>
            <MenuContainer icon={<QuestionMark />}/>
            <MenuContainer icon={<Add />}/>
          </div>
        </div>

      </div>

      <main>
        <div className='searchBox'>
          <input type='text' placeholder='Search..'/>
          <div className='search'>
            <Search className='img' />
          </div>
        </div>
        <div className='mainContainer'>
        {Data &&
            Data.map((data) => (
              <Pin
                key={data.id}
                pinSize={data.size}
                imgSrc={data.imgSrc}
                name={data.name}
                link={data.link}
              />
            ))}
        </div> 
      </main>
    </div>
  );
}

export default App;
