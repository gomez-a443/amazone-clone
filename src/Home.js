import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/HackCrimes/PC_hero/3000x1200_HACK-CRIMES_V1._CB572572958_.jpg"
          alt=""
        ></img>
        <div className="home__row">
          <Product
            id="123456"
            title="VERO MODA Women Pants,Vero Moda Women Viscose%85 Linen%15 Solid Green Top"
            price={29.99}
            image="https://m.media-amazon.com/images/I/41-wMZDVvoL._SX679_.jpg"
            rating={5}
          />
          <Product
            id="678903"
            title="VERO MODA Women's Regular Trouser"
            price={19.89}
            image="https://m.media-amazon.com/images/I/311zdJwowmL._MCnd_AC_.jpg"
            rating={4}
          />

          {/* Product */}
        </div>
        <div className="home__row">
          <Product
            id="678843"
            title="Rapsodia Women Rayon Dark Green Gold Printed Culottes"
            price={50.3}
            image="https://m.media-amazon.com/images/I/713kwa7MhOL._SY741_.jpg"
            rating={3}
          />
          <Product
            id="128970"
            title="V2A Chronograph Analogue and Digital Sports Watch for Men | Watch for Men | Wrist Watch for Men | Mens Watch | Watch"
            price={12.5}
            image="https://m.media-amazon.com/images/I/815PjZsaUHL._SX679_.jpg"
            rating={5}
          />
          <Product
            id="345689"
            title="VERO MODA Women's Straight Pants"
            price={18.99}
            image="https://m.media-amazon.com/images/I/91jbRBCH3rL._SX569_.jpg"
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
            id="456789"
            title="Xiaomi 108 cm (43 inches) X Series 4K Ultra HD Smart Android LED TV L43M7-A2IN (Black)"
            price={347.9}
            image="https://m.media-amazon.com/images/I/81UrmQEhSuL._SY450_.jpg"
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
