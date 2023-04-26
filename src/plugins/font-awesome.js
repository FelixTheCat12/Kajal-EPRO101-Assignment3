import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";

//Importing Brand Specific Icons
import {
  faInstagram,
  faFacebook,
  faGoogle,
  faTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

//Import solid icons
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCartShopping,
  faChessKnight,
} from "@fortawesome/free-solid-svg-icons";

Vue.component("font-awesome-icon", FontAwesomeIcon);
library.add(
  faCartShopping,
  faChessKnight,
  faInstagram,
  faFacebook,
  faGoogle,
  faTwitter,
  faTiktok
);
