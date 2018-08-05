var friendsArray = [

    {
        "name": "Junior Santiago",
        "photo": "http://da8lb468m8h1w.cloudfront.net/v2/cpanel/9129859-122669297_1-s4-v1.png?palette=1",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "name": "Billy Bob",
        "photo": "http://a4.typepad.com/6a01b8d24b45f7970c01b8d2664c34970c-pi",
        "scores": [
            3,
            1,
            2,
            2,
            4,
            1,
            3,
            1,
            1,
            1
        ]
    },
    {
        "name": "Henry Haney",
        "photo": "https://www.completesportsnigeria.com/wp-content/uploads/2018/06/Nigeria-Nike-Bitmoji.png",
        "scores": [
            1,
            4,
            5,
            3,
            3,
            2,
            5,
            1,
            4,
            1
        ]
    },
    {
        "name": "Leroy Brown",
        "photo": "https://cleverboyd.files.wordpress.com/2017/02/bitmoji-20170205010548.png?w=720",
        "scores": [
            4,
            2,
            5,
            3,
            3,
            2,
            5,
            3,
            3,
            3
        ]
    },
    {
        "name": "Mike Hammer",
        "photo": "data:image/png;base64,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",
        "scores": [
            1,
            2,
            4,
            4,
            4,
            5,
            1,
            4,
            2,
            5
        ]
    },
    {
        "name": "Sally Joe",
        "photo": "https://i.pinimg.com/736x/f6/7b/4b/f67b4b7209845d6b0b9c9b4f1a88e52a--pharmacy-humor.jpg",
        "scores": [
            2,
            4,
            4,
            5,
            1,
            2,
            5,
            3,
            2,
            3
        ]
    },
    {
        "name": "Peggy Sue",
        "photo": "http://da8lb468m8h1w.cloudfront.net/v2/cpanel/8915659-119780750_0_s4-v1.png?palette=1",
        "scores": [
            2,
            3,
            2,
            4,
            1,
            2,
            5,
            3,
            3,
            2
        ]
    },
    {
        "name": "Anita Daho",
        "photo": "https://tse2.mm.bing.net/th?id=OIP.h6YeOzywOSQ-qPMALFb6tgHaHc&w=190&h=191&c=8&o=5&pid=1.7",
        "scores": [
            3,
            1,
            2,
            2,
            1,
            1,
            2,
            3,
            4,
            1
        ]
    },
    {
        "name": "Ursula Davill",
        "photo": "https://i.pinimg.com/236x/c5/1c/2d/c51c2d47047f5a08e6ac43bb6944abf6.jpg",
        "scores": [
            2,
            1,
            5,
            3,
            4,
            2,
            3,
            5,
            3,
            1
        ]
    },
    {
        "name": "Betty Crocker",
        "photo": "https://i.redd.it/grm4dr68wduy.jpg",
        "scores": [
            3,
            4,
            5,
            2,
            1,
            3,
            4,
            3,
            2,
            3
        ]
    }
];

module.exports = friendsArray;