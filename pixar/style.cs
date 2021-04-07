@charset "UTF-8";
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Zilla+Slab:wght@600&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 1.2em;
  line-height: 1.6;
  font-family: "Montserrat", sans-serif;
  max-width: 1200px;
  margin: 0 auto;
}

#css-zen-garden {
  background-image: url("images/background/background_small.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
@media (min-width: 37.5em) {
  #css-zen-garden {
    background-image: url("images/background/background_big.png");
    max-height: 800vh;
  }
}

@keyframes slide {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-1962px, 0, 0);
  }
}
div.page-wrapper {
  position: relative;
  margin: 20px;
  text-align: center;
}
div.page-wrapper .intro {
  text-align: center;
  position: relative;
}
div.page-wrapper .intro header[role=banner] {
  font-family: "Zilla Slab", serif;
  color: #FDFDFE;
}
div.page-wrapper .intro header[role=banner] h1 {
  background: transparent url("images/title/LampOnTitle.png") no-repeat center top;
  background-size: contain;
  margin-top: 1rem;
  max-width: 500px;
  height: 540px;
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
}
@media (min-width: 37.5em) {
  div.page-wrapper .intro header[role=banner] h1 {
    max-width: 700px;
    height: 740px;
    margin: 0 auto;
    margin-top: 10vh;
  }
}
div.page-wrapper .intro header[role=banner] h2 {
  margin-top: -25rem;
  font-size: 1.2rem;
  opacity: 0.7;
}
@media (min-width: 37.5em) {
  div.page-wrapper .intro header[role=banner] h2 {
    margin-top: -31rem;
  }
}
div.page-wrapper .intro .summary[role=article] p:nth-of-type(1) {
  margin: 3rem 0 35rem 0;
  text-align: center;
  color: #FDFDFE;
  opacity: 0.7;
}
@media (min-width: 37.5em) {
  div.page-wrapper .intro .summary[role=article] p:nth-of-type(1) {
    margin-bottom: 25rem;
  }
}
div.page-wrapper .intro .summary[role=article] p:nth-of-type(2) {
  text-align: center;
  margin-bottom: 3rem;
  color: #0D0D0D;
}
@media (min-width: 37.5em) {
  div.page-wrapper .intro .summary[role=article] p:nth-of-type(2) {
    margin-top: 46rem;
  }
}
div.page-wrapper .intro .summary[role=article] p:nth-of-type(2) a:link,
div.page-wrapper .intro .summary[role=article] p:nth-of-type(2) a:visited {
  text-decoration: none;
  color: #0D0D0D;
}
div.page-wrapper .summary,
div.page-wrapper .preamble,
div.page-wrapper .main,
div.page-wrapper .zen-resources,
div.page-wrapper .design-archives {
  font-size: 1rem;
}
@media (min-width: 37.5em) {
  div.page-wrapper .summary,
div.page-wrapper .preamble,
div.page-wrapper .main,
div.page-wrapper .zen-resources,
div.page-wrapper .design-archives {
    font-size: 0.9rem;
  }
}
div.page-wrapper .summary,
div.page-wrapper .preamble,
div.page-wrapper .explanation,
div.page-wrapper .participation,
div.page-wrapper .benefits,
div.page-wrapper .requirements {
  margin-bottom: 3.5rem;
}
div.page-wrapper p {
  margin-bottom: 0.5rem;
  text-align: left;
}
div.page-wrapper h3 {
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
}

div.design-selection {
  color: #FDFDFE;
  position: absolute;
  top: 22rem;
  left: 0;
  right: 0;
  margin: auto;
}
@media (min-width: 37.5em) {
  div.design-selection {
    margin-top: 5em;
  }
}
div.design-selection .select {
  font-size: 1rem;
  text-align: center;
  opacity: 0.7;
}
div.design-selection ul {
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
}
@media (min-width: 37.5em) {
  div.design-selection ul {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;
    height: 35rem;
  }
}
div.design-selection ul li {
  list-style: none;
  width: 100px;
  height: 130px;
  font-size: 0.7rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  margin: 10px 0;
  color: rgba(255, 255, 255, 0.7);
}
div.design-selection ul li a:link,
div.design-selection ul li a:visited {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
}
div.design-selection ul .design-name {
  text-align: center;
}
@media (max-width: 21.188em) {
  div.design-selection ul .design-name {
    line-height: 1.5;
  }
}
div.design-selection ul li:nth-of-type(1)::before {
  background-image: url("images/space icons/svg/018-mercury.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 45px;
  display: block;
  width: 80px;
  height: 80px;
  content: "";
  transform: translatey(0px);
  -webkit-animation: float1 20s linear infinite forwards;
  animation: float1 20s linear infinite forwards;
}
div.design-selection ul li:nth-of-type(2)::before {
  background-image: url("images/space icons/svg/036-venus.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 55px;
  display: block;
  width: 80px;
  height: 80px;
  content: "";
  transform: translatey(0px);
  -webkit-animation: float2 15s linear infinite forwards;
  animation: float2 15s linear infinite forwards;
}
div.design-selection ul li:nth-of-type(3)::before {
  background-image: url("images/space icons/svg/006-planet-earth.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 60px;
  display: block;
  width: 80px;
  height: 80px;
  content: "";
  transform: translatey(0px);
  -webkit-animation: float3 20s linear infinite forwards;
  animation: float3 20s linear infinite forwards;
}
div.design-selection ul li:nth-of-type(4)::before {
  background-image: url("images/space icons/svg/017-mars.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50px;
  display: block;
  width: 80px;
  height: 100px;
  content: "";
  transform: translatey(0px);
  -webkit-animation: float5 20s linear infinite forwards;
  animation: float5 20s linear infinite forwards;
}
div.design-selection ul li:nth-of-type(5)::before {
  background-image: url("images/space icons/svg/012-jupiter.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 80px;
  display: block;
  width: 80px;
  height: 100px;
  content: "";
  transform: translatey(0px);
  -webkit-animation: float4 15s linear infinite forwards;
  animation: float4 15s linear infinite forwards;
}
div.design-selection ul li:nth-of-type(6)::before {
  background-image: url("images/space icons/svg/028-saturn.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 75px;
  display: block;
  width: 80px;
  height: 100px;
  content: "";
  transform: translatey(0px);
  -webkit-animation: float3 20s linear infinite forwards;
  animation: float3 20s linear infinite forwards;
}
div.design-selection ul li:nth-of-type(7)::before {
  background-image: url("images/space icons/svg/035-uranus.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70px;
  display: block;
  width: 80px;
  height: 100px;
  content: "";
  transform: translatey(0px);
  -webkit-animation: float3 20s linear infinite forwards;
  animation: float3 20s linear infinite forwards;
}
div.design-selection ul li:nth-of-type(8)::before {
  background-image: url("images/space icons/svg/022-neptune.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 65px;
  display: block;
  width: 80px;
  height: 100px;
  content: "";
  transform: translatey(0px);
  -webkit-animation: float4 15s linear infinite forwards;
  animation: float4 15s linear infinite forwards;
}
@media (min-width: 37.5em) {
  div.design-selection ul li:nth-of-type(1) {
    grid-column: 1;
    grid-row: 2;
  }
}
@media (min-width: 37.5em) {
  div.design-selection ul li:nth-of-type(2) {
    grid-column: 2;
    grid-row: 1;
  }
}
@media (min-width: 37.5em) {
  div.design-selection ul li:nth-of-type(3) {
    grid-column: 4;
    grid-row: 1;
  }
}
@media (min-width: 37.5em) {
  div.design-selection ul li:nth-of-type(4) {
    grid-column: 6;
    grid-row: 1;
  }
}
@media (min-width: 37.5em) {
  div.design-selection ul li:nth-of-type(5) {
    grid-column: 2;
    grid-row: 3;
  }
}
@media (min-width: 37.5em) {
  div.design-selection ul li:nth-of-type(6) {
    grid-column: 4;
    grid-row: 3;
  }
}
@media (min-width: 37.5em) {
  div.design-selection ul li:nth-of-type(7) {
    grid-column: 6;
    grid-row: 3;
  }
}
@media (min-width: 37.5em) {
  div.design-selection ul li:nth-of-type(8) {
    grid-column: 7;
    grid-row: 2;
  }
}

div.design-selection ul li:nth-of-type(1):hover {
  animation-play-state: paused;
}
@media (min-width: 37.5em) {
  div.design-selection ul li:nth-of-type(1):hover {
    -ms-transform: scale(1.5);
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    transition: 0.5s ease-in-out;
  }
}

div.design-selection ul li:nth-of-type(2):hover {
  animation-play-state: paused;
}
@media (min-width: 37.5em) {
  div.design-selection ul li:nth-of-type(2):hover {
    -ms-transform: scale(1.5);
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    transition: 0.5s ease-in-out;
  }
}

div.design-selection ul li:nth-of-type(3):hover {
  animation-play-state: paused;
}
@media (min-width: 37.5em) {
  div.design-selection ul li:nth-of-type(3):hover {
    -ms-transform: scale(1.5);
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    transition: 0.5s ease-in-out;
  }
}

div.design-selection ul li:nth-of-type(4):hover {
  animation-play-state: paused;
}
@media (min-width: 37.5em) {
  div.design-selection ul li:nth-of-type(4):hover {
    -ms-transform: scale(1.5);
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    transition: 0.5s ease-in-out;
  }
}

div.design-selection ul li:nth-of-type(5):hover {
  animation-play-state: paused;
}
@media (min-width: 37.5em) {
  div.design-selection ul li:nth-of-type(5):hover {
    -ms-transform: scale(1.5);
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    transition: 0.5s ease-in-out;
  }
}

div.design-selection ul li:nth-of-type(6):hover {
  animation-play-state: paused;
}
@media (min-width: 37.5em) {
  div.design-selection ul li:nth-of-type(6):hover {
    -ms-transform: scale(1.5);
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    transition: 0.5s ease-in-out;
  }
}

div.design-selection ul li:nth-of-type(7):hover {
  animation-play-state: paused;
}
@media (min-width: 37.5em) {
  div.design-selection ul li:nth-of-type(7):hover {
    -ms-transform: scale(1.5);
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    transition: 0.5s ease-in-out;
  }
}

div.design-selection ul li:nth-of-type(8):hover {
  animation-play-state: paused;
}
@media (min-width: 37.5em) {
  div.design-selection ul li:nth-of-type(8):hover {
    -ms-transform: scale(1.5);
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    transition: 0.5s ease-in-out;
  }
}

@keyframes float1 {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-10px);
  }
  100% {
    transform: translatey(0px);
  }
}
@keyframes float2 {
  0% {
    transform: translatey(0px);
  }
  60% {
    transform: translatey(-10px);
  }
  100% {
    transform: translatey(0px);
  }
}
@keyframes float3 {
  0% {
    transform: translatey(0px);
  }
  40% {
    transform: translatey(-10px);
  }
  100% {
    transform: translatey(0px);
  }
}
@keyframes float4 {
  0% {
    transform: translatey(0px);
  }
  40% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
}
@keyframes float5 {
  0% {
    transform: translatey(0px);
  }
  40% {
    transform: translatey(20px);
  }
  100% {
    transform: translatey(0px);
  }
}
.main {
  position: relative;
}

div.preamble[role=article] {
  color: "Montserrat", sans-serif;
}
@media (min-width: 37.5em) {
  div.preamble[role=article] {
    margin-left: 20rem;
    margin-top: 30rem;
  }
}

div.preamble::before {
  background-image: url("images/wall-e.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 8rem;
  display: block;
  width: 100%;
  height: 100px;
  content: "";
  padding-top: 20rem;
  transform: translatey(0px);
  -webkit-animation: wall-e 70s linear infinite forwards;
  animation: wall-e 70s linear infinite forwards;
}
@media (min-width: 37.5em) {
  div.preamble::before {
    position: absolute;
    left: -10rem;
    top: 85rem;
  }
}
@media (min-width: 54.438em) {
  div.preamble::before {
    left: -20rem;
  }
}
@media (min-width: 75em) {
  div.preamble::before {
    left: -30rem;
    top: 85rem;
  }
}

@keyframes wall-e {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@media (min-width: 37.5em) {
  div.explanation {
    margin-right: 20rem;
    margin-top: 13rem;
  }
}

div.explanation::before {
  background-image: url("images/house.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 8rem;
  display: block;
  width: 100%;
  height: 250px;
  content: "";
  padding-top: 20rem;
  transform: translatey(0px);
  -webkit-animation: house 10s ease-in-out infinite;
  animation: house 10s ease-in-out infinite;
}
@media (min-width: 37.5em) {
  div.explanation::before {
    position: absolute;
    right: -10rem;
    top: -20rem;
  }
}
@media (min-width: 54.438em) {
  div.explanation::before {
    right: -20rem;
  }
}
@media (min-width: 75em) {
  div.explanation::before {
    right: -30rem;
    top: -15rem;
  }
}

@keyframes house {
  0% {
    transform: translatey(0px);
  }
  20% {
    transform: translatey(-5px);
  }
  40% {
    transform: rotate(-5deg);
  }
  60% {
    transform: rotate(5deg);
  }
  80% {
    transform: translatey(-10px);
  }
  100% {
    transform: translatey(0px);
  }
}
div.participation {
  margin-bottom: 5rem !important;
}
@media (min-width: 37.5em) {
  div.participation {
    margin-left: 20rem;
    margin-top: 12rem;
  }
}

div.participation::before {
  background-image: url("images/airplane.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 8rem;
  display: block;
  width: 100%;
  height: 60px;
  content: "";
  padding-top: 20rem;
  transform: translatey(0px);
  -webkit-animation: airplane 10s ease-in-out infinite;
  animation: airplane 10s ease-in-out infinite;
}
@media (min-width: 37.5em) {
  div.participation::before {
    position: absolute;
    left: -10rem;
    top: 29rem;
  }
}
@media (min-width: 54.438em) {
  div.participation::before {
    left: -25rem;
  }
}
@media (min-width: 75em) {
  div.participation::before {
    left: -rem;
    top: 25rem;
  }
}

@keyframes airplane {
  0% {
    transform: translatey(0px);
  }
  20% {
    transform: translatey(-5px);
  }
  50% {
    transform: rotate(-5deg);
    transform: scale(1.2);
  }
  100% {
    transform: translatey(0px);
  }
}
div.benefits {
  background: -moz-linear-gradient(left, #e9dfc4 0%, #e9dfc4 1%, #ede3c8 2%, #ede3c8 24%, #ebddc3 25%, #e9dfc4 48%, #ebddc3 49%, #e6d8bd 52%, #e6d8bd 53%, #e9dbc0 54%, #e6d8bd 55%, #e6d8bd 56%, #e9dbc0 57%, #e6d8bd 58%, #e6d8bd 73%, #e9dbc0 74%, #e9dbc0 98%, #ebddc3 100%);
  background: -webkit-gradient(linear, left top, right top, color-stop(0%, #e9dfc4), color-stop(1%, #e9dfc4), color-stop(2%, #ede3c8), color-stop(24%, #ede3c8), color-stop(25%, #ebddc3), color-stop(48%, #e9dfc4), color-stop(49%, #ebddc3), color-stop(52%, #e6d8bd), color-stop(53%, #e6d8bd), color-stop(54%, #e9dbc0), color-stop(55%, #e6d8bd), color-stop(56%, #e6d8bd), color-stop(57%, #e9dbc0), color-stop(58%, #e6d8bd), color-stop(73%, #e6d8bd), color-stop(74%, #e9dbc0), color-stop(98%, #e9dbc0), color-stop(100%, #ebddc3));
  background: -webkit-linear-gradient(left, #e9dfc4 0%, #e9dfc4 1%, #ede3c8 2%, #ede3c8 24%, #ebddc3 25%, #e9dfc4 48%, #ebddc3 49%, #e6d8bd 52%, #e6d8bd 53%, #e9dbc0 54%, #e6d8bd 55%, #e6d8bd 56%, #e9dbc0 57%, #e6d8bd 58%, #e6d8bd 73%, #e9dbc0 74%, #e9dbc0 98%, #ebddc3 100%);
  background: -o-linear-gradient(left, #e9dfc4 0%, #e9dfc4 1%, #ede3c8 2%, #ede3c8 24%, #ebddc3 25%, #e9dfc4 48%, #ebddc3 49%, #e6d8bd 52%, #e6d8bd 53%, #e9dbc0 54%, #e6d8bd 55%, #e6d8bd 56%, #e9dbc0 57%, #e6d8bd 58%, #e6d8bd 73%, #e9dbc0 74%, #e9dbc0 98%, #ebddc3 100%);
  background: -ms-linear-gradient(left, #e9dfc4 0%, #e9dfc4 1%, #ede3c8 2%, #ede3c8 24%, #ebddc3 25%, #e9dfc4 48%, #ebddc3 49%, #e6d8bd 52%, #e6d8bd 53%, #e9dbc0 54%, #e6d8bd 55%, #e6d8bd 56%, #e9dbc0 57%, #e6d8bd 58%, #e6d8bd 73%, #e9dbc0 74%, #e9dbc0 98%, #ebddc3 100%);
  background: linear-gradient(left, #e9dfc4 0%, #e9dfc4 1%, #ede3c8 2%, #ede3c8 24%, #ebddc3 25%, #e9dfc4 48%, #ebddc3 49%, #e6d8bd 52%, #e6d8bd 53%, #e9dbc0 54%, #e6d8bd 55%, #e6d8bd 56%, #e9dbc0 57%, #e6d8bd 58%, #e6d8bd 73%, #e9dbc0 74%, #e9dbc0 98%, #ebddc3 100%);
  background-size: 8rem;
  background-repeat: repeat;
  border: 0.5em solid #A37C4D;
}
div.benefits p {
  padding: 0 2.5rem 2rem 2.5rem;
}
@media (min-width: 37.5em) {
  div.benefits p {
    font-size: 0.9rem;
  }
}
@media (min-width: 37.5em) {
  div.benefits {
    margin-right: 20rem;
    margin-top: 10rem;
    padding-top: 2.5rem;
    min-width: 50%;
  }
}

div.benefits::before {
  background-image: url("images/rat.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 7rem;
  display: block;
  width: 100%;
  height: 90px;
  content: "";
  padding-bottom: 5rem;
  -webkit-animation: move 8s infinite;
  -webkit-animation: rat 10s ease-in-out infinite;
  animation: rat 10s ease-in-out infinite;
}
@media (min-width: 37.5em) {
  div.benefits::before {
    position: absolute;
    right: -10%;
  }
}
@media (min-width: 75em) {
  div.benefits::before {
    right: -20%;
  }
}

@keyframes rat {
  0% {
    transform: translatex(0);
  }
  50% {
    transform: translatex(30%);
  }
  60% {
    transform: translatex(30%) rotateY(180deg);
  }
  90% {
    transform: translatex(0) rotateY(180deg);
  }
  100% {
    transform: translatex(0) rotateY(0deg);
  }
}
div.requirements {
  color: #FDFDFE;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.75));
  padding-top: 5rem;
}
@media (min-width: 37.5em) {
  div.requirements {
    padding-top: 20rem;
  }
}
div.requirements p[role=contentinfo] {
  display: none;
}

div.requirements::before {
  background-image: url("images/ant.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 15rem;
  display: block;
  width: 100%;
  height: 200px;
  content: "";
  -webkit-animation: ant 8s ease-in-out infinite;
  animation: ant 8s ease-in-out infinite;
}
@media (min-width: 75em) {
  div.requirements::before {
    left: -25rem;
    bottom: 10rem;
  }
}

@keyframes ant {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
div.requirements h3 {
  margin-top: 10rem;
}

.sidebar[role=complementary] {
  min-height: 35rem;
}

div.zen-resources ul {
  position: absolute;
  bottom: 16rem;
  color: #ac6969;
  width: 100%;
  height: 13rem;
}
@media (min-width: 37.5em) {
  div.zen-resources ul {
    display: flex;
    flex: row nowrap;
    height: fit-content;
    justify-content: flex-end;
    align-items: center;
    bottom: 15rem;
  }
}
div.zen-resources ul li {
  padding: 1rem;
  width: 100%;
  border: 1px solid #FDFDFE;
  border-style: hidden hidden solid hidden;
  list-style: none;
  text-align: left;
  padding-top: 2%;
  padding-bottom: 2%;
}
@media (min-width: 37.5em) {
  div.zen-resources ul li {
    text-align: center;
    border-style: solid;
    height: 7rem;
    padding-top: 4%;
    padding-bottom: 4%;
  }
}
@media (min-width: 45.313em) {
  div.zen-resources ul li {
    height: 5rem;
    padding-top: 3%;
    padding-bottom: 3%;
  }
}
@media (min-width: 75em) {
  div.zen-resources ul li {
    height: 3rem;
    padding-top: 1%;
    padding-bottom: 1%;
  }
}
div.zen-resources ul li a:link,
div.zen-resources ul li a:visited {
  text-decoration: none;
  color: #FDFDFE;
}

div.zen-resources::after {
  content: "Styled by Diosa Temblor, Alex Lopez, and Hans Mardy for BYU-Idaho WDD-331. ";
  font-size: 0.8rem;
  color: #FDFDFE;
  position: absolute;
  bottom: 1rem;
  display: block;
  left: 5%;
  right: 5%;
}
@media (min-width: 37.5em) {
  div.zen-resources::after {
    bottom: 3rem;
  }
}

footer {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: absolute;
  left: 5%;
  right: 5%;
  margin: 0;
  bottom: -7rem;
}
@media (min-width: 37.5em) {
  footer {
    bottom: -10rem;
    gap: 1.5rem;
  }
}
@media (min-width: 75em) {
  footer {
    bottom: -8rem;
  }
}
footer a:link,
footer a:visited {
  text-decoration: none;
  color: #0D0D0D;
}
footer a:nth-of-type(1)::before {
  background-image: url("images/footer/html.ico");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 40px;
  display: block;
  width: 40px;
  height: 40px;
  content: "";
}
footer a:nth-of-type(2)::before {
  background-image: url("images/footer/css.ico");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 40px;
  display: block;
  width: 40px;
  height: 40px;
  content: "";
}
footer a:nth-of-type(3)::before {
  background-image: url("images/footer/cc.ico");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 40px;
  display: block;
  width: 40px;
  height: 40px;
  content: "";
}
footer a:nth-of-type(4)::before {
  background-image: url("images/footer/ally.ico");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 40px;
  display: block;
  width: 40px;
  height: 40px;
  content: "";
}
footer a:nth-of-type(5)::before {
  background-image: url("images/footer/gh.ico");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 40px;
  display: block;
  width: 40px;
  height: 40px;
  content: "";
}

div.design-archives nav[role=navigation] {
  position: absolute;
  bottom: 6rem;
  width: 100%;
}
@media (min-width: 37.5em) {
  div.design-archives nav[role=navigation] {
    bottom: 10rem;
  }
}
div.design-archives nav[role=navigation] ul {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between !important;
  gap: 1rem;
}
div.design-archives nav[role=navigation] ul li {
  list-style: none;
  border: 1px solid #FDFDFE;
  padding: 0.5rem;
}
div.design-archives nav[role=navigation] ul a:link,
div.design-archives nav[role=navigation] ul a:visited {
  text-decoration: none;
  color: #FDFDFE;
}
div.design-archives nav[role=navigation] ul .viewall::after {
  content: "›";
  color: #FDFDFE;
}

.archives,
.resources,
.banner h1 {
  display: none;
}

/*# sourceMappingURL=style.cs.map */
