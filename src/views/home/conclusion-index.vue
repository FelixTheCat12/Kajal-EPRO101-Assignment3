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
                <h5 class="list-group-item list-group-item-action">
                  Respecting and including Aboriginal and Torres Strait Islander
                  peoples and cultures in early childhood.
                </h5>
              </router-link>
              <router-link :to="{ name: 'conclusion' }">
                <h5 class="list-group-item list-group-item-action active">
                  Conclusion
                </h5>
              </router-link>
            </ul>
          </div>
        </div>
        <div class="row text-center mb-5">
          <h3 class="mb-3">Conclusion</h3>
          <p>
            Early childhood educators must prioritize the development and
            implementation of educational programs that promote children's
            learning. The National Quality Standards (NQS) provides a framework
            that sets the benchmark for quality education and care services in
            Australia, making it essential for early childhood educators to
            adhere to its principles to deliver high-quality early childhood
            education and care that meets regulatory requirements, builds
            positive relationships with families and communities while promoting
            positive outcomes for children. Further, engagement with families
            and communities, respecting and including diverse cultures and
            promoting inclusivity among children are crucial components of
            delivering high-quality early childhood education and care. By
            following these recommendations, early childhood educators can
            promote social justice and equity, ensure optimal outcomes for
            children, build positive relationships with families and
            communities, and provide quality education and care that meets the
            needs of all children irrespective of their race or culture.
          </p>
        </div>
      </div>
      <div class="btn-group float-end" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary">
          <router-link :to="{ name: 'home' }">Introduction</router-link>
        </button>
        <button type="button" class="btn btn-secondary">
          <router-link :to="{ name: 'p4' }">Previous</router-link>
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
