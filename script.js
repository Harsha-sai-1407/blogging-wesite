 // ==========================================
// DESTINATION DATA
// ==========================================
const destinations = [

    // ================= INDIA =================

    {
        id: "statue",
        name: "Statue of Unity",
        location: "Gujarat, India",
        images:[
             "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=800&q=80",
             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTK5UvtsY-1gVWM7ETpvb3FMcSjgeynv5OCsIJF0OmJg&s=10",
             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfpKO8iahuSXJHmj7-X3_6aL2NmO9DcrQgMV6iHkuIKw&s=10",
             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMHqU9VKNUDXPxvtWXsNvqUGW9iH10aSAnC1lys8bT_A&s=10"
        ],
        description: "The Statue of Unity is one of India's famous landmarks located near the Narmada River in Gujarat.",
        attractions: ["Statue of Unity", "Valley of Flowers", "Sardar Sarovar Dam"],
        activities: ["Sightseeing", "Photography", "River cruise"],
        food: "Gujarati thali, dhokla and fafda.",
        bestTime: "October to March",
        howToReach: "It can be reached by road and railway from nearby cities."
    },

    {
        id: "ahmedabad",
        name: "Ahmedabad",
        location: "Gujarat, India",
        images:[
             "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTmtwrfoTnVBd4mPEzL4EPJPJGgDvbmakBGzGE7fFIcA&s=10",
             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_UE0A9fJ7GV7k6SwaXAT3XPEhZ9wWtgG12YmdMJ49Yw&s=10",
             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrlE2LLoPeORZ6Q2X1SiM1sx0dk5XZLhCA-Cwg_erZDw&s=10"
        ],
        description: "Ahmedabad is a historic city known for its heritage buildings, culture and delicious Gujarati food.",
        attractions: ["Sabarmati Ashram", "Kankaria Lake", "Adalaj Stepwell"],
        activities: ["Heritage walk", "Shopping", "Food tour"],
        food: "Dhokla, fafda, jalebi and Gujarati thali.",
        bestTime: "November to February",
        howToReach: "Ahmedabad is connected by air, railway and road."
    },

    {
        id: "goa",
        name: "Goa",
        location: "Goa, India",
        images: [
            "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHEyB6QLYYjowwVbknhedc7OrS76Zm2AJot1urSZpItQ&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtORk8YasK8rZdB5wohlZTcX1ZFqxrHgClxz3e_CS5lw&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAvkBnyM9Vlx3bwYjxOyI-a1PUgk-uG-iAe_mhaoWlug&s=10"
        ],
        description: "Goa is famous for beautiful beaches, Portuguese heritage and coastal culture.",
        attractions: ["Baga Beach", "Fort Aguada", "Calangute Beach"],
        activities: ["Water sports", "Beach activities", "Sightseeing"],
        food: "Seafood, fish curry and rice.",
        bestTime: "November to February",
        howToReach: "Goa can be reached by air, railway and road."
    },

    {
        id: "manali",
        name: "Manali",
        location: "Himachal Pradesh, India",
        images: [
            "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLB36RiXkV4plErnkLc18z-yP9lNFRqLUijhl3Hu0yrw&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmDSBE_1zyzlUYezzaompKdKc2X52h6tth6v0qQ6EG1Q&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYEDlQGaw4jC-TzhBqOg3z5mJv6WdtEHyVR-NNAQ3tTQ&s=10"
        ],
        description: "Manali is a beautiful mountain destination surrounded by forests and snow-covered peaks.",
        attractions: ["Solang Valley", "Hidimba Temple", "Rohtang Pass"],
        activities: ["Trekking", "Paragliding", "Snow activities"],
        food: "Himachali food and Tibetan cuisine.",
        bestTime: "March to June",
        howToReach: "Manali is mainly connected by road."
    },

    {
        id: "taj-mahal",
        name: "Taj Mahal",
        location: "Agra, Uttar Pradesh, India",
        images: [
            "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtPFmlahqG5II4vOwjBys9FHADvQO_fuIhsDx3ffJN5g&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjjsP1pyQZ7A00AYHmMrFsxqOdcLmqCwX308A8IKqiuw&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoYsoMxLr0Zne26bJV0UjbpBxdAFXysv-Za0IvbdFSZg&s"
        ],
        description: "The Taj Mahal is a famous marble monument in Agra and an important symbol of India's heritage.",
        attractions: ["Taj Mahal", "Agra Fort", "Mehtab Bagh"],
        activities: ["Monument tour", "Photography", "Heritage walk"],
        food: "Petha, Mughlai dishes and North Indian food.",
        bestTime: "October to March",
        howToReach: "Agra is connected by railway, road and nearby airports."
    },

    {
        id: "jaipur",
        name: "Jaipur",
        location: "Rajasthan, India",
        images: [
            "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL51YNC4dyS-7IxLEwDq_MG9S-NeFEmdLEoCmtFlSxjg&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY8OBW4LiEqdXj2eQyOGd6Thv7wvHI8e2rf1pMr42CXg&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKodEgEABeLQnsFSlJr0PIgRUyB_d0Bg5hTlF05cWq6w&s=10"
        ],
        description: "Jaipur, known as the Pink City, is famous for royal palaces, forts and colorful markets.",
        attractions: ["Hawa Mahal", "Amber Fort", "City Palace"],
        activities: ["Fort visits", "Shopping", "Cultural tours"],
        food: "Dal baati churma, ghewar and Rajasthani thali.",
        bestTime: "October to March",
        howToReach: "Jaipur has an airport and is well connected by railway and road."
    },

    {
        id: "jaisalmer",
        name: "Jaisalmer",
        location: "Rajasthan, India",
        images: [
            "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX-kE8zlcdXSi8Dl-3Om3eG8rRUo3gTRQxdJ4Nr8Fdag&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYrz13afdaloBAUj2w8xMSG6AmsZY_m7uY5jNx7KTfQ&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvKnSbWa_VJZO4cgValBG99OjfHBZWdTnz1FocBDYVJw&s=10"
        ],
            
        description: "Jaisalmer is a desert city famous for its golden fort and Thar Desert landscapes.",
        attractions: ["Jaisalmer Fort", "Sam Sand Dunes", "Patwon Ki Haveli"],
        activities: ["Camel safari", "Desert camping", "Photography"],
        food: "Dal baati churma and traditional Rajasthani food.",
        bestTime: "November to February",
        howToReach: "Jaisalmer is connected by railway, road and flights."
    },

    {
        id: "kerala",
        name: "Kerala",
        location: "Kerala, India",
        images: [
            "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThzGvPtEepspp96C42RKyHV4kMNSk8SjKlf3WUyKcZ6Q&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWU7wInn7L0SQKZf45Qm_E5Y-S9uaPx9Xi_dX45S1IA&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw12clkquwqM1Lr8h1skEdDCyaUHdMYBG3DI109DJC2Q&s=10"
        ],
        description: "Kerala is known for its backwaters, green landscapes, beaches and traditional culture.",
        attractions: ["Alleppey", "Munnar", "Kochi"],
        activities: ["Houseboat ride", "Tea garden visit", "Beach activities"],
        food: "Appam, puttu, Kerala sadya and seafood.",
        bestTime: "September to March",
        howToReach: "Kerala has airports, railway stations and good road connectivity."
    },

    {
        id: "ladakh",
        name: "Ladakh",
        location: "Ladakh, India",
        images: [
            "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShAIQpZrLDYMzr9Xn9DFc7DuqL18IoQJhk-YowVXyrwg&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvjeCGZqO323BIDSqvtmDMUgszAH2d532HEyjcISzn3g&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQUp9gprvp7EeCqTwYilS5DaQjgdr85gDFF8T74EFM5w&s=10"
        ],
        description: "Ladakh is famous for high mountains, beautiful lakes, monasteries and dramatic landscapes.",
        attractions: ["Pangong Lake", "Leh Palace", "Nubra Valley"],
        activities: ["Mountain trips", "Trekking", "Photography"],
        food: "Momos, thukpa and traditional Ladakhi dishes.",
        bestTime: "May to September",
        howToReach: "Leh can be reached by air and by road during suitable seasons."
    },

    {
        id: "mumbai",
        name: "Mumbai",
        location: "Maharashtra, India",
        images: [
            "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-jCTWgaNVkGi-IRgCIqe0mbGT1ehO_73E1Ba8f5pPw&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWkudiRxyLL1lCBvv6Ltuhvh-jf64Z0xfUtv8TbNd10Q&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWJ-CAhwyhLMPRT837-dpn38rm7tXr_ixd-yXLJfWDkw&s=10"
        ],
        description: "Mumbai is a major coastal city known for Marine Drive, Bollywood and historic architecture.",
        attractions: ["Gateway of India", "Marine Drive", "Elephanta Caves"],
        activities: ["City sightseeing", "Shopping", "Street food tour"],
        food: "Vada pav, pav bhaji and bhel puri.",
        bestTime: "October to February",
        howToReach: "Mumbai has an international airport and excellent railway and road connectivity."
    },

    {
        id: "varanasi",
        name: "Varanasi",
        location: "Uttar Pradesh, India",
        images:[
            "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=800&q=80",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Cm3g1CtJcFkndfd_Ky9gSZdsAGc6lPs8izfHYm6_vw&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKheA_vXoGoFjMLub84oWargEpHZaasoHbHA6pDdRYVLpmtpAoqYOy0WbE&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQzVvA9P5ZnJK9rRo-H3URbtJUN-L55Kr5yybmA5v3w1xTog5GpwbjKvWa&s=10"
        ],
        description: "Varanasi is one of India's historic cities, famous for its ghats and spiritual traditions.",
        attractions: ["Ganga Ghats", "Kashi Vishwanath Temple", "Sarnath"],
        activities: ["Ganga boat ride", "Heritage walk", "Evening Ganga Aarti"],
        food: "Kachori, lassi, chaat and Banarasi sweets.",
        bestTime: "October to March",
        howToReach: "Varanasi is connected by airport, railway and road."
    },

    {
        id: "andaman",
        name: "Andaman Islands",
        location: "Andaman and Nicobar Islands, India",
        images: [
            "https://images.unsplash.com/photo-1589979481223-deb893043163?auto=format&fit=crop&w=800&q=80",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7xIc0iE2u6RXQ0f7wAUpC--Xu_wUdCcIIHUP_rF-2w&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxxod43CMsa5yO-C_kuZS4pp-VV01dcXbY0Z8bIMPPsQ&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kBB_hrqARXsO_k4qNyqnWFzc3Qn38lKmTrzFaHpy6g&s=10"
        ],
        description: "The Andaman Islands are known for clear water, beaches, coral reefs and tropical landscapes.",
        attractions: ["Radhanagar Beach", "Cellular Jail", "Elephant Beach"],
        activities: ["Scuba diving", "Snorkeling", "Beach activities"],
        food: "Seafood and coastal Indian cuisine.",
        bestTime: "October to May",
        howToReach: "Port Blair can be reached by air and selected sea routes."
    },

    {
        id: "ooty",
        name: "Ooty",
        location: "Tamil Nadu, India",
        images:[
            "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxzz2oTfmA3kzGxASNKpYtwZ54eHR8LHCuTEqEYED5bQ&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkiLp7sQs-snoJde4087bRZ_meZuwQ7Ydtj8NBX7juSw&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHf30zjMDcFo2KuKu4SHU3iu_W2GbqaNeXHCYppmHFkA&s=10"
        ],
        description: "Ooty is a popular hill station known for tea gardens, green hills and pleasant weather.",
        attractions: ["Ooty Lake", "Botanical Garden", "Nilgiri Mountain Railway"],
        activities: ["Boating", "Nature walks", "Toy train ride"],
        food: "South Indian food, chocolates and tea.",
        bestTime: "April to June",
        howToReach: "Ooty can be reached by road and by train through nearby stations."
    },

    {
        id: "munnar",
        name: "Munnar",
        location: "Kerala, India",
        images: [
            "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnWjANFoUJe-t-ovOYQ_SYsd6R0pH9qcei4ACCxZKug&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6qYq4a6nEVWoX2CUbN2B4rfGv-mQcEOc-79fu238ZSQ&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToFj8YocSXKfrBWu1FUMbM8jti6fayQl0tB0m_oTXm8g&s=10"
        ],
        description: "Munnar is a beautiful hill destination famous for tea plantations and green mountain landscapes.",
        attractions: ["Tea Gardens", "Eravikulam National Park", "Mattupetty Dam"],
        activities: ["Tea plantation visit", "Trekking", "Nature photography"],
        food: "Kerala cuisine, appam and traditional dishes.",
        bestTime: "September to May",
        howToReach: "Munnar is mainly reached by road from nearby cities."
    },

    {
        id: "rishikesh",
        name: "Rishikesh",
        location: "Uttarakhand, India",
        images: [
            "https://images.unsplash.com/photo-1609920658906-8223bd289001?auto=format&fit=crop&w=800&q=80",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqaX0leltK4NTY-Q92c21_Y_JBgsPHa4o7UlcQWC_zFQ&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdqY1uwc7fFsVEAAoquYdi_eP5h-Qg6TaFiQO0ruyNOA&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3aEPpfxSBEIRjnCG4QzIiHI3-zErhtNLF90QSpwOnLw&s=10"
        ],
        description: "Rishikesh is located beside the Ganga and is known for yoga, spirituality and adventure activities.",
        attractions: ["Laxman Jhula area", "Triveni Ghat", "River Ganga"],
        activities: ["River rafting", "Yoga", "Trekking"],
        food: "North Indian and vegetarian food.",
        bestTime: "September to November and February to May",
        howToReach: "Rishikesh is connected by road and railway."
    },

    {
        id: "darjeeling",
        name: "Darjeeling",
        location: "West Bengal, India",
         images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4CRAECESlQI74MXCUYa6a0J2Fw59RekqoMWHrn8O3jQ&s=10" ,
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkKVLp7_r1BTdNYiwyQJGyBXdOKLYmCi0Zi6X_R9pfqw&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4LmPyGMezHvNYILYq_iLNJDL7vdfKvHEnnU3Uo3EROQ&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP9B2E9UPvWqcgFFALcCGphS2Zji7bhSbH99q2VxGJBw&s=10"
         ],
        description: "Darjeeling is famous for tea gardens, mountain views and the historic toy train.",
        attractions: ["Tiger Hill", "Batasia Loop", "Tea Gardens"],
        activities: ["Toy train ride", "Tea garden visit", "Mountain sightseeing"],
        food: "Momos, thukpa and Bengali cuisine.",
        bestTime: "March to May and September to November",
        howToReach: "Darjeeling is reached by road and through nearby railway and airport connections."
    },


    // ================= INTERNATIONAL =================

    {
        id: "paris",
        name: "Paris",
        location: "France",
        images: [
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCg95hhWhCnU2y-j7NooUWXabUw-YmT_-G28jCtFZg2g&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMjOWpBFvonQsTlqXFwUI5HciHey2s4jWJQ9PbrGeqw&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqXlGCkJEaJla5xRZBKjfedkq4Nk1agfCvj1K3VBFqTQ&s=10"
        ],
        description: "Paris is famous for art, architecture, fashion and iconic landmarks.",
        attractions: ["Eiffel Tower", "Louvre Museum", "Arc de Triomphe"],
        activities: ["City sightseeing", "Museum visits", "River cruise"],
        food: "Croissants, baguettes, cheese and French cuisine.",
        bestTime: "April to June and September to October",
        howToReach: "Paris is connected internationally through major airports and railway networks."
    },

    {
        id: "new-york",
        name: "New York",
        location: "USA",
        images: [
            "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=800&q=80",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8TvchyN8wm9r07i20V1M-h_b1ZBBbezigEb98VZx8Lw&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkmj-VqUUphF-xP5CfQQye_PjhHrQI_93KayMc-Ra_dQGQO0Yv_Ii3pwY&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UzNRJ4wh3rHLV_hX7uxnb1vc2VQPkKQcis2urqhdYQ&s=10"
        ],
        description: "New York is a major global city known for skyscrapers, parks, museums and entertainment.",
        attractions: ["Statue of Liberty", "Central Park", "Times Square"],
        activities: ["City tours", "Shopping", "Museum visits"],
        food: "Pizza, burgers, bagels and international cuisine.",
        bestTime: "April to June and September to November",
        howToReach: "New York is served by major international airports."
    },

    {
        id: "dubai",
        name: "Dubai",
        location: "United Arab Emirates",
        images: [
            "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnKN0S-XnBEYFOUskxgYTixO-NSeOnwfcQ9cK2KsID8A&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLQwM516a_wu23lrqNhgocoCM_wfqTsDbyltcD9rxrQg&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcZ0SRDgQcUNinXZsy8QAVSNuId0CxH6Z8YIP4qvvFpw&s=10"
        ],
        description: "Dubai is known for modern architecture, shopping, luxury experiences and desert landscapes.",
        attractions: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah"],
        activities: ["Desert safari", "Shopping", "City sightseeing"],
        food: "Arabic cuisine, shawarma and international food.",
        bestTime: "November to March",
        howToReach: "Dubai has a major international airport with flights from many countries."
    },

    {
        id: "tokyo",
        name: "Tokyo",
        location: "Japan",
        images: [
            "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWxiJmLZLLG4pgKtnUtiPR7yH3rBr0UCFAfUQQEKcMdg&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwta8ez65MwYm5cq4GpMK3175na3YYXfEEGkvjgGDl_Q&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWaBF1PBPisvNKLXY31ZkpfJY5it6VgILkjZ7AlHyHhg&s=10"
        ],
        description: "Tokyo combines modern technology, traditional culture, shopping and entertainment.",
        attractions: ["Tokyo Tower", "Shibuya Crossing", "Senso-ji Temple"],
        activities: ["City sightseeing", "Shopping", "Cultural experiences"],
        food: "Sushi, ramen, tempura and Japanese cuisine.",
        bestTime: "March to May and October to November",
        howToReach: "Tokyo is served by major international airports."
    },

    {
        id: "maldives",
        name: "Maldives",
        location: "Maldives",
        images: [
            "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxkc5OfoH1RepHXCt6q4AEyybf3_d__7DBmssRGlG5Wg&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbzrMxUWD1WBEpKuK9_RFsCA6SDF834pYHmBRaShosBw&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqRMbMbG2Z5ggadHQdoukVY_boz9a0idQb-S4lc05rMQ&s=10"
        ],
        description: "The Maldives is famous for tropical islands, blue waters, coral reefs and beaches.",
        attractions: ["Male", "Coral reefs", "Private islands"],
        activities: ["Snorkeling", "Scuba diving", "Boat trips"],
        food: "Seafood, coconut-based dishes and Maldivian cuisine.",
        bestTime: "November to April",
        howToReach: "The Maldives is mainly reached by international flights to Velana International Airport."
    },

    {
        id: "rome",
        name: "Rome",
        location: "Italy",
        images: [
            "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIkhfRmIXYNcwbjpo4Th5GRLqZAWKUA7usrY04vlDjMg&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR2PqYrqcb29D67jlCF-A8EEc0jK1VERWCYvJa9G6nPA&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXpZhpQ1EXXcCMXVQLa0cQ9WNrukFOBC73Msm29oiLwA&s=10"
        ],
        description: "Rome is a historic city famous for ancient monuments, art and Italian culture.",
        attractions: ["Colosseum", "Trevi Fountain", "Roman Forum"],
        activities: ["Historical tours", "Museum visits", "Food tours"],
        food: "Pizza, pasta, gelato and Italian cuisine.",
        bestTime: "April to June and September to October",
        howToReach: "Rome has international airport connections and European rail services."
    },

    {
        id: "switzerland",
        name: "Switzerland",
        location: "Switzerland",
        images:[ 
            "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=800&q=80",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjgeBf3gNN2C2ToKidYlYEVy9JGWGu2_svWBhwijkCtQ&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKtQKAqQWT7gvCvK_jfgOsOALtv2fEufN8OOkGQTVDGQ&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc3wBxIxkgxJ9Naj9xRmpwM2_UaD9YtOCOSecP7tyolg&s=10"
        ],
            
        description: "Switzerland is famous for the Alps, beautiful lakes, villages and scenic railway journeys.",
        attractions: ["Swiss Alps", "Interlaken", "Lake Geneva"],
        activities: ["Mountain trips", "Skiing", "Scenic train journeys"],
        food: "Swiss chocolate, cheese and fondue.",
        bestTime: "June to September",
        howToReach: "Switzerland is connected by international airports and European railway networks."
    },

    {
        id: "bali",
        name: "Bali",
        location: "Indonesia",
        images: [
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPdm3D1TzQkQ5mMv9HcyQaLWVgHqp5kjx6IbDCrSUw8w&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNeuguCOmpk1bBbNUy6wB-HjkktzJDyhFuwkjfcCZADA&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW2SiyqzdINxkhS0c10vwYUoGtNXgKxw5_3fBDGjcUFA&s=10"
        ],
        description: "Bali is a tropical destination known for beaches, temples, rice terraces and cultural experiences.",
        attractions: ["Uluwatu Temple", "Ubud", "Tegallalang Rice Terraces"],
        activities: ["Beach activities", "Temple visits", "Surfing"],
        food: "Nasi goreng, satay and Indonesian cuisine.",
        bestTime: "April to October",
        howToReach: "Bali is served by Ngurah Rai International Airport."
    }
];


// ==================================================
// DESTINATION CARDS
// ==================================================
// ==========================================
// DISPLAY INDIAN DESTINATIONS
// ==========================================

const indianContainer =
    document.getElementById("destinationContainer");

// ==========================================
// DISPLAY INTERNATIONAL DESTINATIONS
// ==========================================

const internationalContainer =
    document.getElementById("internationalContainer");


// International destination IDs
const internationalIds = [
    "paris",
    "new-york",
    "dubai",
    "tokyo",
    "maldives",
    "rome",
    "switzerland",
    "bali"
];


// ==========================================
// FUNCTION TO CREATE DESTINATION CARD
// ==========================================

function createDestinationCard(destination) {

    const cardImage =
        destination.images && destination.images.length > 0
            ? destination.images[0]
            : destination.image;

    return `
        <div class="card">

            <img
                src="${cardImage}"
                alt="${destination.name}"
            >

            <h3>${destination.name}</h3>

            <p>📍 ${destination.location}</p>

            <a href="destination.html?id=${destination.id}">
                Read More
            </a>

        </div>
    `;
}


// ==========================================
// ADD INDIAN DESTINATIONS
// ==========================================

if (indianContainer) {

    destinations.forEach(function(destination) {

        if (!internationalIds.includes(destination.id)) {

            indianContainer.innerHTML +=
                createDestinationCard(destination);

        }

    });

}


// ==========================================
// ADD INTERNATIONAL DESTINATIONS
// ==========================================

if (internationalContainer) {

    destinations.forEach(function(destination) {

        if (internationalIds.includes(destination.id)) {

            internationalContainer.innerHTML +=
                createDestinationCard(destination);

        }

    });

}


const details =
    document.getElementById("destinationDetails");

if (details) {

    const params =
        new URLSearchParams(window.location.search);

    const id = params.get("id");

    const destination =
        destinations.find(function(item) {

            return item.id === id;

        });


    if (destination) {

        details.innerHTML = `

    <h2>${destination.name}</h2>

    <h3>📍 ${destination.location}</h3>

    <!-- MAIN IMAGE -->
    <img
        class="main-image"
        src="${destination.images[0]}"
        alt="${destination.name}"
    >

    <h2>📝 About</h2>

    <p>
        ${destination.description}
    </p>


            <h2>🏛️ Famous Attractions</h2>

            <ul class="info-list">

                ${destination.attractions.map(function(item) {

                    return `<li>📍 ${item}</li>`;

                }).join("")}

            </ul>


            <h2>🎯 Things To Do</h2>

            <ul class="info-list">

                ${destination.activities.map(function(item) {

                    return `<li>✓ ${item}</li>`;

                }).join("")}

            </ul>


            <h2>🍴 Local Food</h2>

            <p>
                ${destination.food}
            </p>


            <h2>🌤️ Best Time To Visit</h2>

            <p>
                ${destination.bestTime}
            </p>


            <h2>🚗 How To Reach</h2>

            <p>
                ${destination.howToReach}
            </p>


           <h2>📸 Photo Gallery</h2>

<div class="gallery">

    <img
        src="${destination.images[0]}"
        alt="${destination.name}"
    >

    <img
        src="${destination.images[1]}"
        alt="${destination.name}"
    >

    <img
        src="${destination.images[2]}"
        alt="${destination.name}"
    >

    <img
        src="${destination.images[3]}"
        alt="${destination.name}"
    >

</div>


            <br>

            <a href="destinations.html" class="btn">
                ← Back to Destinations
            </a>

        `;
    }

    else {

        details.innerHTML = `
            <h2>Destination not found</h2>
        `;

    }
}
// ==========================================
// SEARCH DESTINATIONS
// ==========================================

function searchDestinations() {

    const searchBox = document.getElementById("searchBox");

    const searchText = searchBox.value.toLowerCase().trim();

    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {

        const cardText = card.innerText.toLowerCase();

        if (cardText.includes(searchText)) {

            card.style.display = "";

        } else {

            card.style.display = "none";
        }

    });
}

