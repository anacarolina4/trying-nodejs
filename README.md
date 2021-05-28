# project-node.js
NODE.JS by Ana 


@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap");

* {
    box-sizing: border-box;
}

body {
    background-color: #3a47ff;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: "Poppins", sans-serif;
    margin: 0;
    min-height: 80vh;
    transition: background 0.5s linear, color 0.5s linear;   
}

#game button {
    background-color: #12F;
    color: #110;
    border: none;
    font-size: 2rem;
    width: 100%;
    padding: 1rem;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
}


#game button:hover {
    background-color: #DDD;
    color: #444;
    border: none;
    cursor: pointer;
    font-size: 2rem;
    font-weight: bold;
    padding: 1rem;
    width: 100%;
}

#menu-desktop {
    border: none;
    cursor: pointer;
    font-size: 1.25rem;
    font-weight: bold;
    padding: 0.75rem;
    height: 50px;
    width: 20%;
    
}

/* func dark mode */
body.dark {
    background-color: #111;
    color: #FFF;
}

body.dark label {
    background-color: #FFF;
}

.dark-mode {
    position: fixed;
    top: 10px;
    right: 10px;
}

#dark-button {
    background-color: #000;
    border-radius: 40%;
    display: inline-block;
    width: 35px;
    height: 35px;
    cursor: pointer;
    user-select: none;
    transition: background 0.5s linear;
}

input {
    visibility: hidden;
}

/* credits by ana */

#credits-ana {
    font-size: 1rem;
    padding: 1rem;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
}
