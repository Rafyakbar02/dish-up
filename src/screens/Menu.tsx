import '../styles/menu.css'
import '../index.css';
import { Link } from 'wouter-preact';
import Accordion from '../components/Accordion';
import { useState } from 'preact/hooks';

export default function Menu() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index: any) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    const menuItems = [
        {
            name: "Garlic Butter Shrimp",
            time: 30,
            desc: "A quick and easy garlic butter shrimp recipe that is perfect for a weeknight dinner. The shrimp are cooked in a flavorful garlic butter sauce and served over pasta or rice.",
            cal: 300,
            size: 2
        },
        {
            name: "Tomato Egg Stir Fry",
            time: 30,
            desc: "A quick and delicious stir-fry made with tomatoes and eggs.",
            cal: 300,
            size: 2
        }
    ]

    return (
        <section style={{
            marginBottom: '96px',
            padding: '1rem'
        }}>
            <div class="menu-header">
                <p>Hello, chef!</p>

                <div class="button-group">
                    <Link class="link-button" href="/recipe/new" aria-label="Add new recipe">+ Recipe</Link>
                    <Link class="link-button" href="/list" aria-label="Open grocery list">List</Link>
                </div>
            </div>

            <h2 class="hand" style={{
                lineHeight: 0,
            }}>today's</h2>
            <h1 style={{
                fontSize: '4em',
                lineHeight: 0,
            }}>MENU</h1>

            <div class="filter-group">
                <button class="filter-button">All</button>
                <button class="filter-button">Saved</button>
            </div>

            <div class="menu-group">
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    borderBottom: '2px solid var(--cobalt)',
                }}>
                    <h2 class="hand" style={{
                        lineHeight: '0',
                    }}>Quick Meals</h2>

                    <p>ready in a flash</p>
                </div>

                {menuItems.map((item, i) => {
                    return (
                        <Accordion
                            key={i}
                            handleToggle={() => handleToggle(i)}
                            isOpen={i === openIndex}
                            menuName={item.name}
                            cookingTime={item.time}
                            description={item.desc}
                            calories={item.cal}
                            servingSize={item.size}
                        />
                    )
                })}
            </div>
        </section>
    )
}
