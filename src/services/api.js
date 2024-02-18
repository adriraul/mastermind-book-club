export async function fetchBooks() {
  try {
    const response = await fetch("http://localhost:5000/getBooks");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const booksData = await response.json();
    return booksData;
  } catch (error) {
    console.error("Error fetching books:", error);
  }
}
