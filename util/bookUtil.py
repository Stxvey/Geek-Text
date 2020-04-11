import mysql.connector, os, json, random
bookFile = os.path.relpath('../server/books.json')

genres = ["PHP", "Javascript", "Git", "Python", "Ruby", "NodeJS"]
publishers = ["Pearson", "McGraw-Hill", "Oxford University Press", "Academic Publisher"]
prices = [9.99, 14.99, 19.99, 24.99, 29.99, 34.99, 39.99]
publishedDate = ["2009-04-01", "2010-04-03", ]
shortDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
longDesc = "Quam vulputate dignissim suspendisse in est ante in nibh mauris. Egestas sed tempus urna et pharetra pharetra massa. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Orci porta non pulvinar neque. Sed felis eget velit aliquet sagittis id consectetur purus ut. Nam at lectus urna duis. Duis ut diam quam nulla porttitor massa id neque. Vulputate sapien nec sagittis aliquam malesuada. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Ornare lectus sit amet est placerat in egestas. Neque vitae tempus quam pellentesque nec nam aliquam sem. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Quam lacus suspendisse faucibus interdum. Viverra nam libero justo laoreet sit amet cursus sit. Eget dolor morbi non arcu risus quis varius quam. Nibh ipsum consequat nisl vel pretium lectus."

#Replace this with your info
cnx = mysql.connector.connect(
    host="localhost",
    port=3306,
    user="geektext",
    password="Popeye1315",
    database="geektext"
)
cur = cnx.cursor()
class Book:
    id = 0
    def __init__(self, title, isbn, genre="", price=0, pageCount=350, author="", shortDescription=shortDesc, longDescription=longDesc, publisher="", thumbnail="", publishedDate=""):
        self.title = title
        self.isbn = isbn
        self.genre = genre
        self.price = random.choice(prices)
        self.pageCount = random.randint(250, 500)
        self.author = author
        self.publisher = random.choice(publishers)
        self.thumbnail = "https://img.favpng.com/6/19/14/question-mark-computer-icons-book-png-favpng-K5A2PavaT3T3StyByXJ5vGtWh.jpg"
        self.publishedDate = publishedDate
        self.shortDescription = shortDescription
        self.longDescription = longDescription
    
    def writeToDb(self, cur):
        query = f"INSERT INTO book (title, isbn, pageCount, shortDescription, longDescription, genre, author, price, publisher, thumbnail, publishedDate) VALUES (\"{self.title}\", \"{self.isbn}\", {self.pageCount}, \"{self.shortDescription}\", \"{self.longDescription}\", \"{self.genre}\", \"{self.author}\", {self.price}, \"{self.publisher}\", \"{self.thumbnail}\", \"{self.publishedDate}\");"
        cur.execute(query)

with open(bookFile) as json_file:
    data = json.load(json_file)
    for book in data:
        item = Book(book.get('title'), book.get('isbn'))
        item.author = book.get('authors')[0]
        if "thumbnailUrl" in book:
            item.thumbnail = book.get("thumbnailUrl")
        if "categories" in book:
            if(len(book.get('categories')) == 0):
                item.genre = random.choice(genres)
            else:
                item.genre = book.get('categories')[0]
        if "longDescription" in book:
            item.longDescription = book.get('longDescription').replace('"', ' ')
        if "shortDescription" in book:
            item.shortDescription = book.get('shortDescription').replace('"', ' ')
        if "publishedDate" in book:
            date = book.get('publishedDate').get('$date')[0:10]
            item.publishedDate = date
        item.writeToDb(cur)


# harryPotter = Book("Harry Potter", "420", "Horror", 2320)
# harryPotter.longDescription = "Can i overwrite this?"
# harryPotter.writeToDb(cur)

cnx.commit()
cnx.close()