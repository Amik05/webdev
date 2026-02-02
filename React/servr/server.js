const express = require('express');
const cors = require('cors'); // Essential for browser-to-server talk
const app = express();
const PORT = 3000;

// --- MIDDLEWARE ---
app.use(cors());          // Prevents the "CORS Error" in your browser
app.use(express.json());  // Translates incoming JSON into req.body

// --- LOCAL "DATABASE" ---
let myTeam = [];

// --- ROUTES ---

// 1. GET the whole team
app.get('/team', (req, res) => {
    res.json(myTeam);
});

// 2. POST a new Pokemon to the team
app.post('/team', (req, res) => {
    const newMember = req.body;
    
    // Simple validation: make sure they sent a name
    if (!newMember.name) {
        return res.status(400).json({ error: "Pokemon name is required" });
    }

    myTeam.push(newMember);
    console.log("Current Team:", myTeam);
    
    res.status(201).json({ 
        message: "Successfully added to team!", 
        teamCount: myTeam.length 
    });
});

// 3. DELETE (Optional: clear the team)
app.delete('/team', (req, res) => {
    myTeam = [];
    res.json({ message: "Team cleared!" });
});

// --- START THE LISTENER ---
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

// This is a "Route"
// When someone visits http://localhost:3000/pokemon, this runs:
// app.get('/pokemon', (req, res) => {
//     const team = [
//         { name: 'Pikachu', type: 'Electric' },
//         { name: 'Charizard', type: 'Fire' }
//     ];
//     res.json(team); // Sends the data back as JSON
// });


// app.get('/pokemon/:name', async (req, res) => {
//     const pokeName = req.params.name;

//     try {
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
//         if(!response.ok) {
//             return res.status(404).json({ error: "Could not find Pokemon" });
//         }

//         const data = await response.json();

//         res.json({
//             name: data.name,
//             weight: data.weight,
//             sprite: data.sprites.front_shiny
//         })
        
//     } catch(error) {
//         console.error(error);
//     }
// })

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });