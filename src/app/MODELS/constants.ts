export type Museum = {
  name: string;
  location: string;
  description: string;
  opening_hours: string;
  website: string;
  photosUrl: string[]
  id: number;
  coordinates: google.maps.LatLngLiteral;
};

export const museums: Museum[] = [
  {
    id: 0,
    name: "Полтавський краєзнавчий музей імені Василя Кричевського",
    location: "Полтава, вул. Конституції, 2",
    description: "Один з найстаріших та найбільших краєзнавчих музеїв в Україні, заснований у 1891 році. Музей має багаті колекції, що відображають історію, культуру та природу Полтавщини.",
    opening_hours: "Вівторок - Неділя: 10:00 - 18:00, Понеділок: вихідний",
    website: "http://pkm.poltava.ua/",
    photosUrl: [
      "https://findandfollow.com.ua/wp-content/uploads/2021/12/IMG_0012--scaled.jpg",
      "https://find-way.com.ua/components/com_jshopping/files/img_products/full_DJI_0292.jpg",
      "https://travels.in.ua/api/Photo/PhotoStreamCPOI/33240",
      "https://scontent.fdnk1-3.fna.fbcdn.net/v/t39.30808-6/344549214_914613219754028_6344760879794715140_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rgzCjE7kiRoQ7kNvgF8gHh4&_nc_ht=scontent.fdnk1-3.fna&cb_e2o_trans=q&oh=00_AYBYTN2MLySHGKLszhfNpKRDzQ00nJ1jLMqqAX35ZInPJA&oe=66607C59",
      "https://find-way.com.ua/components/com_jshopping/files/img_products/full_DSC_0021.jpg",
      "https://i.obozrevatel.com/news/2021/12/8/32.png?size=1944x924",
      "https://travels.in.ua/api/Photo/PhotoStreamCPOI/33242?thumbnail=true",
    ],
    coordinates: {
      lat: 49.5834185,
      lng: 34.5614464
    }
  },
  {
    id: 1,
    name: "Музей-садиба Івана Котляревського",
    location: "Полтава, вул. Пушкіна, 3",
    description: "Музей-садиба великого українського письменника Івана Котляревського, автора першого твору нової української літератури - поеми «Енеїда».",
    opening_hours: "Щодня: 10:00 - 17:00",
    website: "http://kotliarevskyi.pl.ua/",
    photosUrl: [
      "https://mus.pl.ua/tour/wp-content/uploads/2021/06/muzej-poltava-1.jpg",
      "https://www.visitpoltava.com/uploads/history/gallery_1621016015.jpg",
      "https://find-way.com.ua/components/com_jshopping/files/img_products/full__DSC1149.jpg",
      "https://i1.wp.com/www.secretland.info/wp-content/uploads/2020/08/sadybakotlarevskogo.jpg?ssl=1",
      "https://www.depo.ua/uploads/49725/conversions/d17e6adcf51639be7aa3e2ce03b2c1e1-wide-big.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlBReqXZLqhcvDOvqU7dxWNHZ_hlanLxux2fqq3NK0vjj6RAiZNBoteY4VI_4zRMrVYdUzJSMKe9NDxHKMD5xTo-ZA5Mf9vtPkz4fdj376R6hmUmrCUDYTjQoSPqPZI6YYHZIK68Fh3XSn/s1600/trip-impressions-ukraine-poltava-muzej-sadiba-kotlyarevs%2527kogo-DJI_0216.JPG",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizENzlvVBmg0ogWk28VGIdO-nETD40RBWGZtzaP-1YomvTv0zzq6D5PXggvSHcjFeaB3qs4XioubNwVAg8l6XwIkp7PfZ9RuDMI1BsyczKq5N6F7vFcfNaUhslcDBFOARqu9M5uxYJLhWe/s1600/trip-impressions-ukraine-poltava-muzej-sadiba-kotlyarevs%2527kogo-DJI_0221.JPG",
      "https://kultura-poltava.gov.ua/storage/institutions/gallery/OIjFbI930QK0TczShCSsjQgNdvHpDCoSimRYJoKT.jpg"
    ],
    coordinates: {
      lat: 49.5817165,
      lng: 34.5684063
    }
  },
  {
    id: 2,
    name: "Музей Полтавської битви",
    location: "Полтава, вул. Шведська Могила, 32",
    description: "Музей присвячений Полтавській битві 1709 року між військами Карла XII і Петра I. Музейний комплекс включає також пам'ятники, меморіали та могили учасників битви.",
    opening_hours: "Вівторок - Неділя: 9:00 - 17:00, Понеділок: вихідний",
    website: "http://battle.poltava.ua/",
    photosUrl: [
      "https://i1.poltava.to/news/230/22919/photo.jpg",
      "https://photos.drymba.com/drb/001/228/47855_129_ht8ngc.jpg",
      "https://oteli.net.ua/images/hotels/1201/foto_1.jpg",
      "https://www.navigator-ukraina.com.ua/media/k2/items/cache/935dbd09c0a7727e2143877810820513_L.jpg",
      "https://f.discover.ua/location/1279/GsOa2.jpg",
      "https://travels.in.ua/api/Photo/PhotoStreamCPOI/33237",
    ],

    coordinates: {
      lat: 49.6303949,
      lng: 34.5532388
    }
  },
  {
    id: 3,
    name: "Національний музей-заповідник українського гончарства в Опішні",
    location: "Опішня, вул. Партизанська, 102",
    description: "Музей присвячений традиційному українському гончарству. Тут зібрані унікальні колекції керамічних виробів, а також проводяться майстер-класи та фестивалі.",
    opening_hours: "Понеділок - П'ятниця: 8:00 - 17:00",
    website: "http://opishne-museum.gov.ua/",
    photosUrl: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtcuvUZU6EQXHlUvJC32tOyF4xsg3_GbfBRw&s",
      "https://cdn4.suspilne.media/images/32d5e2a3b43dda99.png",
      "https://opishne-museum.gov.ua/wp-content/uploads/2020/08/1-1172x900.jpg",
      "https://i1.poltava.to/uploads/2016/08/2016-08-06/goncharstvo2.jpg",
      "https://foto.mistaua.com/2012/1310_1_2.jpg",
      "https://opishne-museum.gov.ua/wp-content/uploads/2020/01/foto1-1350x900.jpg",
      "https://find-way.com.ua/components/com_jshopping/files/img_products/full_DSC_02572.jpg"
    ],
    coordinates: {
      lat: 49.973816,
      lng: 34.613586
    }
  }
];
