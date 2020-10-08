module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-banshorian`,
      options: {
        basePath: ``,
        path: `src/`,
        imagesPath: `src/images/`,
        iconFile: `src/images/icon.png`,
        siteTitle: `Alando Appling CV`,
        siteUrl: `https://appling.dev`,
        siteName: `Alando Appling CV`,
        siteShortName: `AA`,
        siteDescription: `This cool App contains information about my work experience as a software developer.`,
        siteKeywords: `Software developer, Full Stack Developer`,
        useMozJpeg: true,
        menuLinks: [
          // title = Link text
          // color = Animation background color on click
          { name: `home`, title: `Home`, color: `#000`, link: `` },
          { name: "blog", title: `Blog`, color: `#000`, link: `` },
          {
            name: `experience`,
            title: `Experience`,
            color: `#3a3d98`,
            link: ``,
          },
          { name: `skills`, title: `Skills`, color: `#d52d43`, link: `` },
          { name: `aboutMe`, title: `About Me`, color: `#fff`, link: `` },
        ],
        email: `alandoappling@gmail.com`,
        social: {
          // Usernames
          gitHub: `Landoooooo`,
          linkedIn: `in/alando-appling/`,
          resumeInPdf: `https://resume.creddle.io/resume/h126jdpfw1k`, // url or local link
        },
        homePage: {
          availableToHire: true,
          dotColors: ["#0e3e1e", "#6CC551"],
          h1Text: `Hi! I'm Alando Appling`,
          h2Text: `Need some problems solved?`,
          typewriter: [
            `Software Development is a true passion of mine!`,
            `I'm a quick learner, that's always interested in learning new technologies and tools.`,
            `I think one of strongest values is my <strong>pure determination in understanding and overcoming challenges<strong>`,
          ],
        },
        // Color for menu background
        shapeColor: {
          link: { color: "#171616", hover: "#fff" },
          shape1: {
            color: `#413f46`,
            opacity: `0.7`,
          },
          shape2: {
            color: `#e6e5ea`,
            opacity: `0.7`,
          },
          shape3: {
            color: `#fff`,
            opacity: `0.7`,
          },
        },
        footer: `heart`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-reading-time`,
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: "carbon",
              theme: "dracula",
            },
          },
        ],
      },
    },
  ],
};
