const fs = require('fs')
const chalk = require('chalk');

const getNotes = () => {
    return 'Your notes..'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green(' New note added! '))
    } else {
        console.log(chalk.red(' Note title taken! '))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length === notesToKeep.length) {
        console.log(chalk.red(' No note found! '))
    } else if (notes.length > notesToKeep.length) {
        console.log(chalk.green(' Note removed! '))
    }
    saveNotes(notesToKeep)
}

const listNotes = (note) => {
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.green(note.title))
        console.log(chalk.green(note.body))
    }
    else {
        console.log(chalk.red('Note not found'))
    }
}

module.exports = {
    getNote: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
