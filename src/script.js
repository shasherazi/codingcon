const mainFeaturedSpeakers = document.querySelector('.main-featured-speakers');

const featuredSpeakers = [
  {
    name: 'Dylan Beattie',
    title: 'The one in the hat',
    image: './src/assets/images/featuredSpeakers/dylanBeattie.jpg',
    description: "Dylan Beattie is an independent consultant who has been building data-driven web applications since the 1990s. He's managed teams, taught workshops, and worked on everything from tiny standalone websites to complex distributed systems.",
  },
  {
    name: 'Irina Scurtu',
    title: 'Microsoft MVP, Software Architect',
    image: './src/assets/images/featuredSpeakers/irinaScurtu.jpeg',
    description: 'Microsoft MVP for Developer Technologies, Software Architect and Microsoft Certified Trainer, always in a quest for latest trends and best practices in architecture, .NET and the world around it.',
  },
  {
    name: 'Sam Newman',
    title: 'Independent Consultant',
    image: './src/assets/images/featuredSpeakers/samNewman.jpg',
    description: 'Sam Newman is interested in technology at the intersection of things, from development, to ops, to security, usability and organisations. After over a decade at ThoughtWorks he is now an independent consultant.',
  },
  {
    name: 'Heather Downing',
    title: 'Principal Developer Advocate at Okta',
    image: './src/assets/images/featuredSpeakers/heatherDowning.jpg',
    description: 'Climbing the technology mountain and halfway up the side. Experience in .Net, mobile applications and more recently voice interface development. Dabbles in iOT & AR/VR.',
  },
];

featuredSpeakers.forEach((speaker) => {
  const speakerDiv = document.createElement('div');
  speakerDiv.classList.add('main-featured-speakers-speaker');
  mainFeaturedSpeakers.appendChild(speakerDiv);

  const imageDiv = document.createElement('div');
  imageDiv.classList.add('main-featured-speakers-speaker-image-div');
  speakerDiv.appendChild(imageDiv);

  const speakerImage = document.createElement('img');
  speakerImage.classList.add('main-featured-speakers-speaker-image');
  speakerImage.src = speaker.image;
  speakerImage.alt = `Image of ${speaker.name}`;
  imageDiv.appendChild(speakerImage);

  const speakerText = document.createElement('div');
  speakerText.classList.add('main-featured-speakers-speaker-text');
  speakerDiv.appendChild(speakerText);

  const speakerName = document.createElement('h3');
  speakerName.classList.add('main-featured-speakers-speaker-name');
  speakerName.textContent = speaker.name;
  speakerText.appendChild(speakerName);

  const speakerTitle = document.createElement('h4');
  speakerTitle.classList.add('main-featured-speakers-speaker-title');
  speakerTitle.textContent = speaker.title;
  speakerText.appendChild(speakerTitle);

  const speakerDescription = document.createElement('p');
  speakerDescription.classList.add('main-featured-speakers-speaker-description');
  speakerDescription.textContent = speaker.description;
  speakerText.appendChild(speakerDescription);
});
