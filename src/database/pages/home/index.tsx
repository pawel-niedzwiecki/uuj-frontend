// display menu
import type { DisplayHomeType, Seo, Advantage, Slide, Slider, Ratings, Rating } from "./types/database.home.types";
import { displayHomeState } from "./state/database.home.state";
import { displayHomeOnBackEnd } from "./query/database.home.display";

// export
export type { DisplayHomeType, Seo, Advantage, Slide, Slider, Ratings, Rating };
export { displayHomeOnBackEnd, displayHomeState };
