import Header from "./component/navbar";
import Image from "next/image";
import HeroSection from "./component/Hero";
import ProductGrid from "./component/picure";
import Newstey from "./component/Newstey";
import Product from "./component/Product";
import FeaturedProducts from "./component/proto";
import CartPage from "./component/price";

import Contact from "./component/Contact";
import Contow from "./component/Contow";
import FAQSection from "./component/Faqfaq";
import StyledBox from "./component/next";
import Boxes from "./component/Scir";
import Populer from "./component/Populer";




export default function Home() {
  return (
<div>
 <HeroSection/>
 <ProductGrid/>
 < Newstey/>
 < Product/>
 <FeaturedProducts />
 <CartPage/>
 <Contact/>
 <Contow/>
 <FAQSection/>
 < StyledBox/>
 <Boxes/>
 < Populer/>
 
</div>
  );
};
