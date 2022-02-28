import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import CustomToolbar from '../shared/CustomToolbar';

const columns = [
  { field: 'name', headerName: 'Group Name', width: 150, flex: 1 },
  { field: 'members', headerName: 'Members', width: 150, flex: 1 },
  { field: 'delete', headerName: 'Delete', width: 150, flex: 1 },
];

const Table = () => {
  const [pageSize, setPageSize] = React.useState(10);
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    setData(allData);
    setFilterData(allData);
  }, []);
  useEffect(() => {
    const columnsProps = ['name', 'members'];
    const filterDataFunc = () => {
      const filterIds = columnsProps
        .map((col) => {
          const colWiseData = data.map((item) => {
            return { id: item.id, data: item[col], col };
          });
          const searchItem = colWiseData
            .filter((item) => {
              if (
                item.data
                  .toLowerCase()
                  .includes(searchTerm?.trim()?.toLowerCase())
              ) {
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

    setFilterData(filterDataFunc());
    return () => filterDataFunc();
  }, [searchTerm, data]);
  const searchTermOnChange = (event) => {
    if (event.target.value !== searchTerm) {
      setSearchTerm(event.target.value);
    }
  };
  return (
    <div
      style={{
        height: data.length > 0 ? 700 : 220,
        width: '100%',
      }}
      className='mt-5'
    >
      <DataGrid
        rows={filterData}
        columns={columns}
        disableSelectionOnClick
        disableColumnMenu
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[10, 20, 30, 50]}
        pagination
        components={{ Toolbar: CustomToolbar }}
        componentsProps={{
          toolbar: { data, columns, searchTerm, onChange: searchTermOnChange },
        }}
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default Table;

const allData = [
  {
    id: 1,
    name: 'Kerry Gomez',
    members: 'Schmeler, Kemmer and Emmerich',
    delete: false,
  },
  {
    id: 2,
    name: 'Josee Tyson',
    members: 'Rau LLC',
    delete: false,
  },
  {
    id: 3,
    name: 'Nissie Chern',
    members: 'Prohaska-Bernhard',
    delete: false,
  },
  {
    id: 4,
    name: 'Lisha Shepton',
    members: 'Wolf Group',
    delete: true,
  },
  {
    id: 5,
    name: 'Jordain Healey',
    members: 'Fay, Trantow and Romaguera',
    delete: false,
  },
  {
    id: 6,
    name: 'Jenna Dorning',
    members: 'Morar, VonRueden and Huels',
    delete: false,
  },
  {
    id: 7,
    name: 'Aldwin Snazel',
    members: 'Kling-Labadie',
    delete: false,
  },
  {
    id: 8,
    name: 'Bram Tickner',
    members: 'Feil-Bradtke',
    delete: false,
  },
  {
    id: 9,
    name: 'Giulietta Haglington',
    members: 'Wolff-Kerluke',
    delete: true,
  },
  {
    id: 10,
    name: 'Roldan Raisbeck',
    members: 'Pfeffer and Sons',
    delete: true,
  },
  {
    id: 11,
    name: 'Alanna Counihan',
    members: 'Gibson, Pfannerstill and Weissnat',
    delete: true,
  },
  {
    id: 12,
    name: 'Ev Crawford',
    members: 'Daugherty, Leffler and Ortiz',
    delete: true,
  },
  {
    id: 13,
    name: 'Hayyim Troak',
    members: "Reynolds, Connelly and O'Conner",
    delete: false,
  },
  {
    id: 14,
    name: 'Eugenia Lighterness',
    members: 'Feest and Sons',
    delete: false,
  },
  {
    id: 15,
    name: 'Larry Lunney',
    members: 'Emard, Wilkinson and Ankunding',
    delete: false,
  },
  {
    id: 16,
    name: 'Perrine Hebbron',
    members: 'Bednar-Bins',
    delete: true,
  },
  {
    id: 17,
    name: 'Gilbert Vanstone',
    members: 'Waters-McClure',
    delete: true,
  },
  {
    id: 18,
    name: 'Rodie MacRitchie',
    members: 'Wiza-Bosco',
    delete: true,
  },
  {
    id: 19,
    name: 'Sylas Dalley',
    members: 'Bruen-Hagenes',
    delete: false,
  },
  {
    id: 20,
    name: 'Annadiane Ashpole',
    members: 'Huel-Adams',
    delete: true,
  },
  {
    id: 21,
    name: 'Martino Burtonshaw',
    members: 'Rowe, Pagac and Herman',
    delete: true,
  },
  {
    id: 22,
    name: 'Britt Farrier',
    members: 'Harris Group',
    delete: true,
  },
  {
    id: 23,
    name: 'Darrel Caulkett',
    members: 'Klocko-Crooks',
    delete: true,
  },
  {
    id: 24,
    name: 'Michale McIlhatton',
    members: 'Windler-Bahringer',
    delete: false,
  },
  {
    id: 25,
    name: 'Agathe Mulderrig',
    members: 'Rice Group',
    delete: true,
  },
  {
    id: 26,
    name: 'Candy Kelsow',
    members: 'Kris, Predovic and Shanahan',
    delete: false,
  },
  {
    id: 27,
    name: 'Quinlan Pepon',
    members: 'Kozey, Mosciski and Hackett',
    delete: true,
  },
  {
    id: 28,
    name: 'Mikel Haps',
    members: 'Gerhold and Sons',
    delete: false,
  },
  {
    id: 29,
    name: 'Anatollo Najera',
    members: 'Collins, Parker and Raynor',
    delete: true,
  },
  {
    id: 30,
    name: 'Cordie Springtorpe',
    members: 'Hessel Group',
    delete: false,
  },
  {
    id: 31,
    name: 'Arny Styan',
    members: 'Jacobs-Rempel',
    delete: true,
  },
  {
    id: 32,
    name: 'Merilyn Rontsch',
    members: 'Rosenbaum, Zemlak and Borer',
    delete: true,
  },
  {
    id: 33,
    name: 'Terese Egger',
    members: 'Muller Group',
    delete: true,
  },
  {
    id: 34,
    name: 'Ken Postlewhite',
    members: 'Murphy-Nienow',
    delete: false,
  },
  {
    id: 35,
    name: 'Marcy Gandar',
    members: 'Crona-Runolfsson',
    delete: false,
  },
  {
    id: 36,
    name: 'Emmey Breyt',
    members: 'Shanahan, Murphy and Douglas',
    delete: false,
  },
  {
    id: 37,
    name: 'Clerc Quainton',
    members: 'Bauch-Heller',
    delete: true,
  },
  {
    id: 38,
    name: 'Corabelle Wivell',
    members: 'Murphy LLC',
    delete: false,
  },
  {
    id: 39,
    name: 'Wilhelmina Rawdales',
    members: 'Crooks-Skiles',
    delete: true,
  },
  {
    id: 40,
    name: 'Johnathan De Maine',
    members: 'Pfannerstill-Bosco',
    delete: false,
  },
  {
    id: 41,
    name: 'Sashenka Sebley',
    members: 'Carroll Group',
    delete: true,
  },
  {
    id: 42,
    name: 'Correna Chaster',
    members: 'Konopelski, Treutel and Hintz',
    delete: true,
  },
  {
    id: 43,
    name: 'Bernadine Whitnall',
    members: 'Kertzmann, Cole and Wilderman',
    delete: false,
  },
  {
    id: 44,
    name: 'Ulrikaumeko Sennett',
    members: 'West-Wolff',
    delete: false,
  },
  {
    id: 45,
    name: 'Janene McGahey',
    members: 'Willms-Wuckert',
    delete: true,
  },
  {
    id: 46,
    name: 'Duane Joffe',
    members: 'Hermann-Will',
    delete: false,
  },
  {
    id: 47,
    name: 'Lauryn Yeeles',
    members: 'Runte, Quitzon and Runolfsson',
    delete: false,
  },
  {
    id: 48,
    name: 'Chancey Sallans',
    members: 'McKenzie Inc',
    delete: true,
  },
  {
    id: 49,
    name: 'Richmound Saul',
    members: 'Kuhic, Harvey and Gleichner',
    delete: true,
  },
  {
    id: 50,
    name: 'Gabriel Skelington',
    members: 'Hauck-Wolff',
    delete: false,
  },
  {
    id: 51,
    name: 'Will Gittins',
    members: 'Satterfield-Harber',
    delete: false,
  },
  {
    id: 52,
    name: 'Petrina Leigh',
    members: 'Nienow, Schoen and Bode',
    delete: true,
  },
  {
    id: 53,
    name: 'Twyla Elliff',
    members: 'Schmeler, Koepp and Crist',
    delete: true,
  },
  {
    id: 54,
    name: 'Nichol Atherley',
    members: 'Simonis LLC',
    delete: true,
  },
  {
    id: 55,
    name: 'Aluin Giron',
    members: 'Greenfelder and Sons',
    delete: false,
  },
  {
    id: 56,
    name: 'Phillipe Freckleton',
    members: 'Rogahn, Davis and Boyle',
    delete: true,
  },
  {
    id: 57,
    name: 'Tamas Silberschatz',
    members: 'Luettgen-Torp',
    delete: true,
  },
  {
    id: 58,
    name: 'Abeu Mitrovic',
    members: 'McClure, Walker and Sipes',
    delete: true,
  },
  {
    id: 59,
    name: 'Lorianne Heild',
    members: 'Schmidt-Bruen',
    delete: true,
  },
  {
    id: 60,
    name: 'Ignazio Halt',
    members: 'Schneider, Weber and Mills',
    delete: true,
  },
  {
    id: 61,
    name: 'Malena Scorey',
    members: 'Kling-Wuckert',
    delete: false,
  },
  {
    id: 62,
    name: 'Ashbey Smyley',
    members: 'Collins Group',
    delete: false,
  },
  {
    id: 63,
    name: 'Rip Kobiera',
    members: 'Armstrong, Brekke and Lind',
    delete: true,
  },
  {
    id: 64,
    name: 'Eb Andres',
    members: 'Torphy-Douglas',
    delete: true,
  },
  {
    id: 65,
    name: 'Waldo Cullagh',
    members: 'Ryan-Denesik',
    delete: true,
  },
  {
    id: 66,
    name: 'Eb Ianelli',
    members: 'Dietrich LLC',
    delete: true,
  },
  {
    id: 67,
    name: 'Warde Bruggeman',
    members: 'Green-Larkin',
    delete: false,
  },
  {
    id: 68,
    name: 'Essie Westover',
    members: 'Prosacco, Wiegand and Beatty',
    delete: false,
  },
  {
    id: 69,
    name: 'Elvyn Lydden',
    members: 'Gusikowski-Anderson',
    delete: true,
  },
  {
    id: 70,
    name: 'Cherilynn Bohlens',
    members: 'Olson and Sons',
    delete: true,
  },
  {
    id: 71,
    name: 'Clem Ferschke',
    members: 'Franecki Inc',
    delete: true,
  },
  {
    id: 72,
    name: 'Ginni Jills',
    members: 'Lesch-Senger',
    delete: false,
  },
  {
    id: 73,
    name: 'Elsa Vivyan',
    members: 'Reynolds LLC',
    delete: true,
  },
  {
    id: 74,
    name: 'Claiborne Upstone',
    members: 'Labadie, Mohr and Metz',
    delete: true,
  },
  {
    id: 75,
    name: 'Cullan Bolesma',
    members: 'Cummerata LLC',
    delete: true,
  },
  {
    id: 76,
    name: 'Fax Easey',
    members: 'Bernier, Reichert and Conn',
    delete: false,
  },
  {
    id: 77,
    name: 'Silvain Rolinson',
    members: 'Kohler, DuBuque and Schmitt',
    delete: true,
  },
  {
    id: 78,
    name: 'Nicolea Humfrey',
    members: 'Ullrich-Robel',
    delete: true,
  },
  {
    id: 79,
    name: 'Drake Doey',
    members: 'Hettinger LLC',
    delete: true,
  },
  {
    id: 80,
    name: 'Lou Degoe',
    members: 'White Group',
    delete: false,
  },
  {
    id: 81,
    name: 'Jobye Goundrill',
    members: 'Tromp LLC',
    delete: false,
  },
  {
    id: 82,
    name: 'Callida Jeffs',
    members: 'Beatty LLC',
    delete: true,
  },
  {
    id: 83,
    name: 'Jehu McCrow',
    members: 'Ryan LLC',
    delete: true,
  },
  {
    id: 84,
    name: 'Dennet Yanukhin',
    members: 'Balistreri, Stoltenberg and Roob',
    delete: false,
  },
  {
    id: 85,
    name: 'Stacia Birwhistle',
    members: 'Leannon, Auer and Smith',
    delete: true,
  },
  {
    id: 86,
    name: 'Isobel Swanton',
    members: 'Goldner-Fay',
    delete: true,
  },
  {
    id: 87,
    name: 'Rustin Tortis',
    members: 'Bernhard Inc',
    delete: true,
  },
  {
    id: 88,
    name: 'Annis Pinner',
    members: 'Veum, Kub and Grant',
    delete: true,
  },
  {
    id: 89,
    name: 'Doloritas Grieve',
    members: 'Schaden Group',
    delete: true,
  },
  {
    id: 90,
    name: 'Robers Creevy',
    members: 'McClure Inc',
    delete: false,
  },
  {
    id: 91,
    name: 'Sydney Leason',
    members: 'Johns Inc',
    delete: true,
  },
  {
    id: 92,
    name: 'Catie Arnao',
    members: 'Crist-Weimann',
    delete: true,
  },
  {
    id: 93,
    name: 'Cordy Slaght',
    members: 'Towne, Cronin and Kiehn',
    delete: true,
  },
  {
    id: 94,
    name: 'Klement Lazell',
    members: 'Watsica-Goyette',
    delete: true,
  },
  {
    id: 95,
    name: 'Dmitri Doughty',
    members: 'Harber, Fisher and Marquardt',
    delete: false,
  },
  {
    id: 96,
    name: 'Tris Deplacido',
    members: 'Nader LLC',
    delete: false,
  },
  {
    id: 97,
    name: 'Broddie Dumbare',
    members: 'Romaguera, Howell and Kohler',
    delete: true,
  },
  {
    id: 98,
    name: 'Elke Horlick',
    members: 'Lockman-Ruecker',
    delete: false,
  },
  {
    id: 99,
    name: 'Christoph McVity',
    members: 'Weber and Sons',
    delete: true,
  },
  {
    id: 100,
    name: 'Marianne Henmarsh',
    members: 'Green, Dickens and Kuhlman',
    delete: false,
  },
];
