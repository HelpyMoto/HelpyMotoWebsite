const servicesData = [
  {
    id: 1,
    name: 'Periodic Services',
    image: 'https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/category_icons_new/xxxhdpi/1.png',
    price: 2200,
    tags: [
      'Recommended once every 6 months',
      'Oil change',
      'Oil filter replacement',
      'Tyre pressure and adjust',
    ],
    faqs: [
      {
        question: 'When is the best time to get this service done?',
        answer:
          'We would suggest, before going for a long drive or if the car is not being used for a long time.',
      },
    ],
  },
  {
    id: 2,
    name: 'Tyre And Wheel Care',
    image: 'https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/category_icons/tyre-v3.svg',
    price: 2000,
    tags: [
      'Recommended once every 6 months',
      'Wheel Alignment and Balance',
      'Tyre inspection for tread',
      'Fitting cost included',
      'Weight Correction',
      'Takes 4 to 5 hours'
    ],
    faqs: [
      {
        question: 'When is the best time to get this service done?',
        answer:
          'This service is recommended once every 6 months or when 5000km’s are completed, whichever occurs first',
      },
    ],
  },
  {
    id: 3,
    name: 'Custom Services',
    image: 'https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/category_icons_new/xxxhdpi/Suspension-_-Fitments.png',
    price: 700,
    tags: [
      'Engine Oil Inspection',
      'Brake fluid check',
      'Battery water inspection',
      'Takes roughly 3 hours',
    ],
    faqs: [
      {
        question: 'How often is this service recommended?',
        answer:
          'We would suggest getting the service done every 3-4 months.',
      },
    ],
  },

  {
    id: 4,
    name: 'Brake Maintenance',
    image: 'https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/car_parts_icons/brakes_2/xxhdpi.png',
    price: 1600,
    tags: [
      'Engine Oil Inspection',
      'Front brake pads replacement',
      'Front brake disc cleaning',
      'Takes roughly 3 hours to complete',
    ],
    faqs: [
      {
        question: 'How often is this service recommended?',
        answer:
          'We would suggest, before going for a long drive or if the car is not being used for a long time.',
      },
    ],
  },

  {
    id: 5,
    name: 'Car Spa and Cleaning',
    image: 'https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/category_icons_new/xhdpi/4.png',
    price: 2200,
    tags: [
      'Recommended once every 6 months',
      'Oil change',
      'Oil filter replacement',
      'Tyre pressure and adjust',
    ],
    faqs: [
      {
        question: 'When is the best time to get this service done?',
        answer:
          'We would suggest, before going for a long drive or if the car is not being used for a long time.',
      },
    ],
  },

  {
    id: 6,
    name: 'Clutch and Fitments',
    image: 'https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/category_icons_new/xxxhdpi/Clutch-_-Bumpers.png',
    price: 1000,
    tags: [
      'Recommended once every 6 months',
      'Oil change',
      'Oil filter replacement',
      'Tyre pressure and adjust',
    ],
    faqs: [
      {
        question: 'When is the best time to get this service done?',
        answer:
          'We would suggest, before going for a long drive or if the car is not being used for a long time.',
      },
    ],
  },

  {
    id: 7,
    name: 'Batteries',
    image: 'https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/category_icons/battery-v3.svg',
    price: 4500,
    tags: [
      'Recommended once every 6 months',
      'Oil change',
      'Oil filter replacement',
      'Tyre pressure and adjust',
    ],
    faqs: [
      {
        question: 'When is the best time to get this service done?',
        answer:
          'We would suggest, before going for a long drive or if the car is not being used for a long time.',
      },
    ],
  },

  {
    id: 8,
    name: 'Denting and Painting',
    image: 'https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/category_icons_new/xxxhdpi/2.png',
    price:2000,
    tags: [
      'Removal of dent and scratches',
      'Polishing of surface',
      '4-layer painting process for the bumper',
      'Takes 24 hours for completion',
    ],
    faqs: [
      {
        question: 'How often is this service recommended?',
        answer:
          'We would suggest getting the service done every 3-4 months.',
      },
    ],
  },

  {
    id: 9,
    name: 'Windshields and Lights',
    image: 'https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/category_icons_new/xxxhdpi/10.png',
    price: 9000,
    tags: [
      'Recommended if there is a crack on the windshield',
      'Opening and fitting of new windshield',
      'Oil filter replacement',
      'Takes 6 hours for completion',
      
    ],
    faqs: [
      {
        question: 'How much will it cost for a Maruti Suzuki swift?',
        answer:
          'The cost for replacement of front glass for a Maruti Suzuki will be 4,800/- to 5,000/-',
      },
    ],
  },

  {
    id: 10,
    name: 'Insurance',
    image: 'https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/category_icons_new/xxxhdpi/7.png',
    price: 2200,
    tags: [
      'Recommended once every 6 months',
      'Oil change',
      'Oil filter replacement',
      'Tyre pressure and adjust',
      
    ],
    faqs: [
      {
        question: 'When is the best time to get this service done?',
        answer:
          'We would suggest, before going for a long drive or if the car is not being used for a long time.',
      },
    ],
  },

  {
    id: 11,
    name: 'Road Side Assistance',
    image: 'https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/category_icons_new/xxxhdpi/13.png',
    price: 1600,
    tags: [
      'Recommended once every 6 months',
      'Oil change',
      'Oil filter replacement',
      'Tyre pressure and adjust',
    
    ],
    faqs: [
      {
        question: 'What kind of services does Helpy Moto provide under Road Side Assistance?',
        answer:
          'We offer services under roadside assistance such as  flat-bed towing, wheel-lift towing, battery jumpstarting, and car self-starter issues.',
      },
    ],
  },

  {
    id: 12,
    name: 'Accessories',
    image: 'https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/category_icons_new/xxxhdpi/11.png',
    price: 5000,
    tags: [
      'Recommended once every 6 months',
      'Oil change',
      'Oil filter replacement',
      'Tyre pressure and adjust',
    
    ],
    faqs: [
      {
        question: 'When is the best time to get this service done?',
        answer:
          'We would suggest, before going for a long drive or if the car is not being used for a long time.',
      },
    ],
  },

  {
    id: 13,
    name: 'Detailing Service',
    image: 'https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/category_icons_new/xxxhdpi/8.png',
    price: 2600,
    tags: [
      'Recommended once every 6 months',
      'Oil change',
      'Oil filter replacement',
      'Tyre pressure and adjust',
    
    ],
    faqs: [
      {
        question: 'When is the best time to get this service done?',
        answer:
        'We would suggest, before going for a long drive or if the car is not being used for a long time.',
      },
    ],
  },
  
  {
    id: 14,
    name: 'AC Service and Repair',
    image: 'https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/category_icons_new/xxxhdpi/5.png',
    price: 3200,
    tags: [
      'Recommended once every 6 months',
      'Oil change',
      'Oil filter replacement',
      'Tyre pressure and adjust',
    
    ],
    faqs: [
      {
        question: 'When is the best time to get this service done?',
        answer:
        'We would suggest, before going for a long drive or if the car is not being used for a long time.',
      },
    ],
  },

  {
    id: 15,
    name: 'Suspension and Fitments',
    image: 'https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/category_icons_new/xxxhdpi/9.png',
    price: 1200,
    tags: [
      'Recommended once every 6 months',
      'Oil change',
      'Oil filter replacement',
      'Tyre pressure and adjust',
    
    ],
    faqs: [
      {
        question: 'When is the best time to get this service done?',
        answer:
        'We would suggest, before going for a long drive or if the car is not being used for a long time.',
      },
    ],
  },
];

export default servicesData;