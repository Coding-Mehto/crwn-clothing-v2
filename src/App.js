import "./containers.style.scss";
import Home from "./route/Home.component";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Navigation from "./route/Navigation.component";
import SignIn from "./route/sign-in/sign-in.component";

function App() {
  const Shop = () => <h1>we are anmazing</h1>;
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/shop" element={<Shop />} />
          <Route index element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
      </Routes>
    </div>

    //     {/* <div className="crown-container">
    //       <div className="container">
    //         <h2>Jackets</h2>
    //         <p>Shop Now</p>
    //       </div>
    //     </div>
    //     <div className="crown-container">
    //       <div className="container">
    //         <h2>sneakers</h2>
    //         <p>Shop Now</p>
    //       </div>
    //     </div>
    //     <div className="crown-container">
    //       <div className="container">
    //         <h2>Mens</h2>
    //         <p>Shop Now</p>
    //       </div>
    //     </div>
    //     <div className="crown-container">
    //       <div className="container">
    //         <h2>Womens</h2>
    //         <p>Shop Now</p>
    //       </div>
    //     </div> */}

    // );
  );
}

export default App;
