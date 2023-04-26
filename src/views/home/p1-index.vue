<template>
  <default-layout>
    <div slot="body" class="home">
      <div class="row text-center mb-5">
        <div class="col-md-12">
          <h4 class="mb-3 fw-bold">Table of Contents</h4>
          <ul class="list-group">
            <router-link :to="{ name: 'home' }">
              <h5 class="list-group-item list-group-item-action">
                Introduction
              </h5>
            </router-link>
            <router-link :to="{ name: 'p1' }">
              <h5 class="list-group-item list-group-item-action active">
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
              </h5> </router-link
            ><router-link :to="{ name: 'conclusion' }">
              <h5 class="list-group-item list-group-item-action">Conclusion</h5>
            </router-link>
          </ul>
        </div>
      </div>

      <div class="row text-center mb-5">
        <h3 id="p1" class="mb-3">
          Design and implementation of educational program and practice
        </h3>
        <p class="mb-2">
          It's essential for early childhood teachers to be aware of the
          significance of the National Quality Standards (NQS) in their everyday
          professional practice, including the implementation and evaluation of
          educational programs and practices. According to the National Quality
          Framework (NQF) (ACECQA, 2018), the NQS sets the benchmark for quality
          education and care services in Australia, and outlines seven quality
          areas deemed essential for service provision. These quality areas
          include educational program and practice, children's health and
          safety, physical environment, staffing arrangements, relationships
          with children, collaborative partnerships with families and
          communities, and governance and leadership. Implementation of
          educational programs and practices is a critical component of any
          early childhood educator's role, and is an area that is explicitly
          addressed in the NQS. Educational program and practice quality area,
          which focuses on developing and implementing educational programs that
          promote children's learning, is essential for ensuring optimal
          outcomes for children (ACECQA, 2018). Effective implementation of
          educational programs and practices aims to promote children's learning
          and development, nurture their individual interests, and build their
          confidence and self-esteem (Department of Education, Skills and
          Employment, 2019). Early childhood educators must consider a range of
          factors when implementing educational programs and practices,
          including the developmental needs of children, cultural diversity,
          engagement with families, and appropriate pedagogical practices.
          According to the Australian Curriculum, Assessment and Reporting
          Authority (2021), educators must develop and maintain positive
          relationships with children, ensure that individual interests and
          abilities are met, promote inquiry-based and play-based learning, and
          assess and evaluate children's learning and development over time.
          Being aware of the NQS and its focus on educational program and
          practice is essential for early childhood educators. It provides a
          professional framework for the development, implementation, and
          evaluation of educational programs and practices, and offers
          opportunities for ongoing professional learning and improvement. By
          adhering to the NQS, early childhood educators can establish and
          maintain high-quality learning environments that promote children's
          learning and development, meet regulatory requirements, and build
          positive relationships with families and communities. In conclusion,
          the implementation of educational programs and practices is an
          essential aspect of early childhood education, and the National
          Quality Standards offer a professional framework for ensuring quality
          outcomes for children. Early childhood teachers must be aware of the
          NQS's focus on educational program and practice, and work towards
          implementing high-quality learning environments that meet regulatory
          requirements and promote children's learning and development. Ongoing
          professional learning and improvement is necessary to ensure that
          early childhood educators are well-equipped to meet the changing needs
          and demands of young children and their families
        </p>
      </div>
      <div class="btn-group float-end" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary">
          <router-link :to="{ name: 'home' }">Introduction</router-link>
        </button>
        <button type="button" class="btn btn-secondary">
          <router-link :to="{ name: 'home' }">Previous</router-link>
        </button>
        <button type="button" class="btn btn-secondary">
          <router-link :to="{ name: 'p2' }">Next</router-link>
        </button>
        <button type="button" class="btn btn-secondary">
          <router-link :to="{ name: 'conclusion' }">Conclusion</router-link>
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
