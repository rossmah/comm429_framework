export async function load({ fetch }) {  
    const url = "https://api.artic.edu/api/v1/artworks/search?q=o'keeffe&query[term][artist_id]=36062&fields=image_id,title,artist_title,artist_id,date_display,medium_display&limit=21";

    const artReq = await fetch(url);
    
    const artRes = await artReq.json();
  
    const artworks = artRes.data;
  
    return {
      artworks
    }
  
  }
//&query[term][artist_id]=36062