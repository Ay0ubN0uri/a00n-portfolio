import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { FiLink } from "react-icons/fi";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const tabList = ["All", "Mobile", "Desktop", "Web"];
const tabListContent = [
  {
    porftoliItems: [
      {
        img: "/img/portfolio/linkedin-scraper.png",
        width: 1014,
        height: 1448,
        title: "Linkedin Scraper",
        subTitle: "A linkedin scraper for scraping working email addresses from LinkedIn profiles in record time!",
        alterText: "Linkedin Scraper",
        portfolioLink:
          "https://github.com/Ay0ubN0uri/Linkedin-Scraper",
      },
      {
        img: "/img/portfolio/udemy-enroller.png",
        width: 3839,
        height: 2046,
        title: "Udemy Enroller",
        subTitle: "Paid courses for free!",
        alterText: "Udemy Enroller",
        portfolioLink:
          "https://www.linkedin.com/posts/ayoub-nouri-73532a244_want-to-learn-new-skills-without-breaking-activity-7056666663114436609-SVHs",
      },
      {
        img: "/img/portfolio/bot-insta.png",
        width: 1833,
        height: 1469,
        title: "Instagram Bot",
        subTitle: "A Bot for instagram",
        alterText: "Instagram Bot",
        portfolioLink:
          "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
      },
      {
        img: "/img/portfolio/java-boutique.png",
        width: 2248,
        height: 1358,
        title: "Java Store",
        subTitle: "Java-based app for seamless online shopping",
        alterText: "Java Store",
        // portfolioLink:"#",
      },
      {
        img: "/img/portfolio/py-vsualizer.png",
        width: 3840,
        height: 2042,
        title: "Vehicule Routing Visualizer",
        subTitle: "Vehicule Routing Visualizer App",
        alterText: "Vehicule Routing Visualizer",
      },
      {
        img: "/img/portfolio/random-wallpaper.png",
        width: 3835,
        height: 2039,
        title: "Random Wallpaper",
        subTitle: "Transforming Your Device with Dynamic Wallpapers and Inspirational Quotes",
        alterText: "Random Wallpaper",
        portfolioLink:
          "https://github.com/Ay0ubN0uri/Random-Wallpaper",
      },
      {
        img: "/img/portfolio/whatsapp-bot.jpeg",
        width: 1280,
        height: 717,
        title: "Whatsapp Bot",
        subTitle: "A Bot for whatsapp",
        alterText: "Whatsapp Bot",
      },
      {
        img: "/img/portfolio/expense-tracker.png",
        width: 1485,
        height: 2640,
        title: "Expense Tracker",
        subTitle: "Simplify Your Finances with our Mobile Expense Tracker",
        alterText: "Expense Tracker",
      },
      {
        img: "/img/portfolio/pokedex.png",
        width: 1080,
        height: 1920,
        title: "Pokedex",
        subTitle: "App that displays a list of all Pokemons and their details, as well as a categorized view of the Pokemons",
        alterText: "Pokedex",
        portfolioLink:
          "https://github.com/Ay0ubN0uri/pokedex",
      },
      {
        img: "/img/portfolio/pharmacy-hunt.png",
        width: 1080,
        height: 1920,
        title: "Pharmacy Hunter",
        subTitle: "Discover Nearby Pharmacies with Ease",
        alterText: "Pharmacy Hunter",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/expense-tracker.png",
        width: 1485,
        height: 2640,
        title: "Expense Tracker",
        subTitle: "Simplify Your Finances with our Mobile Expense Tracker",
        alterText: "Expense Tracker",
      },
      {
        img: "/img/portfolio/pokedex.png",
        width: 1080,
        height: 1920,
        title: "Pokedex",
        subTitle: "App that displays a list of all Pokemons and their details, as well as a categorized view of the Pokemons",
        alterText: "Pokedex",
        portfolioLink:
          "https://github.com/Ay0ubN0uri/pokedex",
      },
      {
        img: "/img/portfolio/pharmacy-hunt.png",
        width: 1080,
        height: 1920,
        title: "Pharmacy Hunter",
        subTitle: "Discover Nearby Pharmacies with Ease",
        alterText: "Pharmacy Hunter",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/linkedin-scraper.png",
        width: 1014,
        height: 1448,
        title: "Linkedin Scraper",
        subTitle: "A linkedin scraper for scraping working email addresses from LinkedIn profiles in record time!",
        alterText: "Linkedin Scraper",
        portfolioLink:
          "https://github.com/Ay0ubN0uri/Linkedin-Scraper",
      },
      {
        img: "/img/portfolio/udemy-enroller.png",
        width: 3839,
        height: 2046,
        title: "Udemy Enroller",
        subTitle: "Paid courses for free!",
        alterText: "Udemy Enroller",
        portfolioLink:
          "https://www.linkedin.com/posts/ayoub-nouri-73532a244_want-to-learn-new-skills-without-breaking-activity-7056666663114436609-SVHs",
      },
      {
        img: "/img/portfolio/bot-insta.png",
        width: 1833,
        height: 1469,
        title: "Instagram Bot",
        subTitle: "A Bot for instagram",
        alterText: "Instagram Bot",
        portfolioLink:
          "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
      },
      {
        img: "/img/portfolio/java-boutique.png",
        width: 2248,
        height: 1358,
        title: "Java Store",
        subTitle: "Java-based app for seamless online shopping",
        alterText: "Java Store",
        // portfolioLink:"#",
      },
      {
        img: "/img/portfolio/py-vsualizer.png",
        width: 3840,
        height: 2042,
        title: "Vehicule Routing Visualizer",
        subTitle: "Vehicule Routing Visualizer App",
        alterText: "Vehicule Routing Visualizer",
      },
      {
        img: "/img/portfolio/random-wallpaper.png",
        width: 3835,
        height: 2039,
        title: "Random Wallpaper",
        subTitle: "Transforming Your Device with Dynamic Wallpapers and Inspirational Quotes",
        alterText: "Random Wallpaper",
        portfolioLink:
          "https://github.com/Ay0ubN0uri/Random-Wallpaper",
      },
      {
        img: "/img/portfolio/whatsapp-bot.jpeg",
        width: 1280,
        height: 717,
        title: "Whatsapp Bot",
        subTitle: "A Bot for whatsapp",
        alterText: "Whatsapp Bot",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/certify-chain.png",
        width: 3813,
        height: 1829,
        title: "Certify Chain",
        subTitle: "Blockchain-based platform for diploma verification",
        alterText: "Certify Chain",
        portfolioLink:
          "https://certify-chain.vercel.app",
      },
      {
        img: "/img/portfolio/m-portfolio-7.jpg",
        width: 400,
        height: 700,
        title: "Student management system",
        subTitle: "Streamline Student Management with Odoo-powered System",
        alterText: "Student management system",
        portfolioLink:
          "https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template",
      },
      {
        img: "/img/portfolio/m-portfolio-9.jpg",
        width: 400,
        height: 400,
        title: "Web Motion",
        subTitle: "Behance Shot",
        alterText: "Web Motion",
        portfolioLink: "https://www.facebook.com/ibthemes",
      },
    ],
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-filter-01">
      <Tabs>
        <TabList className="filter d-flex flex-wrap justify-content-start">
          {tabList.map((val, i) => (
            <Tab key={i}>{val}</Tab>
          ))}
        </TabList>
        {/* End tablist */}
        <Gallery>
          {tabListContent.map((tabContent, i) => (
            <TabPanel key={i}>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {tabContent.porftoliItems.map((val, i) => (
                    <div className="portfolio-box-01" key={i}>
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={val.width}
                          height={val.height}
                        >
                          {({ ref, open }) => (
                            <div className="gallery-link">
                              <img
                                src={val.img}
                                alt="Childhood"
                                role="button"
                                ref={ref}
                                onClick={open}
                              />
                            </div>
                          )}
                        </Item>

                        <a
                          className="portfolio-icon"
                          href={val.portfolioLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiLink />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>
          ))}
        </Gallery>
        {/* End tabpanel */}
      </Tabs>
    </div>
  );
};

export default Portfolio;
