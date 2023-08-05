# samantha-stone-portfolio
Repository for my digital resume samantha-stone.com

# Frameworks & Libraries
    - Vite to react template files 
    - Tailwind for css framework
    - Legacy peer deps used to accomodate legacy version of react for react for react tilt library
    - react-fiber and react-drei: 3js library for 3d image control
    - maath: math functions for 3d geometry
    - react tilt: card animation
    - react-timeline: work history timeline
    - emailjs/browser: contact form
    - framer-motion: page animation
    - framer-react-router-dom: page routing
    - rafce: build out component pages for export
# File Structure
## Source (Src): 
    - assets: 
    - components: 
        -Navbar: top navigation menu which adjusts to screen size 
        -Hero: intro and canvas that sits below the navigation menu
        -Loader: Displays load % for 3D graphic on page refresh
        -About: Overview and top skill cards using framer-motion and react-tilt
        -Experience: Work experience utilizing react vertical timeline
        -Tech: 3D elements to list known skills/certs/software
        -Works:links to GitHub repositories
        ### canvas: 
            - BirdCanvas: creates the animated 3d bird on hero component
                Method: get glb file from sketchlab, run npx gltfjsx [fileName.glb] (must have node installed), 
                adjust position in created jsx file (saved in public), and useEffect for animation, 
                find animation name by console logging 'animation',  create BirdCanvas component and import model from jsx file
    - constants: text data for the page saved as constants. Allows component pages to: 
        - maintain a clean structure
        - change the copy from one location
        - logically organize page data in one consistent space
        - easier to spell check
    - utils: 
    - hoc: higher order components
        - SectionWrapper: wraps the sections (about, contact, experience, etc.) to ensure even layout/padding
## App.jsx: main application that routes all component pages to be rendered

# Credits: 
- 3D Animated Bird: 
- 3D Resume Tutorial: JavaScript Mastery (https://www.youtube.com/watch?v=0fYi8SGA20k) 
- 3D Orchid File: This work is based on "Orchid flower" (https://sketchfab.com/3d-models/orchid-flower-75d19624c0d04b65975e011a04ae77a0) by Lassi Kaukonen (https://sketchfab.com/thesidekick) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
- Canvas Background: Designed by Freepik (http://www.freepik.com)
