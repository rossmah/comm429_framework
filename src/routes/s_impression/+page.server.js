export async function load({ fetch }) {  
    const url = 'https://api.artic.edu/api/v1/artworks/search?q=impressionism&query[term][style_ids]=TM-7543&fields=image_id,title,artist_title,date_display,medium_display,style_ids&limit=21';

    const artReq = await fetch(url);
    
    const artRes = await artReq.json();
  
    const artworks = artRes.data;
  
    return {
      artworks
    }
  
  }