// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProjectStore = defineStore('projectStore', () => {
  const projects = [
    {
      id: 1,
      img: 'project_1.png',
      name: 'Modern Kitchan',
      category: 'Decor / Artchitecture',
      title: 'Let’s Get Solution For Building Construction Work',
      text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
        Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
      quote: `The details are not the details. 
        They make the design.`,
      date: '26 December,2022',
      tags: 'Living Area',
      article: {
        title: 'Design sprints are great',
        content: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
        bullet: [
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        ]
      }
    },
    {
      id: 2,
      img: 'project_2.png',
      name: 'Modern Kitchan',
      category: 'Decor / Artchitecture',

      date: '26 December,2022',
      tags: 'Bed Room',
      article: {
        title: 'Design sprints are great',
        content: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
        bullet: [
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        ]
      }
    },
    {
      id: 3,
      img: 'project_3.png',
      name: 'Modern Kitchan',
      category: 'Decor / Artchitecture',
      date: '26 December,2022',
      tags: 'Bathroom',
      article: {
        title: 'Design sprints are great',
        content: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
        bullet: [
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        ]
      }
    },
    {
      id: 4,
      img: 'project_4.png',
      name: 'Modern Kitchan',
      category: 'Decor / Artchitecture',
      date: '26 December,2022',
      tags: 'Kitchan',
      article: {
        title: 'Design sprints are great',
        content: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
        bullet: [
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        ]
      }
    },
    {
      id: 5,
      img: 'Minimal_Bedroom_1.png',
      name: "Minimal Bedroom",
      category: "Decor / Artchitecture",
      date: '26 December,2022',
      tags: 'Bed Room',
      article: {
        title: 'Design sprints are great',
        content: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
        bullet: [
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        ]
      }
    },
    {
      id: 6,
      img: 'Minimal_Bedroom_2.png',
      name: "Minimal Bedroom",
      category: "Decor / Artchitecture",
      date: '26 December,2022',
      tags: 'Bed Room',
      article: {
        title: 'Design sprints are great',
        content: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
        bullet: [
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        ]
      }
    },
    {
      id: 7,
      img: 'Classic_Minimal_Bedroom_1.png',
      name: "Classic Minimal Bedroom",
      category: "Decor / Artchitecture",
      date: '26 December,2022',
      tags: 'Bed Room',
      article: {
        title: 'Design sprints are great',
        content: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
        bullet: [
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        ]
      }
    },
    {
      id: 8,
      img: 'Modern_Bedroom.png',
      name: "Modern Bedroom",
      category: "Decor / Artchitecture",
      date: '26 December,2022',
      tags: 'Living Area',
      article: {
        title: 'Design sprints are great',
        content: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
        bullet: [
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        ]
      }
    },
    {
      id: 9,
      img: 'Minimal_Bedroom_Table.png',
      name: "Minimal Bedroom table",
      category: "Decor / Artchitecture",
      date: '26 December,2022',
      tags: 'Bed Room',
      article: {
        title: 'Design sprints are great',
        content: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
        bullet: [
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        ]
      }
    },
    {
      id: 10,
      img: 'System_Table.png',
      name: "System Table",
      category: "Decor / Artchitecture",
      date: '26 December,2022',
      tags: 'Bathroom',
      article: {
        title: 'Design sprints are great',
        content: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
        bullet: [
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        ]
      }
    },
    {
      id: 11,
      img: 'Modern_Medroom.png',
      name: "Modern Medroom",
      category: "Decor / Artchitecture",
      date: '26 December,2022',
      tags: 'Kitchan',
      article: {
        title: 'Design sprints are great',
        content: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
        bullet: [
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        ]
      }
    },
    {
      id: 12,
      img: 'Modern_Bedroom_2.png',
      name: "Modern Bedroom",
      category: "Decor / Artchitecture",
      date: '26 December,2022',
      tags: 'Living Area',
      article: {
        title: 'Design sprints are great',
        content: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
        bullet: [
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        ]
      }
    }
  ]

  const tags = ["Bathroom", "Bed Room", "Kitchan", "Living Area"];

  const banners = [
    {
      id: 'about_us',
      img: "/images/banners/about_us.png",
      title: "About Us",
      subtitle: "Home / About Us"
    },
    {
      id: 'blog',
      img: "/images/banners/articles_news.png",
      title: "Articles & News",
      subtitle: "Home / Blog"
    },
    {
      id: 'blog_details',
      img: "/images/banners/blog_details.png",
    },
    {
      id: 'contacts',
      img: "/images/banners/contact.png",
      title: "Contact Us",
      subtitle: "Home / Contact"
    },
    {
      id: 'project',
      img: "/images/banners/projects.png",
      title: "Our Project",
      subtitle: "Home / Project"
    },
    {
      id: 'project_details',
      img: "/images/banners/project_details.png",
    },
    {
      id: 'services',
      img: "/images/banners/services.png",
      title: "Services",
      subtitle: "Home / Services"
    }
  ]

  return {
    projects,
    tags,
    banners,
  }
})
