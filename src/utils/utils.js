import { gql } from "@apollo/client";

export const FETCH_COUNTRIES = gql`
  query Continent {
    countries {
      name
      code
      emoji
      continent {
        name
      }
    }
  }
`;

export const sortByContinentName = (a, b) => {
  if (a.continent.name > b.continent.name) {
    return -1;
  }
  if (a.continent.name < b.continent.name) {
    return 1;
  }
  return 0;
};

export const COLUMNS = [
  {
    title: "Continent",
    dataIndex: ["continent", "name"],
    key: ["continent", "name"],
    filters: [
      {
        text: "Africa",
        value: "Africa"
      },
      {
        text: "Antarctica",
        value: "Antarctica"
      },
      {
        text: "Asia",
        value: "Asia"
      },
      {
        text: "Europe",
        value: "Europe"
      },
      {
        text: "North America",
        value: "North America"
      },
      {
        text: "Oceania",
        value: "Oceania"
      },
      {
        text: "South America",
        value: "South America"
      }
    ],
    onFilter: (value, record) => record.continent.name.indexOf(value) === 0,
    sorter: sortByContinentName
  },
  {
    title: "Country",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Flag",
    dataIndex: "flag",
    render: (value, record) => (
      <img
        src={`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/${record.code.toLowerCase()}.svg`}
        alt=""
        style={{ height: "33px" }}
      />
    ),
    key: "flag"
  },
  {
    title: "ISO code",
    dataIndex: "code",
    key: "code"
  }
];

export const PAGINATION = {
  hideOnSinglePage: true
};
