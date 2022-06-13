// display menu
import { displayServicesListState } from "./state/database.services.list";
import { displayServiceState } from "./state/database.services.displayService";
import type { DisplayServiceType, BranchServiceType, AdvantagesServiceType, AdvantageServiceType, ImageType } from "./types/database.services.displayService";
import type { DisplayServicesListType, DisplayServiceListType } from "./types/database.services.list.";
import { displayServicesListOnBackend } from "./query/database.services.list";
import { displayServiceOnBackend } from "./query/database.services.displayService";

// export
export type { DisplayServiceType, BranchServiceType, AdvantagesServiceType, AdvantageServiceType, DisplayServicesListType, DisplayServiceListType, ImageType };
export { displayServicesListState, displayServiceState, displayServicesListOnBackend, displayServiceOnBackend };
