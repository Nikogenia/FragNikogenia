import json

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from redis.commands.search.query import Query

from database import Word, import_db


app = FastAPI(title="Frag Nikogenia API",
              description="backend of an online latin-german dictionary",
              version="1.0",
              contact={"name": "Nikogenia",
                       "url": "https://www.nikogenia.de",
                       "email": "frag@nikogenia.de"},
              license_info={"name": "MIT License",
                            "url": "https://mit-license.org/"},
              docs_url="/",
              on_startup=[import_db])


origins = [
    "http://localhost:3000",
    "http://localhost",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/word")
def route_details(latin: str | None = None):

    if not latin:
        return {"words": []}

    words = Word.find((Word.latin == latin)).sort_by("position").all()

    return {"words": words}


@app.get("/list")
def route_list():
    
    words = Word.find().sort_by("position").all()

    return {"words": words}


@app.get("/search")
def route_search(query: str | None = None):

    if not query:
        return {"words": []}
    
    escaped_query = "".join(["\\ " if c == " " else c for c in query])
    for to_remove in ",.<>{}[]\"':;!@#$%^&*()-+=~/\\":
        escaped_query = escaped_query.replace(to_remove, "")

    if not escaped_query:
        return {"words": []}

    search_query = Query(('(@lesson:{%(query)s}) | (@latin:{%(query)s*})' + 
                          ' | (*%(query)s*) | (@type:{%(query)s*})') % {"query": escaped_query})
    search_query.no_stopwords()
    search_query.slop(3)
    search_query.paging(0, 200)

    words_raw = Word.db().ft("fng:Word:index").search(search_query).docs
    words = [json.loads(word.json) for word in words_raw]

    return {"words": words}
