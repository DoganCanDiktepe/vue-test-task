<template>
  <div class="chart">
    <v-row>
      <v-spacer></v-spacer>
      <v-col class="" lg="5">
        <VueDragResize
          :isActive="true"
          :w="600"
          :h="400"
          :isResizable="false"
          v-on:dragging="resize"
        >
          <highcharts ref="hightChart" v-bind:options="chart2" />
        </VueDragResize>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>
<script>
import VueDragResize from "vue-drag-resize";
import axios from "axios";

export default {
  name: "Chart",
  components: {
    VueDragResize,
  },
  data() {
    return {
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      chart2: {
        title: {
          text: "",
        },
        yAxis: {
          title: {
            text: "",
          },
        },
        series: [
          {
            data: [],
          },
        ],
      },
    };
  },
  async created() {
    const { data } = await axios.get(
      "https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-01-01&end=2019-12-31"
    );
    let result = Object.keys(data.bpi).map((key) => [key, data.bpi[key]]);
    this.chart2.series[0].data = result;
    this.chart2.yAxis.title.text = data.time.updated;
    this.chart2.title.text = data.disclaimer;
  },
  methods: {
    resize(newRect) {
      this.width = newRect.width;
      this.height = newRect.height;
      this.top = newRect.top;
      this.left = newRect.left;
    },
  },
};
</script>
<style scoped>
.chart {
  position: relative;
}
</style>
