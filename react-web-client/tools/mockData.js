const curriculums = [
  {
    id: 1,
    ownerId: 1,
    title: 'Introduction to web developement',
    slug: 'introduction-to-web-developement',
    description: 'A list of ressources to help you understand Web developement',
    link: '',
    resources: [
      {
        order: 1,
        title: 'A Complete Web Development Learning Path',
        description:
          "Web Development is complex, there are so many technologies you might've heard of. Here's a simple and clear path on how to become a web developer today!  Web Development is complex, there are so many technologies you might've heard of. Here's a simple and clear path on how to become a web developer today! ",
        link:
          'https://www.youtube.com/watch?v=2-akTTZyrcM&ab_channel=Academind',
        type: 'ENUM_YOUTUBE',
      },
      {
        order: 2,
        title: 'How The Web Works - The Big Picture',
        description:
          "From request to response - how does the web work? Let's have a look at a high-level overview.",
        link:
          'https://www.youtube.com/watch?v=hJHvdBlSxug&ab_channel=Academind',
        type: 'ENUM_YOUTUBE',
      },
      {
        order: 3,
        title: 'Dynamic Websites vs Static Pages vs Single Page Apps (SPAs)',
        description:
          'Should you only build SPAs? Why might dynamic pages be better? And there even is a third option!',
        link:
          'https://www.youtube.com/watch?v=Kg0Q_YaQ3Gk&ab_channel=Academind',
        type: 'ENUM_YOUTUBE',
      },
    ],
  },
  {
    id: 2,
    ownerId: 2,
    title: 'Lean JavaScript DOM',
    slug: 'lean-javascript-dom',
    description: 'A list of ressources to help you understand JavaScript DOM',
    link: "I'm sharing with you this playlist of vidios made by 3arbaoui Mehdi",
    resources: [
      {
        order: 1,
        title:
          "What's DOM (Document Object Model) & DOM VS BOM (Browser Object Model)",
        description: '',
        link:
          'https://www.youtube.com/watch?v=vXqe3BfiK90&list=PLpXCAa5_ykleN-CRRLDBwL-eBYWqdsgpc&ab_channel=3arbaouiMehdi',
        type: 'ENUM_YOUTUBE',
      },
      {
        order: 2,
        title:
          'How to use event listeners to access a DOM Element (DOMContentLoaded)',
        description: '',
        link:
          'https://www.youtube.com/watch?v=u35dNoeTp5M&list=PLpXCAa5_ykleN-CRRLDBwL-eBYWqdsgpc&index=2&ab_channel=3arbaouiMehdi',
        type: 'ENUM_YOUTUBE',
      },
      {
        order: 3,
        title: 'HTML Script Tag (Inline vs. Async vs. Defer)',
        description: '',
        link:
          'https://www.youtube.com/watch?v=pVG_VZ0R_QU&list=PLpXCAa5_ykleN-CRRLDBwL-eBYWqdsgpc&index=3&ab_channel=3arbaouiMehdi',
        type: 'ENUM_YOUTUBE',
      },
      {
        order: 4,
        title: 'DOM Nodes Demystified',
        description: '',
        link:
          'https://www.youtube.com/watch?v=uyQueE7Pbww&list=PLpXCAa5_ykleN-CRRLDBwL-eBYWqdsgpc&index=4&ab_channel=3arbaouiMehdi',
        type: 'ENUM_YOUTUBE',
      },
      {
        order: 5,
        title: 'Add DOM Nodes into the DOM Tree',
        description: '',
        link:
          'https://www.youtube.com/watch?v=9syRy35XqmU&list=PLpXCAa5_ykleN-CRRLDBwL-eBYWqdsgpc&index=5&ab_channel=3arbaouiMehdi',
        type: 'ENUM_YOUTUBE',
      },
      {
        order: 6,
        title:
          'Get and Set HTML Content by using innerHTML & Security Manipulation',
        description: '',
        link:
          'https://www.youtube.com/watch?v=rwq2VvFFOfU&list=PLpXCAa5_ykleN-CRRLDBwL-eBYWqdsgpc&index=6&ab_channel=3arbaouiMehdi',
        type: 'ENUM_YOUTUBE',
      },
    ],
  },
];

module.exports = {
  curriculums,
};
