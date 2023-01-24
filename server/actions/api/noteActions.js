const Note = require('../../db/models/note');

class NoteActions {
  saveNote(req, res) {
    // const newNote = new Note({
    //   title: 'Notatkowość',
    //   body: 'Notatek',
    // });

    // newNote.save().then(() => {
    //   console.log('notatka została zapisana');
    // });
    const title = req.body.title;
    const body = req.body.body;

    res.send('Notatka została stworzona' + title + body);
  }

  getAllNotes(req, res) {
    // pobieranie notatek
    res.send('Wszystkie notatki pobrane');
  }
  getNote(req, res) {
    // pobieranie notatki
    res.send('Info o notatce');
  }
  updateNote(req, res) {
    // aktualizowanie notatek
    res.send('Notatka zaktualizowana');
  }
  deleteNote(req, res) {
    const id = req.params.id;
    // usuwanie notatek
    res.send('Notatka usunięta. ID: ' + id);
  }
}

module.exports = new NoteActions();
