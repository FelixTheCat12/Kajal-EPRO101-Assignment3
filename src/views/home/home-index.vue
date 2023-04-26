<template>
  <default-layout>
    <div slot="body" class="home">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col-md-12 mt-3">
            <h4 class="mb-3 fw-bold">Table of Contents</h4>
            <ul class="list-group">
              <router-link :to="{ name: 'home' }">
                <h5 class="list-group-item list-group-item-action active">
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
                <h5 class="list-group-item list-group-item-action">
                  Respecting and including Aboriginal and Torres Strait Islander
                  peoples and cultures in early childhood.
                </h5>
              </router-link>
              <router-link :to="{ name: 'conclusion' }">
                <h5 class="list-group-item list-group-item-action">
                  Conclusion
                </h5>
              </router-link>
            </ul>
          </div>
        </div>
        <div class="row text-center mb-5">
          <h3 class="mb-3">Introduction</h3>
          <p>
            As highlighted by the Australian Children's Education and Care
            Quality Authority (ACECQA) (2021), early childhood educators must be
            aware of the significance of the National Quality Standards (NQS) in
            their daily professional practice. The NQS sets the benchmark for
            quality education and care services in Australia, comprising seven
            quality areas considered fundamental to service provision. One of
            the core components of the NQS is the focus on developing and
            implementing educational programs that promote children's learning,
            which is crucial to ensuring optimal outcomes for children
            (Department of Education, Skills and Employment, 2019). The
            implementation of educational programs and practices requires early
            childhood educators to consider various factors, including cultural
            diversity, developmental needs of children, engagement with
            families, and appropriate pedagogical practices. By adhering to the
            NQS, early childhood educators can establish and maintain
            high-quality learning environments that promote children's learning
            and development, meet regulatory requirements, and build positive
            relationships with families and communities. ACECQA (2021) suggests
            that early childhood educators should engage in ongoing cultural
            competence to support cultural diversity and inclusion in their
            daily professional practice. This involves building relationships
            with Aboriginal and Torres Strait Islander peoples and communities,
            recognizing the impact of the land, and being respectful of cultural
            practices. Additionally, early childhood educators can embrace
            traditional stories, songs, and dances from Aboriginal and Torres
            Strait Islander cultures and incorporate them into the learning
            environment to promote cultural inclusivity. Further, understanding
            the significance of Country, Dreaming stories, and traditional
            knowledge among Aboriginal and Torres Strait Islander peoples can
            foster strong cultural bonds with the children and their
            families(Department of Education, Skills and Employment, 2019). In
            conclusion, early childhood educators must be aware of the NQS's
            focus on educational program and practice as it provides a
            professional framework for ensuring quality outcomes for children.
            Building positive and collaborative relationships with families and
            communities, respecting and including Aboriginal and Torres Strait
            Islander peoples and cultures, and promoting diversity are critical
            aspects of delivering high-quality early childhood education and
            care. By adhering to the NQS, early childhood educators can
            establish a strong foundation of respect, dignity, equity,
            diversity, cultural responsiveness, and inclusion and promote
            positive outcomes for children, families, and the community.
          </p>
        </div>
      </div>
      <div
        class="btn-group text-center float-end"
        role="group"
        aria-label="Basic example"
      >
        <button type="button" class="btn btn-secondary">
          <router-link :to="{ name: 'home' }">Introduction</router-link>
        </button>
        <button type="button" class="btn btn-secondary">
          <router-link :to="{ name: 'p1' }">Next</router-link>
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
