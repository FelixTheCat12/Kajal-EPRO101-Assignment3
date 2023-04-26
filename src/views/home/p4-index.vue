<template>
  <default-layout>
    <div slot="body" class="home">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col-md-12 mt-3">
            <h4 class="mb-3 fw-bold">Table of Contents</h4>
            <ul class="list-group">
              <router-link :to="{ name: 'home' }">
                <h5 class="list-group-item list-group-item-action">
                  Introduction
                </h5>
              </router-link>
              <router-link :to="{ name: 'p1' }">
                <h5 class="list-group-item list-group-item-action">
                  Design and implementation of educational program and practice
                </h5>
              </router-link>
              <router-link :to="{ name: 'p2' }">
                <h5 class="list-group-item list-group-item-action">
                  Relationships, partnerships and collaborating with families,
                  communities, and children.
                </h5>
              </router-link>
              <router-link :to="{ name: 'p3' }">
                <h5 class="list-group-item list-group-item-action">
                  Dignity, equity, diversity, cultural responsiveness, and
                  inclusion within early childhood.
                </h5>
              </router-link>
              <router-link :to="{ name: 'p4' }">
                <h5 class="list-group-item list-group-item-action active">
                  Respecting and including Aboriginal and Torres Strait Islander
                  peoples and cultures in early childhood.
                </h5> </router-link
              ><router-link :to="{ name: 'conclusion' }">
                <h5 class="list-group-item list-group-item-action">
                  Conclusion
                </h5>
              </router-link>
            </ul>
          </div>
        </div>

        <div class="row text-center mb-5">
          <h3 id="p4" class="mb-3">
            Respecting and including Aboriginal and Torres Strait Islander
            peoples and cultures in early childhood.
          </h3>
          <p class="mb-2">
            Respecting and including Aboriginal and Torres Strait Islander
            peoples and cultures in early childhood education is an essential
            component of the National Quality Standards (NQS) for early
            childhood educators. It is critical for early childhood educators to
            establish relationships with Aboriginal and Torres Strait Islander
            peoples and communities, and respect the historical and cultural
            diversity of Australian society. Therefore, it is essential to
            promote awareness among early childhood teachers of the significance
            of including Aboriginal and Torres Strait Islander peoples and
            cultures in everyday professional practice. The first standard of
            the National Quality Framework (NQF) highlights the importance of
            creating a culturally safe and inclusive learning environment for
            all children, including those from diverse cultural and linguistic
            backgrounds. Standard 1.2.2 states the importance of respecting and
            supporting diversity, including Aboriginal and Torres Strait
            Islander peoples and cultures, in early childhood education
            settings. This creates an opportunity for early childhood educators
            to build relationships and establish partnerships with local
            Aboriginal and Torres Strait Islander communities, families, and
            children. According to the Australian Children's Education and Care
            Quality Authority (ACECQA) (2021), there are several ways through
            which early childhood educators can incorporate resoecting and
            including Aboriginal and Torres Strait Islander peoples and cultures
            in their daily professional practices. This includes embracing the
            holistic nature of Aboriginal and Torres Strait Islander culture,
            recognising the impact of the land and the environment on children's
            wellbeing, and being respectful of the cultural beliefs and
            practices of the local community. Additionally, it involves
            celebrating cultural events and learnings that relates to Aboriginal
            and Torres Strait Islander peoples and cultures, and reading about
            the Aboriginal and Torres Strait Islander culture to better
            understand it. Incorporating traditional stories, songs, dance, art,
            and languages from Aboriginal and Torres Strait Islander cultures is
            an excellent way to promote cultural inclusivity in early childhood
            education. Understanding the significance of Country, Dreaming
            stories, and traditional Aboriginal and Torres Strait Islander
            knowledge, such as plant medicine and environmental practices, is
            essential for building strong cultural bonds with the children and
            their families. It is also vital for early childhood educators to
            create a safe and inviting learning space that represents the
            diversity and richness of Australian culture, including the
            Aboriginal and Torres Strait Islander peoples and cultures. In
            conclusion, early childhood educators play a critical role in
            promoting inclusivity in their daily professional practices, and
            respecting and including Aboriginal and Torres Strait Islander
            peoples and cultures is a key aspect of the National Quality
            Standards. Through building relationships with communities, learning
            about diverse cultures, and reflecting on personal biases, early
            childhood educators can create culturally safe learning environments
            that benefit all children. The NQS provides a framework for early
            childhood educators to promote and support cultural diversity,
            essential for children's cognitive, social, and emotional
            development.
          </p>
        </div>
      </div>
      <div class="btn-group float-end" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary">
          <router-link :to="{ name: 'home' }">Introduction</router-link>
        </button>
        <button type="button" class="btn btn-secondary">
          <router-link :to="{ name: 'p3' }">Previous</router-link>
        </button>
        <button type="button" class="btn btn-secondary">
          <router-link :to="{ name: 'conclusion' }">Next</router-link>
        </button>
        <button type="button" class="btn btn-secondary">
          <router-link :to="{ name: 'conclusion' }"> Conclusion </router-link>
        </button>
      </div>
    </div>
  </default-layout>
</template>
<script>
import DefaultLayout from "@/layouts/default-layout";

export default {
  components: {
    DefaultLayout,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/views/home";
</style>
