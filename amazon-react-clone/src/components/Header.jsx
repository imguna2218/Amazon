import '../App.css';
import { HashLink } from 'react-router-hash-link';
const Header = () => {
  return <header>
    <div class="navbar">
      <div class="nav-logo border">
        <div class="logo">
        </div>

      </div>
      <div class="nav-address">
        <p class="address1">Deliver to</p>
        <div class="add-icon">
          <i class="fa-solid fa-location-dot"></i>
          <p class="address2">India</p>
        </div>
      </div>
      <div class="nav-search">
        <select class="search-select">
          <option>All</option>
          <option>Alexa skills</option>
          <option>Amazon Devices</option>
          <option>Amazon Fashion</option>
          <option>Baby</option>
          <option>Beauty</option>
          <option>Books</option>
          <option>Car and Motor </option>
          <option>Clothings</option>
          <option>Collectibles</option>
          <option>Electronics</option>
          <option>Furniture</option>
          <option>Garden & outdoors</option>
          <option>Gift cards</option>
          <option>Music</option>
          <option>Office products</option>
          <option>Video Games</option>
        </select>

        <input class="search-input" placeholder="Search Amazon" />
        <div class="search-icon">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

      <div class="nav-signin">
        <p><span>Hello, Sign in</span></p>
        <p class="nav2">Account & Lists</p>
      </div>

      <div class="nav-return">
        <p> Returns </p>
        <p class="nav2">& Orders</p>
      </div>

      <div class="nav-cart">
        <i class="fa-solid fa-cart-shopping"></i>
        Cart

      </div>

    </div>


    <div className="panel">
      <div className="panel-all">
        <i className="fa-solid fa-bars"></i>

        All
      </div>

      <div className="panelops">
        <p className="opts">Today's Deal</p>
        <p className="opts">Customer service</p>
        <p className="opts">Registry</p>
        <p className="opts">Sell</p>
      </div>

      <div className="panel-deals">
        <p className="opts"> Shop Deals in Electronics </p>
      </div>
    </div>
  </header>

}

export default Header;