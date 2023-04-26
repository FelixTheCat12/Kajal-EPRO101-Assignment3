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
                <h5 class="list-group-item list-group-item-action active">
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
                <h5 class="list-group-item list-group-item-action">
                  Conclusion
                </h5>
              </router-link>
            </ul>
          </div>
        </div>
        <div class="row text-center mb-5">
          <h3 id="p2" class="mb-3">
            Relationships, partnerships and collaborating with families,
            communities, and children.
          </h3>
          <p class="mb-2">
            As an early childhood teacher, it is important to understand the
            significance of the National Quality Standards (NQS) in daily
            practice. The NQS is a framework designed to guide the delivery of
            high-quality early childhood education and care. One of its core
            components includes ensuring that early childhood educators build
            positive and collaborative relationships with families, communities,
            and children. By engaging in effective communication with families
            and the wider community, early childhood educators can foster a
            sense of belonging and inclusion for all children under their care
            which promotes supportive learning environments. The importance of
            establishing strong relationships with families cannot be
            understated. Communicating with families and engaging them in the
            learning process fosters trust and an awareness of cultural contexts
            which is important in promoting the best outcomes for young
            children. Educators can involve families in the development of
            policies and procedures, and in the assessment of children's
            learning and development to ensure that they are attuned to each
            child's unique needs. Furthermore, effective collaboration with
            members of the broader community can further support the delivery of
            high-quality education and care services. In addition to encouraging
            strong relationships with families and communities, the NQS promotes
            collaborative partnerships and relationships among children in the
            classroom. By promoting these interactions and collaboration among
            children, there is a higher potential for children to engage in
            deeper learning and develop key social skills such as sharing,
            cooperation, and empathy. By engaging with children in a respectful
            and responsive manner, educators can provide safe, healthy and
            supportive learning environments where children can explore, learn
            and grow together. In conclusion, it is of utmost importance that
            early childhood teachers keep the NQS in mind when carrying out
            professional practice. Building positive and collaborative
            relationships with families, communities, and children, promoting
            respect for cultural contexts, and encouraging interaction and
            communication between children are critical aspects in delivering
            high-quality early childhood education and care. By being aware of
            the significance of the NQS, educators can work towards establishing
            positive outcomes for children, families, and the community.
          </p>
        </div>
      </div>
      <div class="btn-group float-end" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary">
          <router-link :to="{ name: 'home' }">Introduction</router-link>
        </button>
        <button type="button" class="btn btn-secondary">
          <router-link :to="{ name: 'p1' }">Previous</router-link>
        </button>
        <button type="button" class="btn btn-secondary">
          <router-link :to="{ name: 'p3' }">Next</router-link>
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
