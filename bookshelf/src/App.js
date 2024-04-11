import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ItemList from './components/ItemList/ItemList';

function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element:
      <div className="App">
          <header>
            <NavBar />
          </header>
          <ItemListContainer />
      </div>
      ,
    },
    {
      path: "/category/:id",
      element: <ItemList />,
    },
    {
      path: "/item/:id",
      element: <ItemList />,
    }
  ]);

  return <RouterProvider router={routes}></RouterProvider>;


  // return (
  //   <div className="App">
  //     <header>
  //       <NavBar />
  //     </header>
  //     <ItemListContainer />
  //     teste
  //     <ItemDetailContainer id="1" />
  //   </div>
  // );
}

export default App;
