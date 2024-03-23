import vscodeImg from '../../assets/vscodeImg.jpg' // SOFTWARE TOOLS IMG
import gitImg from '../../assets/gitImg.png'        // SOFTWARE TOOLS IMG
import viteImg from '../../assets/viteImg.webp' // SOFTWARE TOOLS IMG
import postmanImg from '../../assets/postmanImg.jpg'    // SOFTWARE TOOLS IMG
import mysqlImg from '../../assets/mysqlImg.png'    // SOFTWARE TOOLS IMG
import mongodbImg from '../../assets/mongodbImg.png'    // SOFTWARE TOOLS IMG


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
        about: 'A mobile app design for Bean Block’s E-commerce app ',
        link: '#',
        bg: '#003f88',
        textColor: '#FFF',
        btnColor: '#FFF',
        img: 
        [   
            {   
                label: 'Test1',
                imgPath: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
            },
            {
                label: 'Test2',
                imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            },
        ],
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
                label: 'Test1',
                imgPath: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                label: 'Test2',
                imgPath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                label: 'Test3',
                imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            },
        ],
    },
    {
        title: 'BEAN BLOCK MOBILE',
        about: 'A mobile app design for Bean Block’s E-commerce app ',
        link: '#',
        bg: '#FF9760',
        textColor: '#51240D',
        btnColor: '#51240D',
        img: 
        [   
            {   
                label: 'Test1',
                imgPath: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
            },
            {
                label: 'Test2',
                imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            },
        ],
    },
    {
        title: 'BEAN BLOCK MOBILE',
        about: 'A mobile app design for Bean Block’s E-commerce app ',
        link: '#',
        bg: '#51240D',
        textColor: '#FFF',
        btnColor: '#EE9765',
        img: 
        [   
            {   
                label: 'Test1',
                imgPath: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                label: 'Test2',
                imgPath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                label: 'Test3',
                imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            },
        ],
    },
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