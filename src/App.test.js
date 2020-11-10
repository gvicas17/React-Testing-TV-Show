import React from 'react'
import {render, screen} from '@testing-library/react'
import App from './App'
import {fetchShow as mockFetchShow} from './api/fetchShow'
import userEvent from '@testing-library/user-event'


jest.mock('./api/fetchShow')

const episodesData = {
  "id": 2993,
  "url": "http://www.tvmaze.com/shows/2993/stranger-things",
  "name": "Stranger Things",
  "type": "Scripted",
  "language": "English",
  "genres": [
      "Drama",
      "Fantasy",
      "Science-Fiction"
  ],
  "status": "Running",
  "runtime": 60,
  "premiered": "2016-07-15",
  "officialSite": "https://www.netflix.com/title/80057281",
  "schedule": {
      "time": "",
      "days": []
  },
  "rating": {
      "average": 8.7
  },
  "weight": 99,
  "network": null,
  "webChannel": {
      "id": 1,
      "name": "Netflix",
      "country": null
  },
  "externals": {
      "tvrage": 48493,
      "thetvdb": 305288,
      "imdb": "tt4574334"
  },
  "image": {
      "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
      "original": "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"
  },
  "summary": "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
  "updated": 1604039949,
  "_links": {
      "self": {
          "href": "http://api.tvmaze.com/shows/2993"
      },
      "previousepisode": {
          "href": "http://api.tvmaze.com/episodes/1576476"
      }
  },
  "_embedded": {
      "episodes": [
{
      id: 578665,
      url: 'http://www.tvmaze.com/episodes/578665/stranger-things-1x04-chapter-four-the-body',
      name: 'Chapter Four: The Body',
      season: 1,
      number: 4,
      type: 'regular',
      airdate: '2016-07-15',
      airtime: '',
      airstamp: '2016-07-15T12:00:00+00:00',
      runtime: 60,
      image: {
        medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/67/168921.jpg',
        original: 'http://static.tvmaze.com/uploads/images/original_untouched/67/168921.jpg'
      },
      summary: '<p>Jim realizes that the government is covering something up about Will\'s death and begins a personal investigation. Meanwhile, Nancy discovers that Jonathan has information about Barbara\'s disappearance, while Mike and his friends smuggle Jane into the school so she can use the ham radio to contact Will.</p>',
      _links: {
        self: {
          href: 'http://api.tvmaze.com/episodes/578665'
        }
      }
    }
      ]}
}
    
  
  
  

  test('renders app with no erros', async () => {
    mockFetchShow.mockResolvedValueOnce(episodesData)
    
    render(<App />)
  
})

test('fetches episode data renders dropdown', async() => {
  mockFetchShow.mockResolvedValueOnce(episodesData)
  render(<App/>)
  const dropdown = await screen.findByText(/Select a season/i);
    userEvent.click(dropdown);
    const seasonOne = await screen.findByText(/Season 1/i);
    userEvent.click(seasonOne);
    await screen.findByText(/Chapter Four: The Body/i);
})



