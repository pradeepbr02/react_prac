import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

import Essentialinfo from './Components/EssentialInfo';
import RenderImages from './Components/RenderImages';

const App = ()=>{
  const images = [
    {
      pic :"https://landonhotel.com/images/hotel/intro_room.jpg",
      alt : "Intro Gallery Room Sample Pictures"
    },
    {
      pic :"https://landonhotel.com/images/hotel/intro_pool.jpg",
      alt : "Intro Gallery pool Sample Pictures"
    },
    {
      pic :"https://landonhotel.com/images/hotel/intro_dining.jpg",
      alt : "Intro Gallery Dining Sample Pictures"
    },
    {
      pic : "https://landonhotel.com/images/hotel/intro_attractions.jpg",
      alt : "Intro Gallery Attractions Sample Pictures"
    }
    ,
    {
      pic : "https://landonhotel.com/images/hotel/intro_wedding.jpg" ,
      alt : "Intro Gallery Dining Sample Pictures"
    }

    
    

  ]
  return (
      <div className="App">
        
        <Header/>
        <main id="wrapper">
          <div className="scene" id="welcome">
            <article className="content">
              <RenderImages data={images}/>
              <h1>Welcome to the Landon&nbsp;Hotel</h1>
              <p>The original Landon perseveres after 50 years in the heart of West London. The West End neighborhood has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in the West End, browse our website and <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p>
            </article>
          </div>
          <Essentialinfo/>
         
        </main>

        <Footer/>
      </div>
   
  )
}
export default App;