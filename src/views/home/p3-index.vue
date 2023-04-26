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
                <h5 class="list-group-item list-group-item-action active">
                  Dignity, equity, diversity, cultural responsiveness, and
                  inclusion within early childhood.
                </h5>
              </router-link>
              <router-link :to="{ name: 'p4' }">
                <h5 class="list-group-item list-group-item-action">
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
          <h3 id="p3" class="mb-3">
            Dignity, equity, diversity, cultural responsiveness, and inclusion
            within early childhood.
          </h3>
          <p class="mb-2">
            As an early childhood teacher, it is crucial to be aware of the
            National Quality Standards (NQS) and their significance in daily
            professional practice. One of the key principles of the NQS is to
            embed a strong foundation of respect, dignity, equity, diversity,
            cultural responsiveness, and inclusion in early childhood education
            and care services (Department of Education, Skills and Employment,
            2018). This principle requires early childhood teachers to engage in
            ongoing cultural competence, communication with families with
            diverse backgrounds, and continuously reflect on their practices to
            ensure that they contribute to promoting equity for all children.
            One of the ways in which the NQS promotes the principle of dignity,
            equity, diversity, cultural responsiveness, and inclusion is through
            the requirement for services to develop a Reconciliation Action Plan
            (RAP) that acknowledges, respects, and responds to the experiences
            of Aboriginal and Torres Strait Islander peoples. These plans
            provide early childhood teachers with an opportunity to connect with
            their local Aboriginal and Torres Strait Islander communities, learn
            about their local culture, and develop culturally responsive
            practices that support children’s learning and development.
            Additionally, the NQS promotes creating and using resources that
            reflect diversity to support children to develop acceptance and
            respect of other cultures, which is essential for children's
            inclusive development in the classroom. Furthermore, the NQS
            requires services to provide equitable access provisions to all
            enrolled children, including those with additional needs. It is the
            responsibility of early childhood teachers to develop strategies
            that provide all children with access to learning opportunities that
            meet their unique needs, interests, and abilities. This includes
            providing resources such as captioning or sign language for children
            who may be deaf or hard of hearing and personalized learning plans
            to support children’s different levels, areas of interest, and
            cultural backgrounds. It is important for early childhood teachers
            to work collaboratively with families and other educational
            professionals to create individualized learning plans that meet the
            needs of each child. In conclusion, the NQS is fundamental in
            promoting equity, dignity, diversity, cultural responsiveness, and
            inclusion in early childhood education and care services. Early
            childhood teachers need to continuously develop their professional
            practice to meet the NQS requirements, such as engaging in
            professional learning activities, developing personalized learning
            plans, and providing inclusive resources. Providing children with
            enriching experiences across cultures will ultimately result in
            young children growing up with the understanding of diversity and
            acceptance, making them culturally-responsive individuals.
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
          <router-link :to="{ name: 'p2' }">Previous</router-link>
        </button>
        <button type="button" class="btn btn-secondary">
          <router-link :to="{ name: 'p4' }">Next</router-link>
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
