const Note = require('../../db/models/note');

class NoteActions {
  async saveNote(req, res) {
    const title = req.body.title;
    const body = req.body.body;
    let note;

    try {
      note = new Note({ title, body });
      await note.save();
    } catch (err) {
      return res.status(422).json({ message: err.message });
    }

    // 201 = resource saved
    res.status(201).json(note);
  }

  // Find all notes
  async getAllNotes(req, res) {
    let doc;

    try {
      doc = await Note.find({});
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }

    res.status(200).json(doc);
  }
  // pobieranie notatki
  async getNote(req, res) {
    const id = req.params.id;
    const note = await Note.findOne({ _id: id });

    res.status(200).json(note);
  }

  // aktualizowanie notatek
  async updateNote(req, res) {
    const id = req.params.id;
    const title = req.body.title;
    const body = req.body.body;

    const note = await Note.findOne({ _id: id });
    note.title = title;
    note.body = body;
    await note.save();

    res.status(201).json(note);
  }
  // usuwanie notatek
  async deleteNote(req, res) {
    const id = req.params.id;
    await Note.deleteOne({ _id: id });

    res.sendStatus(204);
  }
}

module.exports = new NoteActions();
