import React from 'react'
import { screen, render, wait, fireEvent} from '@testing-library/react'
import App from '../App'
import {fetchShow as mockFetchShow} from '../api/fetchShow'



jest.mock('../api/fetchShow')
const episodesData = [  {
    "id": 553946,
    "url": "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
    "name": "Chapter One: The Vanishing of Will Byers",
    "season": 1,
    "number": 1,
    "type": "regular",
    "airdate": "2016-07-15",
    "airtime": "",
    "airstamp": "2016-07-15T12:00:00+00:00",
    "runtime": 60,
    "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
    },
    "summary": "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
    "_links": {
        "self": {
            "href": "http://api.tvmaze.com/episodes/553946"
        }
    }
},
{
    "id": 909343,
    "url": "http://www.tvmaze.com/episodes/909343/stranger-things-2x03-chapter-three-the-pollywog",
    "name": "Chapter Three: The Pollywog",
    "season": 2,
    "number": 3,
    "type": "regular",
    "airdate": "2017-10-27",
    "airtime": "",
    "airstamp": "2017-10-27T12:00:00+00:00",
    "runtime": 60,
    "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/132/332039.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/132/332039.jpg"
    },
    "summary": "<p>Dustin takes in a stray and calls it D'Artagnan. However, his plans to show it to Mr. Clarke don't go as intended. Meanwhile, Max tries to convince Mike to let her join the group, El sneaks out to pay her friends a visit, and Will decides to take a stand and face his fears.</p>",
    "_links": {
        "self": {
            "href": "http://api.tvmaze.com/episodes/909343"
        }
    }
},
{
    "id": 1576472,
    "url": "http://www.tvmaze.com/episodes/1576472/stranger-things-3x04-chapter-four-the-sauna-test",
    "name": "Chapter Four: The Sauna Test",
    "season": 3,
    "number": 4,
    "type": "regular",
    "airdate": "2019-07-04",
    "airtime": "",
    "airstamp": "2019-07-04T12:00:00+00:00",
    "runtime": 53,
    "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/204/511312.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/204/511312.jpg"
    },
    "summary": "<p>Mike, Lucas, and Will recruit El and Max to help them learn who the Mind Flayer's host is. Robin, Steve, and Dustin recruit someone to sneak into Lynx, and Nancy and Jonathan are fired.</p>",
    "_links": {
        "self": {
            "href": "http://api.tvmaze.com/episodes/1576472"
        }
    }
},
{
    "id": 1752754,
    "url": "http://www.tvmaze.com/episodes/1752754/stranger-things-4x01-chapter-one-the-hellfire-club",
    "name": "Chapter One: The Hellfire Club",
    "season": 4,
    "number": 1,
    "type": "regular",
    "airdate": "",
    "airtime": "",
    "airstamp": null,
    "runtime": 60,
    "image": null,
    "summary": null,
    "_links": {
        "self": {
            "href": "http://api.tvmaze.com/episodes/1752754"
        }
    }
}]

test("renders correctly", () => {

    mockFetchShow.mockResolvedValueOnce(episodesData)
    
    render(<App/>)


    const episodesList = screen.queryAllByTestId(/episode/i)
    const dropdown = screen.findByTestId('season')
    

    fireEvent.click(dropdown, {target: {value: "Season 1" }})
   
})


