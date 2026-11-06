
import { useState } from "react";
import {
  ShoppingBag,
  ArrowRight,
  Plus,
  Menu,
  X,
  Mail,
  MapPin,
  Coffee,
} from "lucide-react";

const products = [
  {
    name: "Signature Blend",
    price: "$18.00",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=700",
  },
  {
    name: "House Roast",
    price: "$16.00",
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=700",
  },
  {
    name: "Dripper Set",
    price: "$42.00",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=700",
  },
  {
    name: "Ceramic Mug",
    price: "$22.00",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700",
  },
];

const articles = [
  {
    category: "BREWING GUIDE",
    title: "The art of a slower morning",
    description:
      "Discover simple brewing rituals that make your everyday coffee feel special.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700",
  },
  {
    category: "OUR PHILOSOPHY",
    title: "Good coffee begins at the source",
    description:
      "A little about the ingredients, people and care behind every cup.",
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=700",
  },
  {
    category: "SLOW LIVING",
    title: "Make room for little moments",
    description:
      "Find inspiration in the quiet details of your everyday routine.",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=700",
  },
];

function App() {
  const [cart, setCart] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <main>
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          quiet rituals.
        </a>

        <div className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
          <a href="#home" onClick={closeMenu}>HOME</a>
          <a href="#shop" onClick={closeMenu}>SHOP</a>
          <a href="#about" onClick={closeMenu}>ABOUT</a>
          <a href="#journal" onClick={closeMenu}>JOURNAL</a>
          <a href="#contact" onClick={closeMenu}>CONTACT</a>
        </div>

        <button
          className="cart-button"
          aria-label={`Shopping cart, ${cart} items`}
          type="button"
        >
          <ShoppingBag size={19} />
          <span>{cart}</span>
        </button>

        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">SLOW DOWN. SIP WELL.</p>

          <h1>
            Quiet moments.
            <br />
            Crafted with care.
          </h1>

          <p className="hero-description">
            Thoughtful blends and mindful rituals inspired by
            nature, made for your everyday pause.
          </p>

          <a href="#shop" className="outline-button">
            EXPLORE COLLECTION <ArrowRight size={17} />
          </a>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1400"
            alt="Coffee cup and coffee beans"
          />
        </div>
      </section>

      {/* EDITORIAL 01 */}
      <section className="editorial">
        <div className="editorial-image">
          <img
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1000"
            alt="Freshly brewed coffee"
          />
        </div>

        <div className="editorial-content">
          <span className="number">01</span>
          <h2>Mindful<br />brewing rituals.</h2>

          <p>
            Simple steps. Pure ingredients. Moments that ground
            your day in clarity and calm.
          </p>

          <a href="#shop" className="text-link">
            DISCOVER MORE <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* EDITORIAL 02 */}
      <section className="editorial reverse">
        <div className="editorial-content">
          <span className="number">02</span>
          <h2>Honest ingredients,<br />exceptional flavor.</h2>

          <p>
            Sourced from trusted origins and roasted with
            intention to bring out the best in every bean.
          </p>

          <a href="#shop" className="text-link">
            DISCOVER MORE <ArrowRight size={17} />
          </a>
        </div>

        <div className="editorial-image">
          <img
            src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=1000"
            alt="Coffee beans"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1100"
            alt="Warm and peaceful coffee shop"
          />
        </div>

        <div className="about-copy">
          <p className="eyebrow">A LITTLE ABOUT US</p>

          <h2>
            More than coffee.
            <br />
            A moment to yourself.
          </h2>

          <p>
            At Quiet Rituals, we believe the smallest moments
            can make the biggest difference. A freshly brewed
            cup, a peaceful morning and a little time to slow down.
          </p>

          <p>
            Every blend and everyday essential is thoughtfully
            chosen to bring warmth, simplicity and joy to your routine.
          </p>

          <a href="#contact" className="outline-button">
            OUR STORY <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* EDITORIAL 03 */}
      <section className="editorial">
        <div className="editorial-image">
          <img
            src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=1000"
            alt="Pour over coffee brewing"
          />
        </div>

        <div className="editorial-content">
          <span className="number">03</span>
          <h2>Crafted with intention.<br />Enjoyed with presence.</h2>

          <p>
            Every detail reflects our passion for quality,
            design, and timeless simplicity.
          </p>

          <a href="#journal" className="text-link">
            READ OUR JOURNAL <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="shop-section" id="shop">
        <div className="section-heading">
          <p className="eyebrow">THE COLLECTION</p>
          <h2>Everyday essentials.</h2>
          <p>Thoughtfully selected for your daily ritual.</p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />

                <button
                  className="add-button"
                  type="button"
                  onClick={() =>
                    setCart((previous) => previous + 1)
                  }
                  aria-label={`Add ${product.name} to cart`}
                >
                  <Plus size={19} />
                </button>
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* JOURNAL */}
      <section className="journal-section" id="journal">
        <div className="section-heading">
          <p className="eyebrow">NOTES FROM OUR WORLD</p>
          <h2>The quiet journal.</h2>
          <p>Stories, inspiration and little things worth sharing.</p>
        </div>

        <div className="journal-grid">
          {articles.map((article) => (
            <article className="journal-card" key={article.title}>
              <div className="journal-image">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                />
              </div>

              <div className="journal-copy">
                <p className="eyebrow">{article.category}</p>
                <h3>{article.title}</h3>
                <p>{article.description}</p>

                <a href="#contact" className="text-link">
                  READ MORE <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="contact-content">
          <p className="eyebrow">LET'S STAY CONNECTED</p>

          <h2>
            A little calm,
            <br />
            in your inbox.
          </h2>

          <p>
            Sign up for thoughtful notes, brewing inspiration
            and updates from the Quiet Rituals world.
          </p>

          <form
            className="newsletter-form"
            onSubmit={handleSubscribe}
          >
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setSubscribed(false);
              }}
              required
            />

            <button type="submit" aria-label="Subscribe">
              <ArrowRight size={20} />
            </button>
          </form>

          {subscribed && (
            <p className="success-message" role="status">
              Thank you! Your subscription has been received.
            </p>
          )}
        </div>

        <div className="contact-details">
          <div className="contact-detail">
            <Mail size={20} />
            <div>
              <h3>WRITE TO US</h3>
              <p>hello@quietrituals.com</p>
            </div>
          </div>

          <div className="contact-detail">
            <MapPin size={20} />
            <div>
              <h3>OUR PHILOSOPHY</h3>
              <p>Thoughtful living, one cup at a time.</p>
            </div>
          </div>

          <div className="contact-detail">
            <Coffee size={20} />
            <div>
              <h3>OUR HOURS</h3>
              <p>Every day, a moment for yourself.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="footer-logo">
          quiet rituals.
        </a>

        <p>Find beauty in the everyday.</p>

        <div className="footer-links">
          <a href="#home">HOME</a>
          <a href="#shop">SHOP</a>
          <a href="#about">ABOUT</a>
          <a href="#journal">JOURNAL</a>
          <a href="#contact">CONTACT</a>
        </div>

        <a className="social-link" href="#contact">
          INSTAGRAM ↗
        </a>

        <div className="footer-bottom">
          <span>© 2026 QUIET RITUALS. ALL RIGHTS RESERVED.</span>
          <span>MADE WITH CARE.</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
