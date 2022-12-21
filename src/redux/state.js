/* eslint-disable */
const state =  {
    user: {
        username: 'test1',
        email: 'test-user@example.com',
        // password: 'test1234!'
    },

    online: false,

    listings: [ // this is the data object
        {
            "id": 1,
            "name": 'Saint Louis Bread Company',
            "description":
                'Panera began in 1987 as St. Louis Bread Company, ' +
                'a humble community bakery founded with a sourdough starter from San Francisco' +
                'and a dream of putting a loaf of bread in every arm. ' ,
            "address": " 99 Grasso Plaza, St. Louis, MO 63123",
            "hours": "6AM-9PM"
        },

        {
            "id": 2,
            "name": `Schnuck's Grocery Store`,
            "description":
                'Schnucks is a supermarket chain. ' +
                'Based in the St. Louis area, the company was founded in 1939 with the opening of a 1,000-square-foot (93 m2) store in north St. Louis ' +
                'and currently operates over 100 stores in four states throughout the Midwest (Missouri, Illinois, Indiana, and Wisconsin). ' +
                'Schnucks also ran stores under the Logli Supermarkets and Hilander Foods banners. ' +
                'Schnucks is one of the largest privately-held supermarket chains in the United States and dominates the St. Louis metro grocery market.',
            "address": "10070 Gravois Rd, St. Louis, MO 63123",
            "hours": "6AM-10PM"
        },

        {
            "id": 3,
            "name": '9 Mile Garden',
            "description":
                '9 Mile Garden is a collaboration between local chef and restaurateur Brian Hardesty and Seneca Commercial Real Estate. ' +
                'Their shared vision was to create a destination where people from around St. Louis and beyond could come together ' +
                'to enjoy food, entertainment, and community in a family-friendly environment.',
            "address": "9375 Gravois Rd, Affton, MO 63123",
            "hours": "4PM-12AM"
        },

        {
            "id": 4,
            "name": 'Club Fitness Inc',
            "description":
                'Club Fitness has been an employee-owned gym since 2015. ' +
                'As owners, our team members take a lot of pride in providing the best possible gym experience for our members. ' +
                'Clean, functional, and friendly are the baseline standards our team members strive for every day.',
            "address": "10047 Gravois Rd, Affton, MO 63123",
            "hours": "Open 24Hrs"
        },

        {
            "id": 5,
            "name": 'Courtesy Diner',
            "description":
                'Courtesy Sandwich Shop was established in 1935, once a bustling chain with over a dozen national locations.  ' +
                'In fact, when eminent domain laws were enforced, one New York Courtesy became rubble to make room for the World Trade Center. ' +
                'In 1997, tradition was reborn when an established restaurant purchased the name from the estate of Leon and Helen Burrow.  ' +
                'As owner of O.T. Hodges Chili Parlor, eight Hen House restaurants, and Country Fixin`s truck stop,  ' +
                'the buyer was well versed in all aspects of restaurants, especially 24 hour eateries, ' +
                'and changed the name from Courtesy Sandwich Shop to Courtesy Diner. ',
            "address": "8000 S Laclede Station Rd, St. Louis, MO 63123",
            "hours": "Open 24Hrs"
        },

        {
            "id": 6,
            "name": `Sam's Steakhouse`,
            "description":
                'Sam’s Steakhouse is a longstanding and premier South St. Louis County restaurant locally owned and operated.' +
                'For over thirty years, Sam’s Steakhouse has been providing Saint Louis with the best steaks in the Saint Louis region.' +
                'Sam’s Steakhouse is located on the original grounds of the Busch family estate, better known as Grant’s Farm.',
            "address": "10205 Gravois Rd, St. Louis, MO 63123",
            "hours": "5PM-10PM"
        },

        {
            "id": 7,
            "name": 'Syberg`s Restaurant',
            "description":
                'In 1975, Richard and Sally Syberg`s started a catering business that became an instant hit.' +
                '\n' +
                'Sally said, "We catered a wedding, the first one. And that led to more catering and we ran out of places to put food."\n' +
                '\n' +
                'The couple opened their very first restaurant on Gravois Road 37 years ago. ' +
                'Syberg\'s now has six locations and two sister restaurants, Twisted Tree Steakhouse and Helen Fitzgerald\'s.',
            "address": "7802 Gravois Rd, St. Louis, MO 63123",
            "hours": "11AM-11PM"
        },

        {
            "id": 8,
            "name": 'Dominoes Pizza',
            "description":
                '\n' +
                'Domino\'s is a Global Brand, founded in 1960 ' +
                'and is the recognized world leader in pizza delivery operating a network of company-owned ' +
                'and franchise-owned stores in the United States and international markets.' +
                'In 1996, the first Domino\'s Pizza store was opened in New Delhi.',
            "address": "8814 Gravois Rd, Affton, MO 63123",
            "hours": "10:30AM-12PM"
        },

        {
            "id": 9,
            "name": `Fred's South County Auto Repair`,
            "description":
                'Do you remember the good ol\' days when your dad trusted the neighborhood mechanic? ' +
                'After 46 years in business, those trusted relationships can still be found at Fred\'s South County Auto Repair. ' +
                'Our philosophy hasn\'t changed over the years, ' +
                'but auto repair surely has! When you visit us you\'ll find the latest technology to service today\'s vehicles. ' +
                'We invite you to call, stop by or email us to discuss your needs. ' +
                'We\'re fully dedicated to making your experience a pleasurable one.',
            "address": "9201 Gravois Rd, St. Louis, MO 63123",
            "hours": "7AM-5PM"
        },
    ],



};

export default state;