import vscodeImg from '../../assets/vscodeImg.jpg' // SOFTWARE TOOLS IMG
import gitImg from '../../assets/gitImg.png'        // SOFTWARE TOOLS IMG
import viteImg from '../../assets/viteImg.webp' // SOFTWARE TOOLS IMG
import postmanImg from '../../assets/postmanImg.jpg'    // SOFTWARE TOOLS IMG
import mysqlImg from '../../assets/mysqlImg.png'    // SOFTWARE TOOLS IMG
import mongodbImg from '../../assets/mongodbImg.png'    // SOFTWARE TOOLS IMG




// PROJECT TOOLS PICTURES
import { 
    Home,
    Home1,
    Home2,
    Home3,
    Home4,
    BulkOrder,
    DashBoardHome,
    History,
    LoginPage,
    MobileView,
    Receipt,
    Registration,
    SingleOrder,
    TrackOrder ,
    Video as RefillingDemo
} from '../../assets/WATER-REFILLING-PROJECT/Exporter'

import { 
    Home as HotelHome,
    Home1 as HotelHome1,
    Home2 as HotelHome2,
    Home3 as HotelHome3,
    RoomsCollection,
    RoomsAmenties,
    DateBook,
    BookRoom,
    Video as HotelDemo
} from '../../assets/HOTEL-BOOKING/Exporter'



const toolsUsed = [
    [
        {
            name: 'Visual Studio Code',
            src: vscodeImg,
            alt: 'Visual Studio Code Img',
            link: 'https://code.visualstudio.com/'
        },
        {
            name: 'Postman',
            src: postmanImg,
            alt: 'Postman Img',
            link: 'https://www.postman.com/'
        },
        {
            name: 'Vite',
            src: viteImg,
            alt: 'Vite Img',
            link: 'https://vitejs.dev/'
        },
    ],
    [
        {
            name: 'Git',
            src: gitImg,
            alt: 'Git Img',
            link: 'https://git-scm.com/'
        },
        {
            name: 'MongoDB',
            src: mongodbImg,
            alt: 'MongoDB Img',
            link: 'https://www.mongodb.com/'
        },
        {
            name: 'MySQL',
            src: mysqlImg,
            alt: 'MySQL Img',
            link: 'https://www.mysql.com/'
        },
    ]
];


// PROJECT SLIDES MANAGER
const projectDetails = [
    {
        title: 'WATER REFILLING SYSTEM',
        about: 'A website of Water Refilling Station for client able to order online and manage it using its feautures',
        link: '#',
        bg: '#003f88',
        textColor: '#FFF',
        btnColor: '#FFF',
        img: 
        [   
            {   
                label: 'Home Page',
                imgPath: Home,
            },
            {   
                label: 'Home Page',
                imgPath: Home1,
            },
            {   
                label: 'Home Page',
                imgPath: Home2,
            },
            {   
                label: 'Home Page',
                imgPath: Home3,
            },
            {   
                label: 'Home Page',
                imgPath: Home4,
            },
            {   
                label: 'DashBoard Page',
                imgPath: DashBoardHome,
            },
            {   
                label: 'BulkOrder Page',
                imgPath: BulkOrder,
            },
            {   
                label: 'SingleOrder Page',
                imgPath: SingleOrder,
            },
            {   
                label: 'Receipt Page',
                imgPath: Receipt,
            },
            {   
                label: 'History Page',
                imgPath: History,
            },
            {   
                label: 'Registration Page',
                imgPath: Registration,
            },
            {   
                label: 'TrackOrder Page',
                imgPath: TrackOrder,
            },
            {   
                label: 'Login Page',
                imgPath: LoginPage,
            },
            {   
                label: 'MobileView',
                imgPath: MobileView,
            },
        ],
        more: {
            techStack: [
                {
                    icon: 'React', 
                    name: 'React'
                },
                {
                    icon: 'Electron', 
                    name: 'Electron'
                }, 
                {
                    icon: 'React', 
                    name: 'React'
                }
            ],
            responsibilities : [
                "Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
                "Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
                "Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
                "Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
                "Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
            ],
            videoSrc: RefillingDemo,
            videoSpeed: 4,
            gitURL: 'https://github.com/NelTeano/NelTeano-Portfolio',
            prevURL: 'https://github.com/NelTeano/NelTeano-Portfolio'
        },
        // techStack: ['React', 'MongoDB', 'Express'],
        // responsibilities : [
        //     "Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
        //     "Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
        //     "Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
        //     "Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
        //     "Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
        // ],
        // gitURL: 'https://github.com/NelTeano/NelTeano-Portfolio',
        // prevURL: 'https://github.com/NelTeano/NelTeano-Portfolio'
    },
    {
        title: 'HOTEL BOOKING WEBSITE',
        about: 'A Website where you can book or make a reservation hotel room',
        link: '#',
        bg: '#0784b5',
        textColor: '#FFF',
        btnColor: '#FFF',
        img: 
        [   
            {   
                label: 'Landing Page',
                imgPath: HotelHome,
            },
            {   
                label: 'Landing Page',
                imgPath: HotelHome1,
            },
            {   
                label: 'Landing Page',
                imgPath: HotelHome2,
            },
            {   
                label: 'Landing Page',
                imgPath: HotelHome3,
            },
            {   
                label: 'Room Collection',
                imgPath: RoomsCollection,
            },
            {   
                label: 'Show Room Amenties',
                imgPath: RoomsAmenties,
            },
            {   
                label: 'Booking Calendar',
                imgPath: DateBook,
            },
            {   
                label: 'Booking Form',
                imgPath: BookRoom,
            },
        ],
        more: {
            techStack: [
                    {
                        icon: 'React', 
                        name: 'React'
                    }, 
                    {
                        icon: 'React', 
                        name: 'React'
                    }, 
                    {
                        icon: 'React', 
                        name: 'React'
                    }
                ],
                responsibilities : [
                    "jojo mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
                    "Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
                    "Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
                    "Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
                    "Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
                ],
                videoSrc: HotelDemo,
                videoSpeed: 2,
                gitURL: 'https://github.com/NelTeano/NelTeano-Portfolio',
                prevURL: 'https://portfolio-jonel.vercel.app/'
        },
    },
    // {
    //     title: 'BEAN BLOCK MOBILE',
    //     about: 'A mobile app design for Bean Block’s E-commerce app ',
    //     link: '#',
    //     bg: '#FF9760',
    //     textColor: '#51240D',
    //     btnColor: '#51240D',
    //     img: 
    //     [   
    //         {   
    //             label: 'Test1',
    //             imgPath: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    //         },
    //         {
    //             label: 'Test2',
    //             imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    //         },
    //     ],
    // },
    // {
    //     title: 'BEAN BLOCK MOBILE',
    //     about: 'A mobile app design for Bean Block’s E-commerce app ',
    //     link: '#',
    //     bg: '#51240D',
    //     textColor: '#FFF',
    //     btnColor: '#EE9765',
    //     img: 
    //     [   
    //         {   
    //             label: 'Test1',
    //             imgPath: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    //         },
    //         {
    //             label: 'Test2',
    //             imgPath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    //         },
    //         {
    //             label: 'Test3',
    //             imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    //         },
    //     ],
    //     more: {
    //         techStack: [
    //             {icon: 'React', name: 'React'}, {icon: 'React', name: 'React'}, {icon: 'React', name: 'React'}]
    //     },
    // },
    // {
    //     title: 'BEAN BLOCK MOBILE',
    //     about: 'A mobile app design for Bean Block’s E-commerce app ',
    //     link: '#',
    //     bg: '#51240D',
    //     textColor: '#FFF',
    //     btnColor: '#EE9765',
    //     img: 
    //     [   
    //         {   
    //             label: 'Test1',
    //             imgPath: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    //         },
    //         {
    //             label: 'Test2',
    //             imgPath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    //         },
    //         {
    //             label: 'Test3',
    //             imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    //         },
    //     ],
    // },
    // {
    //     title: 'BEAN BLOCK MOBILE',
    //     about: 'A mobile app design for Bean Block’s E-commerce app ',
    //     link: '#',
    //     bg: '#51240D',
    //     textColor: '#FFF',
    //     btnColor: '#EE9765',
    //     img: 
    //     [   
    //         {   
    //             label: 'Test1',
    //             imgPath: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    //         },
    //         {
    //             label: 'Test2',
    //             imgPath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    //         },
    //         {
    //             label: 'Test3',
    //             imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    //         },
    //     ],
    // },
    // {
    //     title: 'BEAN BLOCK MOBILE',
    //     about: 'A mobile app design for Bean Block’s E-commerce app ',
    //     link: '#',
    //     bg: '#51240D',
    //     textColor: '#FFF',
    //     btnColor: '#EE9765',
    //     img: 
    //     [   
    //         {   
    //             label: 'Test1',
    //             imgPath: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    //         },
    //         {
    //             label: 'Test2',
    //             imgPath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    //         },
    //         {
    //             label: 'Test3',
    //             imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    //         },
    //     ],
    // },
    // {
    //     title: 'BEAN BLOCK MOBILE',
    //     about: 'A mobile app design for Bean Block’s E-commerce app ',
    //     link: '#',
    //     bg: '#51240D',
    //     textColor: '#FFF',
    //     btnColor: '#EE9765',
    //     img: 
    //     [   
    //         {   
    //             label: 'Test1',
    //             imgPath: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    //         },
    //         {
    //             label: 'Test2',
    //             imgPath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    //         },
    //         {
    //             label: 'Test3',
    //             imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    //         },
    //     ],
    // },
    // {
    //     title: 'BEAN BLOCK MOBILE',
    //     about: 'A mobile app design for Bean Block’s E-commerce app ',
    //     link: '#',
    //     bg: '#51240D',
    //     textColor: '#FFF',
    //     btnColor: '#EE9765',
    //     img: 
    //     [   
    //         {   
    //             label: 'Test1',
    //             imgPath: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    //         },
    //         {
    //             label: 'Test2',
    //             imgPath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    //         },
    //         {
    //             label: 'Test3',
    //             imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    //         },
    //     ],
    // },
    // {
    //     title: 'BEAN BLOCK MOBILE',
    //     about: 'A mobile app design for Bean Block’s E-commerce app ',
    //     link: '#',
    //     bg: '#51240D',
    //     textColor: '#FFF',
    //     btnColor: '#EE9765',
    //     img: 
    //     [   
    //         {   
    //             label: 'Test1',
    //             imgPath: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    //         },
    //         {
    //             label: 'Test2',
    //             imgPath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    //         },
    //         {
    //             label: 'Test3',
    //             imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    //         },
    //     ],
    // },
    
]


export { 
    projectDetails,
    toolsUsed
}