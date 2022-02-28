import { useEffect, useState } from 'react';

const useSearchItems = (data, searchTerm, columnsProps) => {
  const [filterItems, setFilterItems] = useState([]);
  useEffect(() => {
    const filterData = () => {
      const filterIds = columnsProps
        .map((col) => {
          const colWiseData = data.map((item) => {
            return { id: item.id, data: item[col], col };
          });
          const searchItem = colWiseData
            .filter((item) => {
              if (item.data.toLowerCase().includes(searchTerm.toLowerCase())) {
                return true;
              }
              return false;
            })
            .map((item) => item.id);
          return searchItem;
        })
        .flat(Infinity);
      const uniqueFilterIdes = Array.from(new Set([...filterIds]));
      const filterItems = data.filter((item) =>
        uniqueFilterIdes.includes(item.id)
      );
      return filterItems;
    };

    setFilterItems(filterData());
    return () => filterData();
  }, [searchTerm, data, columnsProps]);
  return filterItems;
};

export default useSearchItems;
