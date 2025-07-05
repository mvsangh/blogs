type Social = {
  label: string;
  link: string;
};

type Presentation = {
  //mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  title: "Hi I'm Mandar 👋",
  // profile: "/profile.webp",
  description:
    "Hey there! I’m a Cybersecurity Automation Engineer with a strong background in Linux systems, cloud security, and building EDR solutions. I love working with open source tools and creating smart, efficient ways to detect and respond to threats. My work often involves tools like Wazuh, Osquery, and Suricata, and I’m always looking for ways to improve and automate security operations. When I’m not deep in logs or scripts, you’ll find me experimenting with new security stacks or sharing what I’ve learned through writing and projects.",
  socials: [
    {
      label: "Github",
      link: "https://github.com/mvsangh",
    },
  ],
};

export default presentation;
