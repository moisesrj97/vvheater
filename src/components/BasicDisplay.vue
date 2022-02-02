<template>
  <div class="basic-display">
    <div class="weather-info">
      <img
        class="weather-info__icon"
        :src="iconSrc"
        :alt="tempData.weather.description.concat(' icon')"
      />
      <h3 class="weather-info__time-and-weather">
        {{ time }} - {{ capitalizedWeather }}
      </h3>
    </div>
    <div class="temp-and-humidity">
      <p class="temp-and-humidity__current">
        {{ tempData.tempAndHumidity.temp }}º
      </p>
      <div class="temp-and-humidity__feeling-and-humidity">
        <p class="temp-and-humidity__feeling">
          ({{ tempData.tempAndHumidity.feelsLike }}º)
        </p>
        <div class="temp-and-humidity__humidity-container">
          <img
            src="@/assets/humidity-icon.png"
            alt="humidity icon"
            class="temp-and-humidity__humidity-icon"
          />
          <p class="temp-and-humidity__humidity-text">
            {{ tempData.tempAndHumidity.humidity }}%
          </p>
        </div>
      </div>

      <div class="temp-and-humidity__sunrise-and-sunset">
        <div class="temp-and-humidity__sunrise-container">
          <img
            src="@/assets/sunrise-icon.png"
            alt="sunrise icon"
            class="temp-and-humidity__sunrise-icon"
          />
          <p class="temp-and-humidity__sunrise-text">{{ sunriseTime }}</p>
        </div>
        <div class="temp-and-humidity__sunset-container">
          <img
            src="@/assets/sunset-icon.png"
            alt="sunset icon"
            class="temp-and-humidity__sunset-icon"
          />
          <p class="temp-and-humidity__sunset-text">{{ sunsetTime }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BasicDisplay',
  props: {
    tempData: {
      required: true,
      type: Object,
    },
  },
  computed: {
    iconSrc() {
      return `http://openweathermap.org/img/wn/${this.tempData.weather.icon}@2x.png`;
    },
    time() {
      return new Date(new Date(0).setUTCSeconds(this.tempData.time))
        .toLocaleTimeString()
        .split(':')
        .splice(0, 2)
        .join(':');
    },
    sunriseTime() {
      return new Date(new Date(0).setUTCSeconds(this.tempData.sunrise))
        .toLocaleTimeString()
        .split(':')
        .splice(0, 2)
        .join(':');
    },
    sunsetTime() {
      return new Date(new Date(0).setUTCSeconds(this.tempData.sunset))
        .toLocaleTimeString()
        .split(':')
        .splice(0, 2)
        .join(':');
    },
    capitalizedWeather() {
      const weather = this.tempData.weather.description;
      return weather.charAt(0).toUpperCase() + weather.slice(1);
    },
  },
});
</script>
<style lang="scss">
.basic-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.weather-info {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &__time-and-weather {
    text-align: start;
    font-size: 1.8rem;
    font-weight: 400;
  }
  &__icon {
    width: 80px;
    height: 80px;
  }
}
.temp-and-humidity {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  &__current {
    font-size: 4rem;
    font-weight: 400;
    margin: 0;
  }
  &__feeling-and-humidity {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 15px;
  }
  &__feeling {
    font-size: 1.2rem;
    font-weight: 400;
    margin: 0;
  }
  &__humidity {
    &-container {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    &-icon {
      height: 15px;
      aspect-ratio: 44/59;
    }
    &-text {
      font-size: 1.6rem;
      padding-left: 5px;
      font-weight: 400;
      margin: 0;
    }
  }
  &__sunrise-and-sunset {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
  }
  &__sunrise {
    &-container {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    &-icon {
      height: 20px;
    }
    &-text {
      font-size: 1rem;
      padding-left: 5px;
      font-weight: 400;
      margin: 0;
    }
  }
  &__sunset {
    &-container {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    &-icon {
      height: 20px;
    }
    &-text {
      font-size: 1rem;
      padding-left: 5px;
      font-weight: 400;
      margin: 0;
    }
  }
}
</style>
