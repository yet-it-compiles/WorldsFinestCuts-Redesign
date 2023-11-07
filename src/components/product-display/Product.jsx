import React, { useState } from "react";

import styles from "./Product.module.scss";
import { MdOutlineAdd, MdAdd } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FEATURED_ITEMS } from "../../data/constants";

const Product = () => {
    const [likedItems, setLikedItems] = useState(
        new Array(FEATURED_ITEMS.length).fill(false)
    );
    const [addedItems, setAddedItems] = useState(
        new Array(FEATURED_ITEMS.length).fill(false)
    );
    const [expandedCard, setExpandedCard] = useState(null);

    const handleLike = (index, e) => {
        e.stopPropagation();
        const newLikedItems = [...likedItems];
        newLikedItems[index] = !newLikedItems[index];
        setLikedItems(newLikedItems);

        e.currentTarget.classList.remove(styles.liked);
        setTimeout(() => {
            e.currentTarget.classList.add(styles.liked);
        }, 10);
    };

    const handleAdd = (index, e) => {
        e.stopPropagation();
        const newAddedItems = [...addedItems];
        newAddedItems[index] = !newAddedItems[index];
        setAddedItems(newAddedItems);

        e.currentTarget.classList.remove(styles.added);
        setTimeout(() => {
            e.currentTarget.classList.add(styles.added);
        }, 10);
    };

    const toggleExpand = (index) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    return (
        <div className={styles.cardContainer}>
            {FEATURED_ITEMS.map((item, index) => (
                <div
                    key={item.id}
                    className={`${styles.card} ${
                        expandedCard === index ? styles.expanded : ""
                    }`}
                    onClick={() => toggleExpand(index)}
                >
                    <div className={styles.cardHeader}>
                        <button
                            className={`${styles.likeIcon} ${
                                likedItems[index] ? styles.liked : ""
                            }`}
                            onClick={(e) => handleLike(index, e)}
                            aria-label={`Like ${item.title}`}
                            aria-pressed={likedItems[index]}
                        >
                            {likedItems[index] ? (
                                <AiFillHeart />
                            ) : (
                                <AiOutlineHeart />
                            )}
                        </button>
                        <h1 className={styles.cardTitle}>{item.title}</h1>
                        <button
                            className={styles.addIcon}
                            onClick={(e) => handleAdd(index, e)}
                            aria-label={`Add ${item.title}`}
                            aria-pressed={addedItems[index]}
                        >
                            {addedItems[index] ? <MdAdd /> : <MdOutlineAdd />}
                        </button>
                    </div>
                    <div className={styles.cardPrice}>{item.price}</div>
                    <p className={styles.cardDescription}>{item.description}</p>
                    <ul className={styles.cardContents}>
                        {item.contents.map((content, contentIndex) => (
                            <li key={contentIndex}>{content}</li>
                        ))}
                    </ul>

                    <div
                        className={`${styles.cardDetails} ${
                            expandedCard === index ? styles.show : ""
                        }`}
                    ></div>
                </div>
            ))}
        </div>
    );
};

export default Product;
