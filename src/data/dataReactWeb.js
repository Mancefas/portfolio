const dataReactWeb = [
  {
    id: 1,
    title: 'Y-something',
    img: '',
    imgBigger: '/img/y-something1.png',
    anotherBiggerImg: '/img/y-something2.png',
    shortDescription: 'Website for race results and finishing places.',
    stack: ['React', 'Typescript', 'Storybook', 'SCSS', 'Firebase'],
    longerTitle: 'Admin style web-app',
    fullDescription:
      'Since a lot of text is redundant and used over and over this is a web app to remember the most used text. Website to write longer text to clipboard. When you press a button - the longer text for that button is written to your clipboard and then you can use it where it is needed. For this website there is a storybook with components.',
    linkToWebsite: 'https://sample-y.netlify.app/',
    linkToCode: 'https://github.com/Mancefas/Y-something/tree/eng-version',
  },
  {
    id: 2,
    title: 'race-results',
    img: '/img/RaceResults.png',
    imgBigger: '/img/raceResults1.png',
    anotherBiggerImg: '/img/raceResults2.png',
    shortDescription: 'Website for race results and finishing places.',
    stack: ['React', 'Material UI', 'Font awesome', 'Firebase'],
    longerTitle:
      'Website was built to show race results and finishing places in real-time',
    fullDescription:
      'It has a different page (admin app) to get finishing time, to add new racers and to fix data if needed.The website uses firebase real-time database, authentication',
    linkToWebsite: 'https://race-time.netlify.app/',
    linkToCode: '',
  },
  {
    id: 3,
    title: 'minant.lt',
    img: '/img/minant.lt.png',
    imgBigger: '/img/minant-blog.jpg',
    shortDescription: 'Next.js website for blogging.',
    stack: ['Next.js', 'Material UI', 'Font awesome'],
    longerTitle: 'Website to display blog posts about cycling. ',
    fullDescription:
      'Website is made with Next.js. Blog website that uses Markdown language to write new posts. The website is written in Lithuanian language. ',
    linkToWebsite: 'https://minant-lt.netlify.app',
    linkToCode: 'https://github.com/Mancefas/minant.lt-next.js-blog',
  },
  {
    id: 4,
    title: 'nordcarrier.lt',
    img: '/img/ncNext.png',
    imgBigger: '/img/ncNext1.png',
    anotherBiggerImg: '/img/ncNext2.png',
    shortDescription: '',
    stack: ['Next.js', 'Mantine UI'],
    longerTitle: 'Nordcarrier - forwarding company website',
    fullDescription:
      'Website for forwarding company with Next.js to be faster. There is ENG and LTU languages, all the text is in different file for easier maintenance. It has light and dark theme as well. ',
    linkToWebsite: 'https://www.nordcarrier.lt/',
  },
  {
    id: 5,
    title: 'baltic-covid-news',
    img: '/img/balticNews.png',
    imgBigger: '/img/balticCovidNews.png',
    shortDescription:
      'Dynamic web app that shows statistics about Covid for Baltic states (Europe).',
    stack: ['React', 'Material UI', 'Font awesome'],
    longerTitle:
      'Website to display Covid numbers about Baltic states ( Lithuania, Latvia, Estonia)',
    fullDescription:
      'For the data I have used 2 APIs.The table on the top shows world data for that day, lower tables show vaccination data and daily data.There is a table where you can select a different country to show data for. Auto suggestions to show country name when starting to type.',
    linkToWebsite: 'https://baltic-covid-news.netlify.app/',
    linkToCode: 'https://github.com/Mancefas/covid-news',
  },
  {
    id: 6,
    title: 'website-using-api',
    img: '',
    imgBigger: '/img/qualTask.png',
    shortDescription:
      "Just a simple website for using mock/sample API data.Form with validation and a hint with what's needed.",
    stack: ['React', 'React-router', 'Material UI'],
    longerTitle: 'Qualification task',
    fullDescription:
      'Task 1 - displaying data from API using Data Grid with pagination to show only 11 elements on load.Task 2 - when pressed on 1 of the initially loaded elements you get to a second page with more details about pressed element.Task 3 - a button on top of the page called `PRESS ME FOR NEW POST`. When pressed you get to a new page (/form-page) where you get a new form for the post. This form has validation and it should have all 3 fields some text before you can press `POST IT` button. After pressing post it data from text fields are sent to API.',
    linkToWebsite: 'https://antra-ver.netlify.app/',
    linkToCode: 'https://github.com/Mancefas/qualification-task',
  },
  {
    id: 7,
    title: 'coffee-place-website',
    img: '/img/coffeeLogo.png',
    imgBigger: '/img/coffeePlace.png',
    shortDescription: 'E-commerce website made using react-hooks.',
    stack: ['React', 'Material UI'],
    longerTitle: 'E-commerce website for coffee shop using react.',
    fullDescription:
      'On pressed navbar links - merchandise is sorted on-page. The dynamic cart shows items added, price and how many items are placed. All is done by using react hooks. There is no back-end',
    linkToWebsite: 'https://coffee-place-e-comm.netlify.app/',
    linkToCode: 'https://github.com/Mancefas/react-e-commerce',
  },
];

export default dataReactWeb;
