import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: 'images/911-monument.webp',
      thumbnail: 'images/911-monument.webp',
      description: `An image of the 9/11 Memorial back in June 2018, when I visited New York with my family. It was my first time seeing the memorial in person so, I took a picture.`,
      originalHeight: '450px',
    },
    {
      original: 'images/niagara-falls-trip.jpeg',
      thumbnail: 'images/niagara-falls-trip.jpeg',
      description: `An image of Niagara Falls with an orange and pink sky.`,
      originalHeight: '450px',
    },  
    {
      original: 'images/washington-dc-trip.webp',
      thumbnail: 'images/washington-dc-trip.webp',
      description: `This was also part of the same New York trip as the previous image. This time we took a tour bus all the way to Washington, D.C. The building seemed much larger in person than in the photos.`,
      originalHeight: '450px',
    },
    { 
      original: 'images/watkins-state-park-creek.jpeg',
      thumbnail: 'images/watkins-state-park-creek.jpeg',
      description: `This was the same day I went to Niagara Falls, but earlier we went on a trail. There was no paved path into the creek, so I had to climb over some railing, but the view was amazing and there was a perfect rock to stand on that was out of the water.`,
      originalHeight: '450px',
    },
    {
      original: 'images/club-city-basketball-team.webp',
      thumbnail: 'images/club-city-basketball-team.webp',
      description: `These are my friends and I in a city basketball league. We were all in our senior year of high school and decided to carry on this team from previous players who had graduated.`,
      originalHeight: '450px',
    },
    {  
      original: 'images/hawaii-trip.webp',
      thumbnail: 'images/hawaii-trip.webp',
      description: `I went on a trip to Hawaii back in July 2019. I took this image when we were on our way to the next place on a tour bus. The abnormally green and foggy hill looked very interesting to me.`,
      originalHeight: '450px',
    },
    {  
      original: 'images/mount-pisgah-hike.webp',
      thumbnail: 'images/mount-pisgah-hike.webp',
      description: `My friends and I went on a hike on Mount Pisgah around last December. It was very cold at first, but became very warm as we reached the top. We made it through thick fog but it turned out to be clouds and this was the resulting photo of the hike.`,
      originalHeight: '450px',
    },
    {  
      original: 'images/silver-creek-falls-hike.webp',
      thumbnail: 'images/silver-creek-falls-hike.webp',
      description: `My friends and I went on a hike in Silver Creek Falls, Oregon around July 2023. We saw a creek which we wanted to explore, so we took a path that was barely traversable to get down to the creek.`,
      originalHeight: '450px',
    },
    {  
      original: 'images/cs361-code-snippet.png',
      thumbnail: 'images/cs361-code-snippet.png',
      description: `This is a snippet of a "three part" program, as it uses three different microservices to display a path to an image on the user's directory.`,
      originalHeight: '450px',
    },
    {  
      original: 'images/wumpus-coding-project.PNG',
      thumbnail: 'images/wumpus-coding-project.PNG',
      description: `This game called "Hunt the Wumpus" is an old game that I coded as an assignment in CS162. It taught lots such as encapsulation, classes, child/parent classes and member functions and attributes.`,
      originalHeight: '450px',
      
    },
]   

function Gallery() {
    return(
        <>
            <h2>Gallery</h2>
            <article class="gallery">
                <ImageGallery items={images} />
            </article>
        </>
    );
}
export default Gallery;