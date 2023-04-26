<template>
  <div class="pages">
    <b-nav-layout></b-nav-layout>
    <h2 class="text-center mb-4">
      Promotion of the National Quality Standards into Professional Practice
    </h2>
    <div class="mb-3">
      <b-carousel
        id="carousel1"
        v-model="slide"
        :interval="5000"
        controls
        indicators
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333"
      >
        <b-carousel-slide
          v-for="(image, index) in images"
          :key="index"
          :img-src="image.src"
          :text="image.caption"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <div id="content" class="container-fluid">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
import BNavLayout from "@/layouts/navbar/b-nav-index";
import { BCarousel, BCarouselSlide } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  components: {
    BNavLayout,
    "b-carousel": BCarousel,
    "b-carousel-slide": BCarouselSlide,
  },
  data() {
    return {
      slide: 0,
      images: [
        {
          src: require("@/assets/images/children.jpg"),
          caption: "First slide",
        },
        {
          src: require("@/assets/images/children1.jpg"),
          caption: "Second slide",
        },
        {
          src: require("@/assets/images/children2.jpg"),
          caption: "Third slide",
        },
        {
          src: require("@/assets/images/children3.jpg"),
          caption: "Fourth slide",
        },
      ],
    };
  },
};
</script>
