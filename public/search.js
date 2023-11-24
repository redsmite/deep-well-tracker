import { db } from './connection.js';
import { getFirestore, collection, query, where, getDocs, limit } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js';

async function searchImages(searchTerm) {
    try {
        const searchTerm = document.getElementById('searchBar').value;
 
        const imageContainer = document.getElementById('imageContainer');
        imageContainer.innerHTML = ''; // Clear previous search results
    
        // Create a query to retrieve images where the "image" field contains the search term
        const q = query(collection(db, 'posts'), where('title', '==', searchTerm));

    
        // Get the documents that match the query
        const querySnapshot = await getDocs(q);
    
        // Process the results
        querySnapshot.forEach((doc) => {
            const image = doc.data();
            const imageUrl = image.image; // Assuming 'image' is the field containing the image URL
    
            console.log(imageUrl);

            // Update the content of the container with image elements
            imageContainer.innerHTML += `<img src="${imageUrl}" alt="Image" class="image-item">`;
        });
    
        if (querySnapshot.empty) {
            console.log('No matching images found.');
        }
        } catch (error) {
        console.error('Error searching images:', error);
        }
  }

// Add event listener to the search button
document.getElementById('searchButton').addEventListener('click', searchImages);