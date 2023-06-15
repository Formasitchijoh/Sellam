import './App.css';
import ProductPage from './Pages/ProductPage';
import ImageSlider from './Component/imageSlider';
import images from './resource/images';
import SelectDropDown from './Component/SelectDropDown';
import Menu from './Component/Menu';
import BuyerPage from './Pages/BuyerPage';
import SecondTab from './Component/AllTabs/SecondTab';
import FirstTab from './Component/AllTabs/FirstTab';
function App() {
  return (
   <div class='App'>
    {/* <ProductPage/> */}
    {/* <BuyerPage /> */}
    <SecondTab/>
    {/* <FirstTab/> */}
   </div>
  );
}

export default App;
// export default function App() {
//   return (
//     <h1>

// <div class="my-component">
//   This is my custom component.
// </div>
// ```    </h1>
//   )
// }
