import React, { useState } from 'react';

const List = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    const handleAddItem = () => {
        if (newItem.trim()) {
            setItems([...items, newItem]);
            setNewItem('');
        }
    };

    const handleAddItemOnEnter = (e) => {
        if (e.key === 'Enter') {
            handleAddItem();
        }
    };

    const handleEditItem = (index, value) => {
        const updatedItems = [...items];
        updatedItems[index] = value;
        setItems(updatedItems);
    };

    const handleDeleteItem = (index) => {
        const updatedItems = items.filter((item, i) => i !== index);
        setItems(updatedItems);
    };

    const handleItemBlur = (index) => {
        if (!items[index].trim()) {
            handleDeleteItem(index);
        }
    };

    const handleItemKeyPress = (e, index) => {
        if (e.key === 'Enter') {
            if (!items[index].trim()) {
                handleDeleteItem(index);
            }
        }
    };

    const handleNewItemBlur = () => {
        handleAddItem();
    };

    return (
        <ul className='list'>
            {items.map((item, index) => (
                <li className='item' key={index}>
                    <span>{index + 1}.</span>
                    <input
                        className='input'
                        type="text"
                        value={item}
                        onChange={(e) => handleEditItem(index, e.target.value)}
                        onBlur={() => handleItemBlur(index)}
                        onKeyPress={(e) => handleItemKeyPress(e, index)}
                    />
                </li>
            ))}
            <li className='item'>
                <span>{items.length + 1}.</span>
                <input
                    className='input'
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    onBlur={handleNewItemBlur}
                    onKeyPress={handleAddItemOnEnter}
                />
            </li>
        </ul>
    );
};

export default List;









