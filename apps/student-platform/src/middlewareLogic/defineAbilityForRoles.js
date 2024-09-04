import { AbilityBuilder, createMongoAbility } from "@casl/ability";
import { ROLES } from "./roles";

export function defineAbilitiesFor(role) {
  const { can, cannot, build } = new AbilityBuilder(createMongoAbility);

  if (role === ROLES.student) {
    can("view", "Curriculum");
  } else {
    cannot("view", "Curriculum");
  }

  // Add more roles and abilities as needed

  return build();
}
