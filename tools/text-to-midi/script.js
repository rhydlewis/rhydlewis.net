// Define functions in a way they can be tested
const textToMidi = (() => {
    // Internal helper functions
    function parseChordText(text) {
        // Split the input by commas and filter out empty strings
        const chords = text.split(/,\s*/).filter(chord => chord);
        console.log("Parsed input text:", text);
        console.log("Into chords array:", chords);
        return chords;
    }

    function parseChord(chordName) {
        try {
            const tonalLib = window.Tonal;

            if (!tonalLib) {
                throw new Error("Tonal library not loaded");
            }

            // Use Tonal to get chord information
            const chord = tonalLib.Chord.get(chordName);
            console.log(`Tonal chord data for "${chordName}":`, chord);

            if (chord && chord.notes && chord.notes.length > 0) {
                // Add octave information if not present
                return chord.notes.map(note => {
                    // Check if the note already has octave information
                    if (/\d/.test(note)) {
                        return note;
                    } else {
                        // Default to octave 3
                        return note + '3';
                    }
                });
            } else {
                console.warn(`Tonal couldn't parse chord: ${chordName}`);
                // If Tonal can't parse it, try to extract just the root note
                const rootNote = chordName.charAt(0).toUpperCase();
                if ('ABCDEFG'.includes(rootNote)) {
                    return [rootNote + '3'];
                }
                return [];
            }
        } catch (error) {
            console.error(`Error parsing chord "${chordName}":`, error);
            // Just return the root note if there's an error
            const rootNote = chordName.charAt(0).toUpperCase();
            if ('ABCDEFG'.includes(rootNote)) {
                return [rootNote + '3'];
            }
            return [];
        }
    }

    function noteToMidi(note) {
        try {
            const tonalLib = window.Tonal;

            if (!tonalLib) {
                throw new Error("Tonal library not loaded");
            }

            // Use Tonal's Note module
            return tonalLib.Note.midi(note);
        } catch (error) {
            console.error(`Error converting note "${note}" to MIDI:`, error);
            return null;
        }
    }

    function showError(message, statusEl, containerEl) {
        if (statusEl) {
            statusEl.textContent = message;
            statusEl.className = 'error';
        }
        if (containerEl) {
            containerEl.classList.add('hidden');
        }
    }

    // Main function
    // Helper function to convert key signature to MIDI format
    function convertKeySignatureToMidi(keySignature) {
        // MIDI key signature format: <sf> <mi>
        // sf = number of sharps (positive) or flats (negative), from -7 to 7
        // mi = major (0) or minor (1)

        // Default to C major (0 sharps/flats, major key)
        let sharpsFlats = 0;
        let mode = 0; // 0 = major, 1 = minor

        if (!keySignature) {
            return [sharpsFlats, mode];
        }

        // Parse the new key signature format, e.g., "C-major" or "A-minor"
        const parts = keySignature.split('-');
        const note = parts[0];
        const keyMode = parts[1] || 'major';

        // Set mode based on key type
        mode = (keyMode === 'minor') ? 1 : 0;

        // Map key notes to their sharp/flat count
        const sharpFlatMap = {
            // Major keys
            'C': 0,    // C major (no accidentals)
            'G': 1,    // G major (1♯)
            'D': 2,    // D major (2♯)
            'A': 3,    // A major (3♯)
            'E': 4,    // E major (4♯)
            'B': 5,    // B major (5♯)
            'F#': 6,   // F♯ major (6♯)
            'C#': 7,   // C♯ major (7♯)
            'F': -1,   // F major (1♭)
            'Bb': -2,  // B♭ major (2♭)
            'Eb': -3,  // E♭ major (3♭)
            'Ab': -4,  // A♭ major (4♭)
            'Db': -5,  // D♭ major (5♭)
            'Gb': -6,  // G♭ major (6♭)
            'Cb': -7,  // C♭ major (7♭)

            // Minor keys have the same accidentals as their relative major keys
            // A minor = C major (0), E minor = G major (1), etc.
            'A': 0,    // A minor (no accidentals)
            'E': 1,    // E minor (1♯)
            'B': 2,    // B minor (2♯)
            'F#': 3,   // F♯ minor (3♯)
            'C#': 4,   // C♯ minor (4♯)
            'G#': 5,   // G♯ minor (5♯)
            'D#': 6,   // D♯ minor (6♯)
            'A#': 7,   // A♯ minor (7♯)
            'D': -1,   // D minor (1♭)
            'G': -2,   // G minor (2♭)
            'C': -3,   // C minor (3♭)
            'F': -4,   // F minor (4♭)
            'Bb': -5,  // B♭ minor (5♭)
            'Eb': -6,  // E♭ minor (6♭)
            'Ab': -7   // A♭ minor (7♭)
        };

        // Get the appropriate sharps/flats value
        if (sharpFlatMap.hasOwnProperty(note)) {
            // Mode-aware lookup
            if (mode === 1) {
                // For minor keys, we need to lookup the correct value based on mode
                // Minor keys with the same note name as major keys have different sharps/flats
                switch (note) {
                    case 'C':
                        sharpsFlats = -3;
                        break; // C minor (3♭)
                    case 'G':
                        sharpsFlats = -2;
                        break; // G minor (2♭)
                    case 'D':
                        sharpsFlats = -1;
                        break; // D minor (1♭)
                    case 'A':
                        sharpsFlats = 0;
                        break;  // A minor (0)
                    case 'E':
                        sharpsFlats = 1;
                        break;  // E minor (1♯)
                    case 'B':
                        sharpsFlats = 2;
                        break;  // B minor (2♯)
                    case 'F#':
                        sharpsFlats = 3;
                        break; // F♯ minor (3♯)
                    default:
                        sharpsFlats = sharpFlatMap[note]; // Use the mapping for other keys
                }
            } else {
                // For major keys, just use the mapping directly
                sharpsFlats = sharpFlatMap[note];
            }
        }

        console.log(`Key signature: ${note} ${keyMode} -> sf=${sharpsFlats}, mi=${mode}`);
        return [sharpsFlats, mode]; // sf and mi values
    }

    function generateMidi(inputText, options = {}) {
        const chordText = inputText || '';
        const statusEl = options.statusEl;
        const downloadContainerEl = options.downloadContainerEl;
        const downloadLinkEl = options.downloadLinkEl;
        const keySignature = options.keySignature || 'C';

        if (!chordText) {
            showError('Please enter a chord progression', statusEl, downloadContainerEl);
            return null;
        }

        try {
            if (statusEl) {
                statusEl.textContent = 'Generating MIDI...';
                statusEl.className = '';
            }
            if (downloadContainerEl) {
                downloadContainerEl.classList.add('hidden');
            }

            // Parse the chord text into an array of chord names
            const chords = parseChordText(chordText);
            console.log("Parsed chords:", chords);

            if (chords.length === 0) {
                showError('No valid chords found', statusEl, downloadContainerEl);
                return null;
            }

            // Create a simple MIDI file
            const file = new window.jsmidgen.File();
            const track = new window.jsmidgen.Track();
            file.addTrack(track);

            // Set tempo to 120 BPM
            track.setTempo(120);

            // Set instrument to acoustic grand piano (program 0)
            track.setInstrument(0, 0);

            // Add key signature meta event
            const [sharpsFlats, mode] = convertKeySignatureToMidi(keySignature);
            console.log(`Adding key signature: ${keySignature} (${sharpsFlats} sharps/flats, mode ${mode})`);

            // Create a key signature meta event
            const MetaEvent = window.jsmidgen.MetaEvent;
            track.addEvent(new MetaEvent({
                type: MetaEvent.KEY_SIG,
                data: [sharpsFlats, mode],
                time: 0
            }));

            // Define note durations (in ticks)
            const QUARTER_NOTE = 128;
            const BAR_LENGTH = QUARTER_NOTE * 4; // one bar in 4/4 time

            // Process each chord with jsmidgen's timing model
            console.log(`Processing ${chords.length} chords:`, chords);

            for (let i = 0; i < chords.length; i++) {
                const chordName = chords[i];
                try {
                    console.log(`Processing chord ${i + 1}/${chords.length}: "${chordName}"`);

                    // Parse the chord
                    const notes = parseChord(chordName);
                    console.log(`Notes for chord ${chordName}:`, notes);

                    if (notes.length === 0) {
                        console.warn(`Warning: No notes for chord "${chordName}"`);

                        // If we can't parse the chord, add a rest (silence) of one bar length
                        // We'll use a C0 note with volume 0 (silent) for the duration of a bar
                        track.noteOn(0, 0, 0); // Channel 0, note C0, velocity 0 (silent)
                        track.noteOff(0, 0, BAR_LENGTH); // Duration of one bar

                        continue; // Skip this chord
                    }

                    // Convert notes to MIDI numbers
                    const midiNotes = [];
                    for (const note of notes) {
                        const midi = noteToMidi(note);
                        if (midi !== null) {
                            midiNotes.push(midi);
                        }
                    }
                    console.log(`MIDI numbers for chord ${chordName}:`, midiNotes);

                    if (midiNotes.length === 0) {
                        console.warn(`Warning: No valid MIDI notes for chord "${chordName}"`);

                        // Add a rest (silence) of one bar length
                        track.noteOn(0, 0, 0); // Channel 0, note C0, velocity 0 (silent)
                        track.noteOff(0, 0, BAR_LENGTH); // Duration of one bar

                        continue; // Skip this chord
                    }

                    // For chords after the first one, we don't need to add any spacer
                    // The noteOff events from the previous chord will automatically position
                    // the playhead at the right position for the next chord

                    // Now use jsmidgen's chord function which will:
                    // 1. Add all note-on events with time=0 (relative to current position)
                    // 2. Add all note-off events with the duration we specify
                    const velocity = 90; // Default velocity
                    track.chord(0, midiNotes, BAR_LENGTH, velocity);

                    console.log(`Added chord ${chordName} with ${midiNotes.length} notes and duration ${BAR_LENGTH}`);

                } catch (error) {
                    console.error(`Error processing chord "${chordName}":`, error);

                    // Add a rest (silence) of one bar length for error cases
                    track.noteOn(0, 0, 0); // Channel 0, note C0, velocity 0 (silent)
                    track.noteOff(0, 0, BAR_LENGTH); // Duration of one bar
                }
            }

            // Check track structure before converting
            console.log("Generated MIDI file object:", file);
            console.log("Number of tracks:", file.tracks ? file.tracks.length : 0);
            if (file.tracks && file.tracks.length > 0) {
                console.log("Track 0 events:", file.tracks[0].events ? file.tracks[0].events.length : 0);
            }

            // Convert MIDI file to binary data
            const midiData = file.toBytes();
            console.log("MIDI data length:", midiData.length);

            if (!midiData || midiData.length === 0) {
                throw new Error("Failed to generate MIDI data");
            }

            // If in a browser context, create a downloadable blob
            if (window.Blob && downloadLinkEl) {
                // Convert string data to byte array
                const byteArray = new Uint8Array(midiData.length);
                for (let i = 0; i < midiData.length; i++) {
                    byteArray[i] = midiData.charCodeAt(i);
                }
                console.log("First 20 bytes:", Array.from(byteArray.slice(0, 20)));

                // Create downloadable blob
                const blob = new Blob([byteArray], {type: 'audio/midi'});
                const url = URL.createObjectURL(blob);

                // Update download link
                downloadLinkEl.href = url;
                downloadLinkEl.download = 'chord-progression.mid';

                // Show success message and download button
                if (statusEl) {
                    statusEl.textContent = 'MIDI file generated successfully!';
                }
                if (downloadContainerEl) {
                    downloadContainerEl.classList.remove('hidden');
                }
            }

            // Return the MIDI data for testing
            return {
                midiData,
                processedChords: chords,
                file,
                track
            };
        } catch (error) {
            console.error('Error generating MIDI:', error);
            showError('Error generating MIDI: ' + error.message, statusEl, downloadContainerEl);
            return null;
        }
    }

    // Expose functions for testing
    return {
        parseChordText,
        parseChord,
        noteToMidi,
        generateMidi
    };
})();

// Expose for Node.js testing if needed
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = textToMidi;
}

// Web browser entry point
document.addEventListener('DOMContentLoaded', () => {
    const chordInput = document.getElementById('chord-input');
    const keySignature = document.getElementById('key-signature');
    const generateBtn = document.getElementById('generate-btn');
    const statusMessage = document.getElementById('status-message');
    const downloadContainer = document.getElementById('download-container');
    const downloadLink = document.getElementById('download-link');

    generateBtn.addEventListener('click', () => {
        textToMidi.generateMidi(chordInput.value, {
            statusEl: statusMessage,
            downloadContainerEl: downloadContainer,
            downloadLinkEl: downloadLink,
            keySignature: keySignature.value // Pass the selected key signature
        });
    });
});