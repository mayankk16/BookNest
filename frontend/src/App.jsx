import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Register from './pages/Register';
import SignIn from "./pages/SignIn";
import MyHotels from './pages/MyHotels.jsx';
import AddHotel from "./pages/AddHotel.jsx"; // Assuming AddHotel component exists
import { useAppContext } from './contexts/AppContext.jsx'; // Assuming useAppContext is imported from the correct file path
import EditHotel from './pages/EditHotel.jsx';

const App = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <p>Home Page</p>
            </Layout>
          }
        />
        <Route
          path="/search"
          element={
            <Layout>
              <p>Search Page</p>
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Layout>
              <SignIn />
            </Layout>
          }
        />

        {isLoggedIn && (
          <>
            <Route
              path="/add-hotel"
              element={
                <Layout>
                  <AddHotel />
                </Layout>
              }
            />

            <Route
              path="/edit-hotel/:hotelId"
              element={
                <Layout>
                  <EditHotel />
                </Layout>
              }
            />

            <Route
              path="/my-hotels"
              element={
                <Layout>
                  <MyHotels />
                </Layout>
              }
            />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
