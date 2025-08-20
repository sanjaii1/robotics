import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import ProductAndService from "./pages/ProductAndService/ProductAndService.jsx";
import CaseStudy from "./pages/CaseStudy/CaseStudy.jsx";
import Research from "./pages/Research/Research.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import RootLayout from "./Layout/RootLayout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="product-service" element={<ProductAndService />} />
          <Route path="case-study" element={<CaseStudy />} />
          <Route path="research" element={<Research />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
