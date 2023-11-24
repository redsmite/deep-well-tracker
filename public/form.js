import { app, db } from './connection.js';
import { addDoc, collection, serverTimestamp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-storage.js';

const storage = getStorage(); // Ensure you have this line to initialize the storage variable

const form = document.getElementById('myForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = form.mapTitle.value;
    const file = form.mapImage.files[0];
    if (file) {
        
        // Upload the image to Firebase Storage
        const storageRef = ref(storage, 'images/' + file.name);
        await uploadBytes(storageRef, file);
    
        // Get the download URL of the uploaded image
        const imageUrl = await getDownloadURL(storageRef);
    
        // Store the image URL in Firestore
        const imageData = { // Change the variable name to avoid redeclaration
        caption: 'My Image',
        imageUrl: imageUrl,
        };

        const data = {
            title,
            image: imageUrl,
            timestamp: serverTimestamp(),
        };
    
        // Example: Add the data to a "posts" collection
        const postsCollection = collection(db, 'posts');
        await addDoc(postsCollection, data);
        
        console.log('Data submitted:', data); // Log the data to the console
        
        alert('Data submitted successfully!');
        form.reset();
    }


    
  });