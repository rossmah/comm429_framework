export async function load({ fetch }) {  
    const url = 'https://api.artic.edu/api/v1/artworks/search?q=vincent-van-gogh&query[term][artist_id]=40610&fields=image_id,title,artist_title,date_display,medium_display&limit=21';

    const artReq = await fetch(url);
    
    const artRes = await artReq.json();
  
    const artworks = artRes.data;
  
    return {
      artworks
    }
  
  }