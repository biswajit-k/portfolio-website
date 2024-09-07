<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!--
TODO:
image logo
search "demo video" and change link

 -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/biswajit-k/log-ingester-elasticsearch">
    <img src="images/logo.png" alt="Logo" width="200">
  </a>

<h3 align="center">MonoSlate</h3>

  <p align="center">
    A sleek, fast, and fully customizable portfolio for everyone
    <br />
    <a href="https://github.com/biswajit-k/log-ingester-elasticsearch"><strong>View Live »</strong></a>
    <br />
    <br />
    <a href="https://youtu.be/JjedCSq7-J0">Quickstart</a>
    ·
    <a href="https://github.com/biswajit-k/log-ingester-elasticsearch/issues">Report Bug</a>
    ·
    <a href="https://github.com/biswajit-k/log-ingester-elasticsearch/issues">Request Feature</a>
  </p>
</div>

<!--
create a logo for monoslate - like log ingester elasticsearch

goal: this project is to create value for people as a template
mention - features, how to use it

add mit lisence, mention template copied attribution also
update built with tags

sections
about
  tell anyone in simple terms what it provides-
  include key features -
    design
    sections
    easy to add content
    customizable
    free fast deployable on netlify

  built with



 -->

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#project-description">Project Description</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#system-design">System Design</a></li>
        <li><a href="#user-interface">User Interface</a></li>
        <li><a href="#performance">Performance</a></li>
        <li><a href="#video-demo">Video Demo</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#folder-structure">Folder Structure</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#future-improvements">Future Improvements</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

MonoSlate is a black & white theme portfolio website template that you can quickly setup and customize to make it your own. The design is sleek yet well-organized with multiple sections to suit your needs regardless of which background you come from.

The key features are:

- **Sleek Design**: Modern, minimalist and consistent design
- **Organized Section**: Offers essential sections that suits everyone which are easy and intuitive to nagivate
- **Customizable Content**: Effortlessly update your content and sections with zero coding work.
- **Free Hosting**: Quickly and easily deploy your portfolio website for free on [Netlify](https://www.netlify.com/) or [Github Pages](https://pages.github.com/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- gatsby, styled components, animejs
- [![ElasticSearch]][elastic-url]
- [![kafka]][kafka-url]
- [![FastAPI]][fastapi-url]
- [![Flask]][flask-url]
- [![Docker]][docker-url]
- [![bootstrap]][bootstrap-url]
- [![jquery]][jquery-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Make sure that you have [Node.js](https://nodejs.org/en) installed as it would help in running the Gatsby server and [yarn](https://yarnpkg.com/) for installing the dependencies.

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/biswajit-k/MonoSlate.git
   ```

2. Install the Gatsby CLI

   ```sh
   npm install -g gatsby-cli
   ```

3. Install dependencies

   ```sh
   yarn
   ```

4. Start the development server

   ```sh
   npm start
   ```

Finally, below services will be running-

- Website: `http://localhost:8000`
- GraphiQL Server: `http://localhost:8000/___graphql`

### Building For Production

1. Generate a full static production build

   ```sh
   npm run build
   ```

1. Preview the site as it will appear once deployed

   ```sh
   npm run serve
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Folder Structure

```
├── gatsby-config.js
├── gatsby-node.js
├── prettier.config.js
├── .babelrc
├── .editorconfig
├── .eslintrc
├── README.md
├── LICENSE
├── package.json
└── content
      └── about
      └── draft
      └── jobs
      └── posts
      └── projects
      └── resume
└── src
      └── components
        ├── icons
        ├── sections
        ├── *layout files*
      └── fonts
      └── hooks
      └── images
        └── icons
        ├── logo.png
      └── pages
      └── styles
            ├── GlobalStyle.js
            ├── variables.js
      └── templates
      └── utils
      ├── config.js
└── static
      ├── resume.pdf

```

Below are some details for important files you would deal with while customizing the template for your use-

`content` folder contains all your personal details that would be automatically fetched and reflected on the website. Also the `config.js` file inside `src` folder with your details.

`src` folder contains all the source files for any customization.

- `images` folder contains logo images
- `components` folder contains the layout files like header, footer, etc
- `pages` folder contains all the pages of the website. You can add your own page folder which would be accessible at `https://localhost:8000/<folder-name>`
- `styles` folder contains the common styling used in the website. For customizations, you would mostly work with `GlobalStyle.js` and `variables.js` files.

`static` folder contains all the static files you would want to serve in your website. These can also be assible at `https://localhost:8000/<file-name>` directly.

`gatsby-config.js` and `gatsby-node.js` files contain some other details like plugins and metadata that you might want to look at.

**Note**

_If you wish to just modify the content and keep the design same. You just have to modify `content`, `static` folders and `config.js` file. That's it._

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Future Improvements

The template is

**Enhancing Durability**

Elasticsearch instances can go down if they get massive loads of data. Also, backing up data takes time and during this time our database would be down. So there are chances of losing log data for that duration . If log data is valuable and we can't afford to lose any of it then we could also add a **transactional database** which would parallelly also store these logs. A transactional database being ACID complaint would ensure that the data is not lost in case Elasticsearch instances go down.

**Improving Elasticsearch Fault Tolerance**

Having **cluster and replicas** of Elasticsearch instances will ensure that if some instance goes down others are available to index logs and provide search result.

See the [contribution section](#contributing) on how yo propose improvements.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what makes the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Biswajit Kaushik - [linkedin](https://twitter.com/twitter_handle), biswajitkaushik02@gmail.com

Project Link: [https://github.com/biswajit-k/log-ingester-elasticsearch](https://github.com/biswajit-k/log-ingester-elasticsearch)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [How Twitter keeps its search systems up and stable at scale by Arpit Bhayani](https://www.youtube.com/watch?v=dOyCq_mMtdI)
- [Structured Streaming Using Flask Kafka PySpark Elasticsearch Kibana](https://github.com/ercan5535/Structured-Streaming-Flask-Kafka-PySpark-Elasticsearch-Kibana)
- [Elasticsearch Docs][elastic-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/biswajit-k/log-ingester-elasticsearch.svg?style=for-the-badge
[contributors-url]: https://github.com/biswajit-k/log-ingester-elasticsearch/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/biswajit-k/log-ingester-elasticsearch.svg?style=for-the-badge
[forks-url]: https://github.com/biswajit-k/log-ingester-elasticsearch/network/members
[stars-shield]: https://img.shields.io/github/stars/biswajit-k/log-ingester-elasticsearch.svg?style=for-the-badge
[stars-url]: https://github.com/biswajit-k/log-ingester-elasticsearch/stargazers
[issues-shield]: https://img.shields.io/github/issues/biswajit-k/log-ingester-elasticsearch.svg?style=for-the-badge
[issues-url]: https://github.com/biswajit-k/log-ingester-elasticsearch/issues
[license-shield]: https://img.shields.io/github/license/biswajit-k/log-ingester-elasticsearch.svg?style=for-the-badge
[license-url]: https://github.com/biswajit-k/log-ingester-elasticsearch/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/biswajit-kaushik
[product-screenshot]: images/screenshot.png
[system-design-fastapi]: images/design-fastapi.png
[system-design-kafka]: images/design-kafka.png
[performance]: images/performance.png
[ElasticSearch]: https://img.shields.io/badge/-ElasticSearch-00bfb3?style=for-the-badge&logo=elasticsearch&logoColor=f9b110
[elastic-url]: https://www.elastic.co/elasticsearch
[FastAPI]: https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi
[fastapi-url]: https://fastapi.tiangolo.com/
[Flask]: https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask
[flask-url]: https://flask.palletsprojects.com/
[Docker]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[docker-url]: https://www.docker.com/
[bootstrap]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com
[kafka]: https://img.shields.io/badge/Apache%20Kafka-000?style=for-the-badge&logo=apachekafka
[kafka-url]: https://kafka.apache.org/
