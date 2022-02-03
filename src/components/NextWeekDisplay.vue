<template>
  <div class="next-week-display">
    <h2 class="next-week-display__title">7-day forecast</h2>
    <ul class="next-week-display__nav">
      <li
        v-for="(day, index) in nextWeekPredictionDisplay"
        v-bind:key="index"
        class="next-week-display__nav-item"
        v-bind:class="{
          'next-week-display__nav-item--active': index === dayMarker,
        }"
        @click="dayMarker = index"
      >
        <p class="next-week-display__nav-item-text">{{ day.weekDay }}</p>
        <img
          :src="`${`http://openweathermap.org/img/wn/${day.weather.icon}@2x.png`}`"
          alt=""
          class="next-week-display__nav-item-icon"
        />
        <p class="next-week-display__nav-item-temp">
          {{ trimTemp(day.temp.max) }}°C | {{ trimTemp(day.temp.min) }}°C
        </p>
      </li>
    </ul>
    <div class="prediction-display">
      <div class="prediction-display__title">
        <img
          :src="`${`http://openweathermap.org/img/wn/${nextWeekPredictionDisplay[dayMarker].weather.icon}@2x.png`}`"
          :alt="
            nextWeekPredictionDisplay[dayMarker].weather.description.concat(
              ' icon'
            )
          "
          class="prediction-display__title-icon"
        />
        <h3 class="prediction-display__title-text">
          {{
            capitalize(nextWeekPredictionDisplay[dayMarker].weather.description)
          }}
        </h3>
      </div>

      <p class="prediction-display__main-temp">
        {{ trimTemp(nextWeekPredictionDisplay[dayMarker].temp.max) }}ºC |
        {{ trimTemp(nextWeekPredictionDisplay[dayMarker].temp.min) }}ºC
      </p>
      <div class="prediction-display__humidity-sunrise-sunset">
        <div class="prediction-display__humidity-container">
          <img
            src="@/assets/humidity-icon.png"
            alt=""
            class="prediction-display__humidity-icon"
          />
          <p class="prediction-display__humidity-text">
            {{ nextWeekPredictionDisplay[dayMarker].humidity }}%
          </p>
        </div>
        <div class="prediction-display__sunrise-container">
          <img
            src="@/assets/sunrise-icon.png"
            alt=""
            class="prediction-display__sunrise-icon"
          />
          <p class="prediction-display__sunrise-text">
            {{ generateTime(nextWeekPredictionDisplay[dayMarker].sunrise) }}
          </p>
        </div>

        <div class="prediction-display__sunset-container">
          <img
            src="@/assets/sunset-icon.png"
            alt=""
            class="prediction-display__sunset-icon"
          />
          <p class="prediction-display__sunset-text">
            {{ generateTime(nextWeekPredictionDisplay[dayMarker].sunset) }}
          </p>
        </div>
      </div>

      <h3 class="prediction-display__temps-title">Expected temps</h3>
      <div class="prediction-display__temps">
        <div class="prediction-display__temps-morn-container">
          <p class="prediction-display__temps-morn-temp">
            {{ trimTemp(nextWeekPredictionDisplay[dayMarker].temp.morn) }}ºC
          </p>
          <p class="prediction-display__temps-morn-feeling">
            ({{
              trimTemp(nextWeekPredictionDisplay[dayMarker].feelsLike.morn)
            }})
          </p>
          <p class="prediction-display__temps-morn-text">Morn</p>
        </div>

        <div class="prediction-display__temps-day-container">
          <p class="prediction-display__temps-day-temp">
            {{ trimTemp(nextWeekPredictionDisplay[dayMarker].temp.day) }}ºC
          </p>
          <p class="prediction-display__temps-day-feeling">
            ({{ trimTemp(nextWeekPredictionDisplay[dayMarker].feelsLike.day) }})
          </p>
          <p class="prediction-display__temps-day-text">Day</p>
        </div>

        <div class="prediction-display__temps-eve-container">
          <p class="prediction-display__temps-eve-temp">
            {{ trimTemp(nextWeekPredictionDisplay[dayMarker].temp.eve) }}ºC
          </p>
          <p class="prediction-display__temps-eve-feeling">
            ({{ trimTemp(nextWeekPredictionDisplay[dayMarker].feelsLike.eve) }})
          </p>
          <p class="prediction-display__temps-eve-text">Eve</p>
        </div>

        <div class="prediction-display__temps-night-container">
          <p class="prediction-display__temps-night-temp">
            {{ trimTemp(nextWeekPredictionDisplay[dayMarker].temp.night) }}ºC
          </p>
          <p class="prediction-display__temps-night-feeling">
            ({{
              trimTemp(nextWeekPredictionDisplay[dayMarker].feelsLike.night)
            }})
          </p>
          <p class="prediction-display__temps-night-text">Night</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { NextDayPredictionI } from '@/interfaces/weatherAPI.interfaces';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NextWeekDisplay',
  props: {
    nextWeekPrediction: {
      required: true,
      type: Array as () => NextDayPredictionI[],
    },
  },
  data(): { dayMarker: number } {
    return {
      dayMarker: 0,
    };
  },
  computed: {
    nextWeekPredictionDisplay() {
      return this.nextWeekPrediction
        .map((day: NextDayPredictionI) => ({
          ...day,
          weekDay: `${new Date(new Date(0).setSeconds(day.dt)).getUTCDate()}/${
            new Date(new Date(0).setSeconds(day.dt)).getUTCMonth() + 1
          }`,
        }))
        .filter((e, i) => i > 0);
    },
  },
  methods: {
    generateTime(time: number) {
      return new Date(new Date(0).setUTCSeconds(time))
        .toLocaleTimeString()
        .split(':')
        .splice(0, 2)
        .join(':');
    },
    capitalize(str: string) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    trimTemp(temp: number) {
      return Math.round(temp);
    },
  },
});
</script>
<style lang="scss">
%row-displays {
  &-container {
    display: flex;
    align-items: center;
  }
  &-text {
    font-size: 1.1rem;
    font-weight: 400;
    margin: 0;
  }
  &-icon {
    height: 0.9rem;
    margin-right: 10px;
  }
}

.next-week-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  &__title {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
  &__nav {
    list-style: none;
    display: flex;
    overflow-x: auto;
    width: 100%;
    margin: 0;
    padding: 0;
    gap: 20px;
    padding: 10px 5px;
    &-item {
      background-color: #2a2a2a;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 5px;
      & p {
        margin: 0;
      }
      &--active {
        background-color: #3a3a3a;
      }
    }
  }
}

.prediction-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  &__title {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    &-text {
      font-size: 2rem;
      font-weight: 400;
      margin: 0;
    }
    &-icon {
      width: 100px;
      height: 100px;
      margin-right: 10px;
    }
  }
  &__main-temp {
    font-size: 3.5rem;
    font-weight: 400;
    margin: 0;
  }
  &__humidity-sunrise-sunset {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }
  &__humidity {
    &-container {
      display: flex;
      align-items: center;
    }
    &-text {
      font-size: 1.3rem;
      font-weight: 400;
      margin: 0;
    }
    &-icon {
      height: 1.1rem;
      margin-right: 10px;
    }
  }
  &__sunrise {
    &-container {
      @extend .prediction-display__humidity-container;
    }
    &-text {
      @extend .prediction-display__humidity-text;
    }
    &-icon {
      @extend .prediction-display__humidity-icon;
    }
  }
  &__sunset {
    &-container {
      @extend .prediction-display__humidity-container;
    }
    &-text {
      @extend .prediction-display__humidity-text;
    }
    &-icon {
      @extend .prediction-display__humidity-icon;
    }
  }
  &__temps {
    display: flex;
    justify-content: space-around;
    width: 100%;
    align-items: center;
    margin-top: 20px;
    &-title {
      font-size: 1.3rem;
      font-weight: 400;
      margin: 0;
      margin-top: 25px;
    }
    &-morn {
      &-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
      }
      &-temp {
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0;
      }
      &-feeling {
        font-size: 1.1rem;
        font-weight: 400;
        margin: 0;
      }
      &-text {
        font-size: 1.2rem;
        font-weight: 400;
        margin: 0;
        margin-top: 10px;
      }
    }
    &-day {
      &-container {
        @extend .prediction-display__temps-morn-container;
      }
      &-temp {
        @extend .prediction-display__temps-morn-temp;
      }
      &-feeling {
        @extend .prediction-display__temps-morn-feeling;
      }
      &-text {
        @extend .prediction-display__temps-morn-text;
      }
    }
    &-eve {
      &-container {
        @extend .prediction-display__temps-morn-container;
      }
      &-temp {
        @extend .prediction-display__temps-morn-temp;
      }
      &-feeling {
        @extend .prediction-display__temps-morn-feeling;
      }
      &-text {
        @extend .prediction-display__temps-morn-text;
      }
    }
    &-night {
      &-container {
        @extend .prediction-display__temps-morn-container;
      }
      &-temp {
        @extend .prediction-display__temps-morn-temp;
      }
      &-feeling {
        @extend .prediction-display__temps-morn-feeling;
      }
      &-text {
        @extend .prediction-display__temps-morn-text;
      }
    }
  }
}
</style>
