import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Star, ArrowLeft } from "lucide-react";

import cappuccinoImage from "../assets/Cappuccino.jpeg";
import cinnamonLatteImage from "../assets/Cinnamon Spice Latte.jpeg";
import mochaImage from "../assets/Mocha with Whipped Cream.jpeg";
import breakfastSpreadImage from "../assets/Coffee & Pastry Breakfast Spread.jpeg";
import hotCappuccinoImage from "../assets/Hot Cappuccino.jpeg";
import caramelMacchiatoImage from "../assets/Frozen Bean Caramel Macchiato.jpeg";
import blueberryMuffinImage from "../assets/Blueberry Muffins.jpeg";
import donutImage from "../assets/Chocolate glazed donuts.jpeg";
import bakeryPastriesImage from "../assets/Fresh Bakery Pastries.jpeg";
import sourdoughImage from "../assets/Fresh baked sourdough.jpeg";

const emptyMenuData = { Coffee: [], Bakery: [], Desserts: [] };

const normalizeMenuData = (items) => {
  const grouped = { Coffee: [], Bakery: [], Desserts: [] };

  items.forEach((item) => {
    const category = (item.category || '').toLowerCase();
    const normalizedItem = {
      ...item,
      name: item.name,
      desc: item.desc || item.description || 'Freshly prepared with care.',
      price: item.price || '$0.00',
      image: item.image || cappuccinoImage,
      rating: item.rating || '4.8',
      tag: item.tag || 'Fresh Pick',
    };

    if (category === 'coffee' || category === 'cold') {
      grouped.Coffee.push(normalizedItem);
    } else if (category === 'bakery') {
      grouped.Bakery.push(normalizedItem);
    } else {
      grouped.Desserts.push(normalizedItem);
    }
  });

  return grouped;
};

const Menu = () => {
  const [menuData, setMenuData] = useState(emptyMenuData);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/menu');
        if (!response.ok) throw new Error('Failed to fetch menu');

        const items = await response.json();
        if (Array.isArray(items) && items.length > 0) {
          setMenuData(normalizeMenuData(items));
        }
      } catch (error) {
        console.error('Menu fetch failed:', error);
      }
    };

    fetchMenu();
  }, []);

  const categories = ["All", "Coffee", "Bakery", "Desserts"];
  const filteredItems =
    activeCategory === "All"
      ? [...(menuData.Coffee || []), ...(menuData.Bakery || []), ...(menuData.Desserts || [])]
      : menuData[activeCategory] || [];

  return (
    <div className="bg-[#F9F5F0] text-[#2A2421] min-h-screen pt-20 px-6 pb-14 md:px-10 lg:px-16 font-sans">
      <div className="mx-auto max-w-7xl">
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between mb-8 border-b border-[#936138]/20 pb-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#936138] hover:text-[#5F3925] font-semibold transition"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <span className="text-xs uppercase tracking-widest text-[#6E6864]">
            Brew & Bloom Menu
          </span>
        </div>

        {/* Hero Section */}
        <div className="mx-auto mb-12 max-w-xl space-y-3 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5F3925]/10 text-[#5F3925] text-xs font-medium tracking-wide">
            <Sparkles className="w-3.5 h-3.5" /> Handcrafted Selection
          </div>

          <h1 className="text-4xl md:text-5xl font-serif text-[#2A2421] font-bold">
            Our Full Menu
          </h1>

          <p className="text-[#6E6864] text-sm md:text-base leading-relaxed">
            Handcrafted beverages, fresh bakery treats, and specialty coffee brewed with precision and love.
          </p>
        </div>

        {/* Categories & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-[#5F3925] text-[#fffaf4] shadow-md"
                    : "border border-[#936138]/30 bg-white text-[#2A2421] hover:bg-[#936138]/10 hover:text-[#2A2421]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.length === 0 ? (
            <div className="col-span-full rounded-2xl border border-dashed border-[#936138]/30 bg-white/60 px-6 py-12 text-center text-[#6E6864]">
              No menu items available yet. Add items in MongoDB to display them here.
            </div>
          ) : (
            filteredItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-white border border-[#936138]/15 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-[#5F3925]/40 transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div className="relative h-56 overflow-hidden bg-[#141414]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />

                    <div className="absolute top-3 left-3 inline-flex items-center rounded-full bg-[#5F3925] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#fffaf4] shadow-lg shadow-[#000000]/30">
                      {item.tag}
                    </div>

                    <div className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-[#1a120e]/80 px-2.5 py-1 text-[10px] font-semibold text-[#f8f3ef] shadow-lg shadow-[#000000]/30 backdrop-blur-sm">
                      <Star className="h-3 w-3 fill-[#f3c98b] text-[#f3c98b]" />
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <h3 className="text-sm font-semibold text-[#2A2421]">
                          {item.name}
                        </h3>
                        <span className="text-sm font-serif font-bold text-[#5F3925]">
                          {item.price}
                        </span>
                      </div>

                      <p className="text-[#6E6864] text-[11px] leading-relaxed line-clamp-2 mb-4">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
};

export default Menu;