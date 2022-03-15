import Banner from '../../components/Banner/componentBanner';
import Shop from '../../components/PageShop/Shop/componentShop';
import Zalo from '../../components/Zalo/zalo';
import ScrollButton from '../../components/ScrollButton/componentScrollButton';
import Script from 'next/script';

export default function ShopPage() {
  return (
    <div className='shopPage'>
      <Banner />
      <Shop/>
      <Zalo />
      <ScrollButton />
      <Script  src='https://kit.fontawesome.com/618a331a9e.js'
               crossOrigin='anonymous' />
    </div>
  );
}
