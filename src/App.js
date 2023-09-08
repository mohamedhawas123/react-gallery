import './App.css';
import GallerySlider from './screen/GallerySlider';
import ImageOne from './images/1.jpg'
import Imagetwo from './images/2.jpg'
import Imagethree from './images/3.jpg'
import Imagefour from './images/4.jpg'
import Imagefive from './images/5.jpg'
import 'font-awesome/css/font-awesome.min.css';


const images = [
  ImageOne,
  Imagetwo,
  Imagethree,
  Imagefour,
  Imagefive

]

function App() {
  return (
    <div className="App">
      <GallerySlider imageUrls={images} />
    </div>
  );
}

export default App;
