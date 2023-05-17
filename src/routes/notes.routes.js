const {Router} = require('express');
const router = Router();

const {renderNoteForm,
     createNewNote,
     renderNotes,
     renderEditForm,
     updateNote,
     deleteNote} = require('../controllers/notes.controller')

// New Note
router.get('/notes/add', renderNoteForm)

router.post('/notes/new-note', createNewNote);

// Get all notes
router.get('/notes', renderNotes)

// Edit notes
router.get('/notes/edit/:id', renderEditForm);

router.put('/notes/edit/:id', updateNote);

// Delete notes
router.delete('/notes/delete/:id', deleteNote);


module.exports = router;