<script>
export default {
  data() {
    return {
      title: "",
      photoUrl: "",
      maxTitleLength: 20, // Set the maximum number of characters for the title
    };
  },
  mounted() {
    this.getRandomPhoto();
  },
  methods: {
    async getRandomPhoto() {
      try {
        const apiKey = "38037020-2c48722c03be8437a05b588e6";
        const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=anime&image_type=photo&orientation=horizontal`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.hits.length);
        const randomPhoto = data.hits[randomIndex];
        this.title = randomPhoto.tags;
        this.photoUrl = randomPhoto.webformatURL;
      } catch (error) {
        console.error("Error fetching random photo:", error);
      }
    },
  },
  computed: {
    formattedTitle() {
      if (this.title.length > this.maxTitleLength) {
        return this.title.substring(0, this.maxTitleLength) + "...";
      } else {
        return this.title;
      }
    },
  },
};
</script>
          
<template>
    <div class="photo-widget">
      <h2 class="title">{{ formattedTitle }}</h2>
      <div class="photo-container">
        <div class="photo-wrapper">
          <img :src="photoUrl" :alt="title" class="photo img-fluid" />
        </div>
      </div>
      <button @click="getRandomPhoto" class="btn btn-primary mt-3">
        Load New Photo
      </button>
    </div>
  </template>
  
  <style scoped>
  .photo-widget {
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
    text-align: center;
    background-color: #f5f5f5;
    border-radius: 8px;
  }
  
  .title {
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .photo-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    overflow: hidden;
  }
  
  .photo-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  
  .photo {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
  }
  
  .btn-primary {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
  }
  
  /* Additional styles for Bootstrap */
  .photo-widget {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .title {
    margin-top: 0;
  }
  
  .long-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .btn-primary {
    margin-top: 1rem;
  }
  </style>