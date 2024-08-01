import {defineStore} from "pinia";

export const useArticleStore = defineStore('articleStore', () => {
  const articles = [
    {
      id: 1,
      title: 'Let’s Get Solution For Building Construction Work',
      category: 'Kitchan Design',
      date: '26 December,2022',
      img: 'kitchen-design.png',
    },
    {
      id: 2,
      title: 'Low Cost Latest Invented Interior Designing Ideas',
      category: 'Living Design',
      date: '22 December,2022',
      img: 'lifestyle-design.png',
    },
    {
      id: 3,
      title: 'Best For Any Office & Business Interior Solution',
      category: 'Interior Design',
      date: '25 December,2022',
      img: 'interior-design.png'
    },
    {
      id: 4,
      title: 'Let’s Get Solution For Building Construction Work',
      category: 'Kitchan Design',
      date: '26 December,2022',
      img: 'kitchen-design_2.png'
    },
    {
      id: 5,
      title: 'Low Cost Latest Invented Interior Designing Ideas',
      category: 'Living Design',
      date: '22 December,2022',
      img: 'lifestyle-design_2.png'
    },
    {
      id: 6,
      title: 'Best For Any Office & Business Interior Solution',
      category: 'Interior Design',
      date: '25 December,2022',
      img: 'interior-design_2.png'
    }
  ]

  const post = {
    title: 'Low Cost Latest Invented Interior Designing Ideas',
      img: '/images/articles/interior-design.png',
      date: '26 December,2022',
      text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
  }

  return {
    articles,
    post
  }
})