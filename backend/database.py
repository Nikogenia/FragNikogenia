from typing import Any
import logging
import time
import datetime
import os

from redis_om import JsonModel, Field, Migrator
import pandas


logger = logging.getLogger("uvicorn")


class Word(JsonModel):

    position: int = Field(primary_key=True)
    lesson: str = Field(index=True)
    latin: str = Field(index=True)
    forms: str = Field(full_text_search=True, schema_extra={"weight": 2})
    german: str = Field(full_text_search=True)
    type: str = Field(index=True)
    details: str = Field(full_text_search=True)
    loaded: datetime.datetime = Field(default_factory=datetime.datetime.now)

    class Meta:
        global_key_prefix = "fng"
        model_key_prefix = "Word"


def import_db():

    start = time.perf_counter()

    if not os.path.exists("/fng/list.xlsx"):
        logger.info("No database file found at /fng/list.xlsx (skip import)")
        #return

    logger.info("Import database from /fng/list.xlsx")

    logger.info("Load file data")
    list_df = pandas.read_excel(r"C:\Users\Nikocraft\Dev\FragNikogenia\test\backend\list.xlsx",
                                sheet_name=0,
                                engine="openpyxl",
                                header=3,
                                names=["lesson", "latin", "forms", "german", "type", "details"],
                                usecols="B:G").fillna("")
    list_dict = list_df.to_dict(orient="records")
    
    if not list_dict:
        logger.info("No records loaded (skip import)")
        return
    
    logger.info("Clear old records from database")
    Word.db().flushdb()

    logger.info(f"Import {len(list_dict)} records to database")
    for pos, record in enumerate(list_dict):
        word = Word(**record, position=pos)  # type: ignore
        word.save()

    logger.info("Generate index")
    Migrator().run()

    logger.info(f"Database import completed (took {time.perf_counter() - start:.3f} seconds)")
