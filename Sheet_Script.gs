const OMDB_API_KEY = "<OMDB_API_KEY";  
const NOTION_TOKEN = "<NOTION_TOKEN>";  
const NOTION_DB_ID = "<NOTION_DB_ID";  

function updateMovieDetails() {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  let lastRow = sheet.getLastRow();

  for (let i = 2; i <= lastRow; i++) {
    let movieName = sheet.getRange(i, 1).getValue();
    let year = sheet.getRange(i, 2).getValue();

    // Skip if already filled
    if (year) continue;

    if (movieName) {
      // ✅ Check if already in Notion before going to OMDB
      if (!movieExistsInNotion(movieName)) {
        let url = `https://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${OMDB_API_KEY}`;
        let response = UrlFetchApp.fetch(url);
        let data = JSON.parse(response.getContentText());

        if (data && data.Response === "True") {
          let year = data.Year || "";
          let director = data.Director || "";
          let genre = data.Genre || "";
          let type = data.Type || "";
          let plot = data.Plot || "";
          let imdbRating = data.imdbRating || "";
          let posterUrl = data.Poster || "";

          // Fill in sheet
          sheet.getRange(i, 2).setValue(year);
          sheet.getRange(i, 3).setValue(director);
          sheet.getRange(i, 4).setValue(genre);
          sheet.getRange(i, 5).setValue(type);
          sheet.getRange(i, 6).setValue(plot);
          sheet.getRange(i, 7).setValue(imdbRating);
          sheet.getRange(i, 8).setValue(posterUrl);

          // Push to Notion
          addToNotion(movieName, year, director, genre, type, plot, imdbRating, posterUrl);
        }
      } else {
        sheet.getRange(i, 2).setValue(`Skipped: ${movieName} already exists in Notion.`);
        Logger.log(`Skipped: ${movieName} already exists in Notion.`);
      }
    }
  }
}

function movieExistsInNotion(title) {
  const url = "https://api.notion.com/v1/databases/" + NOTION_DB_ID + "/query";
  const headers = {
    "Authorization": "Bearer " + NOTION_TOKEN,
    "Content-Type": "application/json",
    "Notion-Version": "2022-06-28"
  };

  const payload = JSON.stringify({
    filter: {
      property: "Name",
      title: {
        equals: title
      }
    }
  });

  const response = UrlFetchApp.fetch(url, {
    method: "post",
    headers: headers,
    payload: payload
  });

  const data = JSON.parse(response.getContentText());
  return data.results && data.results.length > 0;
}


function addToNotion(title, year, director, genre, type, plot, imdbRating, posterUrl) {
  const url = "https://api.notion.com/v1/pages";
  const headers = {
    "Authorization": "Bearer " + NOTION_TOKEN,
    "Content-Type": "application/json",
    "Notion-Version": "2022-06-28"
  };
  
  const payload = {
    parent: { database_id: NOTION_DB_ID },
    cover: {
      type: "external",
      external: { url: posterUrl }
    },
    properties: {
      "Name": {
        title: [{ text: { content: title } }]
      },
      "Released Year": {
        number: parseInt(year) || null
      },
      "Director": {
        multi_select: director.split(",").map(d => ({ name: d.trim() }))
      },
      "Genre": {
        multi_select: genre.split(",").map(g => ({ name: g.trim() }))
      },
      "Type": {
        select: { name: type }
      },
      "Info": {
        rich_text: [{ text: { content: plot } }]
      },
      "imdb": {
        number: parseFloat(imdbRating) || null
      }
    }
  };

  UrlFetchApp.fetch(url, {
    method: "post",
    headers: headers,
    payload: JSON.stringify(payload)
  });
}

