import  {React,createContext,useState } from 'react'
export const ContextArticle = createContext();

export const DataProvider = (props) => {
    const [latest,setlatest]=useState([
        {
            author:'John',
            title:'Buddhist temple',
            image:'/images/Borobudur.jpg',
            category:'latest',
            description:'A Buddhist temple or Buddhist monastery is the place of worship for Buddhists, the followers of Buddhism. They include the structures called vihara, chaitya.',
            date:'Temple / August 21 2017',
            id:'1',
            explanation:'Buddhism is the second oldest religion in Indonesia after Hinduism, which arrived from India around the second century.[10] The history of Buddhism in Indonesia is closely related to the history of Hinduism, as a number of empires influenced by Indian culture were established around the same period. The oldest Buddhist archaeological site in Indonesia is arguably the Batujaya stupas complex in Karawang, West Java. The oldest relic in Batujaya was estimated to originate from the 2nd century, while the latest dated from the 12th century. Subsequently, significant numbers of Buddhist sites were found in Jambi, Palembang and Riau provinces in Sumatra, as well as in Central and East Java. The Indonesian archipelago has, over the centuries, witnessed the rise and fall of powerful Buddhist empires, such as the Sailendra dynasty, the Mataram and Srivijaya empires.'

        },
        {
            author: 'Micheal',
            title: 'Joshua tree',
            image: '/images/download.jpg',
            category:'latest',
            description: 'Yucca brevifolia is a plant species belonging to the genus Yucca. It is tree-like in habit, which is reflected in its common names: Joshua tree, yucca palm, tree yucca',
            date: 'Travel / August 21 2018',
            id:'2',
            explanation: 'The name "Joshua tree" is commonly said to have been given by a group of Mormon settlers crossing the Mojave Desert in the mid-19th century: The tree role in guiding them through the desert combined with its unique shape reminded them of a biblical story in which Joshua keeps his hands reached out for an extended period of time to enable the Israelites in their conquest of Canaan(Joshua, Further) shaggy leaves may have provided the appearance of a beard. However, no direct or contemporary attestation of this origin exists, and the name Joshua tree is not recorded until after Mormon contact; moreover, the physical appearance of the Joshua tree more closely resembles a similar story told of Moses.'

        },
        {
            author: 'Neil',
            title: 'Tosh valley',
            image: '/images/tosh.jpg',
            category: 'latest',
            description: 'Tosh village is in Himachal Pradesh. It is located at about 2,400 metres in elevation on a mountain slope on the right bank of the Parvati River in the Parvati Valley',
            date: 'Travel / August 21 2017',
            id:'3',
            explanation:'Summer becomes quite unbearable in the plains of India. This is when you feel like escaping to the mountains for that is where you find some peace amidst pleasant weather and breathtaking views. Himachal Pradesh is full of precious gems that serve as excellent summer getaways. One such gem is the beautiful Parvati Valley. With a number of beautiful villages scattered across the lush green hills, this region is one of the best getaways in north India. If you are planning a trip to Parvati Valley, chances are that you have already included places like Kasol on your list. However, there is a quaint village named Tosh which deserves your attention as much as any other part of the valley.you must visit Tosh on your trip to the Parvati Valley'

        },
        {
            author: 'Nicole',
            title: 'Catch waves with an adventures guide',
            image: '/images/sunset.jpg',
            category: 'article',
            description: 'A beach is a landform alongside a body of water which consists of loose particles. ',
            date: ' Adventure/ August 21 2017',
            id: '4',
            explanation: 'Beaches are an important part of American life. In addition to the range of recreational opportunities they offer, beaches provide unique habitats for a variety of plants and animals.  Beaches provide protection to residents living near the ocean by acting as a buffer against the high winds and waves of powerful storms, and help drive economic activity important to nearby communities.However, pollution at the beach can result in swimmers getting sick or temporary beach closures that negatively affect the local economy.In addition, overuse by visitors can damage sensitive habitats, such as beach dunes, and create marine debris.'

        },
        {
            author: 'Nicole',
            title: 'WhatsApp to revamp iOS chat design in future update',
            image: '/images/whatsapp.jpg',
            category: 'article',
            description: 'WhatsApp to remove Broadcast Lists and New Group rows from chat list on iOS; new access point. ',
            date: ' Technical/ August 21 2017',
            id: '5',
            explanation:' Instant messaging app WhatsApp is planning to revamp its chat user interface on Apple iOS devices.To do that, the application will be cleaning up its presentation by getting rid of certain rows.As reported by WABetaInfo, the version 22.1.72 update removes the ‘Broadcast Lists’ and ‘New Group’ rows from the top of the chat list.WhatsApp acknowledges that the options have been in place for years, whereby tapping the ‘Start New Chat’ button on the bottom right, users can create new groups.'

        },
        {
            author: 'Nicole',
            title: 'Six at-home fitness challenges to help you reach your goals',
            image: '/images/workout.jpg',
            category: 'article',
            description: ' If you wish to tighten up your glutes, an extended squat challenge is an outstanding approach to build muscle and reduce fat.',
            date: ' Fitness/ August 21 2017',
            id: '6',
            explanation: 'It cannot be denied that the pandemic has pushed everyone to think about their health more holistically. As such, whether practicing yoga or investing in quality exercise equipment, people are attempting to discover different ways to exercise effectively within the four walls of their home, said Rhea Singh Anand, co-founder, Flexnest. Hence, there has also been a proliferation of at-home fitness challenges. Utilising all those extra hours at home to test your fitness game with a daily challenge does seem like a great idea'

        },
        {
            author: 'Nicole',
            title: 'Vikram first look has Hrithik on wrong side of law, Madhavan calls it ‘epic’.',
            image: '/images/vikram.jpg',
            category: 'article',
            description: 'On Hrithik Roshan’s birthday, Vikram Vedha makers released the actor’s first look from the film. The film stars Saif Ali Khan as Vikram. ',
            date: ' Bollywood/ August 21 2017',
            id: '7',
            explanation: 'Hrithik Roshan is finally stepping on the wrong side of the law in Vikram Vedha and his first look from the film was released on his birthday on Monday. A remake of the Tamil hit by the same name, the film stars Saif Ali Khan as Vikram with Radhika Apte in a pivotal role. Pushkar and Gayatri, who wrote and directed the original, are at the helm with this film too. Termed as a neo-noir thriller by its makers, Vikram Vedha is inspired by the folktale of Vikram aur Betaal. The film tells the story of a tough police officer who sets out to track down and kill an equally tough gangster. This original Tamil blockbuster starred R. Madhavan and Vijay Sethupathi.'

        },
        {
            author: 'Nicole',
            title: 'Have you tried these delicious immunity-boosting Korean teas?',
            image: '/images/korean.jpg',
            category: 'article',
            description: 'Have you tried these delicious immunity-boosting Korean teas? ',
            date: ' Health/ August 21 2017',
            id: '8',
            explanation: 'This tea is made with omija berry and it is best served with honey or can be flavoured with mung beans too. Omija means five flavours and this tea variety has medicinal properties ,Another popular Korean drink that is made with dried flowers steeped in honey for several months and then brewed with hot water. Corn tea is made with dried corn kernels and corn silk, and is best served during morning hours on an empty stomach. Job tears tea, it is a combination of powdered job tears grains, walnuts, almonds, black beans, black sesame, corn, brown rice, and lots of sugar. In Korea, It is considered as a high-protein tea.  '

        },
        {
            author: 'Nicole',
            title: 'iOS Devices Freeze Due to a HomeKit ',
            image: '',
            category: 'technologyn',
            description: ' iOS- based devices could go into a cycle of freezing and crashing and become unusable due to a HomeKit vulnerability that has been exposed by a security researcher. ',
            date: ' Technology/ August 21 2017',
            id: '9'

        },
        {
            author: 'Nicole',
            title: 'iOS Devices Freeze Due to a HomeKit ',
            image: '',
            category: 'technologyn',
            description: ' iOS- based devices could go into a cycle of freezing and crashing and become unusable due to a HomeKit vulnerability that has been exposed by a security researcher. ',
            date: ' Technology/ August 21 2017',
            id: '10'

        },
        {
            author: 'Nicole',
            title: 'iOS Devices Freeze Due to a HomeKit',
            image: '',
            category: 'technologyn',
            description: ' iOS- based devices could go into a cycle of freezing and crashing and become unusable due to a HomeKit vulnerability that has been exposed by a security researcher. ',
            date: ' Technology/ August 21 2017',
            id: '11'

        },
        {
            author: 'Nicole',
            title: 'iOS Devices Freeze Due to a HomeKit ',
            image: '',
            category: 'technologyn',
            description: ' iOS- based devices could go into a cycle of freezing and crashing and become unusable due to a HomeKit vulnerability that has been exposed by a security researcher. ',
            date: ' Technology/ August 21 2017',
            id: '12'

        },
        {
            author: 'Nicole',
            title: ' Ranveer joins the cast of international fantasy series ',
            image: '/images/ranveer.jpg',
            category: 'bollywood',
            description: ' Ranveer has finally announced his foray into OTT space as a knight with Amazon Prime fantasy series, The Wheel of Time ',
            date: ' Bollywood/ August 21 2017',
            id: '13',
            explanation: 'This is massive! Ranveer Singh has finally announced his foray into the OTT space as a knight in shining armour with Amazon Prime fantasy web series, The Wheel of TimeAfter Anushka Sharma and R. Madhavan, entering the long list of Indian moviestars who have loved Amazon Prime web series, The Wheel of Time, is 83 star Ranveer Singh, and he has expressed his adoration for the show by not only reimagining , but also going to great lengths to morph himself as Lan-veer from the show, which has been developed by Rafe Judkins.'

        },
        {
            author: 'Nicole',
            title: 'Vikram first look has Hrithik on wrong side of law, Madhavan calls it ‘epic’ .',
            image: '/images/vikram.jpg',
            category: 'bollywood',
            description: ' On Hrithik Roshan’s birthday, Vikram Vedha makers released the actor’s first look from the film. The film stars Saif Ali Khan as Vikram.',
            date: ' Bollywood/ August 21 2017',
            id: '14',
            explanation: 'Hrithik Roshan is finally stepping on the wrong side of the law in Vikram Vedha and his first look from the film was released on his birthday on Monday. A remake of the Tamil hit by the same name, the film stars Saif Ali Khan as Vikram with Radhika Apte in a pivotal role. Pushkar and Gayatri, who wrote and directed the original, are at the helm with this film too. Termed as a neo-noir thriller by its makers, Vikram Vedha is inspired by the folktale of Vikram aur Betaal. The film tells the story of a tough police officer who sets out to track down and kill an equally tough gangster. This original Tamil blockbuster starred R. Madhavan and Vijay Sethupathi.'

        },
        {
            author: 'Nicole',
            title: 'Salman Khan’s ‘Bajrangi Bhaijaan’ sequel ',
            image: '/images/sallu.jpg',
            category: 'bollywood',
            description: ' Kabir Khan confirms Salman Khan’s ‘Bajrangi Bhaijaan’ sequel, says he will helm it on one condition ',
            date: ' Bollywood/ August 21 2017',
            id: '15',
            explanation: 'Salman Khan had announced the sequel of ‘Bajrangi Bhaijaan’ last month. The actor had revealed that the sequel is being penned by S S Rajamouli’s father, KV Vijayendra Prasad and that the movie will be titled ‘Pawan Putra Bhaijaan’. Kabir Khan, who helmed the first successful part, has now confirmed that the film is indeed in the pipeline. Speaking to a news portal, the filmmaker stated that Salman is calling the sequel as ‘Pawan Putra Bhaijaan’ and that he announced the movie because he is excited. Kabir Khan added that he has not read the script but he feels KV Vijayendra will definitely write something exciting. Commenting on the idea of directing ‘Pawan Putra Bhaijaan’, Kabir Khan stated that he would never make a sequel to his film only because the first one was a success. His only condition to direct is a sequel is if he finds a great story.'

        },
        {
            author: 'Nicole',
            title: 'Priyanka Chopra flaunts her new hairstyle to Ariana Grande song New Hair. ',
            image: '/images/priyanka.webp',
            category: 'bollywood',
            description: ' On Monday, actor Priyanka Chopra revealed her new hairstyle on her Instagram Stories. ',
            date: ' Bollywood/ August 21 2017',
            id: '16',
            explanation: 'On Monday, actor Priyanka Chopra shared a video of herself in a new look. In the clip, Priyanka flaunted her new hair style Posting the video on her Instagram Stories, Priyanka wrote, “New year new hair.” She also added singer Ariana Grande song New Hair, to the video. Priyanka styled her hair in big waves and even got some fresh golden- caramel highlights. Priyanka was last seen in The Matrix Resurrections, the  fourth chapter of the popular sci-fi film franchise. Priyanka played the role of Sati in the film. She opened up about her character in the film and told EW, “It was really fun, at least in the physicality, even with the hair, to have references to young Sati. Even the clothes, we treated her like a warrior but at the same time had an homage to her Indiana roots. We used colors which were Indian. We had borders of sarees. Little details which were so amazing and so well done by the team that as soon as I put it on there was something very sacred about who I became.”  '

        },
        {
            author: 'Nicole',
            title: ' Kirti Kulhari launches her production house Kintsukuroi Films ',
            image: '/images/kirti.jpg',
            category: 'bollywood',
            description: 'Kirti Kulhari launches her production house Kintsukuroi Films, announces first movie Nayeka under new banner',
            date: ' Bollywood/ August 21 2017',
            id: '17',
            explanation: 'Actor Kirti Kulhari has launched her own production house called Kintsukuroi Films, whose first project will be a dark comedy thriller Nayeka that she will feature in. She says, “Starting a production house has been an organic thought that has stayed with me strongly for a couple of years. As an actor, the last three years have been very fruitful for me and have got me interested to widen my horizon and delving into other aspects of filmmaking. I now want to take a step further as I  feel the urge to back great content and tell the world stories that are unique, rare, and heartfelt.'

        },
        {
            author: 'Nicole',
            title: ' Allu Arjun Pushpa has an excellent third weekend ',
            image: '/images/allu_ala.jpg',
            category: 'storybollywood',
            description: ' Pushpa: The Rise had an Excellent third weekend at the Indian box office boosted by New Year festivities. ',
            date: ' Bollywood/ August 21 2017',
            id: '18',
            explanation:' The film had a huge jump in collections in South India on New Year Day.In Andhra Pradesh, there were centres recording numbers as high as 5-6 times of the Friday number on Saturday.On Sunday, there was a minor drop in these places, but still, collections were a lot more than what you would expect from a normal Sunday jump off the Friday collections.The Sankranti release schedule is a bit dry as of now, with Radhe Shyam unlikely to arrive as of now, if that is the case, we may see very high numbers in the region during the holiday period again.A lot has been said regarding the Hindi version of the film, it is on route to Rs. 100 crores plus gross if conditions permit but the Tamil version is doing incredible numbers as well.The total till now is Rs. 26 crores and can target for Rs. 30 crores final before the release of Valimai.' 

        },
        {
            author: 'Nicole',
            title: ' Salman to start shooting for Chiranjeevi’s Telugu film ',
            image: '/images/salman.jpeg',
            category: 'storybollywood',
            description: 'Salman Khan to start shooting for Chiranjeevi’s Telugu film Godfather in January end ',
            date: ' Bollywood/ August 21 2017',
            id: '19',
            explanation: 'The upcoming Telugu film Godfather, which features megastar Chiranjeevi, will have an appearance from Bollywood superstar Salman Khan.The movie is a Telugu remake of the Malayalam blockbuster Lucifer, which starred Mohanlal in the lead role.Lucifer also marked the directorial debut of actor Prithviraj.Salman will reportedly essay the role played by Prithviraj in the film with certain modifications.According to the latest reports, Salman and Chiranjeevi will start shooting for the film in Hyderabad by January end or latest by February first week. Reportedly, Salman plays a dynamic role and he has allotted 5 to 7 days for the cameo. The makers have made modifications from the original film to curate several larger-than-life moments keeping Salman aura in mind.' 

        },
        {
            author: 'Nicole',
            title: 'Alia Bhatt’s Fees For Gangubai Kathiawadi Will Drop Your Jaws  ',
            image: '/images/aliaa.jpg',
            category: 'storybollywood',
            description: 'Gangubai Kathiawadi is a biographical drama based on the real-life of ‘The mafia queen of Mumbai.’ ',
            date: ' Bollywood/ August 21 2017',
            id: '20',
            explanation: ' Alia Bhatt is one of the most talented and successful actresses of B-town at the moment. And not just that, the actress often makes headlines for her city sightings and cute PDA moments with boyfriend Ranbir Kapoor. Today, we are going to decode Alia’s whopping fees for Sanjay Leela Bhansali’s Gangubai Kathiawadi which releases this year and it’ll leave your jaws dropped on the floors. Gangubai is a biographical drama based on the real-life of ‘The mafia queen of Mumbai.’ Alia will be seen in a never before avatar and the trailer stunned her fans and friends across the globe. According to a report by Siasat.com, Alia Bhatt is charging a whopping amount for Sanjay Leela Bhansali’s Gangubai Kathiawadi. Any guesses? Well, it’s Rs 20 crores. Yes, that’s a huge amount that will leave your jaws dropped but well, it didn’t come as a surprise to us.' 

        },
        {
            author: 'Nicole',
            title: ' Keanu Reeves donated 70% Matrix fees for cancer research',
            image: '/images/keenu.jpg',
            category: 'hollywood',
            description: ' Actor Keanu Reeves has reportedly donated 70% of his earnings from The Matrix to cancer research in the US. ',
            date: ' hollywood/ August 21 2017',
            id: '21',
            explanation: 'As per New York Post, Keanu fees was a sum $10 million for the 1999 movie The Matrix, before in addition to further earnings of $35 million as the movie turned out to be a huge success. Lad Bible reports, Keanu donated 70 per cent of his earnings for leukaemia research. The reported donation was made at a time when Keanu younger sister Kim was already battling the cancer for years.As soon as the news came to light, Keanu fans started reacting to it.One person took to Twitter, “Love Keanu.What a role model." Another one wrote, “Keanu is like nobody else. What a great man”  One more added, “As a family that has been in the battle against breast cancer for 5 years now… thank you, Keanu Reeves! You are one of my favourite actors ever.”'

        },
        {
            author: 'Nicole',
            title: ' Bob Saget tweeted about his ‘2-hour-long’ show night before his death',
            image: '/images/bobb.jpg',
            category: 'hollywood',
            description: 'Bob Saget was found dead in his hotel room in Florida. The comedian did a two-hour long show just a night before his death. ',
            date: ' hollywood/ August 21 2017',
            id: '22',
            explanation: 'Standup comedian and actor Bob Saget, who died on Monday, performed an hours long standup just a night before his death. Bob even shared a post about it on Twitter. On Sunday he posted, “Loved tonight’s show @PV_ConcertHall in Jacksonville. Appreciative audience. Thanks again to @RealTimWilkins for opening. I had no idea I did a 2 hr set tonight. I’m happily addicted again to this s**t. Check http://BobSaget.com for my dates in 2022.”'

        },
        {
            author: 'Nicole',
            title: ' Selena Gomez Stuns In Plunging BlackTop',
            image: '/images/selena.jpg',
            category: 'hollywood',
            description: ' Selena Gomez Stuns In Plunging BlackTop For ‘Hotel Transylvania’ Press Day –Photo. ',
            date: ' hollywood/ August 21 2017',
            id: '23',
            explanation: 'Selena Gomez, 29, served looks while she promoted her new movie, Hotel Transylvania 4, on Monday, January 10. The “Lose You To Love Me” songstress stunned in a plunging black top from Luis Vuitton in a gorgeous selfie she posted to Instagram. Selena also rocked a bob haircut and silver hoop earrings. Her stunning press look was done up by stylist Kate Young, makeup artist Hung Vanngo, and hairstylist Orlando Pita. Selena voices the character Mavis Dracula in the Hotel Transylvania franchise, which concludes with the upcoming fourth movie. The animated film also stars the voices of Andy Samberg, Kathryn Hahn, Jim Gaffigan, Steve Buscemi, Molly Shannon, David Spade, Keegan-Michael Key, and more. Selena discussed the new film on Live With Kelly and Ryan via Zoom on Monday.'

        },
        {
            author: 'Nicole',
            title: ' Minka Kelly Glows In New Selfie & Calls South Africa Trip ‘Holiday Of A Lifetime’',
            image: '/images/minka.jpg',
            category: 'hollywood',
            description: 'On-again couple Minka Kelly and Trevor Noah looked bright and beautiful in a selfie taken during their trip to his home country of South Africa.',
            date: ' hollywood/ August 21 2017',
            id: '24',
            explanation: 'Trevor Noah finally popped up on his on-again girlfriend Minka Kelly‘s Instagram page on January 9, after the actress posted a group selfie from their trip to South Africa. In the snapshot, Trevor, 37, and Minka, 41, posed with a bunch of his friends while enjoying drinks on a boat, as the sun’s reflection allowed for the couple to effortlessly glow. The Daily Show host, who is from Johannesburg, South Africa, took the photo, while Minka posted it to her IG page. “Take a trip to South Africa. Find friends like these. Have the holiday of a lifetime,” the Friday Night Lights star wrote in her caption. “Thank you, Mzansi,” she added.'

        },
        {
            author: 'Nicole',
            title: ' Chris Pratt Holds Daughter Lyla, 1, OnWalk ',
            image: '/images/chriss.jpg',
            category: 'hollywood',
            description: 'The ‘Guardians of the Galaxy’ star sported a cowboy hat, while he had a relaxing morning with his family. ',
            date: ' hollywood/ August 21 2017',
            id: '25',
            explanation: 'Chris Pratt, 42, was a loving father as he cradled his one-year-old daughter Lyla, while he was on a stroll with his wife Katherine Schwarzenegger, 32, on Sunday January 9. The family looked happy on the sunny morning, as Chris rocked a cowboy hat along with his black t-shirt and shorts. Katherine sported a similar all-black outfit, while Lyla wore an adorable beige outfit, as she sat in her dad’s arms. It seemed like a sweet relaxing morning out on the town in Los Angeles. Other than the sweet family outing, Lyla may also be becoming a big sister soon! Katherine is reportedly pregnant with her second child, a source told People on December 16.'
        }, 
        {
            author: 'Nicole',
            title: 'Spider-Man No Way Home box office: crosses ₹200 crore',
            image: '/images/spider.jpg',
            category: 'storyhollywood',
            description: ' Spider-Man: No Way Home, starring Tom Holland as the titular superhero, has crossed the ₹200 crore mark at the domestic box office.',
            date: ' hollywood/ August 21 2017',
            id: '26',
            explanation: 'Spider-Man: No Way Home, starring Tom Holland as the titular superhero, has crossed the ₹200 crore mark at the domestic box office. The film has achieved this feat despite restrictions due to rise in Covid-19 cases and competition from films like 83 and Pushpa: The Rise. Spider-Man: No Way Home had released in theatres on December 16 and has made ₹202.34 crore in India so far. Sharing the box office figures of the film, trade analyst Taran Adarsh wrote on Twitter, “#SpiderMan hits ₹200 cr… Restrictions + #PushpaHindi[mass circuits] + #83TheFilm[metros] are speed breakers, but #NewYear holidays + open week prove advantageous in Weekend 3…[Week 3] Fri 3 cr, Sat 4.92 cr, Sun 4.75 cr.Total: ₹202.34 cr Nett '
        },
        {
            author: 'Nicole',
            title: 'Brad Pitt Hoping for a More Positive Year as He Turns 58',
            image: '/images/brad.jpg',
            category: 'storyhollywood',
            description: 'A source tells PEOPLE Brad Pitt plans on "just sort of hanging out" for his 58th birthday on Saturday',
            date: ' hollywood/ August 21 2017',
            id: '27',
            explanation: 'Brad Pitt is keeping it "low-key" for his birthday weekend.The two-time Academy Award winner does not intend to go all out with the festivities when he marks his 58th trip around the sun on Saturday. "He plans to have a low-key birthday. Just sort of hanging out," an insider tells PEOPLE. "He is staying low- key in general.That really the kind of guy he is anyway," the source says, adding that since his birthday is at the end of the year, "it is a natural time for reflection for him." Pitt has had a busy year, filming two movies with Sandra Bullock. He makes a cameo in her upcoming romantic comedy adventure The Lost City, which also stars Channing Tatum; and, along with Joey King and Bad Bunny, he and Bullock also filmed Bullet Train in Los Angeles earlier this year.'
        },
        {
            author: 'Nicole',
            title: 'Justin Bieber And Hailey Baldwin Take A Tour Of London',
            image: '/images/justin.jpeg',
            category: 'storyhollywood',
            description: 'As they explore London Town, Justin Bieber kisses his baby Hailey Baldwin inside a telephone booth.',
            date: ' hollywood/ August 21 2017',
            id: '28',
            explanation: 'Justin Bieber and Hailey Bieber can be seen walking side by side on the sidewalk in the photos! While posing for the camera, the two can also be seen holding hands. Hailey and Justin are seen kissing in two of the photographs, indicating that they are putting on the PDA! The duo can be seen kissing on the pavement in one photo and sharing a kiss inside a red telephone booth in another! Fans praised the photos and the couple in the comments section, urging them to share more from their trip. While some admirers used heart emojis in their comments, others stated that the two are incredibly adorable together! One fan responded, “Cute,” while another wrote, “Miss you all.” '
        },
        {
            author: 'Nicole',
            title: '  Sony to Establish New Electric Vehicle Company',
            image: '/images/Sonni.jpg',
            category: 'technology',
            description: ' Japan Sony Group will establish a new company for electric vehicles this spring, its chairman said, becoming the latest tech company',
            date: ' Technology/ August 21 2017',
            id: '29',
            explanation: 'Japan Sony Group will establish a new company for electric vehicles this spring, its chairman said, becoming the latest tech company to beef up its ambitions in the fast- growing market.Sony chairman and president, Kenichiro Yoshida, made the comment at the CES technology conference in the United States that was streamed online.He said that it would launch the new company, Sony Mobility, in the spring of 2022, through which it intends to explore entry into the electric vehicle market.Sony has already announced a prototype vehicle that is being tested on public roads.At the 2020 CES event, Sony had said it would start testing self- driving cars to beef up the company sensing and safety technologies.Sony had also unveiled an electric concept car with 33 embedded sensors, including image sensors, and solid - state light detection and ranging(Lidar) sensors at the event.'

        }, 
        {
            author: 'Nicole',
            title: '  Intel Launches 12th Gen Intel Core Mobile Processors',
            image: '/images/intel.jpg',
            category: 'technology',
            description: 'Intel claims to have unveiled the world fastest mobile processor, bringing its performance hybrid architecture to mobile',
            date: ' Technology/ August 21 2017',
            id: '30',
            explanation: 'Intel introduced 28 new 12th Gen Intel Core mobile processors that are said to deliver a feature-rich suite of capabilities to create laptops for people to compute whenever and wherever they need – without compromise. With the introduction of the full 12th Gen Intel Core desktop processor lineup, the 12th Gen Intel Core processor family also represents the company’s most scalable lineup to date, powering designs across consumer, enterprise, the Internet of Things (IoT) and other applications. According to the company, the expansive 12th Gen Intel Core mobile family also includes the new U- and P-series mobile processors. With up to 14 cores and 20 threads and featuring Intel Iris Xe integrated graphics, the new P-series processors operate at 28W base power and are designed for performance thin-and-light laptops, while the U-series processors operate at 9 to 15W and are designed for form factor optimised thin-and-light laptops.'

        }, 
        {
            author: 'Nicole',
            title: ' Robotic Hand With Gecko-Inspired Strong Grip',
            image: '/images/farm.jpg',
            category: 'technology',
            description: ' A robotic hand is known to be powerful enough for firmly clamping and picking up a rigid object – no matter its weight. ',
            date: ' Technology/ August 21 2017',
            id: '31',
            explanation: 'But unlike human hands, robotic hands cannot distinguish between objects based on their composition. For instance, while a human hand can gently grip a tomato, a robotic hand will press it tightly and squeeze it, eventually ruining everything. A robotic gripper can’t do two things at once, that is, hold an object tightly and gently when required. Engineers at Stanford University have developed a robotic hand called ‘farmHand’ capable of handling various items from raw eggs and grape bunches to jugs and basketballs. Inspired by geckos, the robotic hand has a similar way of attaching its grippers to an object, without applying extra inward forces.  '

        }, 
        {
            author: 'Nicole',
            title: '  World’s Smallest MEMS Speaker For TWS and Hearing Aid Applications',
            image: '/images/speaker.jpg',
            category: 'technology',
            description: ' Its high-frequency response delivers new levels of clarity and presence to speech, vocals and instrumentals',
            date: ' Technology/ August 21 2017',
            id: '32',
            explanation: 'To deliver better sound quality for improved speech-in-noise performance and greater vocal and instrumental clarity as compared to electrodynamic and balanced armature µspeakers, here’s presenting the Cowell, the world’s smallest monolithic MEMS µspeaker that weighs just 56 milligrams, delivers an impressive 110dB SPL at 1kHz and up to 15dB of gain above 1kHz.“Cowell’s architecture addresses two key hearables market trends: 1) spatial and lossless audio; and 2) over-the-counter (OTC) hearing aids,” said Mike Housholder, xMEMS VP of Marketing and Business Development.'

        }, 
        {
            author: 'Nicole',
            title: 'WhatsApp to revamp iOS chat design in future update  ',
            image: '/images/whatsapp.jpg',
            category: 'technology',
            description: 'WhatsApp to remove Broadcast Lists and New Group rows from chat list on iOS; new access point. ',
            date: ' Technology/ August 21 2017',
            id: '33',
            explanation: 'Instant messaging app WhatsApp is planning to revamp its chat user interface on Apple iOS devices.To do that, the application will be cleaning up its presentation by getting rid of certain rows.As reported by WABetaInfo, the version 22.1.72 update removes the ‘Broadcast Lists’ and ‘New Group’ rows from the top of the chat list.WhatsApp acknowledges that the options have been in place for years, whereby tapping the ‘Start New Chat’ button on the bottom right, users can create new groups.'

        },
        {
            author: 'Nicole',
            title: ' Google Buys Israeli Security Startup Amid Rising Cyberattacks',
            image: '/images/google.jpg',
            category: 'storytechnology',
            description: ' A source familiar with the matter said Google paid about $500 million (roughly Rs. 3,730 crore) in cash for Siemplify.',
            date: ' Technology/ August 21 2017',
            id: '34',
            explanation: 'Alphabet-owned Google said on Tuesday its cloud division had acquired Israeli cybersecurity startup Siemplify, as the US tech giant expands its security offerings amid rising cyber attacks.Financial details o the deal were not disclosed by the companies, but a source familiar with the matter said Google paid about $500 million(roughly Rs. 3, 730 crore) in cash for Siemplify.The deal came after Google made a pledge to US President Joe Biden last August to invest $10 billion(roughly Rs. 74, 520 crore) in cybersecurity over the next five years, amid a significant rise in cyber attacks and data breaches.Since the pandemic started in 2020, Google revenue from the cloud business has nearly doubled to around $5 billion(roughly Rs. 37, 260 crore) as companies shifted to working from home.The need to protect and hedge against security threats has shot up in tandem, with big corporates also beefing up on cybersecurity products.'


        }, 
        {
            author: 'Nicole',
            title: 'Electrically Switchable Nanoantennas Enable Dynamic Holographic Tech',
            image: '/images/nanoch.jpg',
            category: 'storytechnology',
            description: 'Enabling video-like 3D holographics, the development in future can replace video conferences for providing a real-life virtual experience',
            date: ' Technology/ August 21 2017',
            id: '35',
            explanation: 'In midst of the pandemic when most of us were confined to our homes with very little or no interaction with other people, online meetups and video conferences rescued us to maintain that longing ‘human-to-human’ connection. As this form of virtual communication is now here to stay, an even more realistic model can be implemented such as holographic technology. But it hasn’t been fully explored yet; just limited to the realms of sci-fi movies. Based on electrically switchable plasmonic nanoantenna, this new approach to realise dynamic holographic displays enables 3D visuals to be displayed at a video rate having a resolution of 50 000 dpi (pixels per inch), which is 100x more than the best smartphone displays.'

        }, 
        {
            author: 'Nicole',
            title: 'Optical Oscilloscope That Could Change Communication Technologies ',
            image: '/images/opt.jpg',
            category: 'storytechnology',
            description:'Physics Associate Professor Michael Chini is part of the UCF team that created the worlds first optical oscilloscope ',
            date: ' Technology/ August 21 2017',
            id: '36',
            explanation: 'Conventional oscilloscopes are not able to accurately measure readings related to the electric field of light particularly due to high speeds of light wave oscillations that are in the order of several gigahertz. Such high speeds enable the coverage of the entire radio frequency and microwave regions of the electromagnetic spectrum, allowing higher speeds for transmitting information. Although existing oscilloscopes can measure light field signals associated with ‘pulses’ of light, measuring their peaks and valleys is, however, not possible. ',

        }, 
        {
            author: 'Nicole',
            title: 'You must have gajar-mooli ka achar in winters and its health benefits',
            image: '/images/food.jpg',
            category: 'food',
            description: 'Pickles are one of the best side dishes that can increase the flavour of any meal, pickles can instantly make it flavourful.',
            date: ' Food/ August 21 2017',
            id: '37',
            explanation: 'Both these vegetables are rich in nutrition and have a lot of benefits when they are fermented as pickles. The very first benefit it offers is digestion. The pickle juices help you digest the food easily in winters when the digestive system enters an active stage that slowers the digestion system. Apart from this, the gajar-mooli ka achar is quite helpful in improving immunity in winters, as both the vegetables are loaded with antioxidants. Along with that, this pickle is also beneficial in diabetes as radish has the properties to control insulin present in your body, thus bringing down sugar levels. Also, this achar is loaded with vitamins and is the easiest way to regulate blood pressure. It also strengthens the blood vessels thus improving heart health, while improving metabolism as well. Thus, it is  must to have this gajar - mooli ka achar in winters.'
            

        }, 
        {
            author: 'Nicole',
            title: 'unique Broccoli Amla Halwa can boost immunity and lower heart attack risk',
            image: '/images/halwa.jpeg',
            category: 'food',
            description: 'This unique Broccoli Amla Halwa can boost immunity and lower heart attack risk',
            date: ' Food/ August 21 2017',
            id: '38',
            explanation: 'The combination of Broccoli and Amla in a halwa might sound absurd but you’ll be surprised to know that it not only tastes delicious but is also packed with health benefits. Winter season is dominated by sweets like halwa, gajak, pinni, panjiri etc. All these sweets are loaded with sugar and ghee, which aren’t the most suitable picks when it comes to health. This healthy and tasty Broccoli Amla halwa is made in just 1 tbsp ghee and is sweetened using jaggery. Read on to know how to make this unique halwa recipe at home. Broccoli is well known for improving heart health. It is power-packed with fibre and vitamins that help regulate blood pressure in the body. Consuming broccoli regularly not only prevents but also reverses the damage done to blood vessel linings'

        }, 
        {
            author: 'Nicole',
            title: 'Is it safe to eat eggs during periods ?',
            image: '/images/egg.jpg',
            category: 'food',
            description: 'Eggs during periods: To eat or not?',
            date: ' Food/ August 21 2017',
            id: '39',
            explanation: 'Periods are a sensitive phase for any woman as the body goes through a number of changes due to hormonal fluctuations. Most women experience cramps, backache, mood swings, hot flushes, nausea and other similar conditions during their menstrual cycle. In such a situation, it is recommended to pay close attention to your diet Well, luckily eggs don’t fall in that category. It is a myth that eggs can’t be consumed during periods. Do you know that eggs are a storehouse of vitamins like B6, D, and E, which all work together to fight off the symptoms of PMS? Eggs are a rich source of protein and will keep your tummy full by giving you a feeling of satiety for long.'

        }, 
        {
            author: 'Nicole',
            title: 'Is healthy food for kids and adults same?',
            image: '/images/healthy.jpg',
            category: 'food',
            description: '​Are kids eating the same healthy food as adults?',
            date: ' Food/ August 21 2017',
            id: '40',
            explanation: 'Every parent is concerned about feeding their kid the most healthy foods. But did you know that healthy foods for kids and adults are the same. Yes, this will leave you surprised but as per a recent study there’s no difference between foods for adults and kids except the taste and texture of foods for infants aged 2 years or older. The study was published in the Journal of Nutrition Education and Behavior, published by Elsevier. "If you think about kids food, the archetype or terminology that we widely use to describe the food that we feed our children, it is really a social norm or societal construct that we have perpetuated," says Pamela Rothpletz-Puglia, EdD, RD, School of Health Professions, Rutgers, The State University of New Jersey, Piscataway, NJ, USA Kids food is operationally defined as food likely to be consumed by children aged 2-14 years, either at home or in the community. There is a long-held belief in the United States that children need different types of foods than adults, and many of these foods are highly processed; energy-dense; and high in saturated fat, sodium, and added sugar.'

        }, 
        {
            author: 'Nicole',
            title: ' you can make the original garam masala at home',
            image: '/images/garam.jpg',
            category: 'food',
            description: 'This original garam masala recipe can make any dish delicious',
            date: ' Food/ August 21 2017',
            id: '41',
            explanation: 'If there is one ingredient that can change the game of cooking, it is Garam Masala. From adding that perfect pinch of spiciness to increasing the flavour, this masala can bring out the dept of a dish. It is the quintessential everyday Indian spice mix, which is predominantly used in making mouth-watering dishes like biryani, meat dishes and even dals. This homemade garam masala not just improves the flavour but adds an aroma to the dish, which can entice a person in eating the dish. To make the authentic garam masala at home, the whole spices used are - cumin seeds, black cardamom, cinnamon, coriander seeds, caraway seeds, clove, green cardamom, black pepper, mace, sage, nutmeg, star anise, bay leaf, and dried ginger.'

        }, 
        {
            author: 'Nicole',
            title: 'Foods you must never pair with milk',
            image: '/images/milk.jpg',
            category: 'storyfood',
            description: 'Drinking milk without any taste enhancer may seem like an unappetising idea to most of us, this is due to the simple bland taste',
            date: ' Food/ August 21 2017',
            id: '42',
            explanation:'This may sound shocking to most fitness enthusiasts who swear by Banana Milk shake to boost protein levels naturally, but this combination can be one of the reasons why you feel heavy, bloated throughout the day.Combining two types of proteins is a bad combination and takes a toll on the digestive system. While fish is animal protein, when combined with milk protein it creates an imbalance. Apart from that, fish has a heating effect which mixes with milk and creates an imbalance, which causes discomfort, bloating and can often lead to skin allergies.Mixing milk with sour and citrus fruits or ingredients is a strict “No’’ this is because the presence of vitamin C and citric acid in sour foods like orange and lemon when combined with milk can coagulate and lead to acid reflux, heartburn, upset stomach and allergies. Drinking milk right after eating radish can wreak havoc on the system, this is because radish gives warmth to the system and combining with milk can trigger heartburn.'
            

        }, 
        {
            author: 'Nicole',
            title: ' These delicious immunity-boosting Korean teas',
            image: '/images/korean.jpg',
            category: 'storyfood',
            description: 'Have you tried these delicious immunity-boosting Korean teas?',
            date: ' Food/ August 21 2017',
            id: '43',
            explanation: 'This tea is made with omija berry and it is best served with honey or can be flavoured with mung beans too. Omija means five flavours and this tea variety has medicinal properties ,Another popular Korean drink that is made with dried flowers steeped in honey for several months and then brewed with hot water. Corn tea is made with dried corn kernels and corn silk, and is best served during morning hours on an empty stomach. Job tears tea, it is a combination of powdered job tears grains, walnuts, almonds, black beans, black sesame, corn, brown rice, and lots of sugar. In Korea, It is considered as a high-protein tea. '

        }, 
        {
            author: 'Nicole',
            title: 'Foods to eat to balance the extra salt intake',
            image: '/images/salt.jpg',
            category: 'storyfood',
            description: 'Foods to eat when you have eaten too much salt',
            date: ' Food/ August 21 2017',
            id: '44',
            explanation: 'Have you ever imagined what happens when you have too much salt in your body? Well, it can lead to various health issues like high blood pressure, stroke or even heart diseases. It is for this reason that one should not have too much salt in their food. Salt, which is also known as sodium chloride is used in various food preparations to enhance the taste and is a stabilizer. It is also used as a preservative, as bacteria cannot thrive in the presence of a high amount of salt. The mineral present in salt - sodium, is required by the human body to maintain a proper balance of the body. Packed with potassium, a banana can help in keeping your blood pressure levels in check after a salty meal, which can lower the risk of a stroke over time. This fruit is also rich in fibre and thus it can help in lowering the risk of heart diseases as well. It is yet another food rich in potassium that can counter the risk of high sodium. Not just that, it can change your taste quickly while keeping your gut healthy.'

        }, 
        {
            author: 'Nicole',
            title: 'Reasons you could be struggling to lose weight',
            image: '/images/fitt.jpg',
            category: 'fitness',
            description: 'Are you planning proper meals and being physically active throughout ,. Weight loss goals are set from the first day of the year and people try to follow them through',
            date: ' Fitness/ August 21 2017',
            id: '45',
            explanation: 'Despite working out regularly and sticking to a prescribed diet, many people struggle to lose weight. But instead of getting bogged down, take a deep breath and focus on what you may be doing wrong.If you’re starving yourself over weekdays and depriving yourself of all the foods you love, you’ll probably end up messing with your weekend meals or just get frustrated and give up altogether. Rather notice how well your clothes fit, focus on your ability to do extended workouts, your relationship with food to measure actual progress, she recommended.Pick up any form of physical activity, even if it is gentle walking. Try aiming for five-kilometre progressive walks and be generally active throughout the day.If your hormones are imbalanced, then excessive workouts can actually cause inflammation and wreck them even further.“Get some basic blood work done including thyroid, fasting insulin for PCOS, and estrogen dominance,” '

        }, 
        {
            author: 'Nicole',
            title: 'Malaika Arora  daily fitness routine',
            image: '/images/malaika.jpg',
            category: 'fitness',
            description: 'Malaika Arora adds fun to her daily fitness routine',
            date: ' Fitness/ August 21 2017',
            id: '46',
            explanation: 'If you have mastered a yoga pose, there is always scope to do better. And showing how to do that is Malaika Arora who always sets massive goals with her challenging fitness sessions. The 48-year-old used a stick or ‘danda’ in the practice. “You all know that core strengthening poses like Trikonasana and its variations are one of my favourite poses and one thing I like doing is adding some fun to my daily routine with these poses. So here is this week’s pose, Parivrtta Trikonasana, but, with a danda,” she captioned the post.'

        }, 
        {
            author: 'Nicole',
            title: 'Six at- home fitness challenges to help you reach your goals',
            image: '/images/workout.jpg',
            category: 'fitness',
            description: 'If you wish to tighten up your glutes, an extended squat challenge is an outstanding approach to build muscle and reduce fat.',
            date: ' Fitness/ August 21 2017',
            id: '47',
            explanation: 'It cannot be denied that the pandemic has pushed everyone to think about their health more holistically. As such, whether practicing yoga or investing in quality exercise equipment, people are attempting to discover different ways to exercise effectively within the four walls of their home, said Rhea Singh Anand, co-founder, Flexnest. Hence, there has also been a proliferation of at-home fitness challenges. Utilising all those extra hours at home to test your fitness game with a daily challenge does seem like a great idea'

        }, 
        {
            author: 'Nicole',
            title: '‘I eat 6 times a day; all my meals have carbs’',
            image: '/images/tapse.jpg',
            category: 'fitness',
            description: '‘I eat 6 times a day; all my meals have carbs’: Taapsee Pannu reveals her diet mantra',
            date: ' Fitness/ August 21 2017',
            id: '48',
            explanation: 'Taapsee Pannu is one of the fittest actors in the film industry. As such, the Rashmi Rocket star has also shared snippets of her fitness journey, which has also included making certain tweaks to play the role of an athlete with conviction.Talking about Ganeriwal’s diet plan, that helped her overcome a “bad metabolism”, she said, “The diet that helped me deal with my bad metabolism….The diet that helped me get the body of an athlete ‘all naturally’…But most importantly the diet that bust every other myth about ‘dieting‘.” “I eat six times a day and all my meals have carbs! And this is strictly as per my diet plan by the one and only Munmun,” she mentioned in an Instagram post. '

        }, 
        {
            author: 'Nicole',
            title: 'Tisca Chopra shares ways to stay fit',
            image: '/images/tisca.jpg',
            category: 'fitness',
            description: 'Tisca Chopra shares ways to ‘stay on course with fitness’ in the holiday season',
            date: ' Fitness/ August 21 2017',
            id: '49',
            explanation: 'During the winter season, there is a sudden and strange laziness which follows a drop in temperature. Sometimes, it is all right to stay under the blanket, watching your favourite shows and enjoying a warm brew — coffee, hot chocolate, spiced tea, etc.  Eat one portion of dessert, if absolutely dying, preferably for lunch not dinner., Start meal with a soup and/ or salad, so as to pack less carbs., Drink minimum 2 litres of water, and no, chai and coffee don’t count as water.And alcohol most certainly doesn’t — it’s dehydrating., Eat on time and mostly before going out; “I don’t panic - eat.”, Break workout into two parts — a bit of yoga and stretching in the morning.Gym / walking in the evening.. “has better results than just one workout.” '

        }, 
        {
            author: 'Nicole',
            title: 'Last nine months have been gruelling but life-changing: Adarsh Gourav',
            image: '/images/pack.jpg',
            category: 'storyfitness',
            description: 'No junk food or desserts and showing up to train six days a week. Supremely excited for everything we plan on achieving," said Adarsh Gourav',
            date: ' Fitness/ August 21 2017',
            id: '50',
            explanation: 'The White Tiger star Adarsh Gourav documented his body transformation journey in the form of an Instagram reel. The actor stated that the video compiles his 9-month-long journey. He also added pictures to showcase from where he started and how far he has come. He wrote in his post: "Transformation - My last 9 months have been gruelling but life changing." He added a couple of emojis of pizza, fries and other fast food and wrote: "And showing up to train 6 days a week." Thanking his trainer Aslam Shah, Adarsh added, "Helped me crack my first muscle up, my first pull over and pushed me everyday to my absolute limits. I had an incredible 8 months with him."Thanking his new fitness instructor, Adarsh Gourav added, "The last 1 month, I have been training with Robin Behl and Karan Sawhney and I can swear by their discipline and commitment'

        }, 
        {
            author: 'Nicole',
            title: 'Fitness trainer highlights the importance of lifting heavy weights',
            image: '/images/strength.jpg',
            category: 'storyfitness',
            description: 'Light weights are good, you can initially build some strength, but the same light weights with more reps will help you more with muscular endurance,"',
            date: ' Fitness/ August 21 2017',
            id: '51',
            explanation: 'It is important to mix your workouts for effective results, and also to not let your fitness routine hit a plateau. Reiterating the importance of the same, fitness trainer Shwetambari Shetty said that one should mix their workout routines between cardio, strength, mobility, flexibility. “I’m all for that and I practice it myself,” It helps elevate your metabolism. Lifting causes an increase in the body’s resting metabolic rate — the rate at which it burns calories when you’re doing nothing—for hours after the workout which helps better fat burn. “Lifting heavy weights makes the body more insulin sensitive (means that the body is better able to utilise sugars and carbohydrates for fuel),” '

        }, 
        {
            author: 'Nicole',
            title: ' Chris Hemsworth shows how to get in shape',
            image: '/images/hemsworth.jpg',
            category: 'storyfitness',
            description: ' Chris Hemsworth shows how to get in shape with ‘no equipment burner’ workouts',
            date: ' Fitness/ August 21 2017',
            id: '52',
            explanation: 'Chris Hemsworth is a bona fide fitness freak — how else would you define his fine physique and sculpted muscles that make him look like the Norse God Thor whom he plays on screen While the year has  begun, you can always incorporate these exercises into your routine, especially if getting fit is your resolution for 2022. While they may look grueling, a few warm-up sessions will help you find your groove. The actor begins with a bear crawl that he does for 40 seconds, before moving on to switches, again for 40 seconds, followed by tricep push, flutter kicks, prisoner squats, mountain climbers to elbow, burpees, butterfly sit-ups, sit thrus, and plank jack push-up for 40 seconds each.'

        }, 





    ])
       return(
           <ContextArticle.Provider value={[latest,setlatest]} >
               {props.children}
           </ContextArticle.Provider  >
       )

}