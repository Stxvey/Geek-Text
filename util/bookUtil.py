import mysql.connector, os, json, random
bookFile = os.path.relpath('../server/books.json')

prices = [9.99, 14.99, 19.99, 24.99, 29.99, 34.99, 39.99]
shortDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
longDesc = "Quam vulputate dignissim suspendisse in est ante in nibh mauris. Egestas sed tempus urna et pharetra pharetra massa. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Orci porta non pulvinar neque. Sed felis eget velit aliquet sagittis id consectetur purus ut. Nam at lectus urna duis. Duis ut diam quam nulla porttitor massa id neque. Vulputate sapien nec sagittis aliquam malesuada. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Ornare lectus sit amet est placerat in egestas. Neque vitae tempus quam pellentesque nec nam aliquam sem. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Quam lacus suspendisse faucibus interdum. Viverra nam libero justo laoreet sit amet cursus sit. Eget dolor morbi non arcu risus quis varius quam. Nibh ipsum consequat nisl vel pretium lectus."


cnx = mysql.connector.connect(
    host="localhost",
    port=3306,
    user="geektext",
    password="Steve2246!",
    database="geektext"
)
cur = cnx.cursor()
class Book:
    id = 0
    def __init__(self, title, isbn, genre, price, pageCount=350, author="Steve Patterson", shortDescription=shortDesc, longDescription=longDesc, thumbnail=""):
        self.title = title
        self.isbn = isbn
        self.genre = genre
        self.price = random.choice(prices)
        self.pageCount = pageCount
        self.author = author
        self.shortDescription = shortDescription
        self.longDescription = longDescription
    
    def writeToDb(self, cur):
        query = f"INSERT INTO book (title, isbn, pageCount, shortDescription, longDescription, genre, author, price) VALUES (\"{self.title}\", {self.isbn}, {self.pageCount}, \"{self.shortDescription}\", \"{self.longDescription}\", \"{self.genre}\", \"{self.author}\", {self.price});"
        # print(query)
        cur.execute(query)
        # Book.id = Book.id + 1

with open(bookFile) as json_file:
    data = json.load(json_file)
    
# harryPotter = Book("Harry Potter", "420", "Horror", 2320)
# harryPotter.longDescription = "Can i overwrite this?"
# harryPotter.writeToDb(cur)

# cnx.commit()
cnx.close()