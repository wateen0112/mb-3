<!-- <template>
  <div class="date-picker">
    <input type="text" v-model="selectedDate" @focus="showDatePicker" :placeholder="placeholder" />
    <div class="date-picker-popup" v-if="isDatePickerOpen">
      <div class="date-picker-header">
        <div class="date-picker-month-year">{{ monthNames[selectedMonth] }} {{ selectedYear }}</div>
        <div class="date-picker-controls">
          <button @click="previousMonth">&lt;</button>
          <button @click="nextMonth">&gt;</button>
        </div>
      </div>
      <div class="date-picker-calendar">
        <div class="date-picker-day-names">
          <div v-for="dayName in dayNames" :key="dayName" class="date-picker-day-name">{{ dayName }}</div>
        </div>
        <div class="date-picker-days">
          <div
            v-for="day in daysInMonth"
            :key="day"
            :class="{ 'date-picker-day': true, 'date-picker-day-selected': day === selectedDay }"
            @click="selectDate(day)"
          >
            {{ day }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DatePicker',
  props: {
    value: {
      type: Date,
      default: null,
    },
    placeholder: {
      type: String,
      default: 'Select date',
    },
  },
  data() {
    return {
      selectedDate: this.value ? this.formatDate(this.value) : '',
      isDatePickerOpen: false,
      selectedYear: new Date().getFullYear(),
      selectedMonth: new Date().getMonth(),
      selectedDay: null,
      dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
    };
  },
  watch: {
    value(newValue: Date | null) {
      if (newValue) {
        this.selectedDate = this.formatDate(newValue);
      } else {
        this.selectedDate = '';
      }
    },
    selectedDate(newValue: string) {
      if (newValue) {
        const date = new Date(newValue);
        if (!isNaN(date.getTime())) {
          this.selectedYear = date.getFullYear();
          this.selectedMonth = date.getMonth();
          this.selectedDay = date.getDate();
        }
      } else {
        this.selectedYear = new Date().getFullYear();
        this.selectedMonth = new Date().getMonth();
        this.selectedDay = null;
      }
    },
  },
  computed: {
    daysInMonth(): number[] {
      const days: number[] = [];
      const date = new Date(this.selectedYear, this.selectedMonth, 1);
      while (date.getMonth() === this.selectedMonth) {
        days.push(date.getDate());
        date.setDate(date.getDate() + 1);
      }
      return days;
    },
  },
  methods: {
    formatDate(date: Date): string {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    }, -->
