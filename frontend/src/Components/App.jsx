import React, { useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import axios from "axios";

function App() {
  const [allNotes, setAllNotes] = useState([]);

  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });

  useEffect(() => {
    // Fetch all notes from the backend when the component mounts
    axios.get("/api/notes")
      .then((response) => {
        setAllNotes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
      });
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setNewNote((prevNote) => ({
      ...prevNote,
      [name]: value
    }));
  }

  function addNote(event) {
    event.preventDefault();
    if (newNote.title || newNote.content) {
      axios.post("/api/notes", newNote).then((response) => {
        setAllNotes((prevNotes) => [...prevNotes, newNote]);
        setNewNote({
          title: "",
          content: ""
        });
      }).catch((error) => {
        console.error("Error creating note:", error);
      });
    }
  }

  function deleteNote(id) {
    axios.delete(`/api/notes/${id}`).then(() => {
      setAllNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    })
    .catch((error) => {
      console.error("Error deleting note:", error);
    });
  }

  return (
    <div>
      <Header />
      <div>
        <form>
          <input
            name="title"
            onChange={handleChange}
            value={newNote.title}
            placeholder="Title"
          />
          <textarea
            name="content"
            onChange={handleChange}
            value={newNote.content}
            placeholder="Take a note..."
            rows="3"
          />
          <button onClick={addNote}>Add</button>
        </form>
      </div>
      <div>
        {allNotes.map((note) => (
          <Note
            key={note._id}
            id={note._id}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
