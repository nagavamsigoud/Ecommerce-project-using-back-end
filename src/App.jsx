import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Products from './Products';
import SingleProducts from './singleProducts'; 
import Cart from './Cart';
import { GlobalStyle } from './globalStyle';
import { ThemeProvider } from 'styled-components';
import Header from './Components/Header';
import Footer from './Components/Footer';
import GlobalErrorPage from "./GlobalErrorPage";

function App() {
  
  
  const theme = {
    colors: {
      bg: '#F6F8FA',
      footer_bg: '#0a1435', // corrected color format
      btn: 'rgb(98 84 243)',
      border: 'rgba(98,84,243,0.5)',
      hr: '#ffffff',
      gradient: 'linear-gradient(0deg,rgb(132 144 255) 0%,rgb(98 189 252) 100%)',
      shadow: 'rgba(0,0,0,0.02) 0px 1px 3px 0px,rgba(27,31,35,0.15) 0px 0px 0px  1px',
      shadowSupport: 'rgba(0,0,0,0.16)0px 1px 4px',
    },
    media: {
      mobile: '768px',
      tab: '998px',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/singleProducts/:_id" element={<SingleProducts />} /> {/* corrected path */}
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<GlobalErrorPage/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
