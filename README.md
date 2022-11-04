# Perlego Fullstack Project Overview

A fullstack project utilising a React front-end with an API backend for a "Book Recommendation" component with optional extensions. Stack consisted of:

**Tech:**
* NextJS
* Bootstrap
* Aloglia
* TypeScript
* Jest
* MongoDB
* SCSS
* Docker + **AWS**

**Misc:**
* Jira
* Figma
* Photoshop
# Deployment

Install the project with github clone then cd into the folder to install then run npm run dev. This *should* open a server on port 3000.

```bash
  git clone https://github.com/Phillocity/phillip-ebper
  cd phillip-ebper
  docker-compose up
```

Alternatively the project can be accessed on its **[deployed link here](http://next-docker-env.eba-3bzpmvwb.eu-west-1.elasticbeanstalk.com/)**

# Demo
![ezgif com-gif-maker](https://user-images.githubusercontent.com/12134641/199932835-29d6d429-2a3d-4922-ba6c-0024cbfc04d8.gif)

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/12134641/199933258-f9ee7361-a8f4-4392-93a4-afa600b7f67b.gif)


# Features and Extensions

Currently the project has the following features:
- [x]  - Display books from the database / index
- [x]  - Search for books by any property
- [ ]  - User favourites list
- [ ]  - User history of searches
- [ ]  - SEO optimisations

## API

CRUD operations are available but are open to extensions. The API is currently hosted on AWS and can be accessed at the following link:

**[API Link](http://next-docker-env.eba-3bzpmvwb.eu-west-1.elasticbeanstalk.com/api/books)**

You may specify a *limit* query to restrict the number of results returned. The default is 36:

**[API Link with a limit of 10](http://next-docker-env.eba-3bzpmvwb.eu-west-1.elasticbeanstalk.com/api/books?limit=10)**
## Documentation

Initially began with a simple initial **Figma** mockup of the design which can be **[found here](https://www.figma.com/file/hTF8ThHWcwpgpmnTdHUWAx/Perlego-Wireframe?node-id=577369%3A832)**. This was then used to create a basic wireframe of the project.

**NextJS** was used abstract a lot of the setup with Webpack and Babel. The project was then built with TypeScript, Bootstrap and SCSS for the front-end whilst the API was built with Next API Routes and MongoDB. The project was tested with Jest and but with no time left to implement end-to-end testing. Finally the project was then deployed to AWS Elastic Beanstalk with a Docker container.

[**Jira**](https://phillipworld.atlassian.net/jira/software/projects/PFA/boards/2) was used to track the project and its progress in an kanban manner. While the task itself was simple I broke down the project into a number of smaller tasks that I could complete and split into a roadmap of backend, front-end, deployment and SEO if there's time. This allowed me to track my progress efficiently.

**Important notice** -
*Credentials of databases, Aloglia keys and secret auth keys have been hardcoded to allow easy access for external parties.
In normal circumstances these would all be hidden behind enviroment variables.
The hardcoded credientials are all generated specifically for this project.
Therefore sensitive personal information have all been redacted.*

# Conclusion
Learning NextJS was very enlightening, it's a very powerful tool that allows for a lot of abstraction and simplification of the development process. I would definitely use it again in the future especially with the release of Next13 which further simplifies server-side rendering.

I would have liked to have implemented more features but unfortunately I ran out of time working on dockerising and deployment which is my weakest area. I would have liked to have implemented a user system with a favourites list and history of searches.

Also adding a more robust search system with more advanced filteres that isn't limited to just queries but also by tags and categories. Jest was great for testing the API but I would have liked to have implemented end-to-end testing with Cypress or Selenium.

While the front-end holds up, it is by no means elegant due to heavy use of bootstrap for quick prototyping. Alternatively I would love to make my own UI library but that would take a lot more time. A better alternative would be TailwindCSS which I have used before but never to the extent of project like this.

Above all else, the greatest challenge was the deployment process. While I've used docker before, I'm still not very familiar with it and it took a lot of time to get it working. In the end I was able to get my app running with a mongo database but I was unable to import the iniital data I procured, therefore I moved the database onto a cloud cluster for ease of access.

Overall I'm very happy with the project, in the total time of 4 days I was able to learn a new framework, create a fullstack project and deploy it to AWS.

# Update - 1
In a last-minute test, my core components did not render on physical mobiles or Firefox, but worked perfectly in Chrome Desktop + Mobile using the responsive dev tools function. A closer look in FireFox reveals that a class that adds a subtle fade in effect to elements was not firing.

Therefore leaving any element with a class of **"fade in"** to be permanently set to opacity:0 as opposed to having a brief transiton to opacity:1.

A quick fix here would be to just remove the class entirely. But in the long run this should be investigated more and serve as a reminder that beyond mobiles there are also other browsers to consider.
