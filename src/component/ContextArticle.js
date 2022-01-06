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
            title: 'Catch waves with an adventures guide',
            image: '/images/sunset.jpg',
            category: 'article',
            description: 'A beach is a landform alongside a body of water which consists of loose particles. ',
            date: ' Adventure/ August 21 2017',
            id: '5',
            explanation: 'Beaches are an important part of American life. In addition to the range of recreational opportunities they offer, beaches provide unique habitats for a variety of plants and animals.  Beaches provide protection to residents living near the ocean by acting as a buffer against the high winds and waves of powerful storms, and help drive economic activity important to nearby communities.However, pollution at the beach can result in swimmers getting sick or temporary beach closures that negatively affect the local economy.In addition, overuse by visitors can damage sensitive habitats, such as beach dunes, and create marine debris.'

        },
        {
            author: 'Nicole',
            title: 'Catch waves with an adventures guide',
            image: '/images/sunset.jpg',
            category: 'article',
            description: 'A beach is a landform alongside a body of water which consists of loose particles. ',
            date: ' Adventure/ August 21 2017',
            id: '6',
            explanation: 'Beaches are an important part of American life. In addition to the range of recreational opportunities they offer, beaches provide unique habitats for a variety of plants and animals.  Beaches provide protection to residents living near the ocean by acting as a buffer against the high winds and waves of powerful storms, and help drive economic activity important to nearby communities.However, pollution at the beach can result in swimmers getting sick or temporary beach closures that negatively affect the local economy.In addition, overuse by visitors can damage sensitive habitats, such as beach dunes, and create marine debris.'

        },
        {
            author: 'Nicole',
            title: 'Catch waves with an adventures guide',
            image: '/images/sunset.jpg',
            category: 'article',
            description: 'A beach is a landform alongside a body of water which consists of loose particles. ',
            date: ' Adventure/ August 21 2017',
            id: '7',
            explanation: 'Beaches are an important part of American life. In addition to the range of recreational opportunities they offer, beaches provide unique habitats for a variety of plants and animals.  Beaches provide protection to residents living near the ocean by acting as a buffer against the high winds and waves of powerful storms, and help drive economic activity important to nearby communities.However, pollution at the beach can result in swimmers getting sick or temporary beach closures that negatively affect the local economy.In addition, overuse by visitors can damage sensitive habitats, such as beach dunes, and create marine debris.'

        },
        {
            author: 'Nicole',
            title: 'Catch waves with an adventures guide',
            image: '/images/sunset.jpg',
            category: 'article',
            description: 'A beach is a landform alongside a body of water which consists of loose particles. ',
            date: ' Adventure/ August 21 2017',
            id: '8',
            explanation: 'Beaches are an important part of American life. In addition to the range of recreational opportunities they offer, beaches provide unique habitats for a variety of plants and animals.  Beaches provide protection to residents living near the ocean by acting as a buffer against the high winds and waves of powerful storms, and help drive economic activity important to nearby communities.However, pollution at the beach can result in swimmers getting sick or temporary beach closures that negatively affect the local economy.In addition, overuse by visitors can damage sensitive habitats, such as beach dunes, and create marine debris.'

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
            title: ' Ranveer joins the cast of international fantasy series ',
            image: '/images/ranveer.jpg',
            category: 'bollywood',
            description: ' Ranveer has finally announced his foray into OTT space as a knight with Amazon Prime fantasy series, The Wheel of Time ',
            date: ' Bollywood/ August 21 2017',
            id: '14',
            explanation: 'This is massive! Ranveer Singh has finally announced his foray into the OTT space as a knight in shining armour with Amazon Prime fantasy web series, The Wheel of TimeAfter Anushka Sharma and R. Madhavan, entering the long list of Indian moviestars who have loved Amazon Prime web series, The Wheel of Time, is 83 star Ranveer Singh, and he has expressed his adoration for the show by not only reimagining , but also going to great lengths to morph himself as Lan-veer from the show, which has been developed by Rafe Judkins.'

        },
        {
            author: 'Nicole',
            title: ' Ranveer joins the cast of international fantasy series ',
            image: '/images/ranveer.jpg',
            category: 'bollywood',
            description: ' Ranveer has finally announced his foray into OTT space as a knight with Amazon Prime fantasy series, The Wheel of Time ',
            date: ' Bollywood/ August 21 2017',
            id: '15',
            explanation: 'This is massive! Ranveer Singh has finally announced his foray into the OTT space as a knight in shining armour with Amazon Prime fantasy web series, The Wheel of TimeAfter Anushka Sharma and R. Madhavan, entering the long list of Indian moviestars who have loved Amazon Prime web series, The Wheel of Time, is 83 star Ranveer Singh, and he has expressed his adoration for the show by not only reimagining , but also going to great lengths to morph himself as Lan-veer from the show, which has been developed by Rafe Judkins.'

        },
        {
            author: 'Nicole',
            title: ' Ranveer joins the cast of international fantasy series ',
            image: '/images/ranveer.jpg',
            category: 'bollywood',
            description: ' Ranveer has finally announced his foray into OTT space as a knight with Amazon Prime fantasy series, The Wheel of Time ',
            date: ' Bollywood/ August 21 2017',
            id: '16',
            explanation: 'This is massive! Ranveer Singh has finally announced his foray into the OTT space as a knight in shining armour with Amazon Prime fantasy web series, The Wheel of TimeAfter Anushka Sharma and R. Madhavan, entering the long list of Indian moviestars who have loved Amazon Prime web series, The Wheel of Time, is 83 star Ranveer Singh, and he has expressed his adoration for the show by not only reimagining , but also going to great lengths to morph himself as Lan-veer from the show, which has been developed by Rafe Judkins.'

        },
        {
            author: 'Nicole',
            title: ' Ranveer joins the cast of international fantasy series ',
            image: '/images/ranveer.jpg',
            category: 'bollywood',
            description: ' Ranveer has finally announced his foray into OTT space as a knight with Amazon Prime fantasy series, The Wheel of Time ',
            date: ' Bollywood/ August 21 2017',
            id: '17',
            explanation: 'This is massive! Ranveer Singh has finally announced his foray into the OTT space as a knight in shining armour with Amazon Prime fantasy web series, The Wheel of TimeAfter Anushka Sharma and R. Madhavan, entering the long list of Indian moviestars who have loved Amazon Prime web series, The Wheel of Time, is 83 star Ranveer Singh, and he has expressed his adoration for the show by not only reimagining , but also going to great lengths to morph himself as Lan-veer from the show, which has been developed by Rafe Judkins.'

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
            title: ' Allu Arjun Pushpa has an excellent third weekend ',
            image: '/images/allu_ala.jpg',
            category: 'storybollywood',
            description: ' Pushpa: The Rise had an Excellent third weekend at the Indian box office boosted by New Year festivities. ',
            date: ' Bollywood/ August 21 2017',
            id: '19',
            explanation: ' The film had a huge jump in collections in South India on New Year Day.In Andhra Pradesh, there were centres recording numbers as high as 5-6 times of the Friday number on Saturday.On Sunday, there was a minor drop in these places, but still, collections were a lot more than what you would expect from a normal Sunday jump off the Friday collections.The Sankranti release schedule is a bit dry as of now, with Radhe Shyam unlikely to arrive as of now, if that is the case, we may see very high numbers in the region during the holiday period again.A lot has been said regarding the Hindi version of the film, it is on route to Rs. 100 crores plus gross if conditions permit but the Tamil version is doing incredible numbers as well.The total till now is Rs. 26 crores and can target for Rs. 30 crores final before the release of Valimai.' 

        },
        {
            author: 'Nicole',
            title: ' Allu Arjun Pushpa has an excellent third weekend ',
            image: '/images/allu_ala.jpg',
            category: 'storybollywood',
            description: ' Pushpa: The Rise had an Excellent third weekend at the Indian box office boosted by New Year festivities. ',
            date: ' Bollywood/ August 21 2017',
            id: '20',
            explanation: ' The film had a huge jump in collections in South India on New Year Day.In Andhra Pradesh, there were centres recording numbers as high as 5-6 times of the Friday number on Saturday.On Sunday, there was a minor drop in these places, but still, collections were a lot more than what you would expect from a normal Sunday jump off the Friday collections.The Sankranti release schedule is a bit dry as of now, with Radhe Shyam unlikely to arrive as of now, if that is the case, we may see very high numbers in the region during the holiday period again.A lot has been said regarding the Hindi version of the film, it is on route to Rs. 100 crores plus gross if conditions permit but the Tamil version is doing incredible numbers as well.The total till now is Rs. 26 crores and can target for Rs. 30 crores final before the release of Valimai.' 

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
            title: ' Keanu Reeves donated 70% Matrix fees for cancer research',
            image: '/images/keenu.jpg',
            category: 'hollywood',
            description: ' Actor Keanu Reeves has reportedly donated 70% of his earnings from The Matrix to cancer research in the US. ',
            date: ' hollywood/ August 21 2017',
            id: '22',
            explanation: 'As per New York Post, Keanu fees was a sum $10 million for the 1999 movie The Matrix, before in addition to further earnings of $35 million as the movie turned out to be a huge success. Lad Bible reports, Keanu donated 70 per cent of his earnings for leukaemia research. The reported donation was made at a time when Keanu younger sister Kim was already battling the cancer for years.As soon as the news came to light, Keanu fans started reacting to it.One person took to Twitter, “Love Keanu.What a role model." Another one wrote, “Keanu is like nobody else. What a great man”  One more added, “As a family that has been in the battle against breast cancer for 5 years now… thank you, Keanu Reeves! You are one of my favourite actors ever.”'

        },
        {
            author: 'Nicole',
            title: ' Keanu Reeves donated 70% Matrix fees for cancer research',
            image: '/images/keenu.jpg',
            category: 'hollywood',
            description: ' Actor Keanu Reeves has reportedly donated 70% of his earnings from The Matrix to cancer research in the US. ',
            date: ' hollywood/ August 21 2017',
            id: '23',
            explanation: 'As per New York Post, Keanu fees was a sum $10 million for the 1999 movie The Matrix, before in addition to further earnings of $35 million as the movie turned out to be a huge success. Lad Bible reports, Keanu donated 70 per cent of his earnings for leukaemia research. The reported donation was made at a time when Keanu younger sister Kim was already battling the cancer for years.As soon as the news came to light, Keanu fans started reacting to it.One person took to Twitter, “Love Keanu.What a role model." Another one wrote, “Keanu is like nobody else. What a great man”  One more added, “As a family that has been in the battle against breast cancer for 5 years now… thank you, Keanu Reeves! You are one of my favourite actors ever.”'

        },
        {
            author: 'Nicole',
            title: ' Keanu Reeves donated 70% Matrix fees for cancer research',
            image: '/images/keenu.jpg',
            category: 'hollywood',
            description: ' Actor Keanu Reeves has reportedly donated 70% of his earnings from The Matrix to cancer research in the US. ',
            date: ' hollywood/ August 21 2017',
            id: '24',
            explanation: 'As per New York Post, Keanu fees was a sum $10 million for the 1999 movie The Matrix, before in addition to further earnings of $35 million as the movie turned out to be a huge success. Lad Bible reports, Keanu donated 70 per cent of his earnings for leukaemia research. The reported donation was made at a time when Keanu younger sister Kim was already battling the cancer for years.As soon as the news came to light, Keanu fans started reacting to it.One person took to Twitter, “Love Keanu.What a role model." Another one wrote, “Keanu is like nobody else. What a great man”  One more added, “As a family that has been in the battle against breast cancer for 5 years now… thank you, Keanu Reeves! You are one of my favourite actors ever.”'

        },
        {
        author: 'Nicole',
        title: ' Keanu Reeves donated 70% Matrix fees for cancer research',
        image: '/images/keenu.jpg',
        category: 'hollywood',
        description: ' Actor Keanu Reeves has reportedly donated 70% of his earnings from The Matrix to cancer research in the US. ',
        date: ' hollywood/ August 21 2017',
        id: '25',
        explanation: 'As per New York Post, Keanu fees was a sum $10 million for the 1999 movie The Matrix, before in addition to further earnings of $35 million as the movie turned out to be a huge success. Lad Bible reports, Keanu donated 70 per cent of his earnings for leukaemia research. The reported donation was made at a time when Keanu younger sister Kim was already battling the cancer for years.As soon as the news came to light, Keanu fans started reacting to it.One person took to Twitter, “Love Keanu.What a role model." Another one wrote, “Keanu is like nobody else. What a great man”  One more added, “As a family that has been in the battle against breast cancer for 5 years now… thank you, Keanu Reeves! You are one of my favourite actors ever.”'

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
            title: 'Spider-Man No Way Home box office: crosses ₹200 crore',
            image: '/images/spider.jpg',
            category: 'storyhollywood',
            description: ' Spider-Man: No Way Home, starring Tom Holland as the titular superhero, has crossed the ₹200 crore mark at the domestic box office.',
            date: ' hollywood/ August 21 2017',
            id: '27',
            explanation: 'Spider-Man: No Way Home, starring Tom Holland as the titular superhero, has crossed the ₹200 crore mark at the domestic box office. The film has achieved this feat despite restrictions due to rise in Covid-19 cases and competition from films like 83 and Pushpa: The Rise. Spider-Man: No Way Home had released in theatres on December 16 and has made ₹202.34 crore in India so far. Sharing the box office figures of the film, trade analyst Taran Adarsh wrote on Twitter, “#SpiderMan hits ₹200 cr… Restrictions + #PushpaHindi[mass circuits] + #83TheFilm[metros] are speed breakers, but #NewYear holidays + open week prove advantageous in Weekend 3…[Week 3] Fri 3 cr, Sat 4.92 cr, Sun 4.75 cr.Total: ₹202.34 cr Nett '
        },
        {
            author: 'Nicole',
            title: 'Spider-Man No Way Home box office: crosses ₹200 crore',
            image: '/images/spider.jpg',
            category: 'storyhollywood',
            description: ' Spider-Man: No Way Home, starring Tom Holland as the titular superhero, has crossed the ₹200 crore mark at the domestic box office.',
            date: ' hollywood/ August 21 2017',
            id: '28',
            explanation: 'Spider-Man: No Way Home, starring Tom Holland as the titular superhero, has crossed the ₹200 crore mark at the domestic box office. The film has achieved this feat despite restrictions due to rise in Covid-19 cases and competition from films like 83 and Pushpa: The Rise. Spider-Man: No Way Home had released in theatres on December 16 and has made ₹202.34 crore in India so far. Sharing the box office figures of the film, trade analyst Taran Adarsh wrote on Twitter, “#SpiderMan hits ₹200 cr… Restrictions + #PushpaHindi[mass circuits] + #83TheFilm[metros] are speed breakers, but #NewYear holidays + open week prove advantageous in Weekend 3…[Week 3] Fri 3 cr, Sat 4.92 cr, Sun 4.75 cr.Total: ₹202.34 cr Nett '
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
            title: '  Sony to Establish New Electric Vehicle Company',
            image: '/images/Sonni.jpg',
            category: 'technology',
            description: ' Japan Sony Group will establish a new company for electric vehicles this spring, its chairman said, becoming the latest tech company',
            date: ' Technology/ August 21 2017',
            id: '30',
            explanation: 'Japan Sony Group will establish a new company for electric vehicles this spring, its chairman said, becoming the latest tech company to beef up its ambitions in the fast- growing market.Sony chairman and president, Kenichiro Yoshida, made the comment at the CES technology conference in the United States that was streamed online.He said that it would launch the new company, Sony Mobility, in the spring of 2022, through which it intends to explore entry into the electric vehicle market.Sony has already announced a prototype vehicle that is being tested on public roads.At the 2020 CES event, Sony had said it would start testing self- driving cars to beef up the company sensing and safety technologies.Sony had also unveiled an electric concept car with 33 embedded sensors, including image sensors, and solid - state light detection and ranging(Lidar) sensors at the event.'

        }, 
        {
            author: 'Nicole',
            title: '  Sony to Establish New Electric Vehicle Company',
            image: '/images/Sonni.jpg',
            category: 'technology',
            description: ' Japan Sony Group will establish a new company for electric vehicles this spring, its chairman said, becoming the latest tech company',
            date: ' Technology/ August 21 2017',
            id: '31',
            explanation: 'Japan Sony Group will establish a new company for electric vehicles this spring, its chairman said, becoming the latest tech company to beef up its ambitions in the fast- growing market.Sony chairman and president, Kenichiro Yoshida, made the comment at the CES technology conference in the United States that was streamed online.He said that it would launch the new company, Sony Mobility, in the spring of 2022, through which it intends to explore entry into the electric vehicle market.Sony has already announced a prototype vehicle that is being tested on public roads.At the 2020 CES event, Sony had said it would start testing self- driving cars to beef up the company sensing and safety technologies.Sony had also unveiled an electric concept car with 33 embedded sensors, including image sensors, and solid - state light detection and ranging(Lidar) sensors at the event.'

        }, 
        {
            author: 'Nicole',
            title: '  Sony to Establish New Electric Vehicle Company',
            image: '/images/Sonni.jpg',
            category: 'technology',
            description: ' Japan Sony Group will establish a new company for electric vehicles this spring, its chairman said, becoming the latest tech company',
            date: ' Technology/ August 21 2017',
            id: '32',
            explanation: 'Japan Sony Group will establish a new company for electric vehicles this spring, its chairman said, becoming the latest tech company to beef up its ambitions in the fast- growing market.Sony chairman and president, Kenichiro Yoshida, made the comment at the CES technology conference in the United States that was streamed online.He said that it would launch the new company, Sony Mobility, in the spring of 2022, through which it intends to explore entry into the electric vehicle market.Sony has already announced a prototype vehicle that is being tested on public roads.At the 2020 CES event, Sony had said it would start testing self- driving cars to beef up the company sensing and safety technologies.Sony had also unveiled an electric concept car with 33 embedded sensors, including image sensors, and solid - state light detection and ranging(Lidar) sensors at the event.'

        }, 
        {
            author: 'Nicole',
            title: '  Sony to Establish New Electric Vehicle Company',
            image: '/images/sonni.jpg',
            category: 'technology',
            description: ' Japan Sony Group will establish a new company for electric vehicles this spring, its chairman said, becoming the latest tech company',
            date: ' Technology/ August 21 2017',
            id: '33',
            explanation: 'Japan Sony Group will establish a new company for electric vehicles this spring, its chairman said, becoming the latest tech company to beef up its ambitions in the fast- growing market.Sony chairman and president, Kenichiro Yoshida, made the comment at the CES technology conference in the United States that was streamed online.He said that it would launch the new company, Sony Mobility, in the spring of 2022, through which it intends to explore entry into the electric vehicle market.Sony has already announced a prototype vehicle that is being tested on public roads.At the 2020 CES event, Sony had said it would start testing self- driving cars to beef up the company sensing and safety technologies.Sony had also unveiled an electric concept car with 33 embedded sensors, including image sensors, and solid - state light detection and ranging(Lidar) sensors at the event.'

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
            title: ' Google Buys Israeli Security Startup Amid Rising Cyberattacks',
            image: '/images/google.jpg',
            category: 'storytechnology',
            description: ' A source familiar with the matter said Google paid about $500 million (roughly Rs. 3,730 crore) in cash for Siemplify.',
            date: ' Technology/ August 21 2017',
            id: '35',
            explanation: 'Alphabet-owned Google said on Tuesday its cloud division had acquired Israeli cybersecurity startup Siemplify, as the US tech giant expands its security offerings amid rising cyber attacks.Financial details o the deal were not disclosed by the companies, but a source familiar with the matter said Google paid about $500 million(roughly Rs. 3, 730 crore) in cash for Siemplify.The deal came after Google made a pledge to US President Joe Biden last August to invest $10 billion(roughly Rs. 74, 520 crore) in cybersecurity over the next five years, amid a significant rise in cyber attacks and data breaches.Since the pandemic started in 2020, Google revenue from the cloud business has nearly doubled to around $5 billion(roughly Rs. 37, 260 crore) as companies shifted to working from home.The need to protect and hedge against security threats has shot up in tandem, with big corporates also beefing up on cybersecurity products.'

        }, 
        {
            author: 'Nicole',
            title: ' Google Buys Israeli Security Startup Amid Rising Cyberattacks',
            image: '/images/google.jpg',
            category: 'storytechnology',
            description: ' A source familiar with the matter said Google paid about $500 million (roughly Rs. 3,730 crore) in cash for Siemplify.',
            date: ' Technology/ August 21 2017',
            id: '36',
            explanation: 'Alphabet-owned Google said on Tuesday its cloud division had acquired Israeli cybersecurity startup Siemplify, as the US tech giant expands its security offerings amid rising cyber attacks.Financial details o the deal were not disclosed by the companies, but a source familiar with the matter said Google paid about $500 million(roughly Rs. 3, 730 crore) in cash for Siemplify.The deal came after Google made a pledge to US President Joe Biden last August to invest $10 billion(roughly Rs. 74, 520 crore) in cybersecurity over the next five years, amid a significant rise in cyber attacks and data breaches.Since the pandemic started in 2020, Google revenue from the cloud business has nearly doubled to around $5 billion(roughly Rs. 37, 260 crore) as companies shifted to working from home.The need to protect and hedge against security threats has shot up in tandem, with big corporates also beefing up on cybersecurity products.'

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
            title: 'You must have gajar-mooli ka achar in winters and its health benefits',
            image: '/images/food.jpg',
            category: 'food',
            description: 'Pickles are one of the best side dishes that can increase the flavour of any meal, pickles can instantly make it flavourful.',
            date: ' Food/ August 21 2017',
            id: '38',
            explanation: 'Both these vegetables are rich in nutrition and have a lot of benefits when they are fermented as pickles. The very first benefit it offers is digestion. The pickle juices help you digest the food easily in winters when the digestive system enters an active stage that slowers the digestion system. Apart from this, the gajar-mooli ka achar is quite helpful in improving immunity in winters, as both the vegetables are loaded with antioxidants. Along with that, this pickle is also beneficial in diabetes as radish has the properties to control insulin present in your body, thus bringing down sugar levels. Also, this achar is loaded with vitamins and is the easiest way to regulate blood pressure. It also strengthens the blood vessels thus improving heart health, while improving metabolism as well. Thus, it is  must to have this gajar - mooli ka achar in winters.'

        }, 
        {
            author: 'Nicole',
            title: 'You must have gajar-mooli ka achar in winters and its health benefits',
            image: '/images/food.jpg',
            category: 'food',
            description: 'Pickles are one of the best side dishes that can increase the flavour of any meal, pickles can instantly make it flavourful.',
            date: ' Food/ August 21 2017',
            id: '39',
            explanation: 'Both these vegetables are rich in nutrition and have a lot of benefits when they are fermented as pickles. The very first benefit it offers is digestion. The pickle juices help you digest the food easily in winters when the digestive system enters an active stage that slowers the digestion system. Apart from this, the gajar-mooli ka achar is quite helpful in improving immunity in winters, as both the vegetables are loaded with antioxidants. Along with that, this pickle is also beneficial in diabetes as radish has the properties to control insulin present in your body, thus bringing down sugar levels. Also, this achar is loaded with vitamins and is the easiest way to regulate blood pressure. It also strengthens the blood vessels thus improving heart health, while improving metabolism as well. Thus, it is  must to have this gajar - mooli ka achar in winters.'

        }, 
        {
            author: 'Nicole',
            title: 'You must have gajar-mooli ka achar in winters and its health benefits',
            image: '/images/food.jpg',
            category: 'food',
            description: 'Pickles are one of the best side dishes that can increase the flavour of any meal, pickles can instantly make it flavourful.',
            date: ' Food/ August 21 2017',
            id: '40',
            explanation: 'Both these vegetables are rich in nutrition and have a lot of benefits when they are fermented as pickles. The very first benefit it offers is digestion. The pickle juices help you digest the food easily in winters when the digestive system enters an active stage that slowers the digestion system. Apart from this, the gajar-mooli ka achar is quite helpful in improving immunity in winters, as both the vegetables are loaded with antioxidants. Along with that, this pickle is also beneficial in diabetes as radish has the properties to control insulin present in your body, thus bringing down sugar levels. Also, this achar is loaded with vitamins and is the easiest way to regulate blood pressure. It also strengthens the blood vessels thus improving heart health, while improving metabolism as well. Thus, it is  must to have this gajar - mooli ka achar in winters.'

        }, 
        {
            author: 'Nicole',
            title: 'You must have gajar-mooli ka achar in winters and its health benefits',
            image: '/images/food.jpg',
            category: 'food',
            description: 'Pickles are one of the best side dishes that can increase the flavour of any meal, pickles can instantly make it flavourful.',
            date: ' Food/ August 21 2017',
            id: '41',
            explanation: 'Both these vegetables are rich in nutrition and have a lot of benefits when they are fermented as pickles. The very first benefit it offers is digestion. The pickle juices help you digest the food easily in winters when the digestive system enters an active stage that slowers the digestion system. Apart from this, the gajar-mooli ka achar is quite helpful in improving immunity in winters, as both the vegetables are loaded with antioxidants. Along with that, this pickle is also beneficial in diabetes as radish has the properties to control insulin present in your body, thus bringing down sugar levels. Also, this achar is loaded with vitamins and is the easiest way to regulate blood pressure. It also strengthens the blood vessels thus improving heart health, while improving metabolism as well. Thus, it is  must to have this gajar - mooli ka achar in winters.'

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
            title: 'Foods you must never pair with milk',
            image: '/images/milk.jpg',
            category: 'storyfood',
            description: 'Drinking milk without any taste enhancer may seem like an unappetising idea to most of us, this is due to the simple bland taste',
            date: ' Food/ August 21 2017',
            id: '43',
            explanation: 'This may sound shocking to most fitness enthusiasts who swear by Banana Milk shake to boost protein levels naturally, but this combination can be one of the reasons why you feel heavy, bloated throughout the day.Combining two types of proteins is a bad combination and takes a toll on the digestive system. While fish is animal protein, when combined with milk protein it creates an imbalance. Apart from that, fish has a heating effect which mixes with milk and creates an imbalance, which causes discomfort, bloating and can often lead to skin allergies.Mixing milk with sour and citrus fruits or ingredients is a strict “No’’ this is because the presence of vitamin C and citric acid in sour foods like orange and lemon when combined with milk can coagulate and lead to acid reflux, heartburn, upset stomach and allergies. Drinking milk right after eating radish can wreak havoc on the system, this is because radish gives warmth to the system and combining with milk can trigger heartburn.'

        }, 
        {
            author: 'Nicole',
            title: 'Foods you must never pair with milk',
            image: '/images/milk.jpg',
            category: 'storyfood',
            description: 'Drinking milk without any taste enhancer may seem like an unappetising idea to most of us, this is due to the simple bland taste',
            date: ' Food/ August 21 2017',
            id: '44',
            explanation: 'This may sound shocking to most fitness enthusiasts who swear by Banana Milk shake to boost protein levels naturally, but this combination can be one of the reasons why you feel heavy, bloated throughout the day.Combining two types of proteins is a bad combination and takes a toll on the digestive system. While fish is animal protein, when combined with milk protein it creates an imbalance. Apart from that, fish has a heating effect which mixes with milk and creates an imbalance, which causes discomfort, bloating and can often lead to skin allergies.Mixing milk with sour and citrus fruits or ingredients is a strict “No’’ this is because the presence of vitamin C and citric acid in sour foods like orange and lemon when combined with milk can coagulate and lead to acid reflux, heartburn, upset stomach and allergies. Drinking milk right after eating radish can wreak havoc on the system, this is because radish gives warmth to the system and combining with milk can trigger heartburn.'

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
            title: 'Five reasons you could be struggling to lose weight',
            image: '/images/fitt.jpg',
            category: 'fitness',
            description: 'Are you planning proper meals and being physically active throughout ,. Weight loss goals are set from the first day of the year and people try to follow them through',
            date: ' Fitness/ August 21 2017',
            id: '46',
            explanation: 'Despite working out regularly and sticking to a prescribed diet, many people struggle to lose weight. But instead of getting bogged down, take a deep breath and focus on what you may be doing wrong.If you’re starving yourself over weekdays and depriving yourself of all the foods you love, you’ll probably end up messing with your weekend meals or just get frustrated and give up altogether. Rather notice how well your clothes fit, focus on your ability to do extended workouts, your relationship with food to measure actual progress, she recommended.Pick up any form of physical activity, even if it is gentle walking. Try aiming for five-kilometre progressive walks and be generally active throughout the day.If your hormones are imbalanced, then excessive workouts can actually cause inflammation and wreck them even further.“Get some basic blood work done including thyroid, fasting insulin for PCOS, and estrogen dominance,” '

        }, 
        {
            author: 'Nicole',
            title: 'Five reasons you could be struggling to lose weight',
            image: '/images/fitt.jpg',
            category: 'fitness',
            description: 'Are you planning proper meals and being physically active throughout ,. Weight loss goals are set from the first day of the year and people try to follow them through',
            date: ' Fitness/ August 21 2017',
            id: '47',
            explanation: 'Despite working out regularly and sticking to a prescribed diet, many people struggle to lose weight. But instead of getting bogged down, take a deep breath and focus on what you may be doing wrong.If you’re starving yourself over weekdays and depriving yourself of all the foods you love, you’ll probably end up messing with your weekend meals or just get frustrated and give up altogether. Rather notice how well your clothes fit, focus on your ability to do extended workouts, your relationship with food to measure actual progress, she recommended.Pick up any form of physical activity, even if it is gentle walking. Try aiming for five-kilometre progressive walks and be generally active throughout the day.If your hormones are imbalanced, then excessive workouts can actually cause inflammation and wreck them even further.“Get some basic blood work done including thyroid, fasting insulin for PCOS, and estrogen dominance,” '

        }, 
        {
            author: 'Nicole',
            title: 'Five reasons you could be struggling to lose weight',
            image: '/images/fitt.jpg',
            category: 'fitness',
            description: 'Are you planning proper meals and being physically active throughout ,. Weight loss goals are set from the first day of the year and people try to follow them through',
            date: ' Fitness/ August 21 2017',
            id: '48',
            explanation: 'Despite working out regularly and sticking to a prescribed diet, many people struggle to lose weight. But instead of getting bogged down, take a deep breath and focus on what you may be doing wrong.If you’re starving yourself over weekdays and depriving yourself of all the foods you love, you’ll probably end up messing with your weekend meals or just get frustrated and give up altogether. Rather notice how well your clothes fit, focus on your ability to do extended workouts, your relationship with food to measure actual progress, she recommended.Pick up any form of physical activity, even if it is gentle walking. Try aiming for five-kilometre progressive walks and be generally active throughout the day.If your hormones are imbalanced, then excessive workouts can actually cause inflammation and wreck them even further.“Get some basic blood work done including thyroid, fasting insulin for PCOS, and estrogen dominance,” '

        }, 
        {
            author: 'Nicole',
            title: 'Five reasons you could be struggling to lose weight',
            image: '/images/fitt.jpg',
            category: 'fitness',
            description: 'Are you planning proper meals and being physically active throughout ,. Weight loss goals are set from the first day of the year and people try to follow them through',
            date: ' Fitness/ August 21 2017',
            id: '49',
            explanation: 'Despite working out regularly and sticking to a prescribed diet, many people struggle to lose weight. But instead of getting bogged down, take a deep breath and focus on what you may be doing wrong.If you’re starving yourself over weekdays and depriving yourself of all the foods you love, you’ll probably end up messing with your weekend meals or just get frustrated and give up altogether. Rather notice how well your clothes fit, focus on your ability to do extended workouts, your relationship with food to measure actual progress, she recommended.Pick up any form of physical activity, even if it is gentle walking. Try aiming for five-kilometre progressive walks and be generally active throughout the day.If your hormones are imbalanced, then excessive workouts can actually cause inflammation and wreck them even further.“Get some basic blood work done including thyroid, fasting insulin for PCOS, and estrogen dominance,” '

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
            title: 'Last nine months have been gruelling but life-changing: Adarsh Gourav',
            image: '/images/pack.jpg',
            category: 'storyfitness',
            description: 'No junk food or desserts and showing up to train six days a week. Supremely excited for everything we plan on achieving," said Adarsh Gourav',
            date: ' Fitness/ August 21 2017',
            id: '51',
            explanation: 'The White Tiger star Adarsh Gourav documented his body transformation journey in the form of an Instagram reel. The actor stated that the video compiles his 9-month-long journey. He also added pictures to showcase from where he started and how far he has come. He wrote in his post: "Transformation - My last 9 months have been gruelling but life changing." He added a couple of emojis of pizza, fries and other fast food and wrote: "And showing up to train 6 days a week." Thanking his trainer Aslam Shah, Adarsh added, "Helped me crack my first muscle up, my first pull over and pushed me everyday to my absolute limits. I had an incredible 8 months with him."Thanking his new fitness instructor, Adarsh Gourav added, "The last 1 month, I have been training with Robin Behl and Karan Sawhney and I can swear by their discipline and commitment'

        }, 
        {
            author: 'Nicole',
            title: 'Last nine months have been gruelling but life-changing: Adarsh Gourav',
            image: '/images/pack.jpg',
            category: 'storyfitness',
            description: 'No junk food or desserts and showing up to train six days a week. Supremely excited for everything we plan on achieving," said Adarsh Gourav',
            date: ' Fitness/ August 21 2017',
            id: '52',
            explanation: 'The White Tiger star Adarsh Gourav documented his body transformation journey in the form of an Instagram reel. The actor stated that the video compiles his 9-month-long journey. He also added pictures to showcase from where he started and how far he has come. He wrote in his post: "Transformation - My last 9 months have been gruelling but life changing." He added a couple of emojis of pizza, fries and other fast food and wrote: "And showing up to train 6 days a week." Thanking his trainer Aslam Shah, Adarsh added, "Helped me crack my first muscle up, my first pull over and pushed me everyday to my absolute limits. I had an incredible 8 months with him."Thanking his new fitness instructor, Adarsh Gourav added, "The last 1 month, I have been training with Robin Behl and Karan Sawhney and I can swear by their discipline and commitment'

        }, 





    ])
       return(
           <ContextArticle.Provider value={[latest,setlatest]} >
               {props.children}
           </ContextArticle.Provider  >
       )

}