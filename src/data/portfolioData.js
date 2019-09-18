import restaurantApp from "../images/restaurant-app.png";
import ecommerceUI from "../images/ecommerce-ui.png";
import movieFinder from "../images/movie-finder.png"; 
import portfolioImg from "../images/portfolio-img.png";

const portfolioData = [
    {
        img: restaurantApp,
        title: "Restaurant Ordering Application",
        url: "/portfolio/restaurant-app",
        desc: "A mobile application to order food to the table inside the restaurant. User picks a table number and its navigated to the menu page with drop-down categories and food options presenting prices and descriptions. Options on the menu can be added to the basket that holds quantities and details of chosen items. All the items from the basket can be later seen in the summary screen where user can change quantities of each product or remove them. The application was inspired by the Wetherspoon app.",
        tools: [
            "React Native", "Expo", "CSS", "Redux", "NPM",
        ],
        date: "04.2019 - Present",
        link: "https://github.com/oskarkuklinski/RestaurantApp",
    },
    {
        img: ecommerceUI,
        title: "E-commerce User Interface",
        url: "/portfolio/ecommerce-ui",
        desc: "User Interface for the e-commerce sneaker store with a cart function. User can browse and add items to the cart. All the added items can be later viewed by clicking on the cart item that displays an overlay with the order summary (quantities, price, total price).",
        tools: [
            "React.js", "CSS",
        ],
        date: "11.2018",
        link: "https://codepen.io/osioo/pen/ErYeYO",
        embed: `<iframe height="265" style="width: 100%;" scrolling="no" title="React Shopping Cart" src="//codepen.io/osioo/embed/ErYeYO/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/osioo/pen/ErYeYO/'>React Shopping Cart</a> by Oskar Kuklinski
  (<a href='https://codepen.io/osioo'>@osioo</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>`,
    },
    {
        img: movieFinder,
        title: "Movie Finder",
        url: "/portfolio/movie-finder",
        desc: "An application to find a movie by a keyword or a title with MovieDB API. User can enter any keyword in the text field and on the search button four movie options will be presented. All the options are clickable and will display an overlay with a movie poster, title, date of release and description.",
        tools: [
            "JavaScript", "JQuery", "HTML", "Pug.js", "CSS",
        ],
        date: "02.2018",
        link: "https://codepen.io/osioo/pen/pradmO?editors=1010",
        embed: `<iframe height="283" style="width: 100%;" scrolling="no" title="Movie finder" src="//codepen.io/osioo/embed/pradmO/?height=283&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/osioo/pen/pradmO/'>Movie finder</a> by Oskar Kuklinski
  (<a href='https://codepen.io/osioo'>@osioo</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>`,
    },
    {
        img: portfolioImg,
        title: "This Portfolio 🤷‍♂️",
        url: "/portfolio/this-portfolio",
        desc: "A portfolio application built with React.js and SCSS. This is a showcase of my most recent projects that I was working on together with my resume to show myself to the potential employers!",
        tools: [
            "React.js", "CSS", "SCSS",
        ],
        date: "09.2019",
        link: "will be here",
    }
]

export default portfolioData;