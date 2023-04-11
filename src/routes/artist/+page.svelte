<h1>Gallery By Artist</h1>
<p>Check out artwork by a particular artist! This gallery will show artwork of prominent artists from the Art Institute of Chicago. Currently, we are displaying works from Vincent van Gogh, Claude Monet, and Georgia O'Keeffe.</p>

<div class="row">
  <div class="column">
    <img src="./img/theBedroom.jpeg" alt="The Bedroom by Vincent van Gogh">
    <p class="ref"><strong>The Bedroom</strong> by Vincent van Gogh<br>1889 | Oil on Canvas</p>
  </div>
  <div class="column">
    <img src="./img/waterLilyPond.jpeg" alt="Water Lily Pond by Claude Monet">
    <p class="ref"><strong>Water Lily Pond</strong> by Claude Monet<br>1900 | Oil on Canvas</p>
  </div>
  <div class="column">
    <img src="./img/redHillsWithFlowers.jpeg" alt="Red Hills with Flowers by Georgia O'Keeffe">
    <p class="ref"><strong>Red Hills with Flowers</strong> by Georgia O’Keeffe<br>1937 | Oil on Canvas</p>
  </div>
</div>

<style>
  .row {
  display: flex;
  align-items: center;
  justify-content: center;
}

.column {
  flex: 1;
}

img {
  width: 100%;
  height: auto;
  padding: 1em;
}

.ref{
  text-align: center;
  background-color: rgba(114, 114, 114, 0.14);
  padding: 10px;
  border-radius: 25px;
  width: 80%;
  margin-left: 10%
}
</style>