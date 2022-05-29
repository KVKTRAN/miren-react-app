const top = [
    {
        "id": 1,
        "name": "Music ocean print bowling shirt",
        "description": "Pursuing the concept of escapism and faraway destination, Gucci Love Parade presents a series of pieces inspired by travel to warm places. Prints recalling typical souvenir shirts apply to refined designs, creating playful yet elegant ready-to-wear pieces. This bowling shirt is animated by a music ocean print, while on the back appears the 'Gucci Love Parade' script - LOVEPARADE word marks and related logos © Love Parade Berlin GmbH",
        "pattern": "Green viscose with music ocean print",
        "size": "US 4",
        "prize": 1400,
        "image": "../assets/gucci2_top.jfif",
        "category": {
            "id": 4,
            "name": "Short sleeves",
            "belong_type": "Top"
        },
        "brand": {
            "name": "Gucci",
            "date_found": "1921-01-01",
            "image": "http://localhost:8000/media/brands/Gucci.png"
        }
    },
    {
        "id": 2,
        "name": "Interlocking G star print silk bowling shirt",
        "description": "Paying homage to the city that created a fascination with the movie industry, Gucci Love Parade is a collection inspired by Hollywood's glamour and pop culture—mixing old Hollywood with new Hollywood. This bowling shirt depicts the Interlocking G star print in gold and black. The layering of different styles shows the eclectic nature of the House, where the past seamlessly blends with the present.",
        "pattern": "Black and gold silk Interlocking G star print",
        "size": "US 4",
        "prize": 2100,
        "image": "http://localhost:8000/media/tops/cc7a65eed4994f818fcd54383c37d007.jpg",
        "category": {
            "id": 4,
            "name": "Short sleeves",
            "belong_type": "Top"
        },
        "brand": {
            "name": "Gucci",
            "date_found": "1921-01-01",
            "image": "http://localhost:8000/media/brands/Gucci.png"
        }
    },
    {
        "id": 3,
        "name": "Twill shirt",
        "description": "An essential and refined soul characterizes the design of this twill shirt defined by its straight cut and scarf collar that adds a romantic touch. The twill garment is decorated with the printed logo that adds an iconic accent.",
        "pattern": "Orange with Printed logo",
        "size": "US 4",
        "prize": 680,
        "image": "http://localhost:8000/media/tops/a090c8d0a520443792a5a46004a7dd7d.jfif",
        "category": {
            "id": 4,
            "name": "Long sleeves",
            "belong_type": "Top"
        },
        "brand": {
            "name": "Prada",
            "date_found": "1921-01-01",
            "image": "http://localhost:8000/media/brands/Gucci.png"
        }
    },
    {
        "id": 4,
        "name": "Twist Short-Sleeve Shirt in Cotton Mélange",
        "description": "Accented with a twisted hem, this short-sleeve top is detailed with an open collar V-neckline and finished with bracelet sleeves. It’s cut from sustainably sourced cotton from an Italian mill with a subtle mélange finish.",
        "pattern": "Plain Pink",
        "size": "US 4",
        "prize": 570,
        "image": "http://localhost:8000/media/tops/8cb34b97247b422ba8b0b9d5e4764bbf.jfif",
        "category": {
            "id": 4,
            "name": "Short Sleeve",
            "belong_type": "Top"
        },
        "brand": {
            "name": "Theory",
            "date_found": "1921-01-01",
            "image": "http://localhost:8000/media/brands/Gucci.png"
        }
    },
    {
        "id": 5,
        "name": "Vintage Check Sleeve Cotton Oversized T-shirt",
        "description": "Burberry pattern T-shirt, main color is black. Prize is around 580.00 CAD. Multiple size with free shipping in Ontario",
        "pattern": "Burberry pattern",
        "size": "US 4",
        "prize": 900,
        "image": "http://localhost:8000/media/tops/fd730435241b45dc9a75235d33e95672.jfif",
        "category": {
            "id": 4,
            "name": "T-shirt",
            "belong_type": "Top"
        },
        "brand": {
            "name": "Burberry",
            "date_found": "1921-01-01",
            "image": "http://localhost:8000/media/brands/Gucci.png"
        }
    }
]

const event = [
    {
        "id": 1,
        "name": "Go to Value Village",
        "date": "2022-05-16",
        "time": "10:30",
        "description": "Go to Value Village at Victoria Park",
        "tasks": [
            {
                "detail": "Buy items for later switch",
                "checked": false,
            },
            {
                "detail": "Buy new items",
                "checked": false,
            },
            {
                "detail": "Donate items",
                "checked": false,
            },
        ],
    },
    {
        "id": 1,
        "name": "Go to Ample Food Market",
        "date": "2022-05-17",
        "time": "15:00",
        "description": "Go to Ample at Roger Rd",
        "tasks": [
            {
                "detail": "Buy meats",
                "checked": false,
            },
            {
                "detail": "Buy Fish",
                "checked": false,
            },
            {
                "detail": "Buy vegetable",
                "checked": false,
            },
            {
                "detail": "Buy candy",
                "checked": false,
            },
            {
                "detail": "Buy snacks",
                "checked": false,
            },
        ],
    },
    {
        "id": 1,
        "name": "Cooking",
        "date": "2022-05-17",
        "time": "17:00",
        "description": "Cook Fish and chips",
        "tasks": [
            {
                "detail": "Buy ingredients",
                "checked": false,
            },
            {
                "detail": "Make salads",
                "checked": false,
            },
            {
                "detail": "Fried fish",
                "checked": false,
            },
            {
                "detail": "Make drinks",
                "checked": false,
            },
        ],
    }, 
]

export {top, event}