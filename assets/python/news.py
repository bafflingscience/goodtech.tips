# import requests
# from jinja2 import Template
# import codecs
# from newsapi import NewsApiClient

# api_key = ""
# url = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey={}".format(api_key)

# # fetch data in json format
# response = requests.get(url).json()


# news_json = json.loads(response.text)

# count = 20

# for news in news_json['articles']:
#     if count > 0:
#         print(str(news['title']), "\n")
#         print(str(news['description']), "\n")
#         print(str(news['pathToImage']), "\n")
#         print(str(news['content']), "\n")
#         count -=1

# print(news)
