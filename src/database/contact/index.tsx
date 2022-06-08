// display menu
import type { DisplayContactType } from "./types/database.contact.types";
import { displayContactState } from "./state/database.contact.state";
import { displayContactOnBackEnd } from "./query/database.contact.display";

// export
export type { DisplayContactType };
export { displayContactOnBackEnd, displayContactState };
