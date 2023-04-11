export async function load({ fetch }) {  
    const url = 'https://api.artic.edu/api/v1/artworks/search?q=realism&query[term][style_ids]=TM-7548&fields=image_id,title,artist_title,date_display,medium_display,style_ids,style_title&page=3&limit=21';

    const artReq = await fetch(url);
    
    const artRes = await artReq.json();
  
    const artworks = artRes.data;
  
    return {
      artworks
    }
  
  }