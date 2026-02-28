# 🎬 Movie & Series Watchlist Automation Pipeline

A fully automated pipeline to save movies and TV series to your watchlist — just enter the name and everything else is handled automatically.

No manual copy-paste. No missing details. Pure automation.

## ✨ Features

✅ Enter movie or series name
✅ Fetches details instantly using OMDB API
✅ Stores structured data in Google Sheets
✅ Pushes final data to Notion database
✅ Auto-adds cover image and metadata
✅ Searchable, sortable watchlist
✅ 100% free solution

---

## 🚀 How It Works

<!-- <img width="2573" height="1436" alt="image" src="https://github.com/user-attachments/assets/b8e84c4a-de50-4261-b138-4dcec2d50ebe" /> -->
<!-- <img width="692" height="1944" alt="image" src="https://github.com/user-attachments/assets/0bac5ec7-d553-4fa8-8e4f-92b0aa228553" /> -->
<img width="1954" height="188" alt="image" src="https://github.com/user-attachments/assets/2b48718d-03cb-403e-846c-3a32b9769438" />




### 📌 Pipeline Flow

### 1️⃣ Movie Name Input

* Enter movie/series name.

### 2️⃣ OMDB API Integration

Script fetches:

* Title
* Director
* Release Year
* Genre
* IMDb Rating
* Plot
* Poster Image
* Additional metadata

### 3️⃣ Google Sheets (Middleware Layer)

* Stores raw API response
* Enables filtering & review
* Allows bulk updates
* Validates data before pushing

### 4️⃣ Notion Integration

* Automatically creates a new page entry
* Adds properties and cover image
* Maintains structured watchlist database

---

## 🛠 Tech Stack

* **Python / Apps Script**
* **OMDB API**
* **Google Sheets API**
* **Google Apps Script (Extensions)**
* **Notion API**

---

## 📂 Project Structure

```
movie-watchlist-pipeline/
│
├── scripts/
│   ├── fetch_movie_data.py
│   ├── push_to_sheets.py
│   └── notion_sync.py
│
├── apps_script/
│   └── code.gs
│
├── config/
│   └── credentials.json
│
└── README.md
```

*(Modify structure based on your actual repo)*

---

## ⚙️ Setup Guide

### 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/movie-watchlist-pipeline.git
cd movie-watchlist-pipeline
```

---

### 2️⃣ Get OMDB API Key

* Visit → [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)
* Generate free API key
* Add to config:

```python
OMDB_API_KEY="your_api_key"
```

---

### 3️⃣ Setup Google Sheets

* Create new sheet
* Open **Extensions → Apps Script**
* Add provided script
* Enable Google Sheets API

---

### 4️⃣ Setup Notion Integration

* Create Notion Integration → [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
* Get API token
* Share database with integration
* Add credentials:

```python
NOTION_TOKEN="your_token"
DATABASE_ID="your_database_id"
```

---

## ▶️ Usage

Run the script and enter a movie name:

```bash
python main.py
```

Example:

```
Enter movie name: Inception
```

Output:

* Movie data saved in Google Sheets
* Entry created in Notion watchlist

---

## 📊 Example Output

**Notion Database Entry Includes:**

* 🎬 Title
* 🎥 Director
* 📅 Release Year
* 🎭 Genre
* ⭐ IMDb Rating
* 🖼 Poster Cover
* 📝 Description

---

## 💡 Why This Project?

* Eliminates manual data entry
* Keeps watchlist organized
* Improves productivity
* Demonstrates API automation pipeline
* Shows real-world integration between multiple platforms

---

## 🔮 Future Improvements

* Web UI for input
* Batch movie import
* Recommendation engine
* Telegram/Slack bot integration
* Deployment as cloud service

---

## 🤝 Contributing

Contributions welcome! Feel free to open issues or submit pull requests.

---

## 📜 License

MIT License

---

If you want, I can also help you with:

✅ Add badges (build, license, Python version)
✅ Architecture diagram section
✅ Demo GIF section
✅ Screenshots layout
✅ Portfolio-style README
✅ README optimized for recruiters

Just tell me 👍
