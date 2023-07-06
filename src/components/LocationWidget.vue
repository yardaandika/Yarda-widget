<script>
export default {
  data() {
    return {
      latitude: null,
      longitude: null,
      inputLatitude: "",
      inputLongitude: "",
      foundLocation: null,
    };
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getPosition);
    }
  },
  methods: {
    getPosition(position) {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    },
    async fetchLocationDetails() {
      try {
        const apiKey = "92591005a7b94008909d59a64b6d2a49";
        const latitude = this.inputLatitude || this.latitude;
        const longitude = this.inputLongitude || this.longitude;
        const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          latitude + "," + longitude
        )}&key=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          const location = data.results[0];
          this.foundLocation = location;
          console.log("Location:", location);
          // Lakukan sesuatu dengan data lokasi yang ditemukan
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    },
  },
};
</script>

<template>
  <div class="location-widget container py-4 bg-light rounded shadow">
    <hr color="grey" />
    <h2 class="mb-4">LOKASI SEKARANG</h2>
    <div v-if="latitude && longitude">
      <p>Garis Lintang: {{ latitude }}</p>
      <p>Garis Bujur: {{ longitude }}</p>
      <hr color="grey" />
    </div>
    <div>
      <p>CARI LOKASI</p>
      <div class="row mt-4">
        <div class="col-md-6 mb-3">
          <label for="latitude" class="form-label">Garis Lintang:</label>
          <input
            type="text"
            id="latitude"
            class="form-control"
            v-model="inputLatitude"
          />
        </div>
        <div class="col-md-6 mb-3">
          <label for="longitude" class="form-label">Garis Bujur:</label>
          <input
            type="text"
            id="longitude"
            class="form-control"
            v-model="inputLongitude"
          />
        </div>
      </div>
    </div>

    <button class="btn btn-primary mt-4" @click="fetchLocationDetails">
      Cari Detail Lokasi
    </button>

    <div v-if="foundLocation" class="mt-4">
      <h3>Detail Lokasi</h3>
      <p>{{ foundLocation.components.country }}</p>
      <p>{{ foundLocation.components.city }}</p>
      <p>{{ foundLocation.components.street }}</p>
      <p>Postal Kode: {{ foundLocation.components.postcode }}</p>
    </div>
  </div>
</template>


<style scoped>
.location-widget {
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.location-widget h2 {
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

.location-widget p {
  color: #666;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>