import React, { useState, useEffect } from 'react';
import ListItem from '@/components/products/ListItem';
import client from '@/utils/squareClient';

function CategoryList() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState({}); // Object to store items grouped by category ID
  const { catalogApi } = client;

  // Utility function to group items by category
  const groupItemsByCategory = (data) => {
    const groupedItems = {};
    data.forEach((item) => {
      if (item.type === 'ITEM') {
        const categoryId = item.item_data.categories[0].id; // Assuming first category for now
        if (!groupedItems[categoryId]) {
          groupedItems[categoryId] = [];
        }
        groupedItems[categoryId].push(item);
      }
    });
    return groupedItems;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await catalogApi.listCatalog();
        const data = response.result.objects; // Assuming data is in result.objects
        const groupedData = groupItemsByCategory(data);
        setItems(data);
        setCategories(groupedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {Object.entries(categories).map(([categoryId, categoryItems]) => {
        // Assuming category information can be retrieved from the Square API response if needed
        const categoryName = `Category Name (from API or hardcoded)`; // Placeholder for category name

        return (
          <div key={categoryId}>
            {categoryName && <h3>{categoryName}</h3>}
            {categoryItems.map((item) => (
              <ListItem key={item.id} item={item} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default CategoryList;