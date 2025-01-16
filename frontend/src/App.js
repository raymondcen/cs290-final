// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 

// import Product from './data/product.js'
import HomePage from './pages/HomePage.js'
import TopicsPage from './pages/TopicsPage.js'
import Gallery from './pages/Gallery.js';
// import Gallery from './pages/GalleryPage.js'
import OrderPage from './pages/OrderPage.js';


import TasksPage from './pages/TasksPage';

// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:
import AddTaskPageForm from './pages/AddTaskPageForm';
import EditTaskPageForm from './pages/EditTaskPageForm';

// If your schema requires SHORT data input, then use the TABLE design.


// Define the function that renders the content in Routes, using State.
function App() {

  const [task, setTask] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Raymond Cen <img src="./android-chrome-192x192.png" alt="Initials of Raymond Cen"/> </h1>
            <p>This website is used to demonstrate my web application development skills using Full Stack MERN and others such as JavaScript and CSS.</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    
                    
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/topicspage" element={<TopicsPage/>} />
                    <Route path="/tasks" element={<TasksPage setTask={setTask}/>} />
                    <Route path="/gallery" element={<Gallery/>} />
                    <Route path="/order" element={<OrderPage/>} />

                    {/* Or these if your schema requires SHORT data input: */}
                     <Route path="/create" element={<AddTaskPageForm />} />   
                     <Route path="/update" element={<EditTaskPageForm task={task} />} />
                </Routes>
              </section>
          </main>

          <footer>
            <p>2024 Raymond Cen</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;