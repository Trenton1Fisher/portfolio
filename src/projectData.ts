export const projects = [
  {
    id: 1,
    title: 'Uk Jobble',
    description:
      "Uk Jobble is a full-stack CRUD application that leverages Reed.Uk's job search API, enabling users to browse over 300,000 job listings across the United Kingdom. Uk Jobble provides user authentication and the ability to save users favorite jobs utilizing a PostgreSQL Database",
    stack: ['NextJs', 'Typescript', 'PostgreSQL', 'Auth0'],
    gitLink: 'https://github.com/Trenton1Fisher/job-search',
    liveLink: 'https://job.trentonfisher.xyz',
    imgUrl: '/uk-jobble',
  },
  {
    id: 2,
    title: 'Drawboard',
    description:
      "Drawboard is an application that is built off of React and Socket.io, utilizing HTML5's canvas element and websockets for real time connections with the server. Users will have the ability to toggle between colors, draw, and export their work as a PNG",
    stack: ['React', 'Node.js', 'Socket.io', 'Typescript'],
    gitLink: 'https://github.com/Trenton1Fisher/drawboard',
    liveLink: 'https://drawboard.trentonfisher.xyz',
    imgUrl: '/drawbaordImage',
  },
  {
    id: 3,
    title: 'Csv Parser',
    description:
      'Application that allows user to upload a csv and do a multitude of tasks and returns a newly updated csv file, features include sorting the file based on numeric or character values, searching for specific rows based on field values, and deleting duplicates',
    stack: ['SolidJS', 'Typescript', 'Go'],
    gitLink: 'https://github.com/Trenton1Fisher/csv-parser',
    liveLink: 'https://parser.trentonfisher.xyz',
    imgUrl: '/parser.png',
  },
  {
    id: 4,
    title: 'Eccommerce Application (Coming Soon)',
    description:
      'Eccommerce Application that allows users to view various products from technology, clothing, and jewarly utilizing the fakestore api. Users can log in and customize their cart and paroceed to experience the entire checkout flow.',
    stack: ['NextJs', 'Typescript', 'LibSQL', 'Supabase Auth'],
    gitLink: 'https://github.com/Trenton1Fisher/job-search',
    liveLink: 'https://ecommerce.trentonfisher.xyz',
    imgUrl: '/ecom.png',
  },
]
