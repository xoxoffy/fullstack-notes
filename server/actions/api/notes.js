const Note = require('../../db/models/note');

module.exports = {
  saveNote(req, res) {
    const newNote = new Note({
      title: 'New test note',
      body: 'New Test Text',
    });

    newNote.save().then(() => {
      console.log('notatka została zapisana');
    });
  },
};
