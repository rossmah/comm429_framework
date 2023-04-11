<div class='container'>
  <div class='text-column'>
    <h1>Art Institute of Chicago Virtual Gallery</h1>
    <p> Welcome to an online art gallery showcasing work from the Art Institute of Chicago! Our website uses an API to display a selection of the museum's world-renowned artwork for art lovers to enjoy from the comfort of their own homes. Explore a taste of their extensive collection of paintings, prints, photographs, and more from the comfort of your own home. From the Impressionist masterpieces of Monet and Renoir to the modernist works of Picasso and Matisse, our collection has something to delight every art enthusiast. Each piece of artwork is displayed as a high-resolution image with detailed information about each work, including the artist, title, medium, and year of creation.
    </p>

    <h2> How to Navigate the site:</h2>
    <ul>
      <li><strong>By Artist</strong>: This dropdown menu lets you select artwork of a speciifc artist. Specifically, those created by either Van Gogh, Monet, or O'Keeffe.</li>
      <li><strong>By Style</strong>: This dropdown menu lets you select artwork of a specific style. Specifically, impressionism, realism, and modernism.</li>
      <li><strong>Gallery</strong>: This tab displays random images from their entire collection.</li>
    </ul>
  </div>
  <div class="image-column">
    <img src="./img/wave.jpeg" alt="">
    <figcaption>
      <strong>The Great Wave</strong> by Katsushika Hokusai<br>1830/33 | Color woodblock print
    </figcaption>
  </div>
</div>
    
<style>
.container {
  display: flex;
  align-items: center;
}

.text-column {
  flex: 1;
  padding: 20px;
}

.image-column {
  flex: 1;
}

.image-column img {
  width: 100%;
  height: auto;
}

figcaption{
  width:50%;
  text-align: center;
  margin-left: 25%;
}
</style>


