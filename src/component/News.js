import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  articles = [
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Katelyn  Polantz, Tierney Sneed, John Fritze, Hannah Rabinowitz, Devan Cole, Holmes Lybrand, Marshall Cohen",
      "title": "Special counsel Jack Smith provides fullest picture yet of his 2020 election case against Trump in new filing - CNN",
      "description": "Federal prosecutors laid out their most extensive case to date against former President Donald Trump for his effort to overturn the 2020 election in a sweeping legal brief that was unsealed Wednesday by a federal judge who is weighing the explosive criminal c…",
      "url": "https://www.cnn.com/2024/10/02/politics/jack-smith-donald-trump-filing/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/dle/2024-08-28/5c9a3542-8bd8-4a58-b9cc-2bd1e465e6d9.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-10-03T01:20:00Z",
      "content": "Federal prosecutors laid out their most extensive case to date against former President Donald Trump for his effort to overturn the 2020 election in a sweeping legal brief that was unsealed Wednesday… [+18569 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Milwaukee Journal Sentinel"
      },
      "author": "JR Radcliffe",
      "title": "Brewers claw back a run in fifth, trail 3-2 against Mets - Milwaukee Journal Sentinel",
      "description": "Jackson Chourio led the Brewers to a comeback victory over the Mets in Game 2 of the playoff series.",
      "url": "https://www.jsonline.com/story/sports/mlb/brewers/2024/10/02/brewers-vs-mets-wild-card-playoff-game-2-score-updates-highlights/75479698007/",
      "urlToImage": "https://www.jsonline.com/gcdn/authoring/authoring-images/2024/10/03/PMJS/75490264007-brewers-02-7.jpg?crop=8632,4859,x0,y386&width=3200&height=1802&format=pjpg&auto=webp",
      "publishedAt": "2024-10-03T01:18:45Z",
      "content": "The Milwaukee Brewers' season continues after a 5-3 comeback victory over the New York Mets in Game 2 of their National League wild-card series.\r\nTrailing 3-2 entering the bottom of the eighth inning… [+20456 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "KSL.com"
      },
      "author": "Emily Ashcraft, KSL.com",
      "title": "1 in 12 Utahns suffers from long COVID, health department study says - KSL.com",
      "description": "The Utah Department of Health and Human Services released a report on Wednesday saying long COVID is significantly impacting many Utahns.",
      "url": "https://www.ksl.com/article/51147236/1-in-12-utahns-suffers-from-long-covid-health-department-study-says",
      "urlToImage": "https://img.ksl.com/slc/3015/301587/30158768.jpeg?filter=kslv2/responsive_story_lg",
      "publishedAt": "2024-10-03T01:07:03Z",
      "content": "SALT LAKE CITY Blake Bockholt says he used to be very active. He was a high school English teacher who would go running, cycling and canyoneering.\r\nBockholt suffers from long COVID.\r\n\"My life is comp… [+5146 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Doyinsola Oladipo, David Shepardson",
      "title": "US port workers union backed by White House in strike - Reuters",
      "description": "A strike by 45,000 dockworkers halting shipments at U.S. East Coast and Gulf Coast ports entered its second day on Wednesday with no negotiations currently scheduled between the two sides, sources told Reuters.",
      "url": "https://www.reuters.com/world/us/white-house-sides-with-union-dockworker-strike-enters-second-day-2024-10-02/",
      "urlToImage": "https://www.reuters.com/resizer/v2/TVO6G4ZP7NPFBFFR4HEMCFRKMI.jpg?auth=2ef61ba37e334de5c8e6fa144b915883e66e6f48488726eedf66759d3b093605&height=1005&width=1920&quality=80&smart=true",
      "publishedAt": "2024-10-03T00:55:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "MarketWatch"
      },
      "author": "Therese Poletti",
      "title": "Opinion: OpenAI is now worth more than 87% of S&P 500 companies. It faces a tough test ahead. - MarketWatch",
      "description": "",
      "url": "https://www.marketwatch.com/story/openai-is-now-worth-more-than-87-of-the-s-p-500-it-faces-a-tough-test-ahead-af1d4c3a",
      "urlToImage": "https://images.mktw.net/im-05178718/social",
      "publishedAt": "2024-10-03T00:40:00Z",
      "content": "OpenAI just became one of the highest-valued privately held companies with its latest funding round, but it has a lot to live up to, amid ever- increasing competition.\r\nOn Wednesday,\r\n the creator of… [+429 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Laura Paddison, Holly Yan",
      "title": "People moved to Asheville to escape extreme weather. They forgot its tragic history. - CNN",
      "description": "The destruction reveals this city — like any in America — was never safe, it’s just that memories are short and the climate crisis consistently underestimated.",
      "url": "https://www.cnn.com/2024/10/02/climate/asheville-flooding-history-helene/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2024-09-29t235926z-28149801-rc2haaau8ov5-rtrmadp-3-storm-helene.JPG?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-10-03T00:21:00Z",
      "content": "Asheville was touted as a climate haven, a place to escape the worst ravages of extreme weather. But Hurricane Helenes deadly path of destruction reveals this North Carolina city, like any in America… [+5505 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "KAREEM CHEHAYEB, SAMY MAGDY",
      "title": "Israel presses forward on two fronts and reports 8 combat deaths as fears of a wider war mount - The Associated Press",
      "description": "Israel is pressing forward on two fronts. The Israeli military is pursuing a ground incursion into Lebanon against Hezbollah that left eight Israeli soldiers dead Wednesday and conducting strikes in Gaza that killed dozens, including children. As Israel vowed…",
      "url": "https://apnews.com/article/israel-iran-lebanon-hezbollah-gaza-news-10-02-2024-7d93f71b7894177b4f9c303671ee55de",
      "urlToImage": "https://dims.apnews.com/dims4/default/4090be6/2147483647/strip/true/crop/8640x4860+0+450/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc7%2F1d%2Fc650289236699cfa010f4f131c14%2F0ce38b395293477f91b783f33f8c9634",
      "publishedAt": "2024-10-03T00:06:00Z",
      "content": "BEIRUT (AP) Israel pressed forward on two fronts Wednesday, pursuing a ground incursion into Lebanon against Hezbollah that left eight Israeli soldiers dead and conducting strikes in Gaza that killed… [+8222 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "Aditi Srivastava",
      "title": "Jax Taylor reveals he never ‘legally’ married Brittany Cartwright; hands over full child custody - Hindustan Times",
      "description": "After announcing their split, Jax Taylor reveals he and Brittany Cartwright were never legally married. He also agreed to give her full custody of their son.",
      "url": "https://www.hindustantimes.com/entertainment/tv/jax-taylor-reveals-he-never-legally-married-brittany-cartwright-hands-over-full-child-custody-101727913331775.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/10/02/1600x900/Brittany-Cauchi-Cruz-Jax-Taylor-051823-eb5a077c3c6_1710299513295_1727913540446.webp",
      "publishedAt": "2024-10-03T00:00:50Z",
      "content": "Jax Taylor has dropped a bombshell about his marriage to Brittany Cartwright, in a twist no one saw coming. Days after announcing their separation and divorce, the former Vanderpump Rules star is now… [+3481 chars]"
    },
    {
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": null,
      "title": "Witt delivers another big hit to put Royals in ALDS - ESPN",
      "description": "Bobby Witt Jr. drove in the go-ahead run to send the Royals into the AL Division Series with a 2-1 victory over the Orioles on Wednesday for a two-game sweep of their AL Wild Card Series.",
      "url": "https://www.espn.com/mlb/story/_/id/41576560/royals-sweep-orioles-wild-card-series-advance-face-yankees-alds",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1003%2Fr1395310_1296x729_16%2D9.jpg",
      "publishedAt": "2024-10-02T23:53:00Z",
      "content": "BALTIMORE -- Bobby Witt Jr. beat out an infield single to drive in the go-ahead run and send the Kansas City Royals into the American League Division Series with a 2-1 victory over the Baltimore Orio… [+4574 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Lisa Richwine",
      "title": "Doctor pleads guilty in death of 'Friends' star Matthew Perry - Reuters",
      "description": "One of two California doctors who were among the five people charged in the overdose death of \"Friends\" star Matthew Perry pleaded guilty on Wednesday to illegally distributing the drug ketamine.",
      "url": "https://www.reuters.com/world/us/doctor-expected-plead-guilty-death-friends-star-matthew-perry-2024-10-02/",
      "urlToImage": "https://www.reuters.com/resizer/v2/QGEH7OJNTRPNLDVQFGQYR3FJBQ.jpg?auth=d5597f1f77c2e0d9632be035e383bd600bbd5970eedc3733dff8561c57814285&height=1005&width=1920&quality=80&smart=true",
      "publishedAt": "2024-10-02T23:49:53Z",
      "content": null
    },
    {
      "source": {
        "id": "abc-news",
        "name": "ABC News"
      },
      "author": "MARI YAMAGUCHI Associated Press",
      "title": "An American bomb from WWII explodes at a Japanese airport, leaving a crater on the taxiway - ABC News",
      "description": "A U.S. bomb from World War II has exploded at a Japanese airport, causing a large crater in a taxiway and the cancellation of more than 80 flights",
      "url": "https://abcnews.go.com/International/wireStory/us-bomb-world-war-ii-explodes-japanese-airport-114419077",
      "urlToImage": "https://i.abcnewsfe.com/a/97c8e573-9412-4aa9-bebf-aecf220939a4/wirestory_bf561e4c71f644267d86d8589b6999d4_16x9.jpg?w=1600",
      "publishedAt": "2024-10-02T23:13:03Z",
      "content": "TOKYO -- An unexploded U.S. bomb from World War II that had been buried at a Japanese airport exploded Wednesday, causing a large crater in a taxiway and the cancellation of more than 80 flights, Jap… [+1313 chars]"
    },
    {
      "source": {
        "id": "politico",
        "name": "Politico"
      },
      "author": "Joe Anuta",
      "title": "New York City Mayor Eric Adams — his own security clearance in question — says NYPD on high alert - POLITICO",
      "description": "City Hall has declined to say whether the mayor’s security clearance has been affected by his federal indictment as the city prepares for potential unrest ahead of Oct. 7.",
      "url": "https://www.politico.com/news/2024/10/02/eric-adams-security-nypd-00182275",
      "urlToImage": "https://static.politico.com/c7/d7/2f18f56546eab6b6d50694e4c8b7/54037183827-94fa682e31-o.jpg",
      "publishedAt": "2024-10-02T22:55:57Z",
      "content": "While Adams has pleaded not guilty to the charges, he and his team have declined to say whether the Democrat is still receiving the same level of intelligence from federal law enforcement authorities… [+4362 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CBS Sports"
      },
      "author": "",
      "title": "Davante Adams landing spots: Steelers, Saints, Jets among potential trade destinations for Raiders star WR - CBS Sports",
      "description": "Adams could be dealt to a contender before the trade deadline",
      "url": "https://www.cbssports.com/nfl/news/davante-adams-landing-spots-steelers-saints-jets-among-potential-trade-destinations-for-raiders-star-wr/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/10/01/2225a764-0fbd-45ff-b505-fd67a152ebcd/thumbnail/1200x675/bc26f2f82c9b047e74337b756ad5c39d/adams-raiders-g.jpg",
      "publishedAt": "2024-10-02T22:35:00Z",
      "content": "Davante Adams trade rumors are circling once again as the Raiders have reportedly begun calling teams to kick the tires on a possible deal for the veteran All-Pro receiver. Adams in turn has reported… [+4136 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Atlantic"
      },
      "author": "Elaine Godfrey",
      "title": "You’re Killing Me, Walz - The Atlantic",
      "description": "If Minnesota’s governor is on the Democratic ticket for his retail politics, why is he flubbing basic questions about prior misstatements?",
      "url": "https://www.theatlantic.com/politics/archive/2024/10/tim-walz-debate-flub/680124/",
      "urlToImage": "https://cdn.theatlantic.com/thumbor/fooCmjqWaAE0vs7vA412Bsv11iM=/0x43:2000x1085/1200x625/media/img/mt/2024/10/TimPiece/original.png",
      "publishedAt": "2024-10-02T22:00:00Z",
      "content": "About half an hour into last nights vice-presidential debate, the CBS anchor Margaret Brennan turned to Tim Walz and asked a question that the Minnesota governor had to have known would come. You sai… [+4933 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "WWD"
      },
      "author": "Maggie Clancy",
      "title": "Millie Bobby Brown Co-designed Her Galia Lahav Wedding Dress With a Dramatic Twist, Marries Jake Bongiovi in Tuscany - Yahoo Entertainment",
      "description": "Millie Bobby Brown married Jake Bongiovi in a custom Galia Lahav wedding dress during a multi-day wedding celebration in Tuscany over the weekend.",
      "url": "http://wwd.com/pop-culture/celebrity-news/millie-bobby-brown-galia-lahav-wedding-dress-1236667875/",
      "urlToImage": "https://wwd.com/wp-content/uploads/2024/10/marriage-millie-bobby-brown-wedding-dress.jpg?w=1000&h=563&crop=1",
      "publishedAt": "2024-10-02T21:24:37Z",
      "content": "Millie Bobby Brown said, “I do,” to Jake Bongiovi for the second time, wearing a bespoke Galia Lahav gown for the wedding ceremony. The couple privately wed in May, and over the weekend they hosted a… [+1377 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": null,
      "title": "Biden opposes potential Israeli strikes on Iranian nuclear sites - BBC.com",
      "description": "\"The answer is no,\" Biden said, adding that any attack by Israel on Iran must be done \"proportionally\".",
      "url": "https://www.bbc.com/news/articles/cx24d6ky5r7o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/3b3c/live/280ae010-80fc-11ef-b12a-8120c359fbba.jpg",
      "publishedAt": "2024-10-02T21:24:01Z",
      "content": "US President Joe Biden has said he does not support any potential Israeli retaliatory strike on Iranian nuclear sites after Iran launched around 180 missiles at Israel.\r\nTensions are high between Ira… [+2040 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Space.com"
      },
      "author": "Mike Wall",
      "title": "ULA's Vulcan Centaur rocket is 'go' for 2nd-ever launch on Oct. 4 - Space.com",
      "description": "The new rocket is scheduled to lift off on Friday (Oct. 4) at 6 a.m. EDT (1000 GMT).",
      "url": "https://www.space.com/ula-vulcan-centaur-go-launch-cert2",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/sHQaP2Cqwz2U9uYnUgwj3P-1200-80.jpg",
      "publishedAt": "2024-10-02T21:00:21Z",
      "content": "United Launch Alliance's (ULA) new Vulcan Centaur rocket is ready for its second-ever liftoff, which is targeted for Friday (Oct. 4).\r\nULA conducted a launch readiness review (LRR) today (Oct. 2) for… [+3913 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": null,
      "title": "In pictures: Solar eclipse creates ‘ring of fire’ - CNN",
      "description": "An annular solar eclipse was seen in parts of South America on Wednesday, creating a blazing “ring of fire” in the sky.",
      "url": "https://www.cnn.com/2024/10/02/science/gallery/in-pictures-solar-eclipse-ring-of-fire/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap24276700339840.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-10-02T20:58:00Z",
      "content": "An annular solar eclipse was seen in parts of South America on Wednesday, creating a blazing ring of fire in the sky.\r\nAnnular solar eclipses occur when the moon passes between Earth and the sun and … [+383 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Reuters",
      "title": "Russian court freezes funds of US banks JP Morgan and Mellon - Reuters",
      "description": "The Moscow Region Arbitration Court on Wednesday froze funds of the U.S. Bank of New York Mellon held by the Russian branch of Citibank as well as funds of JP Morgan Chase held by its Russian affiliate of Morgan Chase Bank amounting in total to about $372 mil…",
      "url": "https://www.reuters.com/business/finance/russian-court-freezes-funds-us-banks-jp-morgan-mellon-2024-10-02/",
      "urlToImage": "https://www.reuters.com/resizer/v2/BCLWKJDZIBNKRGXIR2SJG4JTJU.jpg?auth=a97159db260682ce9814297fe35d688f9ebec26abb3cc0ba49d940fc03f2523e&height=1005&width=1920&quality=80&smart=true",
      "publishedAt": "2024-10-02T20:21:21Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Gabrielle Fonrouge",
      "title": "Levi Strauss trims guidance as it weighs sale of Dockers business - CNBC",
      "description": "Denim-maker Levi Strauss is looking to sell its Dockers brand as the khaki maker drags down the company's overall performance.",
      "url": "https://www.cnbc.com/2024/10/02/levi-levi-earnings-q3-2024.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107227135-1681833900406-gettyimages-1480360171-img_0209_lumbdean.jpeg?v=1727900994&w=1920&h=1080",
      "publishedAt": "2024-10-02T20:12:58Z",
      "content": "Denim-crazed consumers are turning to Levi Strauss &amp; Co for new jeans, but the company's overall business is being dragged down by its Dockers brand, which the company is now considering selling … [+5283 chars]"
    }
  ]

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loader: false
    }
    // console.log(this.articles)
  }

  render() {

    return (
      <div className='container'>
        <h1 className='text-center mb-5'>News</h1>
        <div className='row'>

          {this.state.articles.map((article) => (
             <div className='col-4' key={article.url}> {/*{key should be unique} */}
              <NewsItem title={article.title} imgUrl={article.urlToImage} desc={article.description} newsUrl={article.url}/>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default News