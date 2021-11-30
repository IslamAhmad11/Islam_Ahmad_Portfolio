import { DiReact, DiAngularSimple, DiJavascript, DiDatabase, DiCss3, DiHtml5 } from 'react-icons/di';

export const projects = [
  {
    title: 'Task Tracker App',
    description: "Using React, It includes the react ui as well as JSON-server for our mock backend,\
                  that helps you make sure no tasks slip through the cracks with everything you have to do in a day.\
                  And it's not just for personal task tracking. You can manage your team members tasks too.",
    image: 'images/1.webp',
    tags: ['React', 'JavaScript'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 0,
  },
  {
    title: 'Real Estate Agency Template',
    description:"{This project UNDER DEVELOPMENT...}\nIt gives visitors the first impression of your business.\
                  The real estate website creates a brand identity for your company online. With a site,\
                  you can deliver your message and content to customers.",
    image: 'images/2.webp',
    tags: ['React', 'JavaScript'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 1,
  },
  {
    title: 'ACME Web Design',
    description: "It's a web designer's responsibility to construct the overall look and feel of a website,\
                  using images, HTML, CSS, and JavaScript to do so. Designers are typically creative in nature\
                  It's a web designer's responsibility to construct the overall look and feel of a website\
                  It's a web designer's responsibility to construct.",
    image: 'images/3.webp',
    tags: ['HTML5', 'CSS3'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 2,
  },
  {
    title: 'Task Tracker App',
    description: "Using React, It includes the react ui as well as JSON-server for our mock backend,\
                  that helps you make sure no tasks slip through the cracks with everything you have to do in a day.\
                  And it's not just for personal task tracking. You can manage your team members tasks too.",
    image: 'images/4.webp',
    tags: ['Angular', 'JavaScript'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 3,
  },
];

export const TimeLineData = [
  { technology: 'Reactjs', text: 'Experience with React.js', icon: <DiReact /> },
  { technology: 'Angular', text: 'familiar with Angular (in progress...)', icon: <DiAngularSimple />},
  { technology: 'JavaScript', text: 'Experience with JavaScript', icon: <DiJavascript /> },
  { technology: 'CSS3', text: 'Experience with CSS3', icon: <DiCss3 />},
  { technology: 'HTML5', text: 'Experience with HTML5', icon: <DiHtml5 />},
  { technology: 'SQL', text: 'Experience with SQL', icon: <DiDatabase />}
];
