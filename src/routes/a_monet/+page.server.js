export async function load({ fetch }) {  
    const url = 'https://api.artic.edu/api/v1/artworks/search?q=monet&query[term][artist_id]=35809&fields=image_id,title,artist_title,artist_id,date_display,medium_display';
    const artReq = await fetch(url);
    const artRes = await artReq.json();
    const artworks = artRes.data;
  
    return {
      artworks
    }
  }