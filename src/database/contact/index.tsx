// display menu
import type { NumberPhonesType, EmailType, SocialMediaType, MainAddressType, BrancheType, BranchesType, DataType, DisplayContactType } from "./types/database.contact.types";
import { displayContactState } from "./state/database.contact.state";
import { displayContactOnBackEnd } from "./query/database.contact.display";

// export
export type { NumberPhonesType, EmailType, SocialMediaType, MainAddressType, BrancheType, BranchesType, DataType, DisplayContactType };
export { displayContactOnBackEnd, displayContactState };
